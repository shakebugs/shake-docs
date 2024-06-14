---
id: deobfuscation
title: Deobfuscate
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

> Crash reports are a lot more useful when you see your deobfuscated stack traces.

## Introduction 

Android is using R8 tool to shrink, obfuscate and optimize your code when app is built in release mode - this makes crash stack traces hard to read.
Shake allows you to upload build's _mapping.txt_ files so you can see deobfuscated stack traces on the Shake dashboard.

## Upload manually to Shake dashboard

By default, the _mapping.txt_ file is created in your app's build directory: _project/app/build/outputs/mapping/release/mapping.txt_.

To upload your app's mapping files to the Shake dashboard:

1. Visit [Workspace administration → Apps](https://app.shakebugs.com/administration)
1. Click your app name to expand it
1. Click the **Mapping files** button
1. Drag and drop your _mapping.txt_ file there

## Using the script

If you prefer to do this automatically, you can do it using this script:

<Tabs
groupId="OS"
defaultValue="Windows"
values={[
{ label: 'Windows', value: 'Windows'},
{ label: 'Mac', value: 'Mac'},
]
}>

<TabItem value="Windows">

```batch title="upload_mapper.bat"
// highlight-start
@echo off

set PATH_TO_MAPPING_FILE=%1
set API_KEY=%2
set VERSION_CODE=%3
set VERSION_NAME=%4
set APPLICATION_ID=%5

rem Replace URL with valid Endpoint for file uploading
set FILES_ENDPOINT="https://api.shakebugs.com/api/2.0/crash_reporting/app_debug_file"

if NOT exist %PATH_TO_MAPPING_FILE% (
    echo "Mapping file not found!"
    exit
)

echo "Mapping file found!"
echo "Uploading mapping file..."

FOR /F "tokens=*" %%A IN ('curl -H "X-API-KEY: %API_KEY%" -H "X-OS: Android" -H "X-PLATFORM: Android" -H "X-APP-ID: %APPLICATION_ID%" -F "file=@%PATH_TO_MAPPING_FILE%" -F "app_version_code=%VERSION_CODE%" -F "app_version_name=%VERSION_NAME%" -X POST %FILES_ENDPOINT% -w "%%{http_code}"') DO SET STATUS=%%A

if %STATUS% NEQ 200 (
    echo "Failed to upload mapping file."
    exit
)

echo "Success! Mapping file uploaded successfully."
exit
// highlight-end
```

</TabItem><TabItem value="Mac">

```bash title="upload_mapper.sh"
// highlight-start
#!/bin/bash
PATH_TO_MAPPING_FILE=$1
API_KEY=$2
VERSION_CODE=$3
VERSION_NAME=$4
APPLICATION_ID=$5

# Replace URL with valid Endpoint for file uploading
FILES_ENDPOINT="https://api.shakebugs.com/api/2.0/crash_reporting/app_debug_file"

echo "Shake: Start mapping file upload: $PATH_TO_MAPPING_FILE"

if [ ! -f $PATH_TO_MAPPING_FILE ]; then
    echo "Mapping file not found!"
    exit 0
fi

echo "Mapping file found!"
echo "Uploading mapping file..."

STATUS=$(curl -H "X-API-KEY: $API_KEY" -H "X-OS: Android" -H "X-PLATFORM: Android" -H "X-APP-ID: $APPLICATION_ID" \
         -F app_version_code="${VERSION_CODE}"\
         -F app_version_name="${VERSION_NAME}"\
         -F "file=@${PATH_TO_MAPPING_FILE}"\
         -X POST "$FILES_ENDPOINT" --write-out %{http_code})

if [ "${STATUS: -3}" != "200" ]; then
  echo "Error while uploading mapping files"
  exit 0
fi

echo "Success! Mapping file uploaded successfully."
// highlight-end
```

</TabItem></Tabs>

After that, add the following gradle task to your app's _build.gradle_ file:

```groovy title="build.gradle"
// highlight-start
import org.apache.tools.ant.taskdefs.condition.Os

tasks.register('uploadMappingFile') {
    def apiKey = 'app-api-key'

    doLast {
        android.applicationVariants.configureEach {
            if (it.buildType.isMinifyEnabled() && it.buildType.name == 'release') {
                def mappingProvider = it.getMappingFileProvider()

                def mappingFile = mappingProvider.get().singleFile
                def applicationId = it.applicationId
                def versionName = it.versionName
                def versionCode = it.versionCode

                if (mappingFile != null && mappingFile.exists()) {
                    if (Os.isFamily(Os.FAMILY_WINDOWS)) {
                        exec {
                            commandLine 'cmd', '/c', 'start', 'upload_mapper.bat', mappingFile, apiKey, versionCode, versionName, applicationId
                        }
                    } else if (Os.isFamily(Os.FAMILY_UNIX)) {
                        exec {
                            commandLine 'sh', './upload_mapper.sh', mappingFile, apiKey, versionCode, versionName, applicationId
                        }
                    } else {
                        throw new GradleException('Not supported OS!')
                    }
                }
            }
        }
    }
}
// highlight-end
```

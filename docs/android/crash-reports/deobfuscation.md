---
id: deobfuscation
title: Deobfuscate
---

import Tabs from '@theme/Tabs'; 
import TabItem from '@theme/TabItem';

>If you use ProGuard to obfuscate your code, Shake allows you to upload your *mapping.txt* files so it can deobfuscate stack traces.

## Upload manually to Shake dashboard

By default, the *mapping.txt* file is created in your app's build directory: *project/app/build/outputs/mapping/release/mapping.txt*.  

To upload your app's mapping files to the Shake dashboard:
1. Visit [Settings → Apps](https://app.shakebugs.com/settings/apps)
1. Click your app name to expand it
1. Click the **Mapping files** button
1. Drag and drop your *mapping.txt* file there

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
set CLIENT_ID=%2
set CLIENT_SECRET=%3
set VERSION_CODE=%4
set VERSION_NAME=%5
set APPLICATION_ID=%6

rem Replace URL with valid Endpoint for file uploading
set FILES_ENDPOINT="https://api.shakebugs.com/api/1.0/crash_reporting/app_debug_file/%APPLICATION_ID%"

rem Replace URL with valid Authentication Endpoint
set AUTH_ENDPOINT="https://api.shakebugs.com/auth/oauth2/token"

if NOT exist %PATH_TO_MAPPING_FILE% (
    echo "Mapping file not found!"
    exit
)

echo "Mapping file found!"
echo "Uploading mapping file..."

FOR /F "tokens=*" %%G IN  ('curl -X POST -u "%CLIENT_ID%:%CLIENT_SECRET%" -d "grant_type=client_credentials" %AUTH_ENDPOINT%')DO SET APP_TOKEN=%%G

set APP_TOKEN=%APP_TOKEN:"=%
set "APP_TOKEN=%APP_TOKEN:~1,-2%"
set "APP_TOKEN=%APP_TOKEN:: ==%"
set "%APP_TOKEN:, =" & set "%"
echo %access_token%
echo %PATH_TO_MAPPING_FILE%

FOR /F "tokens=*" %%A IN ('curl -H "Authorization: Bearer %access_token%" -F "file=@%PATH_TO_MAPPING_FILE%" -F "app_version_code=%VERSION_CODE%" -F "app_version_name=%VERSION_NAME%" -F "os=Android" -F "platform=Android" -X POST %FILES_ENDPOINT% -w "%%{http_code}"') DO SET STATUS=%%A

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
CLIENT_ID=$2
CLIENT_SECRET=$3
VERSION_CODE=$4
VERSION_NAME=$5
APPLICATION_ID=$6

# Replace URL with valid Endpoint for file uploading
FILES_ENDPOINT="https://api.shakebugs.com/api/1.0/crash_reporting/app_debug_file/$APPLICATION_ID"

# Replace URL with valid Authentication Endpoint
AUTH_ENDPOINT="https://api.shakebugs.com/auth/oauth2/token"

echo "Shake: Start mapping file upload: $PATH_TO_MAPPING_FILE"

if [ ! -f $PATH_TO_MAPPING_FILE ]; then
    echo "Mapping file not found!"
    exit 0
fi

echo "Mapping file found!"
echo "Uploading mapping file..."

APP_TOKEN=$(curl -X POST -u "$CLIENT_ID:$CLIENT_SECRET" \
          -d "grant_type=client_credentials" $AUTH_ENDPOINT  )

ACCESS_TOKEN=$(echo $APP_TOKEN | tr { '\n' | tr , '\n' | tr } '\n' | grep "access_token" | awk  -F'"' '{print $4}')

STATUS=$(curl -H "Authorization: Bearer $ACCESS_TOKEN" -F app_version_code="${VERSION_CODE}"\
         -F app_version_name="${VERSION_NAME}" -F os="Android"\
         -F platform="Android" -F "file=@${PATH_TO_MAPPING_FILE}"\
         -X POST "$FILES_ENDPOINT" --write-out %{http_code})

if [ "${STATUS: -3}" != "200" ]; then
  echo "Error while uploading mapping files"
  exit 0
fi

echo "Success! Mapping file uploaded successfully."
// highlight-end
```

</TabItem></Tabs>

After that, add the following gradle task to your app's *build.gradle* file:

```groovy title="build.gradle"
// highlight-start
import org.apache.tools.ant.taskdefs.condition.Os

task uploadMappingFile {
    def client = 'client-key'
    def secret = 'secret-key'

    doLast {
        android.applicationVariants.all {
            def mappingFile = it.mappingFile
            def applicationId = it.applicationId
            def versionName = it.versionName
            def versionCode = it.versionCode

            if (it.buildType.name == 'release' && mappingFile != null && mappingFile.exists()) {
                if (Os.isFamily(Os.FAMILY_WINDOWS)) {
                    exec {
                        commandLine 'cmd', '/c', 'start', 'upload_mapper.bat', mappingFile, client, secret, versionCode,versionName, applicationId
                    }
                } else if (Os.isFamily(Os.FAMILY_UNIX)) {
                    exec {
                        commandLine 'sh', './upload_mapper.sh', mappingFile, client, secret, versionCode, versionName,applicationId
                    }
                } else {
                    throw new GradleException('Not supported OS!')
                }
            }
        }
    }
}
// highlight-end
```

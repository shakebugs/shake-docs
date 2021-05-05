---
id: crash-reporting
title: Crash reporting
---

Get detailed crash reports and insights about the circumstances that led up to them.

:::note

Crash reporting is currently in beta.

:::

## Introduction

Shake records crashes and uncaught exceptions that occur in your app and intelligently groups them on the dashboard, offering enough
contextual information to help you with solving the issue. It is powerful on its own, but when combined with rest 
of the Shake features, it becomes a crash reporting power tool.

## Enable crash reporting

Crash reporting is disabled by default but can be enabled by setting the `isCrashReportingEnabled` flag to `true` prior 
to calling the `start` method.

import Tabs from '@theme/Tabs'; 
import TabItem from '@theme/TabItem';

<Tabs
  groupId="android"
  defaultValue="kotlin"
  values={[
    { label: 'Java', value: 'java'},
    { label: 'Kotlin', value: 'kotlin'},
  ]
}>

<TabItem value="java">

```java title="App.java"
// highlight-next-line
Shake.setCrashReportingEnabled(true);
```

</TabItem><TabItem value="kotlin">

```kotlin title="App.kt"
// highlight-next-line
Shake.isCrashReportingEnabled = true
```

</TabItem></Tabs>


## Sending the report

Crash reports are automatically sent during the next app launch after the crash occurs. These reports follow the same rules as regular feedback reports to some extent.
The crash reports will be saved even if the app is offline and sent later when app regains connection. 

Your end users can't opt out of sending their crash report as they can with the standard feedback, however they can optionally provide more information and describe what happened prior to the crash.

## Editing the report

On the next app launch after the crash occurs, a sheet offering the user a chance to describe the crash will appear.

This can be enabled by setting the `isAskForCrashDescription` flag to `true` prior to calling the `start` method.

<Tabs
  groupId="android"
  defaultValue="kotlin"
  values={[
    { label: 'Java', value: 'java'},
    { label: 'Kotlin', value: 'kotlin'},
  ]
}>

<TabItem value="java">

```java title="MainActivity.java"
// highlight-next-line
Shake.setAskForCrashDescription(true);
```

</TabItem><TabItem value="kotlin">

```kotlin title="MainActivity.kt"
// highlight-next-line
Shake.isAskForCrashDescription = true
```

</TabItem></Tabs>

When enabled, this feature allows the user to provide a more detailed description of the actions that could have led up to the
crash, and potentially edit the information that is being passed to Shake dashboard.


## Report context

As mentioned before, the crash report is similar to the regular feedback report. 

All of the existing Shake features elegantly interoperate with it, meaning that your crash report will provide the screenshot of the last thing that user saw, and even better, the last 15 seconds of the screen recording before the crash!

A detailed crash report like this one, along with logs and all other useful information, provides you with plenty of usable data to help you resolve the root issue efficiently.

## Deobfuscating reports

If you are using Proguard to obfuscate your code, no problem! You can upload your *mapping.txt* file so we can deobfuscate your stack traces on our Dashboard.

### Uploading manually via the Dashboard

By default, *mapping.txt* file is created in the build directory of the app module: *project/app/build/outputs/mapping/release/mapping.txt*.  

You can simply drag and drop *mapping.txt* file on our Shake dashboard to upload it.

### Using the script

If you would like to do this automatically, you can do it via script.

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

FOR /F "tokens=*" %%G IN  ('curl -X POST -u "%CLIENT_ID%:%CLIENT_SECRET%" -d "grant_type=client_credentials" %AUTH_ENDPOINT%') DO SET APP_TOKEN=%%G

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

After this, add the following gradle task to your app's *build.gradle* file.

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
                        commandLine 'cmd', '/c', 'start', 'upload_mapper.bat', mappingFile, client, secret, versionCode, versionName, applicationId
                    }
                } else if (Os.isFamily(Os.FAMILY_UNIX)) {
                    exec {
                        commandLine 'sh', './upload_mapper.sh', mappingFile, client, secret, versionCode, versionName, applicationId
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


## Test it out

Let's crash you app. 
Enable crash reporting and paste the line below in the `onCreate` method in one of your activities.
We'll crash the app on a button tap by accessing the array with the out of bounds index.

Launch you app after the crash, add a sentence or two if you want to and submit the report. 
Your report will be visible on the Shake dashboard in a few minutes.

<Tabs
  groupId="android"
  defaultValue="kotlin"
  values={[
    { label: 'Java', value: 'java'},
    { label: 'Kotlin', value: 'kotlin'},
  ]
}>

<TabItem value="java">

```java title="MainActivity.java"
public class MainActivity extends Activity {
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);

        // highlight-start
        Button buttonCrash = findViewById(R.id.button_crash);
        buttonCrash.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                int[] array = new int[]{1, 2, 3};
                int result = array[5];
            }
        });
        // highlight-end
    }
}
```

</TabItem><TabItem value="kotlin">

```kotlin title="MainActivity.kt"
public class MainActivity : Activity {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_main)

        // highlight-start
        val buttonCrash: Button = findViewById(R.id.button_crash)
        buttonCrash.setOnClickListener { 
            val array = arrayOf(1, 2, 3)
            val result = array[5]
        }
        // highlight-end
    }
}
```

</TabItem></Tabs>


## Handling errors

Sometimes, the application is making great use of error handling and wants to document these errors, or has some definitive points where caught errors
could use a bit more context.

Shake SDK enables you to report the caught errors and lets you decide how they are grouped. These non-fatal error reports will have all of the same 
contextual information as crash reports, and act as an extension to the crash reporting feature.

:::note

Avoid using unique values for error *clusterID*  as this will cause a large number of reported errors appear unrelated — although they actually are — which will clog your Shake dashboard.

:::

<Tabs
  groupId="android"
  defaultValue="kotlin"
  values={[
    { label: 'Java', value: 'java'},
    { label: 'Kotlin', value: 'kotlin'},
  ]
}>

<TabItem value="java">

```java title="MainActivity.java"
try {
    throw new ClassNotFoundException("Handled test exception");
} catch (Exception e) {
    // highlight-next-line
    Shake.handleError(e, "cluster-id");
}
```

</TabItem><TabItem value="kotlin">

```kotlin title="MainActivity.kt"
try {
    throw ClassNotFoundException("Handled test exception")
} catch (e: Exception) {
    // highlight-next-line
    Shake.handleError(e, "cluster-id")
}
```

</TabItem></Tabs>
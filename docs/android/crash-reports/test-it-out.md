---
id: test-it-out
title: Test it
---
import useBaseUrl from '@docusaurus/useBaseUrl';
import Tabs from '@theme/Tabs'; 
import TabItem from '@theme/TabItem';

>Let's crash your app to see what the crash report looks like on your Shake dashboard.

## Crash your app

[Enable crash reporting](/android/crash-reports/enable.md) and paste this code to the `onCreate` method in one of your activities.
It will crash your app when you tap a button by accessing the array with the out-of-bounds index:

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

Reopen your app, describe the crash and tap *Submit*.

## Visit your Shake dashboard

To see your crash report:
1. Visit your [Shake dashboard](https://app.shakebugs.com)
1. Switch to the **Crash reports** tab in the left sidebar

<table class="media-container mt-40 mb-30">
<img
  alt="The first crash report on Shake dashboard"
  width="522"
  src={useBaseUrl('screens/first-crash-report-on-dashboard@2x.png')}
/>
</table>

If your crash report is not visible instantly, wait a minute until the system processes it.
---
id: test-it-out
title: Test it out
---
import useBaseUrl from '@docusaurus/useBaseUrl';
import Tabs from '@theme/Tabs'; 
import TabItem from '@theme/TabItem';

>Let's crash your app to see how crash reporting works.

Enable crash reporting and paste this code to the `onCreate` method in one of your activities.
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

Reopen you app, describe the crash and tap *Submit*.

To see your crash report:
1. Visit your [Shake dashboard](https://app.shakebugs.com/)
1. Switch to the **Crash reports** tab in the left sidebar.

If the crash report is not visible instantly, wait a minute until the system processes it.


<table class="media-container">
<img
  alt="User feedback intro message"
  src={useBaseUrl('screens/dominik-dashboard-example@2x.png')}
/>
</table>
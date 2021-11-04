---
id: test-it-out
title: Test it out
---

import Tabs from '@theme/Tabs'; 
import TabItem from '@theme/TabItem';

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

---
id: privacy
title: Privacy
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Shake collects various application data which can help developers with bug fixing.<br/>
Sometimes bug reports contains data you do not want to be visible on the Dashboard.<br/>
This page describes the tools Shake provides you to prevent sensitive data from showing up.

## Private views
You can prevent any view on the screen from being visible on the bug screenshot.

For example, you are building a shopping cart application and you want to 
prevent user name and credit card number from being captured in the Shake screenshot:

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
import android.view.TextView;

// highlight-next-line
import com.shakebugs.shake.Shake;

private void maskSensitiveData() {
    TextView textUserName = (TextView) findViewById(R.id.text_user_name);
    TextView textCardNumber = (TextView) findViewById(R.id.text_card_number);

    // highlight-next-line
    Shake.addPrivateView(textUserName);
    // highlight-next-line
    Shake.addPrivateView(textCardNumber);
}
```

</TabItem>

<TabItem value="kotlin">

```kotlin title="App.kt"
// highlight-next-line
import com.shakebugs.shake.Shake
import kotlinx.android.synthetic.main.activity_payment.*

private fun maskSensitiveData() {
    // highlight-next-line
    Shake.addPrivateView(textUserName)
    // highlight-next-line
    Shake.addPrivateView(textCardNumber)
}
```

</TabItem>
</Tabs>

To remove view from private views use following method:

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
Shake.removePrivateView(view);
```

</TabItem>

<TabItem value="kotlin">

```kotlin title="App.kt"
// highlight-next-line
Shake.removePrivateView(view)
```

</TabItem>
</Tabs>

Additionally, if you want to prevent whole screen from being visible in the screenshot,
you can add whole activity as a private view:

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
import android.os.Bundle;
import android.view.TextView;

import androidx.appcompat.app.AppCompatActivity;

// highlight-next-line
import com.shakebugs.shake.Shake;

public class PaymentActivity extends AppCompatActivity {
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_payment);

        // highlight-next-line
        Shake.addPrivateView(this);
    }

    ...
}
```

</TabItem>

<TabItem value="kotlin">

```kotlin title="App.kt"
import android.os.Bundle;
import androidx.appcompat.app.AppCompatActivity
// highlight-next-line
import com.shakebugs.shake.Shake

public class PaymentActivity : AppCompatActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_payment)

        // highlight-next-line
        Shake.addPrivateView(this)
    }

    ...
}
```

</TabItem>
</Tabs>

To remove activity from private views use following method:

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
Shake.removePrivateView(activity);
```

</TabItem>

<TabItem value="kotlin">

```kotlin title="App.kt"
// highlight-next-line
Shake.removePrivateView(activity)
```

</TabItem>
</Tabs>

If you want to remove all private views, use following method:

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
Shake.clearPrivateViews();
```

</TabItem>

<TabItem value="kotlin">

```kotlin title="App.kt"
// highlight-next-line
Shake.clearPrivateViews()
```

</TabItem>
</Tabs>


Note that these methods will not hide sensitive data from screen recordings.<br/>
Hiding sensitive data from screen recordings will be available in future releases.

You can use Android system flag `FLAG_SECURE` on activity if you want to prevent 
sensitive data from being visible in the screen recording feature.
`FLAG_SECURE` will make activity black in screen recordings.

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
import android.os.Bundle;
// highlight-next-line
import android.view.WindowManager;

import androidx.appcompat.app.AppCompatActivity;

public class PaymentActivity extends AppCompatActivity {
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_payment);

        // highlight-start
        getWindow().setFlags(
            WindowManager.LayoutParams.FLAG_SECURE,
            WindowManager.LayoutParams.FLAG_SECURE);
        // highlight-end
    }

    ...
}
```

</TabItem>

<TabItem value="kotlin">

```kotlin title="App.kt"
import android.os.Bundle
// highlight-next-line
import android.view.WindowManager
import androidx.appcompat.app.AppCompatActivity

public class PaymentActivity : AppCompatActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_payment)

        // highlight-start
        window.setFlags(
            WindowManager.LayoutParams.FLAG_SECURE,
            WindowManager.LayoutParams.FLAG_SECURE)
        // highlight-end
    }

    ...
}
```

</TabItem>
</Tabs>

Additionally, you can disable [Screen Recording](/android/screen-recording.md) feature if you want make sure that sensitive data is not recorded.

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
// highlight-start
Shake.getReportConfiguration().setAutoVideoRecording(false);
// highlight-end
```

</TabItem>

<TabItem value="kotlin">

```kotlin title="App.kt"
// highlight-start
Shake.getReportConfiguration().isAutoVideoRecording = false
// highlight-end
```

</TabItem>
</Tabs>

## Touch events
Adding View as a private will automatically mask sensitive data from activity history touch events.
Sensitive data will be visible as a *data_redacted* String on the Dashboard.

Note that it will mask tapped view text but will make id, accessiblity labels and tags still visible.

## Network requests
Network requests can contain sensitive data which should not be visible on the dashboard or even sent to the dashboard.
Use `Shake.setNetworkRequestsFilter()` method to mask sensitive data or to exclude some network requests from being recorded.

For example, you would like to mask *Authorization* header in all network requests triggered in application:

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
// highlight-start
import com.shakebugs.shake.Shake;
import com.shakebugs.shake.privacy.NetworkRequestEditor;
import com.shakebugs.shake.privacy.NetworkRequestsFilter;
// highlight-end

private void setupNetworkFilter() {
    // highlight-start
    Shake.setNetworkRequestsFilter(new NetworkRequestsFilter() {
        @Override
        public NetworkRequestEditor filter(NetworkRequestEditor networkRequest) {
            Map<String, String> headers = networkRequest.getRequestHeaders();
            if (headers.containsKey("Authorization")) {
                headers.put("Authorization", "***");
            }
            return networkRequest;
        }
    });
    // highlight-end
}
```

</TabItem>

<TabItem value="kotlin">

```kotlin title="App.kt"
// highlight-start
import com.shakebugs.shake.Shake
// highlight-end

private fun setupNetworkFilter() {
    // highlight-start
    Shake.setNetworkRequestsFilter { networkRequest ->
        val headers = networkRequest.requestHeaders
        if (headers.containsKey("Authorization")) {
            headers["Authorization"] = "***"
        }
        networkRequest
    }
    // highlight-end
}
```

</TabItem>
</Tabs>

If you do not want to track specific network requests, return `null` from `NetworkRequestsFilter` like below:

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
// highlight-start
import com.shakebugs.shake.Shake;
import com.shakebugs.shake.privacy.NetworkRequestEditor;
import com.shakebugs.shake.privacy.NetworkRequestsFilter;
// highlight-end

private void setupNetworkFilter() {
    // highlight-start
    Shake.setNetworkRequestsFilter(new NetworkRequestsFilter() {
        @Override
        public NetworkRequestEditor filter(NetworkRequestEditor networkRequest) {
            if (networkRequest.getUrl().startsWith("https://api.myapp.com/cards")) {
                return null;
            }
            return networkRequest;
        }
    });
    // highlight-end
}
```

</TabItem>

<TabItem value="kotlin">

```kotlin title="App.kt"
// highlight-start
import com.shakebugs.shake.Shake
// highlight-end

private fun setupNetworkFilter() {
    // highlight-start
    Shake.setNetworkRequestsFilter { networkRequest ->
        if (networkRequest.url.startsWith("https://api.myapp.com/cards")) {
            null
        } else networkRequest
    }
    // highlight-end
}
```

</TabItem>
</Tabs>

To remove network requests filter use `Shake.setNetworkRequestsFilter(null)`

## Notification events
If your application is displaying sensitive data in notifications, use `Shake.setNotificationEventsFilter()`
method to mask sensitive data or prevent notification events being recorded and sent to the dashboard.

For example, you would like to mask title of the notification event with id 0.

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
// highlight-start
import com.shakebugs.shake.Shake;
import com.shakebugs.shake.privacy.NotificationEventEditor;
import com.shakebugs.shake.privacy.NotificationEventsFilter;
// highlight-end

private void setupNotificationsFilter() {
    // highlight-start
    Shake.setNotificationEventsFilter(new NotificationEventsFilter() {
        @Override
        public NotificationEventEditor filter(NotificationEventEditor notificationEvent) {
            if (notificationEvent.getId() == 0) {
                notificationEvent.setTitle("***");
            }
            return notificationEvent;
        }
    });
    // highlight-end
}
```

</TabItem>

<TabItem value="kotlin">

```kotlin title="App.kt"
// highlight-start
import com.shakebugs.shake.Shake
import com.shakebugs.shake.privacy.NotificationEventEditor
import com.shakebugs.shake.privacy.NotificationEventsFilter
// highlight-end

private fun setupNotificationsFilter() {
    // highlight-start
    Shake.setNotificationEventsFilter { notificationEvent ->
        if (notificationEvent.id == 0) {
            notificationEvent.title = "***"
        }
        notificationEvent
    }
    // highlight-end
}
```

</TabItem>
</Tabs>

If you do not want to track specific notification event, return `null` from `NotificationEventsFilter` like below:

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
// highlight-start
import com.shakebugs.shake.Shake;
import com.shakebugs.shake.privacy.NetworkRequestEditor;
import com.shakebugs.shake.privacy.NetworkRequestsFilter;
// highlight-end

private void setupNotificationsFilter() {
    // highlight-start
    Shake.setNotificationEventsFilter(new NotificationEventsFilter() {
        @Override
        public NotificationEventEditor filter(NotificationEventEditor notificationEvent) {
            if (notificationEvent.getId() == 0) {
                return null;
            }
            return notificationEvent;
        }
    });
    // highlight-end
}
```

</TabItem>

<TabItem value="kotlin">

```kotlin title="App.kt"
// highlight-start
import com.shakebugs.shake.Shake
// highlight-end

private fun setupNotificationsFilter() {
    // highlight-start
    Shake.setNotificationEventsFilter { notificationEvent ->
        if (notificationEvent.id == 0) {
            null
        } else notificationEvent
    }
    // highlight-end
}
```

</TabItem>
</Tabs>

To remove notification events filter use `Shake.setNotificationEventsFilter(null)`

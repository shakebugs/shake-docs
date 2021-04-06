---
id: manage-sensitive-data
title: Manage sensitive data
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

As with any third-party service, it’s important for you to understand and have the ability to manage
what data is sent to Shake servers. Shake SDK allows you to filter out sensitive data on the mobile device itself,
so it never reaches the Shake servers.

## Views
You can mark any view as private, and it'll automatically be deleted from the screenshot.
Private views are stored as a weak reference, they get cleared from the memory when not used anymore.

Let's suppose you're building a shopping cart app and you want to delete the name and the credit card number views
from the screenshot:

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
    TextView textName = (TextView) findViewById(R.id.text_name);
    TextView textCardNumber = (TextView) findViewById(R.id.text_card_number);

    // highlight-next-line
    Shake.addPrivateView(textName);
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
    Shake.addPrivateView(textName)
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

If you want to delete the whole screen from the screenshot, simply mark the whole activity as private:

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

To remove an activity from the list of private views, use the following method:

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

If you want to clear all the private views, use the following method:

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

Note that these methods won't delete sensitive views from screen recordings, only screenshots.

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

You can disable [Screen Recording](/android/automatic-screen-recording.md) feature if you want make sure that sensitive data is not recorded.

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

Marking a view as private will automatically delete its touch events' text properties too. Consequently, you'll see them as `data_redacted` strings in your [Activity history](https://www.shakebugs.com/docs/android/activity#user-actions).

Bear in mind that the view's ID, accessibility labels and tags remain visible.

## Network requests
Certain network requests may contain sensitive data which you may not want to send to Shake servers.
Use the `Shake.setNetworkRequestsFilter()` method to obfuscate only the sensitive parts of those requests, or to entirely prevent certain network requests from being logged.

For example, if you'd like to obfuscate the *Authorization* header in all network requests sent from your app, do this:

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

If you do not want to log specific network requests, return `null` from the `NetworkRequestsFilter` like below:

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

To clear the network requests filter, use `Shake.setNetworkRequestsFilter(null)`.

## Notification events
If your app notifications contain sensitive data, use the `Shake.setNotificationEventsFilter()`
method to obfuscate only the sensitive parts of those notifications, or to entirely prevent certain notifications from being logged.

For example, if you'd like to obfuscate the description of the notification event that contains e-mail, do this:

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
            if (notificationEvent.getTitle().equals("E-mail changed")) {
                notificationEvent.setDescription("***@gmail.com");
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
        if (notificationEvent.title == "E-mail changed") {
            notificationEvent.description = "***@gmail.com"
        }
        notificationEvent
    }
    // highlight-end
}
```

</TabItem>
</Tabs>

If you do not want to track a specific notification event, return `null` from the `NotificationEventsFilter` like below:

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
            if (notificationEvent.getTitle().equals("E-mail changed")) {
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
        if (notificationEvent.title == "E-mail changed") {
            null
        } else notificationEvent
    }
    // highlight-end
}
```

</TabItem>
</Tabs>

To clear the notification events filter, use `Shake.setNotificationEventsFilter(null)`.

## Automatically redacted sensitive data
By default, Shake uses a series of regular expressions to redact sensitive data from notifications, touch events and network requests.
In addition, Shake will replace any header value with `data_redacted` string if the header has a key that matches any string from the list of keywords below:  
* password 
* secret 
* passwd
* api_key 
* apikey
* access_token
* auth_token
* credentials
* mysql_pwd
* stripetoken
* Authorization
* Proxy-Authorization
* card[number]

To disable this feature use the method below:

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
Shake.getReportConfiguration().setSensitiveDataRedactionEnabled(false);
// highlight-end
```

</TabItem>

<TabItem value="kotlin">

```kotlin title="App.kt"
// highlight-start
Shake.getReportConfiguration().isSensitiveDataRedactionEnabled = false
// highlight-end
```

</TabItem>
</Tabs>

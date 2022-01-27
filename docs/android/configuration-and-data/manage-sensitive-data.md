---
id: manage-sensitive-data
title: Protect sensitive data
---
import useBaseUrl from '@docusaurus/useBaseUrl';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

>As with any third-party service, it’s important for you to understand and have the ability to manage
what data is sent to Shake servers. Shake SDK allows you to filter out sensitive data on the mobile device itself,
so it never reaches the Shake servers.

## Automatically redacted sensitive data

Shake automatically redacts these sensitive data from your notifications, touch events and network requests:
* email addresses
* IP addresses
* credit card numbers
* bearer tokens

Shake also redacts network header values if the header key is:
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
* token

To disable this privacy feature, use the method below:

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

## Views

<table class="media-container media-container-highlighted mt-40 mb-40">
<img
  alt="Private views"
  width="380"
  src={useBaseUrl('img/private-view@2x.png')}
/>
</table>

You can mark any view as private, and it'll automatically be deleted
from the [auto screenshot](/android/configuration-and-data/auto-screenshot).
Private views are stored as a weak reference. They get cleared from the memory when not used anymore.

:::note

These methods won't delete sensitive views from auto screen recording — only from the auto screenshot.

:::

Let's suppose you're building a shopping app and you want to delete the name and the credit card number views
from the auto screenshot:

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

To remove a view from private views use the following method:

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

If you want to delete an entire screen from the auto screenshot, simply mark the whole activity as private:

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

To clear all the private views, use the following method:

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

## Auto screen recording
Use the Android system flag `FLAG_SECURE` on an activity if you want to prevent 
sensitive data from being visible on the auto screen recording.
It will make the activity black in the video:

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

Visit [Auto screen recording](/android/configuration-and-data/auto-screen-recording.md)
to read how to turn it off altogether.

## Jetpack Compose

In Jetpack Compose, the main building block of the UI is *Composeable* instead of *View*.

If you want to make a specific *Composeable* private, copy the following snippet into your project:

```kotlin title="ShakePrivateView.kt"
// highlight-start
import androidx.compose.runtime.Composable
import androidx.compose.ui.platform.ComposeView
import androidx.compose.ui.viewinterop.AndroidView
import com.shakebugs.shake.Shake

@Composable
fun ShakePrivateView(content: @Composable () -> Unit) {
    AndroidView(
        factory = { context ->
            ComposeView(context).apply {
                Shake.addPrivateView(this)
                setContent { content() }
            }
        }
    )
}
// highlight-end
```

Use `ShakePrivateView` *Composeable* as shown below:

```kotlin title="MainActivity.kt"
class MainActivity : ComponentActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContent {
            ComposeTestTheme {
                Surface(color = MaterialTheme.colors.background) {
                    // highlight-start
                    ShakePrivateView {
                        Greeting("Android")
                    }
                    // highlight-end
                }
            }
        }
    }
}
```

In the example above, the *Greeting* component will be removed from the screenshots.

## Touch events

Marking a view as private will automatically delete its touch events' text properties too.
Consequently, you'll see them as `data_redacted` strings in ticket's
[Activity history](/android/configuration-and-data/activity-history).
The view's ID, accessibility labels and tags remain visible.

## Network requests
Network requests may contain sensitive data which you may not want to send to Shake servers.
Use the `Shake.setNetworkRequestsFilter()` method to obfuscate sensitive parts of those requests,
or to entirely prevent certain network requests from being logged.
As an example, if you'd like to obfuscate the *Authorization* header in all network requests sent from your app, do this:

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

If you don't want to log specific network requests, return `null` from the `NetworkRequestsFilter` as shown below:

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
method to fully or partially obfuscate those notifications.

For example, if you'd like to obfuscate the description of the notification event that contains an email, do this:

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
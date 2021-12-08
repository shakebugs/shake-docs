---
id: essentials
title: Essentials
---
import useBaseUrl from '@docusaurus/useBaseUrl';

>This is the essential data Shake automatically attaches to every ticket, whether it's user feedback or a crash report.
All of this is done out of the box, you don't need to code anything.

## Automatically attached

Automatically attached data includes:
* time when the ticket was reported
* devide OS
* device model
* your app version
* connectivity details
* a screen the ticekt was reported from
* location
* time zone
* battery status
* memory status
* screen resolution
* etc.

Shake also tracks the status of these dangerous Android permissions:
* CALENDAR
* CALL_LOG
* CAMERA
* CONTACTS
* LOCATION
* MICROPHONE
* PHONE
* SENSORS
* SMS
* STORAGE

On Shake dashboard, Shake lists those permissions that the user has granted access to.
The ones you don't see listed were either denied or not requested at all.


## Attaching more data

If you want Shake to attach custom data to your tickets, you can do that as well.
Read about attaching your own variables to tickets with [Ticket metadata](android/configuration-and-data/metadata.md).

Do you also want to attach programmaticaly files, to tickets, images for example? Visit [Attachments](/android/configuration-and-data/attachments.md).


## Limitations

On Android 8.0 and higher it's not possible to get the **name** of the Wi-Fi the device is connected to. 
If that info is important to you, add the following permissions to your app's `AndroidManifest.xml` file:

```xml title="AndroidManifest.xml"
// highlight-start
<uses-permission android:name="android.permission.ACCESS_FINE_LOCATION" />
<uses-permission android:name="android.permission.ACCESS_COARSE_LOCATION" />
<uses-permission android:name="android.permission.CHANGE_WIFI_STATE" />
// highlight-end
```

You also have to request **location** permission from the user and 
their **location services** have to be turned on while reporting a ticket.

More info on this Android system limitation can be found in the [Wi-Fi scanning overview](https://developer.android.com/guide/topics/connectivity/wifi-scan) guide.

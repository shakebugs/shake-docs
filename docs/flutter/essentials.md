---
id: essentials
title: Essentials
---
import useBaseUrl from '@docusaurus/useBaseUrl';

This page lists the essential data you receive with every bug report, out of the box.

## Introduction
You will find Essentials listed on the right side of your web Dashboard, 
and these include data like user's OS, location, memory status, etc.

<img
  alt="Essentials screen"
  src={useBaseUrl('screens/essentials_screen.png')}
/>


## Customizing the data you receive
If you want the SDK to attach any other variable to your bug reports, you can absolutely do that as well! Read about sending custom data with [Metadata](android/metadata.md).

Do you also want to attach custom files, like images? Visit [Attachments](/android/attachments.md).


## Limitations
On Android 8.0 and higher it is not possible to easily get the **name** of the Wi-Fi the device is connected to. If that info is important to you, add the following permissions to your app's `AndroidManifest.xml` file:

/*
  Ovdje dodati permissione iz manifesta
*/

You also have to request **location** permission from the user, and their **location services** have to be turned on while reporting a bug.

More info on this Android system limitation can be found in the [Wi-Fi scanning overview](https://developer.android.com/guide/topics/connectivity/wifi-scan) guide.

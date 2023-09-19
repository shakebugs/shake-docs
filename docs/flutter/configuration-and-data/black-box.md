---
id: black-box
title: Black box
---
import useBaseUrl from '@docusaurus/useBaseUrl';

>Just like before an airplane crash, Shake records a detailed environment
profile giving you an insight into the last 60 seconds before the ticket was submitted.

## Automatically recorded charts

### App CPU usage

This line chart (visible in every ticket on your [Shake dashboard](https://app.shakebugs.com/)) shows your iOS app's CPU usage.
When you hover over the chart, the CPU percentage is shown.
Shake accounts for multi-threading so if multiple threads are busy, the percentage can go above 100%.

Your iOS app's CPU usage is captured every 0.5 seconds.

### Device memory usage
This line chart shows the device's total memory usage.
When you hover over the chart, the usage percentage
and the exact memory usage over the total amount of memory available
are shown. For example: 
* 9% • 224 out of 2464 MB

Device memory usage is captured every 0.5 seconds.

### App memory usage
This line chart shows your app's memory usage. When you hover over the chart,
the total memory usage of your app is shown. For example: 
* 122 MB

Your app's memory usage is captured every 0.5 seconds.

### Disk space usage
This line chart shows your device's disk space usage. When you hover over the chart,
the percentage of free disk space on your device is shown. For example:
* 51%

Your device's disk space usage is captured every 0.5 seconds.

### Network
This chart shows the connectivity details of the device.
When you hover over the chart, connectivity details are shown. For example:
* WiFi • Office_Network_Name
* Cellular 3G
* Offline

Device connectivity details are captured every 2 seconds.

### Device orientation
This chart shows the orientation state of your app.
When you hover over the chart, the exact state is shown. For example:

* Portrait
* Landscape

App orientation is captured every 2 seconds.

### Battery level
This chart shows the battery level of your app.
When you hover over the chart, the exact level is shown. For example:
* 50%

Battery level is captured every 2 seconds.

## Disable
The Black box is enabled by default. Use the method below to disable it, if you prefer:

```dart title="main.dart"
// highlight-next-line
Shake.setEnableBlackBox(false);
```

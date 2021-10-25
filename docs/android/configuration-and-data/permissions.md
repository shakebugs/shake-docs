---
id: permissions
title: Permissions
---
import useBaseUrl from '@docusaurus/useBaseUrl';

This page covers how Shake reports to you on the status of a user's permissions listed below.

## Introduction
For visual clarity on the Dashboard, Shake lists precisely those permissions that a user has explicitly granted access to.

The ones you don't see listed in a report were either denied or not requested at all.

<img
  alt="Permissions screen"
  src={useBaseUrl('screens/permissions_screen.png')}
/>


## Tracking dangerous permissions
The Shake SDK tracks the status of these dangerous Android permissions, and reports to you whether a user has or hasn't granted your app access to them:

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

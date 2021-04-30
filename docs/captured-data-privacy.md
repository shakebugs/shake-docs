---
id: captured-data-privacy
title: Shake data privacy disclosure
---
When users send you feedback, Shake "magically" and automatically captures a lot of other data too. And although it feels like magic, it's nothing but — we want you to fully understand and control it.

Shake also provides you with tools to filter out any personally identifiable information (PII) on the mobile device itself, so it never reaches the Shake servers.

We're truly obsessed with data security! If you have questions or proposals, [let's start chatting](mailto:friends@shakebugs.com).


## Collected Data


The first part of the below table closely resembles privacy settings for submission of your application to the Apple App Store.

For iOS users, make sure to doublecheck the [official Apple document](https://developer.apple.com/app-store/app-privacy-details/) before submitting your app.

The most important thing to do is to disclose the collected data which is sent at regular intervals without user being aware of it and which are not visible in the feedback form.


| Data |  Attributes and sensitivity | Description | App Store |
|------|:---------------------------:|-------------|:-----:|
| Phone number &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; | &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; | Not collected. |
| Name                                         |        | Not collected. |
| Email Address                                |        | Not collected. |
| Physical address                             |        | Not collected. |
| Other contact information                    |        | Not collected. |
| Health or fitness data                       |        | Not collected. |
| Payment, credit or other financial info      |        | Not collected. |
| Precise or coarse location                   |        | Not collected. |
| Sensitive info                               |        | Not collected. |
| User's contacts, emails or text messages     |        | Not collected. |
| Photos, videos or other user's files         | <span class="tag-button yellow-tag-button">Optional</span> <span class="tag-button pink-tag-button">May contain PII</span>  | Shake does not automatically collect contents of user Gallery and similar locations. However, keep in mind your users can decide to attach any of their files by browsing their phone themselves, and those files could contain PII. |
| Audio or gameplay data                       |        | Not collected. |
| Customer support or other user content       |        | Not collected. |
| Browsing, purchase or search history         |        | Not collected. |
| User ID                                      |        | Not collected. Keep in mind that Shake features like Metadata enable you to attach any kind of PII to the reports. Silently attaching an user email for example, marks this row as _Collected_. |
| Device ID                                    |  <span class="tag-button green-tag-button">Non-PII</span>       | Shake will automatically collect **Bundle Identifier**, **DeviceID**, **Platform** and **Operating System** information. Not used for advertising. | ✓ |
| Product interaction                                   | <span class="tag-button yellow-tag-button">Optional</span> <span class="tag-button pink-tag-button">May contain PII</span>   | Shake's [Activity history](/android/activity.md) shows a timeline of all user actions (every tap, swipe, pan), their network requests (request header and body, response header and body), system events (app status changes), view controller changes (user navigating your app), push notifications that arrive, custom logs and application console logs. Shake SDK [automatically deletes as much PII as possible](/android/manage-sensitive-data.md#automatically-redacted-sensitive-data) on the mobile device itself, and [gives you additional methods](/android/manage-sensitive-data.md) to manage, delete and obfuscate any of potentially PII also on the mobile device itself, before anything is sent to Shake servers.         | ✓ |
| Advertising data                             |        | Not collected. |
| Other usage data                             |        | Not collected. |
| Crash data                                   | <span class="tag-button yellow-tag-button">Optional</span>  <span class="tag-button green-tag-button">Non-PII</span>       | Shake crash reporting feature can be disabled / enabled.   | ✓ | 
| Performance data                                           | <span class="tag-button yellow-tag-button">Optional</span> <span class="tag-button green-tag-button">Non-PII</span>          | Shake's [Black box](/ios/blackbox.md) can show you the last 60 seconds of device memory usage, your app memory usage, network connectivity changes, device orientation and the CPU levels. You can also disable it.       | ✓ |
| Other diagnostic data                        |  <span class="tag-button green-tag-button">Non-PII</span>       | Collected.     | ✓ | 
| Other data                                   |        | Not collected. | 
| **Other data that Shake captures **                           |        |
| [Screenshot](/android/screenshot.md)         | <span class="tag-button yellow-tag-button">Optional</span> <span class="tag-button pink-tag-button">May contain PII</span>    | A screenshot of user's screen at the moment Shake is invoked. You can avoid capturing PII on the screenshot by [marking sensitive views as private](/ios/manage-sensitive-data.md#views). In case of manual invocation, your users can additionally blur or delete the screenshot before submitting feedback.      |
| [Screen recording](/android/automatic-screen-recording.md) | <span class="tag-button yellow-tag-button">Optional</span> <span class="tag-button pink-tag-button">May contain PII</span>   | Automatically captured video of what user did in your app during the last 15 seconds prior to submitting feedback. It's disabled by default. If you enable it, your users will be asked to allow screen recording first, and will have the ability to delete it before submitting feedback too. Shake doesn't record other apps' content, just yours. Use this optional feature only during internal testing.     |
| [Permissions](/android/permissions.md)                     | <span class="tag-button green-tag-button">Non-PII</span>                                                                     | A list of permissions the user has granted to your app.                                                                          |
| [User email](/android/email.md)                            | <span class="tag-button yellow-tag-button">Optional</span> <span class="tag-button pink-tag-button">May contain PII</span>   | User that's submitting feedback enters this data themselves. If you decide you don't want to collect this data, you can hide this field.     |
| Time                                                       | <span class="tag-button green-tag-button">Non-PII</span>                                                                     | A timestamp of the moment Shake was invoked.                                                                                     |
| OS                                                         | <span class="tag-button green-tag-button">Non-PII</span>                                                                     | User device's operating system version.                                                                                          |
| Device                                                     | <span class="tag-button green-tag-button">Non-PII</span>                                                                     | User device model, Samsung Galaxy S8 for example.                                                                                |
| App version                                                | <span class="tag-button green-tag-button">Non-PII</span>                                                                     | A build version of your app, 1.5.42 for example.                                                                                 |
| XCode                                                      | <span class="tag-button green-tag-button">Non-PII</span>                                                                     | Version of XCode used to build the app.                                                                                          |
| Network                                                    | <span class="tag-button green-tag-button">Non-PII</span>                                                                     | Network connection type (WiFi, cellular or offline) and name.                                                                    |
| Current view                                               | <span class="tag-button green-tag-button">Non-PII</span>                                                                     | An app screen on which Shake was invoked.                                                                                        |
| Timezone                                                   | <span class="tag-button green-tag-button">Non-PII</span>                                                                     | System settings timezone.                                                                                                        |
| City and country                                           | <span class="tag-button green-tag-button">Non-PII</span>                                                                     | A city from which the feedback was submitted. As any network header on the Internet — that's how the Internet works — Shake SDK's also contains sender's IP addess. Our system reads only the user's city (nothing more geographically precise than that) from it, saves that city name and never ever saves the IP address. Even though some don't consider the IP address PII, we choose to disagree and want to keep everyone completely safe and secure by not saving it.    |
| Locale                                                     | <span class="tag-button green-tag-button">Non-PII</span>                                                                     | System settings locale, en-US for example.                                                                                       |
| Battery status                                             | <span class="tag-button green-tag-button">Non-PII</span>                                                                     | Battery percentage and whether the device was being charged at that moment.                                                      |
| Your app memory usage                                      | <span class="tag-button green-tag-button">Non-PII</span>                                                                     | How much memory was your app using.                                                                                              |
| Used storage                                               | <span class="tag-button green-tag-button">Non-PII</span>                                                                     | How much storage is still available on user's device.                                                                            |
| Authentication to unlock device                            | <span class="tag-button green-tag-button">Non-PII</span>                                                                     | Whether the user had to somehow unlock the device to use it, with Touch ID for example.                                          |
| Resolution                                                 | <span class="tag-button green-tag-button">Non-PII</span>                                                                     | Screen width ✕ height in pixels.                                                                                                 |
| Orientation                                                | <span class="tag-button green-tag-button">Non-PII</span>                                                                     | Device orientation at the moment when the feedback was submitteed, landscape for example.                                        |
| Density                                                    | <span class="tag-button green-tag-button">Non-PII</span>                                                                     | Screen pixel density, XHDPI for example.                                                                                         |
| Shake SDK                                                  | <span class="tag-button green-tag-button">Non-PII</span>                                                                     | Shake SDK version that the feedback was submitted with.                                                                          |
| [Metadata](/android/metadata.md)                           |  <span class="tag-button yellow-tag-button">Optional</span> <span class="tag-button pink-tag-button">May contain PII</span>                                                                                                                            | You can send yourself a value of any variable from your app. Use this feature safely and respectfully.                           |
| [Custom files](/android/attachments.md)                    |  <span class="tag-button yellow-tag-button">Optional</span> <span class="tag-button pink-tag-button">May contain PII</span>                                                                                                                            | You can prepare and send yourself any file from your app you want. Use this feature safely and respectfully.                     |



## Additional notes

Some parts of the Shake functionality would clearly violate the PII if not used carefully so make sure to doublecheck the additional files and information you are attaching to Shake reports and
disclose the information with the regulating authority (like App Store) accordingly.

Make use of the Shake filtering features to avoid capturing any kind of sensitive info, and avoid sending them to Shake servers altogether.
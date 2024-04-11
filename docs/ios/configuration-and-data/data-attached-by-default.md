---
id: data-attached-by-default
title: Data attached by default
---
import useBaseUrl from '@docusaurus/useBaseUrl';

>This is the data Shake automatically attaches to every ticket you receive, whether it's user feedback or a crash report.
All of this is done out of the box, you don't need to code anything.

## Automatically attached

<div class="four-columns-default mt-50 mb-5">
    <div>
        <img
            class="small-visual-icon"
            src={useBaseUrl('img/time-clock.svg')}
        />
        <p class="p2">Time when the ticket was reported</p>
    </div>
    <div>
        <img
            class="small-visual-icon"
            src={useBaseUrl('img/hashtag-square.svg')}
        />
        <p class="p2">Device OS</p>
    </div>
    <div>
        <img
            class="small-visual-icon"
            src={useBaseUrl('img/iphone.svg')}
        />
        <p class="p2">Device model</p>
    </div>
    <div>
        <img
            class="small-visual-icon"
            src={useBaseUrl('img/pin-location-square.svg')}
        />
        <p class="p2">Location</p>
    </div>
    <div>
        <img
            class="small-visual-icon"
            src={useBaseUrl('img/tools-settings.svg')}
        />
        <p class="p2">Your app version</p>
    </div>
    <div>
        <img
            class="small-visual-icon"
            src={useBaseUrl('img/wifi-spot-square.svg')}
        />
        <p class="p2">Connectivity details</p>
    </div>
    <div>
        <img
            class="small-visual-icon"
            src={useBaseUrl('img/accessibility-t-icon.svg')}
        />
        <p class="p2">Font scale</p>
    </div>
    <div>
        <img
            class="small-visual-icon"
            src={useBaseUrl('img/user-profile-profile.svg')}
        />
        <p class="p2">Screen the ticket was reported from</p>
    </div>
    <div>
        <img
            class="small-visual-icon"
            src={useBaseUrl('img/user-profile-time-clock.svg')}
        />
        <p class="p2">Time zone</p>
    </div>
    <div>
        <img
            class="small-visual-icon"
            src={useBaseUrl('img/battery-charge.svg')}
        />
        <p class="p2">Battery status</p>
    </div>
    <div>
        <img
            class="small-visual-icon"
            src={useBaseUrl('img/business-chart.svg')}
        />
        <p class="p2">Memory status</p>
    </div>
    <div>
        <img
            class="small-visual-icon"
            src={useBaseUrl('img/full-screen-zoom-square.svg')}
        />
        <p class="p2">Screen resolution</p>
    </div>
    <div>
        <img
            class="small-visual-icon"
            src={useBaseUrl('img/rotate-horizontal.svg')}
        />
        <p class="p2">Screen orientation</p>
    </div>
    <div>
        <img
            class="small-visual-icon"
            src={useBaseUrl('img/language-translate.svg')}
        />
        <p class="p2">Locale</p>
    </div>
    <div>
        <img
            class="small-visual-icon"
            src={useBaseUrl('img/usb-flash-drive.svg')}
        />
        <p class="p2">Low power mode</p>
    </div>
    <div>
        <img
            class="small-visual-icon"
            src={useBaseUrl('img/face-id.svg')}
        />
        <p class="p2">Authentication to unlock device</p>
    </div>
    <div>
        <img
            class="small-visual-icon"
            src={useBaseUrl('img/clock-time.svg')}
        />
        <p class="p2">Timeline of app lifecycle events</p>
    </div>
    <div>
        <img
            class="small-visual-icon"
            src={useBaseUrl('img/alarm-clock-time-fast.svg')}
        />
        <p class="p2">Timeline of console logs</p>
    </div>
    <div>
        <img
            class="small-visual-icon"
            src={useBaseUrl('img/programming-code.svg')}
        />
        <p class="p2">IDE version</p>
    </div>
    <div>
        <img
            class="small-visual-icon"
            src={useBaseUrl('img/code-test-error.svg')}
        />
        <p class="p2">Crash report stack trace</p>
    </div>
    <div>
        <img
            class="small-visual-icon"
            src={useBaseUrl('img/settings-switches-square.svg')}
        />
        <p class="p2">Granted permissions <sup>1</sup></p>
    </div>
</div>

<p><sup>1</sup> Shake tracks the status of these permissions:</p>

* Calendar access
* Camera access
* Contacts access
* Photo library access
* Location access
* Media library access
* Microphone access


On your Shake dashboard, only those permissions that the user has granted access to are listed.
The ones you don't see were either denied or not requested at all.


## Attach more data

If you want Shake to attach custom data to your tickets, you can do that as well.
Read about attaching your own variables to tickets with [Ticket metadata](/ios/configuration-and-data/ticket-metadata.md).

Do you also want to attach files to tickets programmatically? Visit [Auto attach files](/ios/configuration-and-data/auto-attach-files.md).

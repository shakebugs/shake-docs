---
id: overview
title: Overview
---
import useBaseUrl from '@docusaurus/useBaseUrl';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

> Shake's user interface explained and instructions on how to customize it.


## Screens

The Shake UI consists of nine screens, and here's how they're related:

<table class="media-container mt-40 mb-40">
<img
  alt="Shake screens structure"
  width="544"
  src={useBaseUrl('screens/shake-screens-structure.svg')}
/>
</table>

## Opening Shake

You can decide to open either Shake's Home screeen or New ticket screen, depending on the flow you want to achieve.
Listed below are some common use cases that show where you might like to add Shake to your app.
Of course, it's up to you to decide what best suits your app UX.

### Internal feedback collection

This entry point is often used during internal testing. Your testers or office colleagues are told to invoke Shake whenever they notice a bug or have a suggestion.
In this case, instruct Shake to open the [New ticket screen](android/shake-ui/new-ticket-screen.md):

<table class="media-container mt-40 mb-40">
<img
  alt="Open Shake New ticket screen"
  width="520"
  src={useBaseUrl('screens/open-shake-new-ticket-screen-pointer.svg')}
/>
</table>

### Production ticketing system

In production, apps usually add Shake under **My account or Settings → Help**.
There, they have a **Submit feedback** button that opens Shake's [Home screen](android/shake-ui/home-screen.md):

<table class="media-container mt-40 mb-40">
<img
  alt="Open Shake Home screen"
  width="520"
  src={useBaseUrl('screens/open-shake-home-screen-pointer.svg')}
/>
</table>

### Internal and production crash reporting

Lastly, Shake can open automatically after your app crashes.
[Enable Crash reports](android/crash-reports/enable.md) and [enable the Ask for crash description sheet](android/crash-reports/ask-for-description.md)
so your users can describe what happened before your app crashed on them:

<table class="media-container mt-40 mb-40">
<img
  alt="Open Shake New ticket screen after the crash"
  width="520"
  src={useBaseUrl('screens/crash-report-options-pointer.svg')}
/>
</table>


## Design and customizations

Shake supports dark and light mode out of the box, there is no need to code anything.
Its UI will automatically adapt depending on your app design settings.

Shake also supports white labeling.
From your [Shake dashboard](https://app.shakebugs.com/settings/workspace#whitelabel), you can change its main action color and its welcome message without coding.

Lastly, Shake mobile UI has been localized to support [numerous languages](https://help.shakebugs.com/en/articles/3392092-which-languages-has-shake-sdk-been-translated-to).
Your users whose default device language is set to one of those will automatically use Shake in their native language.

<p class="p2 mt-80 mb-10">⚡️ Shake is improved every week.
Stumbled upon a <a href="https://feedback.shakebugs.com/bugs">bug</a>?
Want a <a href="https://feedback.shakebugs.com/feature-requests">new feature</a> to be added?
Create new tickets and upvote existing ones on the Public feedback board.</p>
<p></p>
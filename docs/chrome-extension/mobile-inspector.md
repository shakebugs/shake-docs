---
id: mobile-inspector
title: Mobile inspector
---

import useBaseUrl from '@docusaurus/useBaseUrl';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

> Using Shake with inspection tool

<br/>

You can use Shake to report responsive bugs by combining it with your browser’s mobile inspection tools.
Here’s how to do it:

1. Right-click anywhere on your site and select **Inspect**.
2. In the top-left corner of the developer tools, click the **mobile device toggle** to simulate different screen sizes.

Once you're viewing your site in a mobile layout, use Shake as you normally would to report any layout or responsive issues. Shake will automatically include the current viewport and device info in the bug report—super helpful for your dev team.

<img
alt="Mobile inspector"
src={useBaseUrl('img/chrome-extension/mobile_inspector.gif')}
/>

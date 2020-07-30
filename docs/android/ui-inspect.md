---
id: ui-inspect
title: UI inspect
---
import useBaseUrl from '@docusaurus/useBaseUrl';

This page covers the UI inspect.

## Introduction
For situations that need more details when reviewing the desing of the app we have developed the UI inspect feature to help you have a pixel perfect and consistent application.

<img
  alt="UI inspect screen"
  src={useBaseUrl('screens/bug_screen.png')}
/>


## How to use
UI inspect is enabled by default but can be disabled by calling `Shake.getReportConfiguration().setEnableMeasureMode(false)` before `Shake.start()`. 

This invocation event will create the floating button on top of your app's UI which users can clearly see at all times.This button can be dragged to a more suitable position.
When the button is pressed the view and it's children will have outlines drawn around them. I the element is pressed it will be selected and the following elements will be shown:

1. A border around the view
2. Alignement guides on each side of the view
3. View dimensions

If the same view is pressed again it's parent view will be selected. This can be repeated until the top most view is reached, after that everything is deselected.

While a view is selected you can inspect the position in relation to another view. For that you have long-press on another view and their distance and alignement will be displayed.

For text and image views more details can be obtained by pressing the **info** floating button. A bottom sheet will open with specifications for the selection. For image views the bitmap can be saved by pressing *`Download image`* button.


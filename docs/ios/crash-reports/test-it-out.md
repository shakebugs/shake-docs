---
id: test-it-out
title: Test it
---
import useBaseUrl from '@docusaurus/useBaseUrl';
import Tabs from '@theme/Tabs'; 
import TabItem from '@theme/TabItem';

>Let's crash your app to see what the crash report looks like on your Shake dashboard.

:::note
Before proceeding, disconnect your device from the Xcode debugger.
Xcode debugger attaches itself to the app process and would disable crash reporting.
:::

## Crash your app

[Enable crash reporting](/ios/crash-reports/enable.md) and paste this code to the `viewDidLoad` method in one of your view controllers.
It will crash your app when you tap a button by accessing the array with the out-of-bounds index:

<Tabs
  groupId="ios"
  defaultValue="swift"
  values={[
    { label: 'Objective-C', value: 'objectivec'},
    { label: 'Swift', value: 'swift'},
  ]
}>

<TabItem value="objectivec">

```objectivec title="ViewController.m"
//highlight-start
- (void)viewDidLoad {
    [super viewDidLoad];
    
    UIButton *crashButton = [UIButton buttonWithType:UIButtonTypeRoundedRect];

    [crashButton setTitle:@"Crash me" forState:UIControlStateNormal];
    crashButton.frame = CGRectMake(0, 0, 100, 50);
    crashButton.center = self.view.center;

    [self.view addSubview:crashButton];

    [crashButton addTarget:self action:@selector(crashButtonHandler) forControlEvents:UIControlEventTouchUpInside];
}

- (void)crashButtonHandler {
    NSArray *arr = @[@1, @2, @3];
    id myVar = arr[5];
}
//highlight-end
```

</TabItem><TabItem value="swift">

```swift title="ViewController.swift"
//highlight-start
override func viewDidLoad() {
    super.viewDidLoad()

    let crashButton = UIButton(type: .roundedRect)

    crashButton.setTitle("Crash me", for: .normal)
    crashButton.frame = .init(x: 0, y: 0, width: 100, height: 50)
    crashButton.center = self.view.center

    self.view.addSubview(crashButton)

    crashButton.addTarget(self, action: #selector(crashButtonHandler), for: .touchUpInside)
}

@objc func crashButtonHandler() {
    let arr = [1, 2, 3]
    let myVar = arr[5]
}
//highlight-end
```

</TabItem></Tabs>

Reopen your app, describe the crash and tap *Submit*.

## Visit your Shake dashboard

To see your crash report:
1. Visit your [Shake dashboard](https://app.shakebugs.com)
1. Switch to the **Crash reports** tab in the left sidebar

<table class="media-container mt-40 mb-30">
<img
  alt="The first crash report on Shake dashboard"
  width="522"
  src={useBaseUrl('screens/first-crash-report-on-dashboard@2x.png')}
/>
</table>

If your crash report is not visible instantly, wait a minute until the system processes it.


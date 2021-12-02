---
id: test-it-out
title: Test it out
---

import Tabs from '@theme/Tabs'; 
import TabItem from '@theme/TabItem';

Let's crash you app. 
Enable crash reporting and paste the snippet below in the `viewDidLoad` method in one of your view controllers.
We'll crash the app on a button tap by accessing the array with the out of bounds index.

Launch you app after the crash, add a sentence or two if you want to and submit the report. 
Your report will be visible on the Shake dashboard in a few minutes.

:::note

Before testing this, make sure to disconnect your device from the Xcode debugger. Xcode debugger attaches itself 
to the application process and will disable crash recording.

:::

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
</TabItem>

<TabItem value="swift">

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

</TabItem>
</Tabs>

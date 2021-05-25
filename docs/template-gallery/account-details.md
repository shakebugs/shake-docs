---
id: account-details
title: Account details
---
import useBaseUrl from '@docusaurus/useBaseUrl';

<div class='text--center'>
<img
  alt='Account details'
  src={useBaseUrl('img/docs-account@2x.png')}
  width='460'
/>
</div>

## General

Copy and paste these templates to capture useful details about your user’s account.

The most common data developers send themselves is user’s email (e.g. stephanie.smith@gmail.com). Depending on your app, instead of an email, you might want to report their username (e.g. stephanie_smith), user ID (e.g. 10d1ac10572b) or their screen name (e.g. dragon_slayer).

These will come in handy later on when you have to match a bug to a user for example!

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs
  groupId="general"
  defaultValue="kotlin"
  values={[
    { label: 'Java', value: 'java'},
    { label: 'Kotlin', value: 'kotlin'},
    { label: 'Objective-C', value: 'objectivec'},
    { label: 'Swift', value: 'swift'},
    { label: 'Dart', value: 'dart'},
    { label: 'Javascript', value: 'javascript'},
  ]
}>

<TabItem value="java">

```java title="App.java"
// highlight-next-line
import com.shakebugs.shake.Shake;

private void onLoginPressed(String username, String password) {
    Session session = new Session();
    session.login(username, password, new LoginListener() {
        @Override
        void onLoginSucceeded(User user) {
            // highlight-start
            Shake.setMetadata("id", user.getId());
            Shake.setMetadata("email", user.getEmail());
            Shake.setMetadata("name", user.getName());
            // highlight-end  

            navigateToHome();        
        }

        @Override
        void onLoginFailed(String message) {
            Messages.show(message);         
        }
    });
}
```

</TabItem>

<TabItem value="kotlin">

```kotlin title="App.kt"
// highlight-next-line
import com.shakebugs.shake.Shake

private fun onLoginPressed(username: String, password: String) {
    val session = Session()
    session.login(username, password, object: LoginListener() {
        @override
        fun onLoginSucceeded(user: User) {
            // highlight-start
            Shake.setMetadata("id", user.id)
            Shake.setMetadata("email", user.email)
            Shake.setMetadata("name", user.name)
            // highlight-end 
        
            navigateToHome()
        }

        @override
        fun onLoginFailed(message: String) {
            Messages.show(message)
        }
    })
}
```

</TabItem>

<TabItem value="objectivec">

```objectivec title="AppDelegate.m"
// highlight-next-line
@import Shake;

- (void)onLoginPressed:(NSString*)username password:(NSString*)password {
    Session* session = [[Session alloc] init];
    
    [session login:username password:password onLoginSucceeded:^(User *user) {
        // highlight-start
        [SHKShake setMetadataWithKey:@"id" value: [user getId]];
        [SHKShake setMetadataWithKey:@"email" value: [user getEmail]];
        [SHKShake setMetadataWithKey:@"name" value: [user getName]];
        // highlight-end
        
        [self navigateToHome];
    } onLoginFailed:^(NSString *message) {
        [[[Messages alloc] init] show:message];
    }];
}
```

</TabItem>

<TabItem value="swift">

```swift title="App.swift"
// highlight-next-line
import Shake

func onLoginPressed(username: String, password: String) {
    let session = Session()

    session.login(username: username, password: password, onLoginSucceeded: { (user) in
        // highlight-start
        Shake.setMetadata(key: "id", value: user.getId())
        Shake.setMetadata(key: "email", value: user.getEmail())
        Shake.setMetadata(key: "name", value: user.getName())
        // highlight-end
        
        navigateToHome();
    }, onLoginFailed: { (message) in
        Messages().show(message: message);
    })

}
```

</TabItem>

<TabItem value="dart">

```dart title="main.dart"
// highlight-next-line
import 'package:shake_flutter/shake_flutter.dart';

void onLoginPressed(String username, String password) {
    Session session = Session();
    
    session.login(
        username: username,
        password: password,
        onLoginSucceeded: (User user) {
            // highlight-start
            Shake.setMetadata('id', user.id);
            Shake.setMetadata('email', user.email);
            Shake.setMetadata('name', user.name);
            // highlight-end
            
            navigateToHome();
        },
        onLoginFailed: (String message) {
            Messages.show(message);
        },
    );
}
```

</TabItem>

<TabItem value="javascript">

```javascript title="main.js"
// highlight-next-line
import Shake from '@shakebugs/react-native-shake';

const onLoginPressed = (username, password) => {
    const session = new Session();

    session.login(
        username,
        password,
        (user) => {
            // highlight-start
            Shake.setMetadata('id', user.id);
            Shake.setMetadata('email', user.email);
            Shake.setMetadata('name', user.name);
            // highlight-end

            navigateToHome();
        },
        (message) => {
            Messages.show(message);
        },
    );
};
```

</TabItem>

</Tabs>

## Gaming and education

If your app is in the gaming or education industry, think about sending yourself more specific details about your players or people taking classes, maybe a player’s class (e.g. Wizard), a list of their achievements (e.g. [1, 2, 5, 8, 15]), their difficulty settings (e.g. Beginner) or a list of languages or courses they are taking (e.g. English and Spanish) to get the whole picture about the player without nagging them for more details.

<Tabs
  groupId="gaming"
  defaultValue="kotlin"
  values={[
    { label: 'Java', value: 'java'},
    { label: 'Kotlin', value: 'kotlin'},
    { label: 'Objective-C', value: 'objectivec'},
    { label: 'Swift', value: 'swift'},
    { label: 'Dart', value: 'dart'},
    { label: 'Javascript', value: 'javascript'},
  ]
}>

<TabItem value="java">

```java title="App.java"
// highlight-next-line
import com.shakebugs.shake.Shake;

private void onPlayerSelected(Player player) {
    String type = player.getType();
    String difficulty = player.getDifficulty();
    List<int> achievements = player.getAchievements();

    // highlight-start
    Shake.setMetadata("type", type);
    Shake.setMetadata("courses", difficulty);
    Shake.setMetadata("achievements", achievements.toString());
    // highlight-end

    startGame();
}
```

</TabItem>

<TabItem value="kotlin">

```kotlin title="App.kt"
// highlight-next-line
import com.shakebugs.shake.Shake

private fun onPlayerSelected(player: Player) {
    val type: String = player.type
    val difficulty: String = player.difficulty
    val achievements: List<int> = player.achievements

    // highlight-start
    Shake.setMetadata("type", type)
    Shake.setMetadata("courses", difficulty)
    Shake.setMetadata("achievements", achievements.toString())
    // highlight-end

    startGame()
}
```

</TabItem>

<TabItem value="objectivec">

```objectivec title="AppDelegate.m"
// highlight-next-line
@import Shake;

- (void)onPlayerSelected:(Player*)player {
    NSString* type = [player getType];
    NSString* difficulty = [player getDifficulty];
    NSArray<NSNumber*>* achievements = [player getAchievements];

    // highlight-start
    [SHKShake setMetadataWithKey:@"type" value: type];
    [SHKShake setMetadataWithKey:@"courses" value: difficulty];
    [SHKShake setMetadataWithKey:@"achievements" value: [achievements debugDescription]]; // convert to string
    // highlight-end

    [self startGame];
}
```

</TabItem>

<TabItem value="swift">

```swift title="AppDelegate.swift"
// highlight-next-line
import Shake

func onPlayerSelected(player: Player) {
    let type = player.getType()
    let difficulty = player.getDifficulty()
    let achievements = player.getAchievements()

    // highlight-start
    Shake.setMetadata(key: "type", value: type)
    Shake.setMetadata(key: "courses", value: difficulty)
    Shake.setMetadata(key: "achievements", value: achievements.debugDescription) // convert to string
    // highlight-end

    startGame()
}
```

</TabItem>

<TabItem value="dart">

```dart title="main.dart"
// highlight-next-line
import 'package:shake_flutter/shake_flutter.dart';

void onPlayerSelected(Player player) {
    String type = player.type;
    String difficulty = player.difficulty;
    List<int> achievements = player.achievements;

    // highlight-start
    Shake.setMetadata('type', type);
    Shake.setMetadata('courses', difficulty);
    Shake.setMetadata('achievements', achievements.toString());
    // highlight-end

    startGame();
}
```

</TabItem>

<TabItem value="javascript">

```javascript title="main.js"
// highlight-next-line
import Shake from '@shakebugs/react-native-shake';

const onPlayerSelected = (player) => {
    const type = player.type;
    const difficulty = player.difficulty;
    const achievements = player.achievements;

    // highlight-start
    Shake.setMetadata('type', type);
    Shake.setMetadata('courses', difficulty);
    Shake.setMetadata('achievements', achievements.toString());
    // highlight-end

    startGame();
};
```

</TabItem>

</Tabs>

## B2B 

In a more serious B2B environment, you probably want to always report yourself data like user’s account type (e.g. Admin), their subscription plan (e.g. Free) and similar.

<Tabs
  groupId="b2b"
  defaultValue="kotlin"
  values={[
    { label: 'Java', value: 'java'},
    { label: 'Kotlin', value: 'kotlin'},
    { label: 'Objective-C', value: 'objectivec'},
    { label: 'Swift', value: 'swift'},
    { label: 'Dart', value: 'dart'},
    { label: 'Javascript', value: 'javascript'},
  ]
}>

<TabItem value="java">

```java title="App.java"
// highlight-next-line
import com.shakebugs.shake.Shake;

private void onApplicationStarted() {
    User user = getCurrentUser();
    if (user != null) {
        // highlight-start
        Shake.setMetadata("id", user.getId());
        Shake.setMetadata("plan", user.getPlan());
        Shake.setMetadata("type", user.getType());
        // highlight-end

        navigateToHome();
    } else {
        navigateToLogin();
    }
}
```

</TabItem>

<TabItem value="kotlin">

```kotlin title="App.kt"
// highlight-next-line
import com.shakebugs.shake.Shake

private fun onApplicationStarted() {
    val user: User = getCurrentUser()
    if (user != null) {
        // highlight-start
        Shake.setMetadata("id", user.id)
        Shake.setMetadata("plan", user.plan)
        Shake.setMetadata("type", user.type)
        // highlight-end

        navigateToHome()
    } else {
        navigateToLogin()
    }
}
```

</TabItem>

<TabItem value="objectivec">

```objectivec title="AppDelegate.m"
// highlight-next-line
@import Shake;

@implementation AppDelegate

-(BOOL)application:(UIApplication *)application didFinishLaunchingWithOptions:(NSDictionary<UIApplicationLaunchOptionsKey,id> *)launchOptions {
    
    User *user = [self getCurrentUser];
    if (user) {
    // highlight-start
        [SHKShake setMetadataWithKey:@"id" value: [user getId]];
        [SHKShake setMetadataWithKey:@"plan" value: [user getPlan]];
        [SHKShake setMetadataWithKey:@"type" value: [user getType]];
        // highlight-end

        [self navigateToHome];
    } else {
        [self navigateToLogin];
    }
    
    return YES;
}

@end
```

</TabItem>

<TabItem value="swift">

```swift title="AppDelegate.swift"
// highlight-next-line
import Shake

@UIApplicationMain
class AppDelegate: UIResponder, UIApplicationDelegate {
    func application(_ application: UIApplication, didFinishLaunchingWithOptions launchOptions: [UIApplication.LaunchOptionsKey : Any]? = nil) -> Bool {
        
        let user = getCurrentUser()
        
        if let user = user {
        // highlight-start
            Shake.setMetadata(key: "id", value: user.getId())
            Shake.setMetadata(key: "plan", value: user.getPlan())
            Shake.setMetadata(key: "type", value: user.getType())
            // highlight-end
            
            navigateToHome()
        } else {
            navigateToLogin()
        }
    }
    
}
```

</TabItem>

<TabItem value="dart">

```dart title="main.dart"
// highlight-next-line
import 'package:shake_flutter/shake_flutter.dart';

void onApplicationStarted() {
    User user = getCurrentUser();
    if (user != null) {
        // highlight-start
        Shake.setMetadata('id', user.id);
        Shake.setMetadata('plan', user.plan);
        Shake.setMetadata('type', user.type);
        // highlight-end

        navigateToHome();
    } else {
        navigateToLogin();
    }
}
```

</TabItem>

<TabItem value="javascript">

```javascript title="main.js"
// highlight-next-line
import Shake from '@shakebugs/react-native-shake';

const onApplicationStarted = () => {
    const user = getCurrentUser();
    if (user) {
        // highlight-start
        Shake.setMetadata('id', user.id);
        Shake.setMetadata('plan', user.plan);
        Shake.setMetadata('type', user.type);
        // highlight-end

        navigateToHome();
    } else {
        navigateToLogin();
    }
};
```

</TabItem>

</Tabs>

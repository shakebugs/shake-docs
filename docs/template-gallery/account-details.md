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

```objectivec title="App.m"
User *currentUser = [[User alloc] init];
currentUser = [self getLoggedInUser];
BOOL userLoggedIn = [currentUser isUserLoggedIn];

if(userLoggedIn) {
// highlight-start
    [SHKShake setMetadata:@"userid" data: [currentUser id]];
    [SHKShake setMetadata:@"email" data: [currentUser email]];
    [SHKShake setMetadata:@"userName" data: [currentUser name]];
// highlight-end
}
```

</TabItem>

<TabItem value="swift">

```swift title="App.swift"
let currentUser = getLoggedInUser()
let userLoggedIn: Bool = currentUser.isUserLoggedIn()

if userLoggedIn {
// highlight-start
    Shake.setMetadata("userid", currentUser.id);
    Shake.setMetadata("email", currentUser.email);
    Shake.setMetadata("userName", currentUser.name);
// highlight-end
}
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

```objectivec title="App.m"
NSMutableArray *achievements = [[NSMutableArray alloc] init];
NSMutableArray *courses = [[NSMutableArray alloc] init];
Difficulty *difficulty = [Difficulty @"Begginer"];

if(user) {
    achievements = [user getUserAchievements];
    courses = [user getUserCourses];
    difficulty = [user getCurrentDifficulty];
// highlight-start

    [SHKShake setMetadata:@"achievements" data: achievements];
    [SHKShake setMetadata:@"courses" data: courses];
    [SHKShake setMetadata:@"difficulty" data: difficulty];
}
// highlight-end
```

</TabItem>

<TabItem value="swift">

```swift title="App.swift"
var achievements = Achievements[100]
var courses = Courses[5]
var difficulty = Difficulty("Begginer")

if user {
    achievements = getUserAchievements()
    courses = getUserCourses()
    difficulty = getCurrentDifficulty()
// highlight-start

    Shake.setMetadata("achievements", achievements);    
    Shake.setMetadata("courses", courses);
    Shake.setMetadata("difficulty", difficulty);
// highlight-end
}
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

```objectivec title="App.m"
User *user = [self getCurrentUser];
if(user) {
// highlight-start
    [SHKShake setMetadata:@"userId" data: [user id]];
    [SHKShake setMetadata:@"paymentPlan" data: [user paymentPlan]];
    [SHKShake setMetadata:@"accountType" data: [user accountType]];
// highlight-end
}
```

</TabItem>

<TabItem value="swift">

```swift title="App.swift"
let user = getCurrentUser()
if user {
// highlight-start
    Shake.setMetadata("userId", user.id);
    Shake.setMetadata("paymentPlan", user.paymentPlan);
    Shake.setMetadata("accountType", user.accountType);
// highlight-end
}
```

</TabItem>

</Tabs>

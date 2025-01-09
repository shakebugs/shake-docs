---
id: unregister-user
title: Unregister app user
---

>Unregistering an app user should be done when your app user decides to _log out_ and perhaps use your application as a _guest_, or when you no longer 
want the subsequent reports to be associated with the current app user.

<p class="p2 mt-40">You're viewing the Flutter docs. Other platforms → &nbsp;
<a href="/docs/ios/users/unregister-user/">iOS</a>&nbsp; 
<a href="/docs/android/users/unregister-user/">Android</a>&nbsp; 
<a href="/docs/react/users/unregister-user/">React Native</a>&nbsp; 
<a href="/docs/web/users/unregister-user/">Web</a>&nbsp;
</p>

Unregistering is done by calling the `Shake.unregisterUser` method:

```dart title="main.dart"
void logOut() {
    networkService.performLogOut(email,
        () {
            // highlight-next-line
            Shake.unregisterUser();
            
            handleLogOut();
        },
        (String message) {
            // Handle failed log out
        });
}
```

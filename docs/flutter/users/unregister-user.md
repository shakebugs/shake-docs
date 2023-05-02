---
id: unregister-user
title: Unregister app user
---

>Unregistering an app user should be done when your app user decides to _log out_ and perhaps use your application as a _guest_, or when you no longer 
want the subsequent reports to be associated with the current app user.

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

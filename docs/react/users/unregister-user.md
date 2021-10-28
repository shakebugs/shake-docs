---
id: unregister-user
title: Unregister user
---

Unregistering a user should be done when your user decides to _log out_ and perhaps use your application as a _guest_, or when you no longer 
want the subsequent reports to be associated with the current user.

Unregistering is done by calling the `Shake.unregisterUser` method.

```javascript title="App.js"
const logOut = () => {
    networkService.performLogOut(email,
        () => {
            // highlight-next-line
            Shake.unregisterUser();
            
            handleLogOut();   
        }, 
        message => {
            // Handle failed log out   
        });
}
```

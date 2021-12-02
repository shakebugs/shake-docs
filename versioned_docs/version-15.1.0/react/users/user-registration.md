---
id: user-registration
title: User registration
---

User of your application can be registered with Shake by calling the `Shake.registerUser` method. The passed _user identifier_ argument
should, ideally, reflect or be a derivation of the identifier that uniquely represents the user in your database or system.

The example below showcases the user registration in a way that most apps can "relate to", and that is the usual "login flow". 

However, the Shake public method is intentionally called _register_ and not _logIn_ because there are different situations and contexts in which the 
user identification works just as good.

Most applications will communicate with their backend through some form of the network layer which performs the URL request and asynchronously
receives a callback with the request result.

Body of your successful registration request callback is the usual place where `Shake.registerUser` method would be called, but every context cannot be described
in this documentation so make sure the method is called at the place where it best fits your application flow.

```javascript title="App.js"
const logInUser = (email, password) => {
    networkService.performLogin(email, password,
        user => {
            // highlight-next-line
            Shake.registerUser(user.id);
            
            handleLogin(user);   
        }, 
        message => {
            // Handle failed login   
        });
}
```

:::note

All user related Shake operations on a registered user are fully supported when your application is __offline__ too, and will sync with the Shake servers later.

:::

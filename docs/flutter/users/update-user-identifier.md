---
id: update-user-identifier
title: Update user identifier
---

Shake exposes a public method that allows you to update the user identifier you used to register your user in the first place.
In the most standard application flows, this is a method that is not called very often.

An example would be if you have registered your user with the email, which is something that the user can change later on and still continue using your service as the same entity.

Calling `Shake.updateUserId` on an already registered user would update the user identifier in the Shake database and this would / should become the new identifier 
you continue to pass on `Shake.registerUser` on subsequent logins of the same user.
:::caution
This action of updating the user identifier opens up several possibilities of how this feature can be used, but can also lead to some possibly unwanted 
results. Make sure to read the following sections to better understand the possible usages and scenarios.
:::
The code snippet below showcases a common context in which the user identifier is updated. The snippet assumes that the user was previously
registered with the email.
```dart title="main.dart"
void changeEmail(String email) {
    networkService.updateUserEmail(email,
        (User user) {
            // highlight-next-line
            Shake.updateUserId(user.getEmail());
            
            handleEmailChange(user);   
        }, 
        (String message) {
            // Handle failed update   
        });
}
```

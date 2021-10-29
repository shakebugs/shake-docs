---
id: advanced-usage
title: Advanced usage
---

Some apps might perhaps want to register the device itself as a user, or make a transition from the anonymous
user to the _Signed Up_ user. This section covers these cases.

### Anonymous user

Think of the app like _Reddit_. Users can browse the app as guests for months, and then finally decide to _Sign Up_ and create an 
account. The user is now registered, but all the previous reports from the time they were anonymous are now tied to them.

The `Shake.updateUserId` method can be used to perform this transition. When the user is browsing your app in the anonymous mode, you can register them with Shake using a randomly 
generated UUID persisted in the app sandbox. This identifier would uniquely identify the device your still-anonymous user uses.

Once the user decides to _Sign Up_, instead of registering with the `Shake.registerUser` method, use the `Shake.updateUserId` method to perform a __transition__, 
associating the once-anonymous user metadata and information with the real user.

Be careful though, we recommend performing this transition only in one direction, and that is Anonymous â†’ Identified. The other way around could potentially lead to
undesired results, linking the identified data back to the now-anonymous user (device).

### Device as a user

Similar to the anonymous flow, this approach also registers the device with an identifier while the user is in the _guest_ mode. 

Back onto the _Reddit_ example. While the user is in the guest mode, you would call `Shake.registerUser` with the `deviceIdentifier`.
Once the user decides to _Sign Up_, you wouldn't perform a transition, but would just call `Shake.registerUser` with the new user identifier and treat the newly signed-up user as a separate
entity.

If the user decides to delete the account or _Log Out_ , instead of just calling `Shake.unregisterUser` you would do a switch back to the device, by calling 
`Shake.registerUser` with the `deviceIdentifier` again.

---
id: advanced-usage
title: Advanced usage
---

> Some apps might want to register the device itself as a user, or make a transition from the anonymous
user to the _Signed Up_ user.

## Anonymous user

Let's take _Reddit_ app as an example.
Their users can browse the app as guests for months and only then decide to _Sign Up_:
* The user has to be registered.
* All the previous reports from the time when they were anonymous have to be tied to them too.

The `Shake.updateUserId` method can be used to perform this transition.
When the user is browsing your app in the anonymous mode,
you can register them with Shake using a randomly generated UUID persisted in the app storage.
This identifier will uniquely identify the device your still-anonymous user is on.

Once this user decides to _sign up_, instead of registering them with the `Shake.registerUser` method,
call the `Shake.updateUserId` method to perform a __transition__, 
associating all previously-anonymous user metadata and tickets with the newly-identified user.

:::note

We recommend performing this transition only in one direction: Anonymous → Identified.
The other way around could lead to an undesired result of linking the previously-identified user to the
now-anonymous user ie. device.

:::

## Device as a user

Similar to the anonymous flow, this approach also registers the device with an identifier when the user is in the _guest_ mode. 

Back to the _Reddit_ example.
While the user is in that guest mode, you call `Shake.registerUser` with the `deviceIdentifier`.

Once the user decides to _sign up_, you decide not to perform a transition
but call `Shake.registerUser` with the new user identifier
and treat the newly signed-up user as a separate entity.

If this user decides to delete their account or _log out_ ,
instead of calling `Shake.unregisterUser`
you will do a switch back to the device identifier by calling 
`Shake.registerUser` with the `deviceIdentifier` again.

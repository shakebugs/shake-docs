---
id: advanced-usage
title: Advanced usage
---

import useBaseUrl from '@docusaurus/useBaseUrl';

> Some apps might want to register the device itself as a user or make a transition from the anonymous
user to the identified user.

## Register an anonymous user

Let's take an app like _Reddit_ for example. Their users can browse the app as guests for months before deciding to sign up.

As soon as your user opens your app — and way before they sign up — you can identify them as an anonymous user so both of you instantly get all the benefits of the Users module.

You would do so by calling `Shake.registerUser(UUID)`, where the `UUID` is a randomly generated unique device ID persisted in the app storage.


## Anonymous user → `Shake.updateUserId`

Let's suppose this anonymous guest user decides to sign up one day, and you want to **keep** their User entity:
* They will have the ability to see all their previously reported tickets.
* You consider them as the same user and want to keep all their User metadata.

<table class="media-container mt-50 mb-50">
<img
  alt="Anonymous user update User ID"
  width="520"
  src={useBaseUrl('screens/anonymous-user-update-user-id.svg')}
/>
</table>

You would call the `Shake.updateUserId` method with the new user identifier.

:::note

We recommend performing this transition only in one direction: Anonymous → Identified.
The other way around could lead to an undesired result of linking the previously-identified user to the
now-anonymous user ie. device.

:::


## Anonymous user → `Shake.registerUser`

Let's suppose an anonymous guest user decides to sign up one day, but you want to treat the newly signed-up user as a **new** User entity instead:
* You want a fresh new User.
* This user won't see tickets they reported before they signed up, while being an anonymous user.

<table class="media-container mt-50 mb-50">
<img
  alt="Anonymous user register new user"
  width="520"
  src={useBaseUrl('screens/anonymous-register-user.svg')}
/>
</table>

You would call the `Shake.registerUser` method with the new user identifier.

### Switch back to the anonymous user

When an identified user decides to delete their account or log out, you might want to switch back to the anonymous User.

To achieve that, instead of calling `Shake.unregisterUser`
you would do a switch back to the device identifier by calling 
`Shake.registerUser(UUID)` again.

This User will again see the tickets they had reported before they signed up.
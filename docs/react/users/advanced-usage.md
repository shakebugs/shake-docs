---
id: advanced-usage
title: Advanced usage
---

import useBaseUrl from '@docusaurus/useBaseUrl';

> Some apps might want to register the device itself as an app user or make a transition from the anonymous
user to the identified app user.

## Register an anonymous app user

Let's take an app like _Reddit_ for example. Their app users can browse the app as guests for months before deciding to sign up.

As soon as your app user opens your app — and way before they sign up — you can identify them as an anonymous app user so both of you instantly get all the benefits of the app Users module.

You would do so by calling `Shake.registerUser(UUID)`, where the `UUID` is a randomly generated unique device ID persisted in the app storage.


## Anonymous app user → `Shake.updateUserId`

Let's suppose this anonymous app user decides to sign up one day, and you want to **keep** their app User entity:
* They will have the ability to see all their previously reported tickets.
* You consider them as the same app user and want to keep all their app User metadata.

<table class="media-container mt-50 mb-50">
<img
  alt="Anonymous app user update app User ID"
  width="520"
  src={useBaseUrl('screens/anonymous-user-update-user-id.svg')}
/>
</table>

You would call the `Shake.updateUserId` method with the new app user identifier.

:::note

We recommend performing this transition only in one direction: Anonymous → Identified.
The other way around could lead to an undesired result of linking the previously-identified app user to the
now-anonymous app user ie. device.

:::


## Anonymous app user → `Shake.registerUser`

Let's suppose an anonymous app user decides to sign up one day, but you want to treat the newly signed-up app user as a **new** app User entity instead:
* You want a fresh new app User.
* This app user won't see tickets they reported before they signed up, while being an anonymous app user.

<table class="media-container mt-50 mb-50">
<img
  alt="Anonymous app user register new app user"
  width="520"
  src={useBaseUrl('screens/anonymous-register-user.svg')}
/>
</table>

You would call the `Shake.registerUser` method with the new app user identifier.

### Switch back to the anonymous app user

When an identified app user decides to delete their account or log out, you might want to switch back to the anonymous app User.

To achieve that, instead of calling `Shake.unregisterUser`
you would do a switch back to the device identifier by calling 
`Shake.registerUser(UUID)` again.

This app User will again see the tickets they had reported before they signed up.

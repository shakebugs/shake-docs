---
id: custom-forms
title: Custom forms
---
import useBaseUrl from '@docusaurus/useBaseUrl';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

> Learn how to create or modify a form displayed on the [New ticket screen](/web/shake-ui#new-ticket).

<p class="p2 mt-40">You're viewing the Web docs. Other platforms → &nbsp;
<a href="/docs/ios/configuration-and-data/custom-forms/">iOS</a>&nbsp;
<a href="/docs/android/configuration-and-data/custom-forms/">Android</a>&nbsp; 
<a href="/docs/react/configuration-and-data/custom-forms/">React Native</a>&nbsp;
<a href="/docs/flutter/configuration-and-data/custom-forms/">Flutter</a>&nbsp;  
</p>


## Default form

Shake provides a default feedback form that enables users to submit valuable input to the reported tickets.
This pre-designed form includes a variety of useful elements for collecting detailed information from the user.

- **Title** The form requires the user to provide a title for their ticket, ensuring that the issue is shortly described. 
This field is mandatory, meaning that users cannot submit a ticket without providing a title.

- **Feedback type** Users can also select the type of feedback they are submitting, choosing from a several categories: bug, question, or suggestion.
This categorization helps dashboard users to quickly identify and prioritize tickets based on their type.

[//]: # (- **Inspect button** In addition, users have the option to inspect the data collected by the Shake by clicking the Inspect button.)

[//]: # (This feature provides users with an overview of the information they have submitted and helps to ensure that all the necessary details have been provided.)

- **Attachments** The form includes the option to attach additional files, such as screenshots or video recordings, to the ticket.
This allows users to provide more detailed information about the issue they are reporting and can help support devs to quickly identify and resolve the problem.

## Custom form

Depending on your requirements, you may want to customize the form to collect additional or specific data from your users. 
Shake offers several customizable elements that can be added to the Shake form:

- **[Title](#title)** This element allows users to provide a short and descriptive title for their ticket, helping to quickly identify and understand the nature of the submission.

- **[Text input](#text-input)** This element captures additional information beyond the title, allowing users to provide more detailed information about their submission. This can include descriptions, comments, or other relevant details.

- **[Email input](#email-input)** This element accepts email input only, allowing users to provide their email address for follow-up communication or account verification. This can be particularly useful when addressing account-specific issues or when users want to be kept up-to-date on the status of their submission.

- **[Picker](#picker)** This element allows you to define a set of options for the user to select from, helping to streamline the submission process and ensure that submissions are properly categorized for easier management and resolution.

[//]: # (- **[Inspect button]&#40;#inspect-button&#41;** This element lets users easily review and verify the data they have provided for their submission, helping to reduce the need for follow-up questions and ensure that all necessary information has been included.)

- **[Attachments](#attachments)** This element allows users to attach files or other relevant materials to their submission, providing additional context and information to help facilitate resolution. This can include images, videos, documents, or other relevant files.

:::note
Note that the Title and Attachments elements can only be added to the form one-time.
If multiple instances of these components are included, only the first instance will be displayed on the screen
:::note

### Title

<table class="media-container media-container-highlighted mt-40 mb-40">
<img
  alt="Title element"
  width="380"
  src={useBaseUrl('img/custom-form-title.png')}
/>
</table>

A component that lets users provide a short and descriptive title for their issue or request.

Properties:
- key **string** - represents element on the Shake dashboard
- label **string** - user facing label
- value **string?** - input value
- required **boolean?** - if true, user can't submit the ticket while the input is empty
- lines **number?** - initial number of input lines

Example:

<Tabs
groupId="web"
defaultValue="javascript"
values={[
{ label: 'Javascript', value: 'javascript'},
{ label: 'Typescript', value: 'typescript'},
]
}>

<TabItem value="javascript">

```javascript title="index.js"
// highlight-start
const title = new ShakeTitle('title', 'Title', '', true, 1);
// highlight-end
```

</TabItem>

<TabItem value="typescript">

```typescript title="index.ts"
// highlight-start
const title: ShakeTitle = new ShakeTitle('title', 'Title', '', true, 1);
// highlight-end
```

</TabItem>
</Tabs>

:::note
Here's a tip that quality assurance teams often find helpful. If *#some #hashtags* are added anywhere in the title,
they will automatically become <span class="tag-button pink-tag-button">tags</span> on your [Shake dashboard](https://app.shakebugs.com/).
:::note

### Text input

<table class="media-container media-container-highlighted mt-40 mb-40">
<img
  alt="Text element"
  width="380"
  src={useBaseUrl('img/custom-form-text.png')}
/>
</table>

This element allows your users to leave textual input  with the ticket they're submitting.

Properties:
- key **string** - represents element on the Shake dashboard
- label **string** - user facing label
- value **string?** - input value
- required **boolean?** - if true, user can't submit the ticket while the input is empty
- lines **number?** - initial number of input lines

Example:

<Tabs
groupId="web"
defaultValue="javascript"
values={[
{ label: 'Javascript', value: 'javascript'},
{ label: 'Typescript', value: 'typescript'},
]
}>

<TabItem value="javascript">

```javascript title="index.js"
// highlight-start
const description = new ShakeTextInput('steps_to_reproduce', 'Steps to reproduce', '', false, 3);
// highlight-end
```

</TabItem>

<TabItem value="typescript">

```typescript title="index.ts"
// highlight-start
const description: ShakeTextInput = new ShakeTextInput('steps_to_reproduce', 'Steps to reproduce', '', false, 3);
// highlight-end
```

</TabItem>
</Tabs>

### Email input

<table class="media-container media-container-highlighted mt-40 mb-40">
<img
  alt="Email element"
  width="380"
  src={useBaseUrl('img/custom-form-email.png')}
/>
</table>

This element allows your users to leave email address with the ticket they're submitting.

Properties:
- key **string** - represents element on the Shake dashboard
- label **string** - user facing label
- value **string?** - input value
- required **boolean?** - if true, user can't submit the ticket while the input is empty

Example:

<Tabs
groupId="web"
defaultValue="javascript"
values={[
{ label: 'Javascript', value: 'javascript'},
{ label: 'Typescript', value: 'typescript'},
]
}>

<TabItem value="javascript">

```javascript title="index.js"
// highlight-start
const email = new ShakeEmail('email', 'Email to contact you on', '', true);
// highlight-end
```

</TabItem>

<TabItem value="typescript">

```typescript title="index.ts"
// highlight-start
const email: ShakeEmail = new ShakeEmail('email', 'Email to contact you on', '', true);
// highlight-end
```

</TabItem>
</Tabs>

:::note
Keep in mind that email field with key **email** will be automatically hidden if app user is registered and your app user has
metadata with key **email** set.
:::note

### Picker

<table class="media-container media-container-highlighted mt-40 mb-40">
<img
  alt="Picker element"
  width="380"
  src={useBaseUrl('img/custom-form-picker.png')}
/>
</table>

This element enables your users to select an option from a pre-defined list of choices.

#### Picker item

Properties:
- key **string** - represents element on the Shake dashboard
- label **string** - user facing label
- icon **string?** - represents picker item icon
- tag **string?** - if item is selected, tag will be automatically added to the ticket

Example:

<Tabs
groupId="web"
defaultValue="javascript"
values={[
{ label: 'Javascript', value: 'javascript'},
{ label: 'Typescript', value: 'typescript'},
]
}>

<TabItem value="javascript">

```javascript title="index.js"
// highlight-start
const item = new ShakePickerItem('playbox-mini', 'Playbox Mini', icon, "playbox-mini");
// highlight-end
```

</TabItem>

<TabItem value="typescript">

```typescript title="index.ts"
// highlight-start
const item: ShakePickerItem = new ShakePickerItem('playbox-mini', 'Playbox Mini', icon, "playbox-mini");
// highlight-end
```

</TabItem>
</Tabs>

#### Picker

Properties:
- key **string** - represents element on the Shake dashboard
- label **string** - user facing label
- items **array** - list of items in the picker
- value **number?** - index of selected item

Example:

<Tabs
groupId="web"
defaultValue="javascript"
values={[
{ label: 'Javascript', value: 'javascript'},
{ label: 'Typescript', value: 'typescript'},
]
}>

<TabItem value="javascript">

```javascript title="index.js"
// highlight-start
const picker = new ShakePicker('console', 'Choose your console', items, 0);
// highlight-end
```

</TabItem>

<TabItem value="typescript">

```typescript title="index.ts"
// highlight-start
const picker: ShakePicker = new ShakePicker('console', 'Choose your console', items, 0);
// highlight-end
```

</TabItem>
</Tabs>

[//]: # (### Inspect button)

[//]: # ()
[//]: # (<table class="media-container media-container-highlighted mt-40 mb-40">)

[//]: # (<img)

[//]: # (  alt="Inspect element")

[//]: # (  width="380")

[//]: # (  src={useBaseUrl&#40;'img/custom-form-inspect.png'&#41;})

[//]: # (/>)

[//]: # (</table>)

[//]: # ()
[//]: # (This element allows your users to inspect ticket data, tapping it takes them to the [Inspect section]&#40;/docs/android/shake-ui/inspect-section&#41;.)

[//]: # ()
[//]: # (Example:)


### Attachments

<table class="media-container media-container-highlighted mt-40 mb-40">
<img
  alt="Attachments element"
  width="380"
  src={useBaseUrl('img/custom-form-attachments.png')}
/>
</table>

This element allows your users to attach additional images, videos or files to the ticket.

Example:

<Tabs
groupId="web"
defaultValue="javascript"
values={[
{ label: 'Javascript', value: 'javascript'},
{ label: 'Typescript', value: 'typescript'},
]
}>

<TabItem value="javascript">

```javascript title="index.js"
// highlight-start
const attachments = new ShakeAttachments();
// highlight-end
```

</TabItem>

<TabItem value="typescript">

```typescript title="index.ts"
// highlight-start
const attachments: ShakeAttachments = new ShakeAttachments();
// highlight-end
```

</TabItem>
</Tabs>

## Examples

### Creating a custom form

The code snippet below provides an example of how to create a custom form with a range of useful elements

- Title
- Description (Text input)
- Email (Email input)
- Category (Picker)
- Attachments

The Title and Description fields are required and cannot be left blank, while the Email field is optional and includes a predefined value that users can modify or delete as needed. 
The Category field allows users to select a category for their ticket, which creates a corresponding tag to help with organization and management.
The Attachments enables users to upload additional files or other materials to provide context and support their submission.

<Tabs
groupId="web"
defaultValue="javascript"
values={[
{ label: 'Javascript', value: 'javascript'},
{ label: 'Typescript', value: 'typescript'},
]
}>

<TabItem value="javascript">

```javascript title="index.js"
// highlight-start
import Shake, {
    ShakeAttachments,
    ShakeForm,
    ShakePicker,
    ShakePickerItem,
    ShakeTitle,
    ShakeTextInput,
    ShakeEmail
} from '@shakebugs/browser';
// highlight-end

// highlight-start
const title = new ShakeTitle('title', 'Title', '', true);
const desc = new ShakeTextInput('description', 'Description', '', true);
const email = new ShakeEmail('email', 'Email', 'john.doe@gmail.com', false);

const pickerItems = [
    new ShakePickerItem('bug', 'Bug', bugIcon, 'bug'),
    new ShakePickerItem('bug', 'Suggestion', suggestionIcon, 'suggestion'),
    new ShakePickerItem('bug', 'Question', questionIcon, 'question'),
];
const picker = new ShakePicker('feedback_type', 'Feedback type', pickerItems);

const attachments = new ShakeAttachments();

const shakeForm = new ShakeForm([title, desc, email, picker, attachments]);

Shake.config.shakeForm = shakeForm;
// highlight-end
```

</TabItem>

<TabItem value="typescript">

```typescript title="index.ts"
// highlight-start
import Shake, {
    ShakeAttachments,
    ShakeForm,
    ShakePicker,
    ShakePickerItem,
    ShakeTitle,
    ShakeTextInput,
    ShakeEmail
} from '@shakebugs/browser';
// highlight-end

// highlight-start
const title: ShakeTitle = new ShakeTitle('title', 'Title', '', true);
const desc: ShakeTextInput  = new ShakeTextInput('description', 'Description', '', true);
const email: ShakeEmail = new ShakeEmail('email', 'Email', 'john.doe@gmail.com', false);

const pickerItems: ShakePickerItem[] = [
    new ShakePickerItem('bug', 'Bug', bugIcon, 'bug'),
    new ShakePickerItem('bug', 'Suggestion', suggestionIcon, 'suggestion'),
    new ShakePickerItem('bug', 'Question', questionIcon, 'question'),
];
const picker: ShakePicker = new ShakePicker('feedback_type', 'Feedback type', pickerItems);

const attachments: ShakeAttachments = new ShakeAttachments();

const shakeForm: ShakeForm = new ShakeForm([title, desc, email, picker, attachments]);

Shake.config.shakeForm = shakeForm;
// highlight-end
```

</TabItem>
</Tabs>

### Using multiple custom forms

Sometimes, you’ll want to display different Shake forms for different use cases within your app.
For example, you might want to show one form layout when the user taps the **Report a bug** button, and a different layout when they tap the **Send feedback** button.

You can accomplish this using Shake’s custom forms, as shown in the example below:

<Tabs
groupId="web"
defaultValue="javascript"
values={[
{ label: 'Javascript', value: 'javascript'},
{ label: 'Typescript', value: 'typescript'},
]
}>

<TabItem value="javascript">

```javascript title="index.js"
// highlight-start
import Shake, {
    ShakeForm,
    ShakeTitle,
    ShakeTextInput,
    ShakeEmail
} from '@shakebugs/browser';
// highlight-end

// highlight-start
const onBugReportClick = () => {
    const title = new ShakeTitle('title', 'Title', '', true);
    const repro = new ShakeTextInput('repro', 'Repro steps', '', true);
    const email = new ShakeEmail('email', 'Email', 'john.doe@gmail.com', false);
    const shakeForm = new ShakeForm([title, repro, email]);
  
    Shake.config.shakeForm = shakeForm;

    Shake.show();
}

const onSendFeedbackClick = () => {
    const title = new ShakeTitle('title', 'Title', '', true);
    const like = new ShakeTextInput('like', 'What do you like most about the app?', '', true);
    const dislike = new ShakeTextInput('dislike', 'Is there anything you dislike about the app?', '', true);
    const email = new ShakeEmail('email', 'Email', 'john.doe@gmail.com', false);
    const shakeForm = new ShakeForm([title, like, dislike, email]);

    Shake.config.shakeForm = shakeForm;

    Shake.show();
}
// highlight-end
```

</TabItem>

<TabItem value="typescript">

```typescript title="index.ts"
// highlight-start
import Shake, {
    ShakeForm,
    ShakeTitle,
    ShakeTextInput,
    ShakeEmail
} from '@shakebugs/browser';
// highlight-end

// highlight-start
const onBugReportClick = () => {
    const title: ShakeTitle = new ShakeTitle('title', 'Title', '', true);
    const repro: ShakeTextInput = new ShakeTextInput('repro', 'Repro steps', '', true);
    const email: ShakeEmail = new ShakeEmail('email', 'Email', 'john.doe@gmail.com', false);
    const shakeForm: ShakeForm = new ShakeForm([title, repro, email]);

    Shake.config.shakeForm = shakeForm;

    Shake.show();
}

const onSendFeedbackClick = () => {
    const title: ShakeTitle = new ShakeTitle('title', 'Title', '', true);
    const like: ShakeTextInput = new ShakeTextInput('like', 'What do you like most about the app?', '', true);
    const dislike: ShakeTextInput = new ShakeTextInput('dislike', 'Is there anything you dislike about the app?', '', true);
    const email: ShakeEmail = new ShakeEmail('email', 'Email', 'john.doe@gmail.com', false);
    const shakeForm: ShakeForm = new ShakeForm([title, like, dislike, email]);

    Shake.config.shakeForm = shakeForm;

    Shake.show();
}
// highlight-end
```

</TabItem>
</Tabs>

### Change default feedback type

By default, the Shake form’s feedback type picker is set to **Bug**. However, you can change this to any other feedback type you prefer.

For example, if you want to set **Suggestion** as the default option instead of **Bug**, you can do it like this:

<Tabs
groupId="web"
defaultValue="javascript"
values={[
{ label: 'Javascript', value: 'javascript'},
{ label: 'Typescript', value: 'typescript'},
]
}>

<TabItem value="javascript">

```javascript title="index.js"
// highlight-start
import Shake, {
    DefaultFormKeys,
    defaultShakeForm,
} from '@shakebugs/browser';
// highlight-end

// highlight-start
const setDefaultFeedbackType = () => {
    const shakeForm = defaultShakeForm();
    const picker = shakeForm.items.find(
        (i) => i.key === DefaultFormKeys.feedbackType
    );

    // bug=0,suggestion=1,question=2
    const tmpItem = picker.items[0];
    picker.items[0] = picker.items[1];
    picker.items[1] = tmpItem;

    Shake.config.shakeForm = shakeForm;
}
// highlight-end
```

</TabItem>

<TabItem value="typescript">

```typescript title="index.ts"
// highlight-start
import Shake, {
    DefaultFormKeys,
    defaultShakeForm,
    ShakeForm,
    ShakePicker,
    ShakePickerItem,
} from '@shakebugs/browser';
// highlight-end

// highlight-start
const setDefaultFeedbackType = () => {
    const shakeForm: ShakeForm = defaultShakeForm();
    const picker: ShakePicker = shakeForm.items.find(
        (i) => i.key === DefaultFormKeys.feedbackType
    ) as ShakePicker;

    // bug=0,suggestion=1,question=2
    const tmpItem: ShakePickerItem = picker.items[0];
    picker.items[0] = picker.items[1];
    picker.items[1] = tmpItem;

    Shake.config.shakeForm = shakeForm;
}
// highlight-end
```

</TabItem>
</Tabs>

### Creating a form translated to different languages

The following code snippet is an example of how to create a custom form that has elements with labels translated into different languages.

To achieve this, you should listen for language changes in you app and set a new form with proper labels when language is changed.
Note that component `key` is used for presenting values on the Shake dashboard, and it shouldn't be translated.

Here's an example how to translate your form:

<Tabs
groupId="web"
defaultValue="javascript"
values={[
{ label: 'Javascript', value: 'javascript'},
{ label: 'Typescript', value: 'typescript'},
]
}>

<TabItem value="javascript">

```javascript title="index.js"
// highlight-start
import Shake, {
    ShakeTitle,
    ShakeTextInput,
    ShakeForm
} from '@shakebugs/browser';
// highlight-end

// highlight-start
const strings = {
    'en': {
        'title': 'Title',
        'repro': 'Steps to reproduce'
    },
    'de': {
        'title': 'Titel',
        'repro': 'Schritte zum Reproduzieren'
    },
    'fr': {
        'title': 'Titre',
        'repro': 'Étapes à reproduire'
    }
}
// highlight-end

// highlight-start
// This function should be called when language change is detected
const onLanguageChanged = (languageCode) => {
    const title = new ShakeTitle('title', strings[languageCode].title, '', true);
    const repro = new ShakeTextInput('steps_to_reproduce', strings[languageCode].repro, '', true);

    const shakeForm = new ShakeForm([title, repro]);

    Shake.config.shakeForm = shakeForm;
}
// highlight-end
```

</TabItem>

<TabItem value="typescript">

```typescript title="index.ts"
// highlight-start
import Shake, {
    ShakeTitle,
    ShakeTextInput,
    ShakeForm
} from '@shakebugs/browser';
// highlight-end

// highlight-start
const strings: any = {
    'en': {
        'title': 'Title',
        'repro': 'Steps to reproduce'
    },
    'de': {
        'title': 'Titel',
        'repro': 'Schritte zum Reproduzieren'
    },
    'fr': {
        'title': 'Titre',
        'repro': 'Étapes à reproduire'
    }
}
// highlight-end

// highlight-start
// This function should be called when language change is detected
const onLanguageChanged = (languageCode: string) => {
    const title: ShakeTitle = new ShakeTitle('title', strings[languageCode].title, '', true);
    const repro: ShakeTextInput = new ShakeTextInput('steps_to_reproduce', strings[languageCode].repro, '', true);

    const shakeForm: ShakeForm = new ShakeForm([title, repro]);

    Shake.config.shakeForm = shakeForm;
}
// highlight-end
```

</TabItem>
</Tabs>

### Removing Attachments from the default form

If you like the default form but want to make some modifications, you can easily do so by editing the Shake default form.
For example, you may wish to remove the Attachments from the default form to prevent users from attaching ticket data, while keeping the other form elements intact.

<Tabs
groupId="web"
defaultValue="javascript"
values={[
{ label: 'Javascript', value: 'javascript'},
{ label: 'Typescript', value: 'typescript'},
]
}>

<TabItem value="javascript">

```javascript title="index.js"
// highlight-start
import Shake, {
    DefaultFormKeys,
} from '@shakebugs/browser';
// highlight-end

// highlight-start
const setCustomForm = () => {
    const shakeForm = Shake.config.shakeForm;
    shakeForm.items = shakeForm.items.filter(i => i.key !== DefaultFormKeys.attachments);
    Shake.config.shakeForm = shakeForm;
}
// highlight-end
```

</TabItem>

<TabItem value="typescript">

```typescript title="index.ts"
// highlight-start
import Shake, {
    DefaultFormKeys,
    defaultShakeForm,
    ShakeForm
} from '@shakebugs/browser';
// highlight-end

// highlight-start
const setCustomForm = () => {
    const shakeForm: ShakeForm = defaultShakeForm();
    shakeForm.items = shakeForm.items.filter(i => i.key !== DefaultFormKeys.attachments);
    Shake.config.shakeForm = shakeForm;
}
// highlight-end
```

</TabItem>
</Tabs>

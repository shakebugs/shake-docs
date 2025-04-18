---
id: custom-forms
title: Custom forms
---
import useBaseUrl from '@docusaurus/useBaseUrl';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

> Learn how to create or modify a form displayed on the [New ticket screen](react/shake-ui/new-ticket-screen.md).

<p class="p2 mt-40">You're viewing the React Native docs. Other platforms → &nbsp;
<a href="/docs/ios/configuration-and-data/custom-forms/">iOS</a>&nbsp; 
<a href="/docs/android/configuration-and-data/custom-forms/">Android</a>&nbsp;
<a href="/docs/flutter/configuration-and-data/custom-forms/">Flutter</a>&nbsp;  
<a href="/docs/web/configuration-and-data/custom-forms/">Web</a>&nbsp;
</p>


## Default form

Shake provides a default feedback form that enables users to submit valuable input to the reported tickets.
This pre-designed form includes a variety of useful elements for collecting detailed information from the user.

- **Title** The form requires the user to provide a title for their ticket, ensuring that the issue is shortly described. 
This field is mandatory, meaning that users cannot submit a ticket without providing a title.

- **Feedback type** Users can also select the type of feedback they are submitting, choosing from a several categories: bug, question, or suggestion.
This categorization helps dashboard users to quickly identify and prioritize tickets based on their type.

- **Inspect button** In addition, users have the option to inspect the data collected by the Shake by clicking the Inspect button.
This feature provides users with an overview of the information they have submitted and helps to ensure that all the necessary details have been provided.

- **Attachments** The form includes the option to attach additional files, such as screenshots or video recordings, to the ticket.
This allows users to provide more detailed information about the issue they are reporting and can help support devs to quickly identify and resolve the problem.

## Custom form

Depending on your requirements, you may want to customize the form to collect additional or specific data from your users. 
Shake offers several customizable elements that can be added to the Shake form:

- **[Title](#title)** This element allows users to provide a short and descriptive title for their ticket, helping to quickly identify and understand the nature of the submission.

- **[Text input](#text-input)** This element captures additional information beyond the title, allowing users to provide more detailed information about their submission. This can include descriptions, comments, or other relevant details.

- **[Email input](#email-input)** This element accepts email input only, allowing users to provide their email address for follow-up communication or account verification. This can be particularly useful when addressing account-specific issues or when users want to be kept up-to-date on the status of their submission.

- **[Picker](#picker)** This element allows you to define a set of options for the user to select from, helping to streamline the submission process and ensure that submissions are properly categorized for easier management and resolution.

- **[Inspect button](#inspect-button)** This element lets users easily review and verify the data they have provided for their submission, helping to reduce the need for follow-up questions and ensure that all necessary information has been included.

- **[Attachments](#attachments)** This element allows users to attach files or other relevant materials to their submission, providing additional context and information to help facilitate resolution. This can include images, videos, documents, or other relevant files.

:::note
Note that the Title, Inspect button, and Attachments elements can only be added to the form one-time.
If multiple instances of these components are included, only the first instance will be displayed on the screen
:::note

### Title

<table class="media-container media-container-highlighted mt-40 mb-40">
<img
  alt="Ticket description field"
  width="380"
  src={useBaseUrl('img/custom-form-title.png')}
/>
</table>

A component that lets users provide a short and descriptive title for their issue or request.

Properties:
- key **string** - represents element on the Shake dashboard
- label **string** - represents element label
- initialValue **string** - initial input value
- required **bool** - if true, user can't submit the ticket while the input is empty

Example:

<Tabs
groupId="react"
defaultValue="javascript"
values={[
{ label: 'Javascript', value: 'javascript'},
{ label: 'Typescript', value: 'typescript'},
]
}>

<TabItem value="javascript">

```javascript title="index.js"
// highlight-next-line
const title = new ShakeTitle('Title', 'Title', '', true);
```

</TabItem>

<TabItem value="typescript">

```typescript title="index.ts"
// highlight-next-line
const title: ShakeTitle = new ShakeTitle('Title', 'Title', '', true);
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
  alt="Email field"
  width="380"
  src={useBaseUrl('img/custom-form-text.png')}
/>
</table>

This element allows your users to leave textual input  with the ticket they're submitting.

Properties:
- key **string** - represents element on the Shake dashboard
- label **string** - represents element label
- initialValue **string** - initial input value
- required **bool** - if true, user can't submit the ticket while the input is empty

Example:

<Tabs
groupId="react"
defaultValue="javascript"
values={[
{ label: 'Javascript', value: 'javascript'},
{ label: 'Typescript', value: 'typescript'},
]
}>

<TabItem value="javascript">

```javascript title="index.js"
// highlight-next-line
const description = new ShakeTextInput('Steps to reproduce', 'Steps to reproduce', '', false);
```

</TabItem>

<TabItem value="typescript">

```typescript title="index.ts"
// highlight-next-line
const description: ShakeTextInput = new ShakeTextInput('Steps to reproduce', 'Steps to reproduce', '', false);
```

</TabItem>
</Tabs>

### Email input

<table class="media-container media-container-highlighted mt-40 mb-40">
<img
  alt="Email field"
  width="380"
  src={useBaseUrl('img/custom-form-email.png')}
/>
</table>

This element allows your users to leave email address with the ticket they're submitting.

Properties:
- key **string** - represents element on the Shake dashboard
- label **string** - represents element label
- initialValue **string** - initial input value
- required **bool** - if true, user can't submit the ticket while the input is empty

Example:

<Tabs
groupId="react"
defaultValue="javascript"
values={[
{ label: 'Javascript', value: 'javascript'},
{ label: 'Typescript', value: 'typescript'},
]
}>

<TabItem value="javascript">

```javascript title="index.js"
// highlight-next-line
const email = new ShakeEmail('Email to contact you on', 'Email to contact you on', '', true);
```

</TabItem>

<TabItem value="typescript">

```typescript title="index.ts"
// highlight-next-line
const email: ShakeEmail = new ShakeEmail('Email to contact you on', 'Email to contact you on', '', true);
```

</TabItem>
</Tabs>

### Picker

<table class="media-container media-container-highlighted mt-40 mb-40">
<img
  alt="Email field"
  width="380"
  src={useBaseUrl('img/custom-form-picker.png')}
/>
</table>

This element enables your users to select an option from a pre-defined list of choices.

#### Picker item

Properties:
- key **string** - represents element on the Shake dashboard
- text **string** - represents element text
- icon **string | null** - base64 string item icon
- tag **string | null** - if item is selected, tag will be automatically added to the ticket

Example:

<Tabs
groupId="react"
defaultValue="javascript"
values={[
{ label: 'Javascript', value: 'javascript'},
{ label: 'Typescript', value: 'typescript'},
]
}>

<TabItem value="javascript">

```javascript title="index.js"
// highlight-next-line
const item = new ShakePickerItem('Playbox Mini', 'Playbox Mini', base64Icon, 'playbox-mini');
```

</TabItem>

<TabItem value="typescript">

```typescript title="index.ts"
// highlight-next-line
const item: ShakePickerItem = new ShakePickerItem('Playbox Mini', 'Playbox Mini', base64Icon, 'playbox-mini');
```

</TabItem>
</Tabs>

#### Picker

Properties:
- key **string** - represents element on the Shake dashboard
- label **string** - represents element label
- items **List** - list of items in the picker

Example:

<Tabs
groupId="react"
defaultValue="javascript"
values={[
{ label: 'Javascript', value: 'javascript'},
{ label: 'Typescript', value: 'typescript'},
]
}>

<TabItem value="javascript">

```javascript title="index.js"
// highlight-next-line
const picker = new ShakePicker('Choose your console', 'Choose your console', items);
```

</TabItem>

<TabItem value="typescript">

```typescript title="index.ts"
// highlight-next-line
const picker: ShakePicker = new ShakePicker('Choose your console', 'Choose your console', items);
```

</TabItem>
</Tabs>

### Inspect button

<table class="media-container media-container-highlighted mt-40 mb-40">
<img
  alt="Inspect button"
  width="380"
  src={useBaseUrl('img/custom-form-inspect.png')}
/>
</table>

This element allows your users to inspect ticket data, tapping it takes them to the [Inspect section](/docs/react/shake-ui/inspect-section).

Example:

<Tabs
groupId="react"
defaultValue="javascript"
values={[
{ label: 'Javascript', value: 'javascript'},
{ label: 'Typescript', value: 'typescript'},
]
}>

<TabItem value="javascript">

```javascript title="index.js"
// highlight-next-line
const inspectButton = new ShakeInspectButton();
```

</TabItem>

<TabItem value="typescript">

```typescript title="index.ts"
// highlight-next-line
const inspectButton: ShakeInspectButton = new ShakeInspectButton();
```

</TabItem>
</Tabs>

### Attachments

<table class="media-container media-container-highlighted mt-40 mb-40">
<img
  alt="Inspect button"
  width="380"
  src={useBaseUrl('img/custom-form-attachments.png')}
/>
</table>

This element allows your users to attach additional images, videos or files to the ticket.

Example:

<Tabs
groupId="react"
defaultValue="javascript"
values={[
{ label: 'Javascript', value: 'javascript'},
{ label: 'Typescript', value: 'typescript'},
]
}>

<TabItem value="javascript">

```javascript title="index.js"
// highlight-next-line
const attachments = new ShakeAttachments();
```

</TabItem>

<TabItem value="typescript">

```typescript title="index.ts"
// highlight-next-line
const attachments: ShakeAttachments = new ShakeAttachments();
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
- Inspect button
- Attachments

The Title and Description fields are required and cannot be left blank, while the Email field is optional and includes a predefined value that users can modify or delete as needed. 
The Category field allows users to select a category for their ticket, which creates a corresponding tag to help with organization and management.
The Inspect button allows users to easily review and verify the data they have provided for their submission, while the Attachments enables users to upload additional files or other materials to provide context and support their submission.

<Tabs
groupId="react"
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
    ShakeEmail,
    ShakeForm,
    ShakeInspectButton,
    ShakePicker,
    ShakePickerItem,
    ShakeTextInput,
    ShakeTitle,
} from '@shakebugs/react-native-shake';
// highlight-end

// highlight-start
const title = new ShakeTitle('Title', 'Title', '', true);
const desc = new ShakeTextInput('Description', 'Description', '', true);
const email = new ShakeEmail('Email', 'Email', 'john.doe@gmail.com', false);

const pickerItems = [
    new ShakePickerItem('Bug', 'Bug', bugIcon, 'bug'),
    new ShakePickerItem('Suggestion', 'Suggestion', suggestionIcon, 'suggestion'),
    new ShakePickerItem('Question', 'Question', questionIcon, 'question'),
];
const picker = new ShakePicker('Feedback type', 'Feedback type', pickerItems);

const inspect = new ShakeInspectButton();
const attachments = new ShakeAttachments();

const components = [title, desc, email, picker, inspect, attachments];
const form = new ShakeForm(components);

Shake.setShakeForm(form);
// highlight-end
```

</TabItem>

<TabItem value="typescript">

```typescript title="index.ts"
// highlight-start
import Shake, {
    ShakeAttachments,
    ShakeEmail,
    ShakeForm,
    ShakeFormComponent,
    ShakeInspectButton,
    ShakePicker,
    ShakePickerItem,
    ShakeTextInput,
    ShakeTitle,
} from '@shakebugs/react-native-shake';
// highlight-end

// highlight-start
const title: ShakeTitle = new ShakeTitle('Title', 'Title', '', true);
const desc: ShakeTextInput = new ShakeTextInput('Description', 'Description', '', true);
const email: ShakeEmail = new ShakeEmail('Email', 'Email', 'john.doe@gmail.com', false);

const pickerItems: ShakePickerItem[] = [
    new ShakePickerItem('Bug', 'Bug', bugIcon, 'bug'),
    new ShakePickerItem('Suggestion', 'Suggestion', suggestionIcon, 'suggestion'),
    new ShakePickerItem('Question', 'Question', questionIcon, 'question'),
];
const picker: ShakePicker = new ShakePicker('Feedback type', 'Feedback type', pickerItems);

const inspect: ShakeInspectButton = new ShakeInspectButton();
const attachments: ShakeAttachments = new ShakeAttachments();

const components: ShakeFormComponent[] = [title, desc, email, picker, inspect, attachments];
const form: ShakeForm = new ShakeForm(components);

Shake.setShakeForm(form);
// highlight-end
```

</TabItem>
</Tabs>

:::note

Picker item icons should be in the base64 format without prefix eg. **data:image/png;base64,...**

:::

### Creating a form translated to different languages

The following code snippet is an example of how to create a custom form that has elements with labels translated into different languages.

To achieve this, you should listen for language changes in you app and set a new form with proper labels when language is changed.
Note that component `key` is used for presenting values on the Shake dashboard, and it shouldn't be translated.

Here's an example how to translate your form:

<Tabs
groupId="react"
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
    ShakeTextInput,
    ShakeTitle,
} from '@shakebugs/react-native-shake';
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
    const title = new ShakeTitle('Title', strings[languageCode].title, '', true);
    const repro = new ShakeTextInput('Steps to reproduce', strings[languageCode].repro, '', true);

    const components = [title, repro];
    const form = new ShakeForm(components);

    Shake.setShakeForm(form);
}
// highlight-end
```

</TabItem>

<TabItem value="typescript">

```typescript title="index.ts"
// highlight-start
import Shake, {
    ShakeForm,
    ShakeFormComponent,
    ShakeTextInput,
    ShakeTitle,
} from '@shakebugs/react-native-shake';
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
    const title: ShakeTitle = new ShakeTitle('Title', strings[languageCode].title, '', true);
    const repro: ShakeTextInput = new ShakeTextInput('Steps to reproduce', strings[languageCode].repro, '', true);

    const components: ShakeFormComponent[] = [title, repro];
    const form: ShakeForm = new ShakeForm(components);

    Shake.setShakeForm(form);
}
// highlight-end
```

</TabItem>
</Tabs>

### Removing Inspect button from the default form

If you like the default form but want to make some modifications, you can easily do so by editing the Shake default form.
For example, you may wish to remove the Inspect button from the default form to prevent users from inspecting the ticket data, while keeping the other form elements intact.

<Tabs
groupId="react"
defaultValue="javascript"
values={[
{ label: 'Javascript', value: 'javascript'},
{ label: 'Typescript', value: 'typescript'},
]
}>

<TabItem value="javascript">

```javascript title="index.js"
// highlight-start
import Shake from '@shakebugs/react-native-shake';
// highlight-end

// highlight-start
const setCustomForm = () => {
    const shakeForm = Shake.getShakeForm();
    shakeForm.components = shakeForm.components.filter(c => c.type !== 'inspect');
    Shake.setShakeForm(shakeForm);
}
// highlight-end
```

</TabItem>

<TabItem value="typescript">

```typescript title="index.ts"
// highlight-start
import Shake, {ShakeForm} from '@shakebugs/react-native-shake';
// highlight-end

// highlight-start
const setCustomForm = () => {
    const shakeForm: ShakeForm = Shake.getShakeForm();
    shakeForm.components = shakeForm.components.filter(c => c.type !== 'inspect');
    Shake.setShakeForm(shakeForm);
}
// highlight-end
```

</TabItem>
</Tabs>

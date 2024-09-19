---
id: custom-forms
title: Custom forms
---
import useBaseUrl from '@docusaurus/useBaseUrl';

> Learn how to create or modify a form displayed on the [New ticket screen](flutter/shake-ui/new-ticket-screen.md).

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
- key **String** - represents element on the Shake dashboard
- label **String** - represents element label
- initialValue **String** - initial input value
- required **Bool** - if true, user can't submit the ticket while the input is empty

Example:

```dart title="main.dart"
// highlight-next-line
ShakeTitle title = ShakeTitle('Title', 'Title', initialValue: '', required: true);
```

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
- key **String** - represents element on the Shake dashboard
- label **String** - represents element label
- initialValue **String** - initial input value
- required **Bool** - if true, user can't submit the ticket while the input is empty

Example:

```dart title="main.dart"
// highlight-next-line
ShakeTextInput description = ShakeTextInput('Steps to reproduce', 'Steps to reproduce', initialValue: '', required: false);
```

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
- key **String** - represents element on the Shake dashboard
- label **String** - represents element label
- initialValue **String** - initial input value
- required **Bool** - if true, user can't submit the ticket while the input is empty

Example:

```dart title="main.dart"
// highlight-next-line
ShakeEmail email = ShakeEmail('Email to contact you on', 'Email to contact you on', initialValue: '', required: true);
```

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
- key **String** - represents element on the Shake dashboard
- text **String** - represents element text
- icon **String?** - base64 string item icon
- tag **String?** - if item is selected, tag will be automatically added to the ticket

Example:

```dart title="main.dart"
// highlight-next-line
ShakePickerItem item = ShakePickerItem('Playbox Mini', 'Playbox Mini', icon: base64Icon, tag: 'playbox-mini');
```

#### Picker

Properties:
- key **String** - represents element on the Shake dashboard
- label **String** - represents element label
- items **List** - list of items in the picker

Example:

```dart title="main.dart"
// highlight-next-line
ShakePicker picker = ShakePicker('Choose your console', 'Choose your console', items);
```

### Inspect button

<table class="media-container media-container-highlighted mt-40 mb-40">
<img
  alt="Inspect button"
  width="380"
  src={useBaseUrl('img/custom-form-inspect.png')}
/>
</table>

This element allows your users to inspect ticket data, tapping it takes them to the [Inspect section](/docs/flutter/shake-ui/inspect-section).

Example:

```dart title="main.dart"
// highlight-next-line
ShakeInspectButton inspectButton = ShakeInspectButton();
```

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

```dart title="main.dart"
// highlight-next-line
ShakeAttachments attachments = ShakeAttachments();
```

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

```dart title="main.dart"
// highlight-start
ShakeTitle title = ShakeTitle('Title', 'Title', required: true);
ShakeTextInput desc = ShakeTextInput('Description', 'Description', required: true);
ShakeEmail email = ShakeEmail('Email', 'Email', initialValue: 'john.doe@gmail.com');

List<ShakePickerItem> pickerItems = [
    ShakePickerItem('Bug', 'Bug', icon: bugIcon, tag: 'bug'),
    ShakePickerItem('Suggestion', 'Suggestion', icon: suggestionIcon, tag: 'suggestion'),
    ShakePickerItem('Question', 'Question', icon: questionIcon, tag: 'question')
];
ShakePicker picker = ShakePicker('Feedback type', 'Feedback type', pickerItems);

ShakeInspectButton inspect = ShakeInspectButton();
ShakeAttachments attachments = ShakeAttachments();

List<ShakeFormComponent> components = [title, desc, email, picker, inspect, attachments];
ShakeForm form = ShakeForm(components);

Shake.setShakeForm(form);
// highlight-end
```

:::note

Picker item icons should be in the base64 format without prefix eg. **data:image/png;base64,...**

:::

### Creating a form translated to different languages

The following code snippet is an example of how to create a custom form that includes elements with labels translated into different languages.

To achieve this, you should listen for language changes in you app and set a new form with proper labels when language is changed.
Note that component `key` is used for presenting values on the Shake dashboard, and it shouldn't be translated.

Here's an example how to translate your form:

```dart title="main.dart"
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
ShakeTitle title = ShakeTitle('Title', strings[languageCode]?["title"] ?? "", required: true);
ShakeTextInput repro = ShakeTextInput('Steps to reproduce', strings[languageCode]?["repro"] ?? "", required: true);

List<ShakeFormComponent> components = [title, repro];
ShakeForm form = ShakeForm(components);

Shake.setShakeForm(form);
// highlight-end
```

### Removing Inspect button from the default form

If you like the default form but want to make some modifications, you can easily do so by editing the Shake default form.
For example, you may wish to remove the Inspect button from the default form to prevent users from inspecting the ticket data, while keeping the other form elements intact.

```dart title="main.dart"
// highlight-start
void setCustomForm() async {
  ShakeForm? shakeForm = await Shake.getShakeForm();
  if (shakeForm != null) {
    shakeForm.components.removeWhere((element) => element.type == 'inspect');
    Shake.setShakeForm(shakeForm); 
  }
}
// highlight-end
```

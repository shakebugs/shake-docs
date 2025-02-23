---
id: custom-forms
title: Custom forms
---
import useBaseUrl from '@docusaurus/useBaseUrl';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

> Learn how to create or modify a form displayed on the [New ticket screen](android/shake-ui/new-ticket-screen.md).

<p class="p2 mt-40">You're viewing the Android docs. Other platforms →&nbsp;
<a href="/docs/ios/configuration-and-data/custom-forms/">iOS</a>&nbsp;
<a href="/docs/react/configuration-and-data/custom-forms/">React Native</a>&nbsp;
<a href="/docs/flutter/configuration-and-data/custom-forms/">Flutter</a>&nbsp;
<a href="/docs/web/configuration-and-data/custom-forms/">Web</a>&nbsp;
</p>

## Default form

Shake provides a default feedback and crash reporting form that enables users to submit valuable input to the reported tickets.
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
  alt="Title element"
  width="380"
  src={useBaseUrl('img/custom-form-title.png')}
/>
</table>

A component that lets users provide a short and descriptive title for their issue or request.

Properties:
- key **String** - represents element on the Shake dashboard
- label **Int** - user facing label, resource id
- initialValue **String** - initial input value
- required **Bool** - if true, user can't submit the ticket while the input is empty

Example:

<Tabs
groupId="android"
defaultValue="kotlin"
values={[
{ label: 'Java', value: 'java'},
{ label: 'Kotlin', value: 'kotlin'},
]
}>

<TabItem value="java">

```java title="App.java"
// highlight-start
ShakeTitle title = new ShakeTitle("Title", R.string.shake_title_label, "", true);
// highlight-end
```

</TabItem>

<TabItem value="kotlin">

```kotlin title="App.kt"
// highlight-start
val title = ShakeTitle(key = "Title", label = R.string.shake_title_label, initialValue = "", required = true)
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
- key **String** - represents element on the Shake dashboard
- label **Int** - user facing label, resource id
- initialValue **String** - initial input value
- required **Bool** - if true, user can't submit the ticket while the input is empty

Example:

<Tabs
groupId="android"
defaultValue="kotlin"
values={[
{ label: 'Java', value: 'java'},
{ label: 'Kotlin', value: 'kotlin'},
]
}>

<TabItem value="java">

```java title="App.java"
// highlight-start
ShakeTextInput description = new ShakeTextInput("Steps to reproduce", R.string.shake_desc_label, "", false);
// highlight-end
```

</TabItem>

<TabItem value="kotlin">

```kotlin title="App.kt"
// highlight-start
val description = ShakeTextInput(key = "Steps to reproduce", label = R.string.shake_desc_label, initialValue = "", required = false)
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
- key **String** - represents element on the Shake dashboard
- label **Int** - user facing label, resource id
- initialValue **String** - initial input value
- required **Bool** - if true, user can't submit the ticket while the input is empty

Example:

<Tabs
groupId="android"
defaultValue="kotlin"
values={[
{ label: 'Java', value: 'java'},
{ label: 'Kotlin', value: 'kotlin'},
]
}>

<TabItem value="java">

```java title="App.java"
// highlight-start
ShakeEmail email = new ShakeEmail("Email to contact you on", R.string.shake_email_label, "", true);
// highlight-end
```

</TabItem>

<TabItem value="kotlin">

```kotlin title="App.kt"
// highlight-start
val email = ShakeEmail(key = "Email to contact you on", label = R.string.shake_email_label, initialValue = "", required = true)
// highlight-end
```

</TabItem>
</Tabs>

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
- key **String** - represents element on the Shake dashboard
- text **Int** - user facing label, resource id
- icon **Int** - represents picker item icon, resource id
- tag **String** - if item is selected, tag will be automatically added to the ticket

Example:

<Tabs
groupId="android"
defaultValue="kotlin"
values={[
{ label: 'Java', value: 'java'},
{ label: 'Kotlin', value: 'kotlin'},
]
}>

<TabItem value="java">

```java title="App.java"
// highlight-start
ShakePickerItem item = new ShakePickerItem("Playbox Mini", R.string.playbox_mini, R.drawable.ic_playbox_mini, "playbox-mini");
// highlight-end
```

</TabItem>

<TabItem value="kotlin">

```kotlin title="App.kt"
// highlight-start
val item = ShakePickerItem(key = "Playbox Mini", text = R.string.playbox_mini, icon = R.drawable.ic_playbox_mini, tag = "playbox-mini")
// highlight-end
```

</TabItem>
</Tabs>


#### Picker

Properties:
- key **String** - represents element on the Shake dashboard
- label **Int** - user facing label, resource id
- items **List** - list of items in the picker

Example:

<Tabs
groupId="android"
defaultValue="kotlin"
values={[
{ label: 'Java', value: 'java'},
{ label: 'Kotlin', value: 'kotlin'},
]
}>

<TabItem value="java">

```java title="App.java"
// highlight-start
ShakePicker picker = new ShakePicker("Choose your console", R.string.shake_picker_label, items);
// highlight-end
```

</TabItem>

<TabItem value="kotlin">

```kotlin title="App.kt"
// highlight-start
val picker = ShakePicker(key = "Choose your console", label = R.string.shake_picker_label, items = items)
// highlight-end
```

</TabItem>
</Tabs>

### Inspect button

<table class="media-container media-container-highlighted mt-40 mb-40">
<img
  alt="Inspect element"
  width="380"
  src={useBaseUrl('img/custom-form-inspect.png')}
/>
</table>

This element allows your users to inspect ticket data, tapping it takes them to the [Inspect section](/docs/android/shake-ui/inspect-section).

Example:

<Tabs
groupId="android"
defaultValue="kotlin"
values={[
{ label: 'Java', value: 'java'},
{ label: 'Kotlin', value: 'kotlin'},
]
}>

<TabItem value="java">

```java title="App.java"
// highlight-start
ShakeInspectButton inspectButton = new ShakeInspectButton();
// highlight-end
```

</TabItem>

<TabItem value="kotlin">

```kotlin title="App.kt"
// highlight-start
val inspectButton = ShakeInspectButton()
// highlight-end
```

</TabItem>
</Tabs>


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
groupId="android"
defaultValue="kotlin"
values={[
{ label: 'Java', value: 'java'},
{ label: 'Kotlin', value: 'kotlin'},
]
}>

<TabItem value="java">

```java title="App.java"
// highlight-start
ShakeAttachments attachments = new ShakeAttachments();
// highlight-end
```

</TabItem>

<TabItem value="kotlin">

```kotlin title="App.kt"
// highlight-start
val attachments = ShakeAttachments()
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
- Inspect button
- Attachments

The Title and Description fields are required and cannot be left blank, while the Email field is optional and includes a predefined value that users can modify or delete as needed. 
The Category field allows users to select a category for their ticket, which creates a corresponding tag to help with organization and management.
The Inspect button allows users to easily review and verify the data they have provided for their submission, while the Attachments enables users to upload additional files or other materials to provide context and support their submission.

<Tabs
groupId="android"
defaultValue="kotlin"
values={[
{ label: 'Java', value: 'java'},
{ label: 'Kotlin', value: 'kotlin'},
]
}>

<TabItem value="java">

```java title="App.java"
// highlight-start
ShakeTitle title = new ShakeTitle("Title", R.string.shake_form_title, "", true);
ShakeTextInput desc = new ShakeTextInput("Description", R.string.shake_form_desc, "", true);
ShakeEmail email = new ShakeEmail("Email", R.string.shake_form_email, "john.doe@gmail.com", false);

ShakePickerItem[] pickerItems = new ShakePickerItem[]{
        new ShakePickerItem("Bug", R.string.bug_text, R.drawable.ic_bug, "bug"),
        new ShakePickerItem("Suggestion", R.string.suggestion_text, R.drawable.ic_suggestion, "suggestion"),
        new ShakePickerItem("Question", R.string.question_text, R.drawable.ic_question, "question")
};
ShakePicker picker = new ShakePicker("Feedback type", R.string.shake_form_picker, Arrays.asList(pickerItems));

ShakeInspectButton inspect = new ShakeInspectButton();
ShakeAttachments attachments = new ShakeAttachments();

List<ShakeFormComponent> components = Arrays.asList(title, desc, email, picker, inspect, attachments);
ShakeForm form = new ShakeForm(components);

Shake.getReportConfiguration().setShakeForm(form);
// highlight-end
```

</TabItem>

<TabItem value="kotlin">

```kotlin title="App.kt"
// highlight-start
val title = ShakeTitle(key = "Title", label = R.string.shake_form_title, required = true)
val desc = ShakeTextInput(key = "Description", label = R.string.shake_form_desc, required = true)
val email = ShakeEmail(key = "Email", label = R.string.shake_form_email, initialValue = "john.doe@gmail.com")

val pickerItems = mutableListOf(
    ShakePickerItem(key = "Bug", text = R.string.bug_text, icon = R.drawable.ic_bug, tag = "bug"),
    ShakePickerItem(key = "Suggestion", text = R.string.suggestion_text, icon = R.drawable.ic_suggestion, tag = "suggestion"),
    ShakePickerItem(key = "Question", text = R.string.question_text, icon = R.drawable.ic_question, tag = "question")
)
val picker = ShakePicker(key = "Feedback type", label = R.string.shake_form_picker, items = pickerItems)

val inspect = ShakeInspectButton()
val attachments = ShakeAttachments()

val components = mutableListOf(title, desc, email, picker, inspect, attachments)
val form = ShakeForm(components)

Shake.getReportConfiguration().shakeForm = form
// highlight-end
```

</TabItem>
</Tabs>

### Creating a form translated to different languages

The following code snippet is an example of how to create a custom form that includes elements with labels translated into different languages.

To achieve this, you can leverage resources strings, which are supported by the platform you are working on. 
For instance, you may want to have a text input for a required ticket title, as well as a text input for required reproduction steps where the user can describe how they encountered a bug.

**shake_form_title** and **shake_form_repro** are defined as strings in the resource files. 
Each language has its own resource file, and the system will automatically load the correct file depending on the language settings on the user's phone.

By utilizing resources strings, you can provide a seamless and localized experience for your users, regardless of their language preferences.

<Tabs
groupId="android"
defaultValue="kotlin"
values={[
{ label: 'Java', value: 'java'},
{ label: 'Kotlin', value: 'kotlin'},
]
}>

<TabItem value="java">

```java title="App.java"
// highlight-start
ShakeTitle title = new ShakeTitle("Title", R.string.shake_form_title, "", true);
ShakeTextInput repro = new ShakeTextInput("Reproduction steps", R.string.shake_form_repro, "", true);

List<ShakeFormComponent> components = Arrays.asList(title, repro);
ShakeForm form = new ShakeForm(components);

Shake.getReportConfiguration().setShakeForm(form);
// highlight-end
```

</TabItem>

<TabItem value="kotlin">

```kotlin title="App.kt"
// highlight-start
val title = ShakeTitle(key = "Title", label = R.string.shake_form_title, required = true)
val repro = ShakeTextInput(key = "Reproduction steps", label = R.string.shake_form_repro, required = true)

val components = mutableListOf(title, repro)
val form = ShakeForm(components)

Shake.getReportConfiguration().shakeForm = form
// highlight-end
```

</TabItem>
</Tabs>

### Removing Inspect button from the default form

If you like the default form but want to make some modifications, you can easily do so by editing the Shake default form.
For example, you may wish to remove the Inspect button from the default form to prevent users from inspecting the ticket data, while keeping the other form elements intact.

<Tabs
groupId="android"
defaultValue="kotlin"
values={[
{ label: 'Java', value: 'java'},
{ label: 'Kotlin', value: 'kotlin'},
]
}>

<TabItem value="java">

```java title="App.java"
// highlight-start
ShakeForm shakeForm = Shake.getReportConfiguration().getShakeForm();
ListIterator<ShakeFormComponent> iterator = shakeForm.getComponents().listIterator();
while(iterator.hasNext()) {
    ShakeFormComponent component = iterator.next();
    if (component instanceof ShakeInspectButton) {
        iterator.remove();
    }
}
// highlight-end
```

</TabItem>

<TabItem value="kotlin">

```kotlin title="App.kt"
// highlight-start
val shakeForm = Shake.getReportConfiguration().shakeForm
val iterator = shakeForm.components.listIterator()
while (iterator.hasNext()) {
    val component = iterator.next()
    if (component is ShakeInspectButton) {
        iterator.remove()
    }
}
// highlight-end
```

</TabItem>
</Tabs>

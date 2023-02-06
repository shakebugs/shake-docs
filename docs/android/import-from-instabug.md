---
id: import-from-instabug
title: Import from Instabug
---

> Shake offers an option to easily migrate your bugs from Instabug to our platform.
This feature allows you to seamlessly transition your bugs without losing important data, even after closing Instabug account.

## How to migrate Instabug bugs?

### Step 1: Export bugs from the Instabug
To begin the migration process, you must first export your bugs from the Instabug.
To do this, log into your Instabug account and navigate to the _Bugs_ tab in the sidebar.
From there, select the issues you want to export, press _⋯_ button and then press _Export CSV_ button.

:::note
Before export, you'll be prompted to select data you want to export into the CSV file.  
"OS" field is required, feel free to uncheck any other field if you don't want to migrate it.
:::

You'll receive an email with a download link for the exported CSV file.

### Step 2: Download .csv export file
Check your email which you are using for Instabug login
and download the CSV file from the email sent by Instabug.

### Step 3: Import bugs into the Shake
Once you've downloaded the CSV file, log into your Shake account and navigate to the [Workspace administration → Apps](https://app.shakebugs.com) page.
Select the app where you want to import Instabug bugs and press _Choose a file_ button under the _Import user feedback tickets_ section.

Now, you'll be prompted to select the CSV file that you want to import.
Max import file size is _100MB_, if you have larger file you can divide it into separate files.

Once you've selected the file, the import process will begin. This process can take up some time, depending on the number of bugs you're migrating and size of attached files to the bugs.

:::note
Only Instabug bugs that match the platform of the Shake app (Android or iOS) will be imported during the import process.
Ensure that you import bugs into the correct app.
Also, if Shake encounters bugs with a different data structure than expected, those bugs won't be imported.
:::

When the import is completed, you'll be notified by email and you'll be able to view and track migrated tickets within the Shake.

## Migrated data

The migration tool allows you to migrate a variety of data from Instabug to Shake, such as title, description, status, and more. 
Here is a list of data fields that are provided in Instabug export file and that can be successfully migrated to the Shake.

- Title (ticket title)
- Email (reporter email)
- Status (ticket status)
- Priority (ticket priority)
- Assignee (always imported as unassigned)
- App Version (app version name)
- Bundle version (app version code)
- Device (device name)
- Locale (device locale)
- Screen Size (device screen size)
- Density  (device screen density)
- Location (device location)
- OS version (device os version)
- Current View (opened screen at the report time)
- Metadata (contains _User Data_ and _User Attributes_ from Instabug)
- Activity history (console logs, custom logs, user taps and view events)
- Attachments (videos, images and other files are copied to our infrastructure)
- Reported time (ticket created date and time)
- Tags (tickets tags, with additional _imported_ tag by default)

## Notes

Please contact the support team if you need assistance with the migration process or have any questions regarding the format of the CSV file.

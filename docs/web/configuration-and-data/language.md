---
id: language
title: Language
---
import useBaseUrl from '@docusaurus/useBaseUrl';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

> Configure Shake user interface language

[//]: # (<p class="p2 mt-40">You're viewing the Web docs. Other platforms → &nbsp;)

[//]: # (<a href="/docs/ios/configuration-and-data/language/">iOS</a>&nbsp; )

[//]: # (<a href="/docs/android/configuration-and-data/language/">Android</a>&nbsp;)

[//]: # (<a href="/docs/react/configuration-and-data/language/">React Native</a>&nbsp;)

[//]: # (<a href="/docs/flutter/configuration-and-data/language/">Flutter</a>&nbsp;  )

[//]: # (</p>)

## Overview 

By default, Shake automatically translates its interface to the language set in the browser settings.  
[Here's a list](https://help.shakebugs.com/en/articles/3392092-which-languages-has-shake-sdk-been-translated-to-language-options-for-shake) of all languages supported by Shake SDK.

Shake interface language is set by this priority:
1. Language set in code
2. Language set in browser settings
3. Default English

## Setting language from code

Sometimes, you may want to hardcode a specific language in your app—especially if you're targeting users from a particular language group.

In such cases, you can configure Shake to always use that language, ensuring a consistent localized experience:

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
// highlight-next-line
import Shake, { Language } from '@shakebugs/browser';

// highlight-next-line
Shake.config.language = Language.ENGLISH;
```

</TabItem>

<TabItem value="typescript">

```typescript title="index.ts"
// highlight-next-line
import Shake, { Language } from '@shakebugs/browser';

// highlight-next-line
Shake.config.language = Language.ENGLISH;
```

</TabItem>
</Tabs>

These are available options in `Language` enum:

```javascript title="index.js"
Language.CZECH
Language.DANISH
Language.GERMAN
Language.ENGLISH
Language.SPANISH
Language.ESTONIAN
Language.FRENCH
Language.HUNGARIAN
Language.ITALIAN
Language.JAPANESE
Language.KOREAN
Language.LATVIAN
Language.DUTCH
Language.POLISH
Language.PORTUGUESE
Language.RUSSIAN
Language.THAI
Language.TURKISH
Language.CHINESE_SIMPLIFIED
Language.CHINESE_TRADITIONAL 
```

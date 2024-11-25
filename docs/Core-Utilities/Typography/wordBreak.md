---
sidebar_position: 7
title:  "wordBreak"
---

import {AiMagicIcon} from 'hugeicons-react';

# Class-wordBreak <AiMagicIcon className='icon' />

Utilities for controlling word breaks in an element.

Use the `v-break-*` utilities to control the word break of an element.
You can use <br /> the [`feat: custom`](/docs/Core-Features/V-custom.md) feature if you want the word break to suit your needs.

## Table list Transforms

| Class name  | Properties |
|---------------------|-------------------|
| `v-word-normal		`      | `word-break: normal;` | 
| `v-word-words		`     | `overflow-wrap: break-word;` | 
| `v-word-all		`     | `word-break: break-all`| 

The table above presents several types of word breaks with different variants.

## Example Code
``` jsx title="index.html"	
<span class="v-break-normal"> 	
    Lorem ipsum dolor sit amet consectetur. 
    Quae saepe dolore deserunt consequatur.
    ipsadelenitidelenitidelenitideleniti.
</span>
```
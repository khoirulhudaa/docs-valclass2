---
sidebar_position: 1
title:  "TextDecoration"
---

import {AiMagicIcon} from 'hugeicons-react';

# Class-textDecoration <AiMagicIcon className='icon' />

Utilities for controlling the text color of an element.

Use the `v-color-*` utilities to control the text decoration of an element.
You can use <br /> the [`feat: custom`](/docs/Core-Features/V-custom.md) feature if you want the text decoration to suit your needs.

## Table list decorations

| Class name  | Properties |
|---------------------|-------------------|
| `v-decoration-none		`      | `text-decoration:  none;` | 
| `v-decoration-dashed		`     | `text-decoration:  dashed;` | 
| `v-decoration-double		`     | `text-decoration: double;`| 
| `v-decoration-through			`     | `text-decoration:  throgh;`| 
| `v-decoration-overline			`     | `text-decoration: overline;`| 
| `v-decoration-solid			`     | `text-decoration: solid;`| 
| `v-decoration-underline			`     | `text-decoration: underline;`| 
| `v-decoration-wavy			`     | `text-decoration wavy;`| 

The table above presents several types of text decorations with different variants.

## Example Code
``` jsx title="index.html"
<span class="v-decoration-underline"> 	
    example text decoration 
</span>
```
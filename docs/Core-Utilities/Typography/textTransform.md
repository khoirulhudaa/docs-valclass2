---
sidebar_position: 2
title:  "textTransform"
---

import {AiMagicIcon} from 'hugeicons-react';

# Class-textTransform <AiMagicIcon className='icon' />

Utilities for controlling the text color of an element.

Use the `v-text-*` utilities to control the text transform of an element.
You can use <br /> the [`feat: custom`](/docs/Core-Features/V-custom.md) feature if you want the text transform to suit your needs.

## Table list Transforms

| Class name  | Properties |
|---------------------|-------------------|
| `v-text-uppercase		`      | `text-transform: uppercase;` | 
| `v-text-lowercase		`     | `text-transform: lowercase;` | 
| `v-text-capitalize		`     | `text-transform: capitalize;`| 
| `v-text-none			`     | `text-transform: none;`| 

The table above presents several types of text transforms with different variants.

## Example Code
``` jsx title="index.html"	
<span class="v-text-uppercase"> 	
    example text transform-uppercase 
</span>
<span class="v-text-lowercase"> 	
    example text transform-lowercase 
</span>
```
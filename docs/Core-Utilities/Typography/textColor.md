---
sidebar_position: 8
title:  "TextColor"
---

import {AiMagicIcon} from 'hugeicons-react';

# Class-textColor <AiMagicIcon className='icon' />

Utilities for controlling the text color of an element.

Use the `v-color-*` utilities to control the text color of an element.
You can use <br /> the [`feat: custom`](/docs/Core-Features/V-custom.md) feature if you want the list style to suit your needs.

## Table list colors

| Class name  | Properties |
|---------------------|-------------------|
| `v-color-black		`      | `color: black;` | 
| `v-color-light		`     | `color: rgb(238, 238, 238);` | 
| `v-color-danger		`     | `color: rgb(255, 76, 44);` | 
| `v-color-info			`     | `color: gb(2, 168, 245);` | 
| `v-color-primary			`     | `color: rgb(255, 242, 242);` | 
| `v-color-smooth			`     | `color: rgb(255, 242, 242);` | 
| `v-color-secondary			`     | `color: rgb(141, 141, 141);` | 
| `v-color-warning			`     | `color: rgb(253, 207, 0);` | 
| `v-color-green			`     | `color: #0de982;` | 
| `v-color-white			`     | `color: #fff;` | 

The table above presents several types of text colors with different variants.

## Example Code
``` jsx title="index.html"
<span class="v-color-dark">
    example text-color
</span>
<span class="v-color-light">
    example text-color 
</span>
<span class="v-color-danger">
    example text-color 
</span>
```
---
sidebar_position: 13
title:  "FontSize"
---

import {AiMagicIcon} from 'hugeicons-react';

# Class-fontSize <AiMagicIcon className='icon' />

Utilities for controlling the font size of an element.

Use the `v-font-sz-*` utilities to control the font size of an element.
You can use <br /> the [`feat: custom`](/docs/Core-Features/V-custom.md) feature if you want the font size to suit your needs.

## Table list sizes

| Class name  | Properties |
|---------------------|-------------------|
| `v-font-sz-sm		`      | `font-size: 15px;` | 
| `v-font-sz-md		`     | `font-size: 20px;` | 
| `v-font-sz-lg		`     | `font-size: 25px;` | 
| `v-font-sz-xl			`     | `font-size: 30px;` | 

The table above presents several types of text size with different variants.

## Example Code
``` jsx title="index.html"
<div>
    <span class="v-font-sz-sm"> 
        My font size sm 
    </span>
    <span class="v-font-sz-md"> 
        My font size md 
    </span>
    <span class="v-font-sz-lg"> 
        My font size lg 
    </span>
    <span class="v-font-sz-xl">
        My font size xl 
    </span>
</div>
```
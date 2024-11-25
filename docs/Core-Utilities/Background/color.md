---
sidebar_position: 4
title:  "BgColor"
---

import {AiMagicIcon} from 'hugeicons-react';

# Class-color <AiMagicIcon className='icon' />

Utilities for controlling how a background image behaves when scrolling.

Use the `v-color-*` utilities to control the color of an element.
You can use <br /> the [`feat: custom`](/docs/Core-Features/V-custom.md) feature if you want the background color to suit your needs.

## Table list colors

| Class name  | Properties |
|---------------------|-------------------|
| `v-bg-color		`      | `background-color: border-box;` | 
| `v-bg-color	`     | `background-color: padding-box;` | 
| `v-bg-color	`     | `background-color: content-box;` | 
| `v-bg-color`     | `background-color: text;` | 

The table above presents several types of colors with different variants.

## Example Code
``` jsx title="index.html"
<div>
    <span class="v-bg-dark">
        example color
    </span>
    <span class="v-bg-light">
        example color 
    </span>
    <span class="v-bg-danger">
        example color 
    </span>
    <span class="v-bg-info">
        example color 
    </span>
</div>
```
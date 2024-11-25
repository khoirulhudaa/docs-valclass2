---
sidebar_position: 1
title:  "OutlineColor"
---

import {AiMagicIcon} from 'hugeicons-react';

# Class-outline-color <AiMagicIcon className='icon' />

Utilities to control the color of the outline elements.

Use the `v-o-color-*` utilities to control the outline-color of an element.
You can use <br /> the [`feat: custom`](/docs/Core-Features/V-custom.md) feature if you want the outline-color to suit your needs.

## Table list outline-colors

| Class name  | Properties |
|---------------------|-------------------|
| `v-o-color-black		`      | `outline-color: rgb(70, 70, 70);` | 
| `v-o-color-light		`     | `outline-color: rgb(238, 238, 238);` | 
| `v-o-color-danger		`     | `outline-color: rgb(255, 76, 44);` | 
| `v-o-color-info			`     | `outline-color: rgb(2, 168, 245);` | 
| `v-o-color-primary			`     | `outline-color: rgb(42, 131, 248);` | 
| `v-o-color-smooth			`     | `outline-color: rgb(255, 242, 242);` | 
| `v-o-color-secondary			`     | `outline-color: rgb(141, 141, 141);` | 
| `v-o-color-warning			`     | `outline-color: rgb(253, 207, 0);` | 
| `v-o-color-green			`     | `outline-color: rgb(14, 253, 201);` | 
| `v-o-color-transparent			`     | `outline-color: transparent;` | 

The table above presents several types of outline-colors with different variants.

## Example Code
``` jsx title="index.html"
<div>
    <div class="v-o-color-dark">
    </div>
    <div class="v-o-color-danger">
    </div>
    <div class="v-o-color-primary">
    </div>
    <div class="v-o-color-warning">
    </div>
    <div class="v-o-color-green">
    </div>
</div>
```
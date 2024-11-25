---
sidebar_position: 5
title:  "FontWeight"
---

import {AiMagicIcon} from 'hugeicons-react';

# Class-fontWeight <AiMagicIcon className='icon' />

Utilities for controlling the font weight of an element.

Use the `v-weight-*` utilities to control the font weight of an element.
You can use <br /> the [`feat: custom`](/docs/Core-Features/V-custom.md) feature if you want the font weight to suit your needs.

## Table list weights

| Class name  | Properties |
|---------------------|-------------------|
| `v-weight-normal		`      | `font-weight: normal;` | 
| `v-weight-bold		`     | `font-weight: bold;` | 
| `v-weight-100		`     | `font-weight: 100;` | 
| `v-weight-200			`     | `font-weight: 200;` | 
| `v-weight-300			`     | `font-weight: 300;` | 
| `v-weight-400			`     | `font-weight: 400;` | 
| `v-weight-500			`     | `font-weight: 500;` | 
| `v-weight-600			`     | `font-weight: 600;` | 
| `v-weight-700			`     | `font-weight: 700;` | 
| `v-weight-800			`     | `font-weight: 800;` | 

The table above presents several types of text weight with different variants.

## Example Code
``` jsx title="index.html"
<div>
    <span class="v-font-lg v-font-normal"> 
        My font style normal 
    </span>
    <span class="v-font-lg v-font-bold"> 
        My font style italic 
    </span>
    <span class="v-font-lg v-font-100"> 
        My font style oblique
    </span>
    <span class="v-font-lg v-font-500"> 
        My font style oblique
    </span>
    <span class="v-font-lg v-font-800"> 
        My font style oblique
    </span>
</div>
```
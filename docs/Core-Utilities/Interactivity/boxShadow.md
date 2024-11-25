---
sidebar_position: 3
title:  "BoxShadow"
---

import {AiMagicIcon} from 'hugeicons-react';

# Class-box-shadow <AiMagicIcon className='icon' />

Utilities for controlling the duration of CSS box-shadows.

Use the `v-o-*` utilities to control the box-shadow of an element.
You can use <br /> the [`feat: custom`](/docs/Core-Features/V-custom.md) feature if you want the box-shadow to suit your needs.

## Table list box-shadows

| Class name  | Properties |
|---------------------|-------------------|
| `v-box-shadow-sm			`      | `box-shadow: 2px 2px 2px rgb(199, 199, 199);` | 
| `v-box-shadow-md			`      | `box-shadow: 3px 3px 3px rgb(197, 197, 197);` | 
| `v-box-shadow-lg			`      | `box-shadow: 3.5px 3.5px 2px rgb(197, 197, 197);` | 
| `v-box-shadow-xl			`      | `box-shadow: 4px 4px 2px rgb(173, 173, 173);` | 

The table above presents several types of box-shadows with different variants.

## Example Code
``` jsx title="index.html"
<div>
    <div class="v-box-shadow-sm">
    </div>
    <div class="v-box-shadow-md">
    </div>
    <div class="v-box-shadow-lg">
    </div>
    <div class="v-box-shadow-xl">
    </div>
</div>
```
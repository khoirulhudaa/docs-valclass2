---
sidebar_position: 2
title:  "OutlineStyle"
---

import {AiMagicIcon} from 'hugeicons-react';

# Class-outline-style <AiMagicIcon className='icon' />

Utilities for controlling the duration of CSS outline-styles.

Use the `v-o-style-*` utilities to control the outline-style of an element.
You can use <br /> the [`feat: custom`](/docs/Core-Features/V-custom.md) feature if you want the outline-style to suit your needs.

## Table list outline-styles

| Class name  | Properties |
|---------------------|-------------------|
| `v-o-style-dotted			`      | `outline-style: dotted;` | 
| `v-o-style-dashed			`      | `outline-style: dashed;` | 
| `v-o-style-double			`      | `outline-style: double;` | 
| `v-o-style-groove			`      | `outline-style: groove;` | 
| `v-o-style-solid			`      | `outline-style: solid;` | 
| `v-o-style-ridge			`      | `outline-style: ridge;` | 
| `v-o-style-hidden			`      | `outline-style: hidden;` | 

The table above presents several types of outline-styles with different variants.

## Example Code
``` jsx title="index.html"
<div>
    <div class="v-o-style-dotted">
    </div>
    <div class="v-o-style-dashed">
    </div>
    <div class="v-o-style-double">
    </div>
    <div class="v-o-style-groove">
    </div>
    <div class="v-o-style-solid">
    </div>
    <div class="v-o-style-hidden">
    </div>
</div>
```
---
sidebar_position: 7
title:  "JustifySelf"
---

import {AiMagicIcon} from 'hugeicons-react';

# Class-justify-self <AiMagicIcon className='icon' />

Utilities for controlling how an individual grid item is aligned along its inline axis.

Use the `v-just-self-*` utilities to control the justify-self of an element.
You can use <br /> the [`feat: custom`](/docs/Core-Features/V-custom.md) feature if you want the justify-self to suit your needs.

## Table list justify-self

| Class name  | Properties |
|---------------------|-------------------|
| `v-just-self-auto			`      | `justify-self: auto;` | 
| `v-just-self-center			`      | `justify-self: center;` | 
| `v-just-self-start			`      | `justify-self: start;` | 
| `v-just-self-end			`      | `justify-self: end;` | 
| `v-just-self-stretch			`      | `justify-self: stretch;` | 

The table above presents several types of justify-selfs with different variants.

## Example Code
``` jsx title="index.html"
<div class="v-d-flex v-just-self-center">
    <div> 1 </div> <div> 2 </div> <div> 3 </div>
</div>
```
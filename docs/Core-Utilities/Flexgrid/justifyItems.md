---
sidebar_position: 4
title:  "JustifyItems"
---

import {AiMagicIcon} from 'hugeicons-react';

# Class-justify-items <AiMagicIcon className='icon' />

aligns grid items along the row (inline) axis.

Use the `v-just-items-*` utilities to control the justify-items of an element.
You can use <br /> the [`feat: custom`](/docs/Core-Features/V-custom.md) feature if you want the justify-items to suit your needs.

## Table list justify-items

| Class name  | Properties |
|---------------------|-------------------|
| `v-just-items-auto			`      | `justify-items: auto;` | 
| `v-just-items-center			`      | `justify-items: center;` | 
| `v-just-items-start			`      | `justify-items: start;` | 
| `v-just-items-end			`      | `justify-items: end;` | 
| `v-just-items-flex-start			`      | `justify-items: flex-start;` | 
| `v-just-items-flex-end			`      | `justify-items: flex-end;` | 

The table above presents several types of justify-items with different variants.

## Example Code
``` jsx title="index.html"
<div class="v-d-flex v-just-items-center">
    <div> 1 </div> <div> 2 </div> <div> 3 </div>
</div>
```
---
sidebar_position: 5
title:  "AlignItems"
---

import {AiMagicIcon} from 'hugeicons-react';

# Class-align-items <AiMagicIcon className='icon' />

aligns grid items along the row (inline) axis.

Use the `v-items-*` utilities to control the align-items of an element.
You can use <br /> the [`feat: custom`](/docs/Core-Features/V-custom.md) feature if you want the align-items to suit your needs.

## Table list align-items

| Class name  | Properties |
|---------------------|-------------------|
| `v-items-center			`      | `align-items: center;` | 
| `v-items-start			`      | `align-items: start;` | 
| `v-items-end			`      | `align-items: end;` | 
| `v-items-stretch			`      | `align-items: stretch;` | 
| `v-items-baseline			`      | `align-items: baseline;` | 

The table above presents several types of align-items with different variants.

## Example Code
``` jsx title="index.html"
<div class="v-d-flex v-items-center">
    <div> 1 </div> <div> 2 </div> <div> 3 </div>
</div>
```
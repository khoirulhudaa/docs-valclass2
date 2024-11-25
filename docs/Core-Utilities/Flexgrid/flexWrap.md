---
sidebar_position: 8
title:  "FlexWrap"
---

import {AiMagicIcon} from 'hugeicons-react';

# Class-flex-wrap <AiMagicIcon className='icon' />

Utilities for controlling how an individual grid item is aligned along its inline axis.

Use the `v-wrap-*` utilities to control the flex-wrap of an element.
You can use <br /> the [`feat: custom`](/docs/Core-Features/V-custom.md) feature if you want the flex-wrap to suit your needs.

## Table list flex-wraps    

| Class name  | Properties |
|---------------------|-------------------|
| `v-wrap-wrap			`      | `flex-wrap: wrap;` | 
| `v-wrap-wrap-reverse			`      | `flex-wrap: wrap-reverse;` | 
| `v-wrap-nowrap			`      | `flex-wrap: nowrap;` | 

The table above presents several types of flex-wraps with different variants.

## Example Code
``` jsx title="index.html"
<div class="v-d-flex v-wrap-wrap">
    <div> 1 </div> <div> 2 </div> <div> 3 </div>
</div>
```
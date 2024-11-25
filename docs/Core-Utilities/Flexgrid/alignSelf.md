---
sidebar_position: 12
title:  "AlignSelf"
---

import {AiMagicIcon} from 'hugeicons-react';

# Class-align-self <AiMagicIcon className='icon' />

Utilities for controlling the duration of CSS align-selfs.

Use the `v-self-*` utilities to control the align-self of an element.
You can use <br /> the [`feat: custom`](/docs/Core-Features/V-custom.md) feature if you want the align-self to suit your needs.

## Table list align-selfs

| Class name  | Properties |
|---------------------|-------------------|
| `v-self-auto			`      | `align-self: auto;` | 
| `v-self-center			`      | `align-self: center;` | 
| `v-self-start			`      | `align-self: start;` | 
| `v-self-end			`      | `align-self: end;` | 
| `v-self-stretch			`      | `align-self: stretch;` | 

The table above presents several types of align-selfs with different variants.

## Example Code
``` jsx title="index.html"
<div class="v-d-flex v-self-center">
    <div> 1 </div> <div> 2 </div> <div> 3 </div>
</div>
```
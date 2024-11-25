---
sidebar_position: 2
title:  "AlignContent"
---

import {AiMagicIcon} from 'hugeicons-react';

# Class-align-content <AiMagicIcon className='icon' />

Utilities for controlling how flex and grid items are positioned along a container's main axis.

Use the `v-content-*` utilities to control the align-content of an element.
You can use <br /> the [`feat: custom`](/docs/Core-Features/V-custom.md) feature if you want the align-content to suit your needs.

## Table list align-contents

| Class name  | Properties |
|---------------------|-------------------|
| `v-content-center			`      | `align-content: center;` | 
| `v-content-between		`      | `align-content: space-between;` | 
| `v-content-around			`      | `align-content: space-around;` | 
| `v-content-evenly			`      | `align-content: space-evenly;` | 
| `v-content-start			`      | `align-content: space-start;` | 
| `v-content-end			`      | `align-content: space-end;` | 

The table above presents several types of align-contents with different variants.

## Example Code
``` jsx title="index.html"
<div class="v-d-flex v-content-center">
    <div> 1 </div> <div> 2 </div> <div> 3 </div>
</div>
```
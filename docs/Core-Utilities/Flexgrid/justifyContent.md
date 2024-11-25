---
sidebar_position: 1
title:  "JustifyContent"
---

import {AiMagicIcon} from 'hugeicons-react';

# Class-justify-content <AiMagicIcon className='icon' />

Utilities for controlling how flex and grid items are positioned along a container's main axis.

Use the `v-justify-*` utilities to control the justify-content of an element.
You can use <br /> the [`feat: custom`](/docs/Core-Features/V-custom.md) feature if you want the justify-content to suit your needs.

## Table list justify-contents

| Class name  | Properties |
|---------------------|-------------------|
| `v-justify-center			`      | `justify-content: center;` | 
| `v-justify-left			`      | `justify-content: left;` | 
| `v-justify-right			`      | `justify-content: right;` | 
| `v-justify-between		`      | `justify-content: between;` | 
| `v-justify-around			`      | `justify-content: around;` | 
| `v-justify-evenly			`      | `justify-content: evenly;` | 
| `v-justify-safe			`      | `justify-content: safe;` | 
| `v-justify-unsafe			`      | `justify-content: unsafe;` | 
| `v-justify-start			`      | `justify-content: start;` | 
| `v-justify-end			`      | `justify-content: end;` | 
| `v-justify-flex-start		`      | `justify-content: flex-start;` | 
| `v-justify-flex-end		`      | `justify-content: flex-end;` | 
| `v-justify-stretch		`      | `justify-content: stretch;` | 
| `v-justify-last-baseline	`      | `justify-content: last-baseline;` | 

The table above presents several types of justify-contents with different variants.

## Example Code
``` jsx title="index.html"
<div class="v-d-flex v-justify-center">
    <div> 1 </div> <div> 2 </div> <div> 3 </div>
</div>
```
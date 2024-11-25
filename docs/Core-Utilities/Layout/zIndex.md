---
sidebar_index: 1
title:  "Z-Index"
---

import {AiMagicIcon} from 'hugeicons-react';

# Class-zIndex <AiMagicIcon className='icon' />

Utilities for controlling the stack order of an element.

Use the `v-index-*` utilities to control the index of an element.
You can use <br /> the [`feat: custom`](/docs/Core-Features/V-custom.md) feature if you want the index to suit your needs.

## Table list zIndexs

| Class name  | Properties |
|---------------------|-------------------|
| `v-index--1			`      | `z-index: -1;` | 
| `v-index--2			`      | `z-index: -2;` | 
| `v-index--3			`      | `z-index: -3;` | 
| `v-index--4			`      | `z-index: -4;` | 
| `v-index-0			`      | `z-index: 0;` | 
| `v-index-1			`      | `z-index: 1;` | 
| `v-index-2			`      | `z-index: 2;` | 
| `v-index-3			`      | `z-index: 3;` | 
| `v-index-4			`      | `z-index: 4;` | 

The table above presents several types of zIndexs with different variants.

## Example Code
``` jsx title="index.html"	
<div>
    <div class="v-index-1"> 
    
    </div>
    <div class="v-index-2"> 
    
    </div>
</div>
```
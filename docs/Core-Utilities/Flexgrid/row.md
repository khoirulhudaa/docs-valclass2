---
sidebar_position: 16
title:  "Row"
---

import {AiMagicIcon} from 'hugeicons-react';

# Class-row <AiMagicIcon className='icon' />

Utilities for controlling how row items both grow and shrink.

Use the `v-row-*` utilities to control the row of an element.
You can use <br /> the [`feat: custom`](/docs/Core-Features/V-custom.md) feature if you want the row to suit your needs.

## Table list rows

| Class name  | Properties |
|---------------------|-------------------|
| `v-row-1			`      | `grid-template-columns: auto;` | 
| `v-row-2			`      | `grid-template-columns: auto auto;` | 
| `v-row-3			`      | `grid-template-columns: auto auto auto;` | 
| `v-row-4			`      | `grid-template-columns: auto auto auto auto;` | 

The table above presents several types of rows with different variants.

## Example Code
``` jsx title="index.html"
<div class="v-d-grid v-row-2">
    <div> 1 </div> <div> 2 /div>
</div>
```
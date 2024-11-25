---
sidebar_position: 14
title:  "Column"
---

import {AiMagicIcon} from 'hugeicons-react';

# Class-column <AiMagicIcon className='icon' />

Create a column to divide the elements.

Use the `v-col-*` utilities to control the column of an element.
You can use <br /> the [`feat: custom`](/docs/Core-Features/V-custom.md) feature if you want the column to suit your needs.

## Table list column

| Class name  | Properties |
|---------------------|-------------------|
| `v-col-1			`      | `column-count: 1;` | 
| `v-col-2			`      | `column-count: 2; padding: 10px;` | 
| `v-col-3			`      | `column-count: 3; padding: 10px;` | 
| `v-col-4			`      | `column-count: 4; padding: 10px;` | 

The table above presents several types of columns with different variants.

## Example Code
``` jsx title="index.html"
<div>
    <div class="v-col-2">
        Lorem ipsum dolor sit amet consectetur 
        Delectus, debitis cumque excepturi autem 
        laboriosam similique ab nostrum sapiente 
        Odit magni saepe in? Ea, atque.

        Lorem ipsum dolor sit amet consectetur 
        Delectus, debitis cumque excepturi autem 
        laboriosam similique ab nostrum sapiente  
        Odit magni saepe in? Ea, atque.
    </div>
</div>
```
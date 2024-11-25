---
sidebar_position: 3
title:  "FlexDirection"
---

import {AiMagicIcon} from 'hugeicons-react';

# Class-flex-direction <AiMagicIcon className='icon' />

Arrange each element in order.

Use the `v-direction-*` utilities to control the flex-direction of an element.
You can use <br /> the [`feat: custom`](/docs/Core-Features/V-custom.md) feature if you want the flex-direction to suit your needs.

## Table list flex-directions

| Class name  | Properties |
|---------------------|-------------------|
| `v-direction-column			`      | `flex-direction: column;` | 
| `v-direction-row			`      | `flex-direction: row;` | 
| `v-direction-column-reverse			`      | `flex-direction: column-reverse;` | 
| `v-direction-row-reverse		`      | `flex-direction: row-reverse;` | 

The table above presents several types of flex-directions with different variants.

## Example Code
``` jsx title="index.html"
<div class="v-d-flex v-direction-column">
    <div> 1 </div> <div> 2 </div> <div> 3 </div>
</div>
```
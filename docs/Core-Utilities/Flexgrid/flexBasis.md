---
sidebar_position: 13
title:  "FlexBasis"
---

import {AiMagicIcon} from 'hugeicons-react';

# Class-flex-basis <AiMagicIcon className='icon' />

Adjust the width with the flex system.

Use the `v-basis-*` utilities to control the flex-basis of an element.
You can use <br /> the [`feat: custom`](/docs/Core-Features/V-custom.md) feature if you want the flex-basis to suit your needs.

## Table list flex-basis

| Class name  | Properties |
|---------------------|-------------------|
| `v-basis-1			`      | `flex-basis: 1;` | 
| `v-basis-2			`      | `flex-basis: 2;` | 
| `v-basis-3			`      | `flex-basis: 3;` | 
| `v-basis-4			`      | `flex-basis: 4;` | 

The table above presents several types of flex-basiss with different variants.

## Example Code
``` jsx title="index.html"
<div>
    <div class="v-d-flex v-basis-2">
            basis-2
    </div>
    <div class="v-d-flex v-basis-1">
            basis-1
    </div>
    <div class="v-d-flex v-basis-2">
            basis-2
    </div>
    <div class="v-d-flex v-basis-1">
            basis-1
    </div>
</div>
```
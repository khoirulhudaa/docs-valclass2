---
sidebar_position: 3
title:  "BorderColor"
---

import {AiMagicIcon} from 'hugeicons-react';

# Class-border-color <AiMagicIcon className='icon' />

Utilities for controlling the color of an element's borders.

Use the `v-m/mt/ml/mr/mb-*` utilities to control the h of an element.
You can use <br /> the [`feat: custom`](/docs/Core-Features/V-custom.md) feature if you want the h border-color to suit your needs.

## Table list border-colors

| Name class   | Properties   |
|---------------------------|---------------------------------------|
| `v-border-clr-dark`       | `border-color: rgb(70, 70, 70);`      |
| `v-border-clr-light`      | `border-color: rgb(238, 238, 238);`   |
| `v-border-clr-danger`     | `border-color: rgb(255, 76, 44);`     |
| `v-border-clr-info`       | `border-color: rgb(2, 168, 245);`     |
| `v-border-clr-primary`    | `border-color: rgb(42, 131, 248);`    |
| `v-border-clr-smooth`     | `border-color: rgb(255, 242, 242);`   |
| `v-border-clr-transparent`| `border-color: transparent;`         |
| `v-border-clr-secondary`  | `border-color: rgb(141, 141, 141);`   |
| `v-border-clr-warning`    | `border-color: rgb(253, 207, 0);`     |
| `v-border-clr-green`      | `border-color: rgb(14, 253, 201);`    |


The table above presents several types of border-colors with different variants.

## Example Code
``` jsx title="h.html"	
<div>
    <div class="v-borderr-clr-dark">
    </div>
    <div class="v-borderr-clr-danger">
    </div>
    <div class="v-borderr-clr-primary">
    </div>
    <div class="v-borderr-clr-warning">
    </div>
    <div class="v-borderr-clr-green">
    </div>
</div>
```
---
sidebar_position: 2
title:  "BorderRadius"
---

import {AiMagicIcon} from 'hugeicons-react';

# Class-border-radius <AiMagicIcon className='icon' />

Utilities for controlling the border radius of an element.

Use the `v-radius-*` utilities to control the h of an element.
You can use <br /> the [`feat: custom`](/docs/Core-Features/V-custom.md) feature if you want the h border-radius to suit your needs.

## Table list border-radius

| Name class   | Properties   |
|------------------|-----------------------------|
| `v-radius-sm`    | `border-radius: 5px;`       |
| `v-radius-md`    | `border-radius: 10px;`      |
| `v-radius-lg`    | `border-radius: 15px;`      |
| `v-radius-xl`    | `border-radius: 20px;`      |
| `v-radius-full`  | `border-radius: 99999px;`   |

The table above presents several types of border-radius with different variants.

## Example Code
``` jsx title="h.html"	
<div>
    <div class="v-radius-sm">
    </div>
    <div class="v-radius-md">
    </div>
    <div class="v-radius-lg">
    </div>
    <div class="v-radius-xl">
    </div>
    <div class="v-radius-full">
    </div>
</div>
```
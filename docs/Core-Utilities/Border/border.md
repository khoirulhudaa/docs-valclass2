---
sidebar_position: 5
title:  "Border"
---

import {AiMagicIcon} from 'hugeicons-react';

# Class-border <AiMagicIcon className='icon' />

Utilities for setting the border of an element.

Use the `v-border-*` utilities to control the h of an element.
You can use <br /> the [`feat: custom`](/docs/Core-Features/V-custom.md) feature if you want the h border to suit your needs.

## Table list borders

| Name class   | Properties       |
|------------------|----------------------|
| `v-border-1`     | `border: 1px;`       |
| `v-border-2`     | `border: 2px;`       |
| `v-border-3`     | `border: 3px;`       |
| `v-border-4`     | `border: 4px;`       |
| `v-border-t-1`   | `border-top: 1px;`   |
| `v-border-t-2`   | `border-top: 2px;`   |
| `v-border-t-3`   | `border-top: 3px;`   |
| `v-border-t-4`   | `border-top: 4px;`   |
| `v-border-l-1`   | `border-left: 1px;`  |
| `v-border-l-2`   | `border-left: 2px;`  |
| `v-border-l-3`   | `border-left: 3px;`  |
| `v-border-l-4`   | `border-left: 4px;`  |
| `v-border-r-1`   | `border-right: 1px;` |
| `v-border-r-2`   | `border-right: 2px;` |
| `v-border-r-3`   | `border-right: 3px;` |
| `v-border-r-4`   | `border-right: 4px;` |
| `v-border-b-1`   | `border-bottom: 1px;`|
| `v-border-b-2`   | `border-bottom: 2px;`|
| `v-border-b-3`   | `border-bottom: 3px;`|
| `v-border-b-4`   | `border-bottom: 4px;`|

The table above presents several types of borders with different variants.

## Example Code
``` jsx title="h.html"	
<div>
    <div class="v-border-1"> 
    </div>
    <div class="v-border-2"> 
    </div>
    <div class="v-border-3"> 
    </div>
    <div class="v-border-4"> 
    </div>
</div>

```
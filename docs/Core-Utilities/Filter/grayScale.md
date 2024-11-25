---
sidebar_position: 6
title:  "grayScale"
---

import {AiMagicIcon} from 'hugeicons-react';

# Class-grayscale <AiMagicIcon className='icon' />

Utility to grayscale an element.

Use the `v-grayscale-*` utilities to control the grayscale of an element.
You can use <br /> the [`feat: custom`](/docs/Core-Features/V-custom.md) feature if you want the grayscale to suit your needs.

## Table list grayscales

| Class name  | Properties |
|---------------------|-----------------------------|
| `v-grayscale-0`    | `filter: grayscale(0%);`   |
| `v-grayscale-1`    | `filter: grayscale(20%);`  |
| `v-grayscale-2`    | `filter: grayscale(40%);`  |
| `v-grayscale-3`    | `filter: grayscale(60%);`  |
| `v-grayscale-4`    | `filter: grayscale(80%);`  |
| `v-grayscale-full` | `filter: grayscale(100%);` |

The table above presents several types of grayscales with different variants.

## Example Code
``` jsx title="index.html"
<div>
    <div class="v-grayscale-0"> 
    
    </div>
    <div class="v-grayscale-1"> 
    
    </div>
    <div class="v-grayscale-2"> 
    
    </div>
    <div class="v-grayscale-3"> 
    
    </div>
    <div class="v-grayscale-4"> 
    
    </div>
    <div class="v-grayscale-full"> 
    
    </div>
</div>
```
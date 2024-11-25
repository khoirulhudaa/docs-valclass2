---
sidebar_position: 4
title:  "Saturate"
---

import {AiMagicIcon} from 'hugeicons-react';

# Class-saturate <AiMagicIcon className='icon' />

Utility to saturate an element.

Use the `v-saturate-*` utilities to control the saturate of an element.
You can use <br /> the [`feat: custom`](/docs/Core-Features/V-custom.md) feature if you want the saturate to suit your needs.

## Table list saturates

| Class name  | Properties |
|---------------------|-----------------------------|
| `v-saturate-0`    | `filter: saturate(0%);`   |
| `v-saturate-1`    | `filter: saturate(20%);`  |
| `v-saturate-2`    | `filter: saturate(40%);`  |
| `v-saturate-3`    | `filter: saturate(60%);`  |
| `v-saturate-4`    | `filter: saturate(80%);`  |
| `v-saturate-full` | `filter: saturate(100%);` |

The table above presents several types of saturates with different variants.

## Example Code
``` jsx title="index.html"
<div>
    <div class="v-saturate-0"> 
    
    </div>
    <div class="v-saturate-1"> 
    
    </div>
    <div class="v-saturate-2"> 
    
    </div>
    <div class="v-saturate-3"> 
    
    </div>
    <div class="v-saturate-4"> 
    
    </div>
    <div class="v-saturate-full"> 
    
    </div>
</div>
```
---
sidebar_position: 3
title:  "Contrast"
---

import {AiMagicIcon} from 'hugeicons-react';

# Class-contrast <AiMagicIcon className='icon' />

Utility to contrast an element.

Use the `v-contrast-*` utilities to control the contrast of an element.
You can use <br /> the [`feat: custom`](/docs/Core-Features/V-custom.md) feature if you want the contrast to suit your needs.

## Table list contrasts

| Class name  | Properties |
|---------------------|-----------------------------|
| `v-contrast-0`    | `filter: contrast(0%);`   |
| `v-contrast-1`    | `filter: contrast(20%);`  |
| `v-contrast-2`    | `filter: contrast(40%);`  |
| `v-contrast-3`    | `filter: contrast(60%);`  |
| `v-contrast-4`    | `filter: contrast(80%);`  |
| `v-contrast-full` | `filter: contrast(100%);` |

The table above presents several types of contrasts with different variants.

## Example Code
``` jsx title="index.html"
<div>
    <div class="v-contrast-0"> 
    
    </div>
    <div class="v-contrast-1"> 
    
    </div>
    <div class="v-contrast-2"> 
    
    </div>
    <div class="v-contrast-3"> 
    
    </div>
    <div class="v-contrast-4"> 
    
    </div>
    <div class="v-contrast-full"> 
    
    </div>
</div>
```
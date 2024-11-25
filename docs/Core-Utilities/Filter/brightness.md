---
sidebar_position: 1
title:  "Brightness"
---

import {AiMagicIcon} from 'hugeicons-react';

# Class-brightness <AiMagicIcon className='icon' />

Utility to brightness an element.

Use the `v-brightness-*` utilities to control the brightness of an element.
You can use <br /> the [`feat: custom`](/docs/Core-Features/V-custom.md) feature if you want the brightness to suit your needs.

## Table list brightnesses

| Class name  | Properties |
|---------------------|-----------------------------|
| `v-brightness-0`    | `filter: brightness(0%);`   |
| `v-brightness-1`    | `filter: brightness(20%);`  |
| `v-brightness-2`    | `filter: brightness(40%);`  |
| `v-brightness-3`    | `filter: brightness(60%);`  |
| `v-brightness-4`    | `filter: brightness(80%);`  |
| `v-brightness-full` | `filter: brightness(100%);` |

The table above presents several types of brightnesses with different variants.

## Example Code
``` jsx title="index.html"
<div>
    <div class="v-brightness-0"> 
    
    </div>
    <div class="v-brightness-1"> 
    
    </div>
    <div class="v-brightness-2"> 
    
    </div>
    <div class="v-brightness-3"> 
    
    </div>
    <div class="v-brightness-4"> 
    
    </div>
    <div class="v-brightness-full"> 
    
    </div>
</div>
```
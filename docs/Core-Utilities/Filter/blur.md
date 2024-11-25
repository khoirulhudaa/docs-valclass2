---
sidebar_position: 5
title:  "Blur"
---

import {AiMagicIcon} from 'hugeicons-react';

# Class-blur <AiMagicIcon className='icon' />

Utilities to blur elements.

Use the `v-blur-*` utilities to control the blur of an element.
You can use <br /> the [`feat: custom`](/docs/Core-Features/V-custom.md) feature if you want the blur to suit your needs.

## Table list blurs

| Class name  | Properties |
|--------------------|---------------------------|
| `v-blur-0`         | `filter: blur(0px);`      |
| `v-blur-1`         | `filter: blur(2px);`      |
| `v-blur-2`         | `filter: blur(4px);`      |
| `v-blur-3`         | `filter: blur(6px);`      |
| `v-blur-4`         | `filter: blur(8px);`      |
| `v-blur-full`      | `filter: blur(10px);`     |


The table above presents several types of blurs with different variants.

## Example Code
``` jsx title="index.html"
<div>
    <div class="v-blur-0"> 
    
    </div>
    <div class="v-blur-1"> 
    
    </div>
    <div class="v-blur-2"> 
    
    </div>
    <div class="v-blur-3"> 
    
    </div>
    <div class="v-blur-4"> 
    
    </div>
    <div class="v-blur-full"> 
    
    </div>
</div>
```
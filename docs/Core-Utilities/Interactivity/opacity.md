---
sidebar_position: 5
title:  "Opacity"
---

import {AiMagicIcon} from 'hugeicons-react';

# Class-opacity <AiMagicIcon className='icon' />

Utilities for controlling the duration of CSS opacitys.

Use the `v-opacity-*` utilities to control the opacity of an element.
You can use <br /> the [`feat: custom`](/docs/Core-Features/V-custom.md) feature if you want the opacity to suit your needs.

## Table list opacities

| Class name  | Properties |
|---------------------|-------------------|
| `v-opacity-0			`      | `opacity: 0%;` | 
| `v-opacity-1			`      | `opacity: 25%;` | 
| `v-opacity-2			`      | `opacity: 50%;` | 
| `v-opacity-3			`      | `opacity: 75%;` | 
| `v-opacity-4			`      | `opacity: 100%;` | 

The table above presents several types of opacities with different variants.

## Example Code
``` jsx title="index.html"
<div>
    <div class="v-opacity-0"> 
    </div>
    <div class="v-opacity-1"> 
    </div>
    <div class="v-opacity-2"> 
    </div>
    <div class="v-opacity-3"> 
    </div>
    <div class="v-opacity-4"> 
    </div>
</div>
```
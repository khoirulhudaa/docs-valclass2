---
sidebar_position: 4
title:  "Skew"
---

import {AiMagicIcon} from 'hugeicons-react';

# Class-skew <AiMagicIcon className='icon' />

Utilities for rotating elements with transform.

Use the `v-skew-*` utilities to control the skew of an element.
You can use <br /> the [`feat: custom`](/docs/Core-Features/V-custom.md) feature if you want the skew to suit your needs.

## Table list skews

| Class name  | Properties |
|---------------------|-------------------|
| `v-skew-1			`      | `transform: skew(5deg);` | 
| `v-skew-2			`      | `transform: skew(10deg);` | 
| `v-skew-3			`      | `transform: skew(15deg);` | 
| `v-skew-4			`      | `transform: skew(20deg);` | 
| `-v-skew-1			`      | `transform: skew(-5deg);` | 
| `-v-skew-2			`      | `transform: skew(-10deg);` | 
| `-v-skew-3			`      | `transform: skew(-15deg);` | 
| `-v-skew-4			`      | `transform: skew(-20deg);` | 

The table above presents several types of skews with different variants.

## Example Code
``` jsx title="index.html"		
<div class="v-skew-1">
</div>
<div class="v-skew-2">
</div>
<div class="v-skew-3">
</div>
<div class="v-skew-4">
</div>
<div class="-v-skew-1">
</div>
```
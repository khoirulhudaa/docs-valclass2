---
sidebar_position: 2
title:  "Rotate"
---

import {AiMagicIcon} from 'hugeicons-react';

# Class-rotate <AiMagicIcon className='icon' />

Utilities for rotating elements with transform.

Use the `v-rotate-*` utilities to control the rotate of an element.
You can use <br /> the [`feat: custom`](/docs/Core-Features/V-custom.md) feature if you want the rotate to suit your needs.

## Table list rotates

| Class name  | Properties |
|---------------------|-------------------|
| `v-rotate-0			`      | `transform: rotate(0deg);` | 
| `v-rotate-30		`     | `transform: rotate(30deg);` | 
| `v-rotate-45		`     | `transform: rotate(45deg);` | 
| `v-rotate-90		`     | `transform: rotate(90deg);` | 
| `v-rotate-120		`     | `transform: rotate(120deg);` | 
| `v-rotate-180		`     | `transform: rotate(180deg);` | 
| `v-rotate-360		`     | `transform: rotate(360deg);` | 

The table above presents several types of rotates with different variants.

## Example Code
``` jsx title="index.html"		
<div class="v-rotate-0">
</div>
<div class="v-rotate-30">
</div>
<div class="v-rotate-45">
</div>
<div class="v-rotate-90">
</div>
<div class="v-rotate-120">
</div>
```
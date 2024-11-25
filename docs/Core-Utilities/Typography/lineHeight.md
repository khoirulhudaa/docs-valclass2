---
sidebar_position: 6
title:  "LineHeight"
---

import {AiMagicIcon} from 'hugeicons-react';

# Class-lineHeight <AiMagicIcon className='icon' />

Utilities for controlling the leading (line height) of an element.

Use the `v-leading-*` utilities to control the line height of an element.
You can use <br /> the [`feat: custom`](/docs/Core-Features/V-custom.md) feature if you want the line height to suit your needs.

## Table list heights

| Class name  | Properties |
|---------------------|-------------------|
| `v-leading-1		`      | `line-height: .75rem;` | 
| `v-leading-2		`     | `line-height: 1rem;` | 
| `v-leading-3		`     | `line-height: 1.25rem;` | 
| `v-leading-4			`     | `line-height: 1.5rem;` | 
| `v-leading-none			`     | `line-height: 1;` | 
| `v-leading-tight			`     | `line-height: 1.25;` | 
| `v-leading-snug			`     | `line-height: 1.375 ;` | 
| `v-leading-normal		`     | `line-height: 1.5 ;` | 
| `v-leading-relaxed			`     | `line-height: 1.625 ;` | 
| `v-leading-loose			`     | `line-height: 2 ;` | 

The table above presents several types of line heights with different variants.

## Example Code
``` jsx title="index.html"
<div>
    <span class="v-font-lg v-leading-1"> 
            Lorem, ipsum dolor sit amet consectetur. 
            Minus dolor sit minima necessitatibus 
    <span class="v-font-lg v-leading-none"> 
            Lorem, ipsum dolor sit amet consectetur. 
            Minus dolor sit minima necessitatibus 
    </span>
    <span class="v-font-lg v-leading-tight"> 
            Lorem, ipsum dolor sit amet consectetur. 
            Minus dolor sit minima necessitatibus 
    </span>
</div>
```
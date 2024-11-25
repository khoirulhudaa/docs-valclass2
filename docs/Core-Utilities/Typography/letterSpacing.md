---
sidebar_position: 3
title:  "LetterSpacing"
---

import {AiMagicIcon} from 'hugeicons-react';

# Class-leterSpacing <AiMagicIcon className='icon' />

Utilities for controlling the tracking (letter spacing) of an element.

Use the `v-let-spacing-*` utilities to control the letter spacing of an element.
You can use <br /> the [`feat: custom`](/docs/Core-Features/V-custom.md) feature if you want the letter spacing to suit your needs.

## Table list letters

| Class name  | Properties |
|---------------------|-------------------|
| `v-let-spacing-normal		`      | `letter-spacing: normal;` | 
| `v-let-spacing-1		`     | `letter-spacing: 10px;` | 
| `v-let-spacing-2		`     | `letter-spacing: 20px;` | 
| `v-let-spacing-3			`     | `letter-spacing: 30px;` | 
| `v-let-spacing-4			`     | `letter-spacing: 40px;` | 

The table above presents several types of letter spacings with different variants.

## Example Code
``` jsx title="index.html"
<div>
    <span class="v-font-lg v-let-spacing-normal"> 
        spacing 
    </span>
    <span class="v-font-lg v-let-spacing-1"> 
        spacing 
    </span>
    <span class="v-font-lg v-let-spacing-2"> 
        spacing 
    </span>
    <span class="v-font-lg v-let-spacing-3"> 
        spacing 
    </span>
    <span class="v-font-lg v-let-spacing-4"> 
        spacing 
    </span>
</div>
```
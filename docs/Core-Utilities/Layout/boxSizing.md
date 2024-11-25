---
sidebar_position: 1
title:  "BoxSizing"
---

import {AiMagicIcon} from 'hugeicons-react';

# Class-box-sizing <AiMagicIcon className='icon' />

Utilities for controlling how the browser should calculate an element's total size.

Use the `v-box-*` utilities to control the box-sizing of an element.
You can use <br /> the [`feat: custom`](/docs/Core-Features/V-custom.md) feature if you want the box-sizing to suit your needs.

## Table list box-sizings

| Class name  | Properties |
|---------------------|-------------------|
| `v-box-border			`      | `box-sizing: border-box;` | 
| `v-box-content			`      | `box-sizing: content-box;` | 

The table above presents several types of box-sizings with different variants.

## Example Code
``` jsx title="index.html"
<div class="v-border-box">
    box-sizing
</div>  
```
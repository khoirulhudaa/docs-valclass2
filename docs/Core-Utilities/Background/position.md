---
sidebar_position: 2
title:  "BgPosition"
---

import {AiMagicIcon} from 'hugeicons-react';

# Class-position <AiMagicIcon className='icon' />

Utilities for controlling how a background image behaves when scrolling.

Use the `v-bg-post-*` utilities to control the position of an element.
You can use <br /> the [`feat: custom`](/docs/Core-Features/V-custom.md) feature if you want the background position to suit your needs.

## Table list positions

| Class name  | Properties |
|---------------------|-------------------|
| `v-bg-center		`      | `background-position: center;` | 
| `v-bg-top	`     | `background-position: top;` | 
| `v-bg-left	`     | `background-position: left;` | 
| `v-bg-right`     | `background-position: right;` | 
| `v-bg-bottom`     | `background-position: bottom;` | 
| `v-bg--1`     | `background-position: -20%;` | 
| `v-bg--2`     | `background-position: -40%;` | 
| `v-bg--3`     | `background-position: -60%;` | 
| `v-bg--4`     | `background-position: -80%;` | 
| `v-bg--full`     | `background-position: -100%;` | 
| `v-bg-1`     | `background-position: 20%;` | 
| `v-bg-2`     | `background-position: 40%;` | 
| `v-bg-3`     | `background-position: 60%;` | 
| `v-bg-4`     | `background-position: 80%;` | 
| `v-bg-full`     | `background-position: 100%;` | 

The table above presents several types of positions with different variants.

## Example Code
``` jsx title="index.html"
<div>
    <span  class="v-bg-center">
        bg-position
    </span>
    <span  class="v-bg-top">
        bg-position 
    </span>
    <span  class="v-bg-left">
        bg-position 
    </span>
    <span  class="v-bg-right">
        bg-position 
    </span>
    <span  class="v-bg-bottom">
        bg-position 
    </span>
</div>
```
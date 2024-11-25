---
sidebar_position: 1
title:  "Overflow"
---

import {AiMagicIcon} from 'hugeicons-react';

# Class-overflow <AiMagicIcon className='icon' />

Utilities for controlling how the browser should calculate an element's total size.

Use the `v-overflow-*` utilities to control the overflow of an element.
You can use <br /> the [`feat: custom`](/docs/Core-Features/V-custom.md) feature if you want the overflow to suit your needs.

## Table list overflows

| Class name  | Properties |
|---------------------|-------------------|
| `v-overflow-hidden			`      | `overflow: hidden;` | 
| `v-overflow-scroll			`      | `overflow: scroll;` | 
| `v-overflow-auto			`      | `overflow: auto;` | 
| `v-overflow-visible			`      | `overflow: visible;` | 
| `v-overflowX-hidden			`      | `overflow-x: hidden;` | 
| `v-overflowX-scroll			`      | `overflow-x: scroll;` | 
| `v-overflowX-auto			`      | `overflow-x: auto;` | 
| `v-overflowX-visible			`      | `overflow-x: visible;` | 
| `v-overflowY-hidden			`      | `overflow-y: hidden;` | 
| `v-overflowY-scroll			`      | `overflow-y: scroll;` | 
| `v-overflowY-auto			`      | `overflow-y: auto;` | 
| `v-overflowY-visible			`      | `overflow-y: visible;` | 
| `v-overflowY-break-word			`      | `overflow: break-word;` | 
| `v-overflowY-normal			`      | `overflow: normal;` | 
| `v-overflowY-moz-unscrollable			`      | `overflow: moz-unscrollable;` | 

The table above presents several types of overflows with different variants.

## Example Code
``` jsx title="index.html"
<div class="v-overflow-auto">
    <p> 
        Lorem ipsum, dolor sit amet consectetur adipisicing. 
        Non, molestias ipsa officia eaque labore placeat rem, 
        illum dolores beatae ut laudantium eius! Atque omnis.
        Non, molestias ipsa officia eaque labore placeat rem, 
        illum dolores beatae ut laudantium eius! Atque omnis.
        Lorem ipsum, dolor sit amet consectetur adipisicing. 
    </p>
</div>
```
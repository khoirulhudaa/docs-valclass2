---
sidebar_position: 1
title:  "Position"
---

import {AiMagicIcon} from 'hugeicons-react';

# Class-position <AiMagicIcon className='icon' />

Utilities for controlling how an element is positioned in the DOM.

Use the `v-pst-*` utilities to control the position of an element.
You can use <br /> the [`feat: custom`](/docs/Core-Features/V-custom.md) feature if you want the position to suit your needs.

## Table list positions

| Class name  | Properties |
|---------------------|-------------------|
| `v-pst-relative			`      | `position: relative;` | 
| `v-pst-absolute			`      | `position: absolute;` | 
| `v-pst-fixed			`      | `position: fixed;` | 
| `v-pst-sticky			`      | `position: sticky;` | 
| `v-pst-static			`      | `position: static;` | 

The table above presents several types of positions with different variants.

## Example Code
``` jsx title="index.html"
<div class="v-absolute v-t-0 v-l-0"> 
</div>
```
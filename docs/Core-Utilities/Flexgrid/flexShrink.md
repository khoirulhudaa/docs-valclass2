---
sidebar_position: 6
title:  "FlexShrink"
---

import {AiMagicIcon} from 'hugeicons-react';

# Class-flex-shrink <AiMagicIcon className='icon' />

Utilities for controlling how flex items shrink.

Use the `v-shrink-*` utilities to control the flex-shrink of an element.
You can use <br /> the [`feat: custom`](/docs/Core-Features/V-custom.md) feature if you want the flex-shrink to suit your needs.

## Table list flex-shrinks

| Class name  | Properties |
|---------------------|-------------------|
| `v-shrink-1			`      | `flex-shrink: 1;` | 
| `v-shrink-2			`      | `flex-shrink: 2;` | 
| `v-shrink-3			`      | `flex-shrink: 3;` | 
| `v-shrink-4			`      | `flex-shrink: 4;` | 

The table above presents several types of flex-shrinks with different variants.

## Example Code
``` jsx title="index.html"
<div class="v-d-flex">
  // highlight-next-line
  <!-- If you're not using shrink, you can change it to flex-1 -->
  <div class="v-flex-none w-14 h-14 ...">
    01
  </div>
  <div class="shrink w-64 h-14 ...">
    02
  </div>
  // highlight-next-line
  <!-- If you're not using shrink, you can change it to flex-1 -->
  <div class="v-flex-none w-14 h-14 ...">
    03
  </div>
</div>
```
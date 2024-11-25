---
sidebar_position: 15
title:  "Flex"
---

import {AiMagicIcon} from 'hugeicons-react';

# Class-flex <AiMagicIcon className='icon' />

Utilities for controlling how flex items both grow and shrink.

Use the `v-flex-*` utilities to control the flex of an element.
You can use <br /> the [`feat: custom`](/docs/Core-Features/V-custom.md) feature if you want the flex to suit your needs.

## Table list flexs

| Class name  | Properties |
|---------------------|-------------------|
| `v-flex--1			`      | `flex: -1;` | 
| `v-flex--2			`      | `flex: -2;` | 
| `v-flex--3			`      | `flex: -3;` | 
| `v-flex--4			`      | `flex: -4;` | 
| `v-flex-1			`      | `flex: 1;` | 
| `v-flex-2			`      | `flex: 2;` | 
| `v-flex-3			`      | `flex: 3;` | 
| `v-flex-4			`      | `flex: 4;` | 
| `v-flex-auto			`      | `flex: auto;` | 
| `v-flex-content			`      | `flex: content;` | 
| `v-flex-none			`      | `flex: none;` | 

The table above presents several types of flexs with different variants.

## Example Code
``` jsx title="index.html"
<div>
    <div class="v-d-flex v-flex-1">
            flex-1
    </div>
    <div class="v-d-flex v-flex-2">
            flex-2
    </div>
    <div class="v-d-flex v-flex-1">
            flex-1
    </div>
</div>
```
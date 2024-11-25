---
sidebar_size: 6
title:  "BgSize"
---

import {AiMagicIcon} from 'hugeicons-react';

# Class-size <AiMagicIcon className='icon' />

Utilities for controlling the background size of an element's background image.

Use the `v-bg-sz-*` utilities to control the size of an element.
You can use <br /> the [`feat: custom`](/docs/Core-Features/V-custom.md) feature if you want the background size to suit your needs.

## Table list sizes

| Class name  | Properties |
|---------------------|-------------------|
| `v-bg-sz-auto			`      | `background-size: auto;` | 
| `v-bg-sz-contain		`     | `background-size: contain;` | 
| `v-bg-sz-cover		`     | `background-size: cover;` | 
| `v-bg-sz-0`     | `background-size: 0%;` | 
| `v-bg-sz--1`     | `background-size: -20%;` | 
| `v-bg-sz--2`     | `background-size: -40%;` | 
| `v-bg-sz--3`     | `background-size: -60%;` | 
| `v-bg-sz--4`     | `background-size: -80%;` | 
| `v-bg-sz--full`     | `background-size: -100%;` | 
| `v-bg-sz-1`     | `background-size: 20%;` | 
| `v-bg-sz-2`     | `background-size: 40%;` | 
| `v-bg-sz-3`     | `background-size: 60%;` | 
| `v-bg-sz-4`     | `background-size: 80%;` | 
| `v-bg-sz-full`     | `background-size: 100%;` | 

The table above presents several types of sizes with different variants.

## Example Code
``` jsx title="index.html"
<div>
    <span  class="v-bg-sz-cover" style="background-image('v.png')">
    </span>
</div>
```
---
sidebar_position: 12
title:  "ListStyle"
---

import {AiMagicIcon} from 'hugeicons-react';

# Class-listStyle <AiMagicIcon className='icon' />

utilities to remove dot symbol in li.

Use the `v-list-*` utilities to control the list style of an element.
You can use <br /> the [`feat: custom`](/docs/Core-Features/V-custom.md) feature if you want the list style to suit your needs.

## Table list styles

| Class name  | Properties |
|---------------------|-------------------|
| `v-list-none		`      | `list-style: none;` | 
| `v-list-square		`     | `list-style: square;` | 
| `v-list-circle		`     | `list-style: circle;` | 
| `v-list-desc			`     | `list-style: desc;` | 
| `v-list-decimal			`     | `list-style: decimal;` | 
| `v-list-armenian			`     | `list-style: armenian;` | 
| `v-list-georgian			`     | `list-style: georgian;` | 

The table above presents several types of list styles with different variants.

## Example Code
``` jsx title="index.html"
<ul class="v-list-none">
    <li> Home </li>
    <li> About </li>
    <li> Pricing </li>
</ul>
```
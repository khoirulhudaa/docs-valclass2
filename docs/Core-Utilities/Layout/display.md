---
sidebar_position: 1
title:  "Display"
---

import {AiMagicIcon} from 'hugeicons-react';

# Class-display <AiMagicIcon className='icon' />

Utilities for controlling how the browser should calculate an element's total size.

Use the `v-d-* or v-table-* or v-none` utilities to control the display of an element.
<br /> You can use the [`feat: custom`](/docs/Core-Features/V-custom.md) feature if you want the display to suit your needs.

## Table list displays

| Class name  | Properties |
|---------------------|-------------------|
| `v-d-flex			`      | `display: flex;` | 
| `v-d-block			`      | `display: block;` | 
| `v-d-grid			`      | `display: grid;` | 
| `v-d-flexbox			`      | `display: flexbox;` | 
| `v-d-inline-grid			`      | `display: inline-grid;` | 
| `v-d-inline-flex			`      | `display: inline-flex;` | 
| `v-d-inline-block			`      | `display: inline-block;` | 
| `v-d-inline			`      | `display: inline;` | 
| `v-d-table			`      | `display: table;` | 
| `v-d-inline-flexbox			`      | `display: inline-flexbox;` | 
| `v-d-inline-table			`      | `display: inline-table;` | 
| `v-d-table-column-group			`      | `display: table-column-group;` | 
| `v-d-table-footer-group			`      | `display: table-footer-group;` | 
| `v-d-table-header-group			`      | `display: table-header-group;` | 
| `v-d-table-row			`      | `display: table-row;` | 
| `v-table-cell			`      | `display: table-cell;` | 
| `v-table-column			`      | `display: content-box;` | 
| `v-none			`      | `display: none;` | 
| `v-d-flow-root				`      | `display: flow-root;` | 

The table above presents several types of displays with different variants.

## Example Code
``` jsx title="index.html"
<div class="v-d-flex">
    <div></div>
    <div></div>
    <div></div>
</div>
```
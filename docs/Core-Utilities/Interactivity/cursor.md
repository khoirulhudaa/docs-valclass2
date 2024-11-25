---
sidebar_position: 7
title:  "Cursor"
---

import {AiMagicIcon} from 'hugeicons-react';

# Class-cursor <AiMagicIcon className='icon' />

Utilities for controlling the cursor style when hovering over an element.

Use the `v-cursor-*` utilities to control the cursor of an element.
You can use <br /> the [`feat: custom`](/docs/Core-Features/V-custom.md) feature if you want the cursor to suit your needs.

## Table list cursors

| Class name  | Properties |
|---------------------|-------------------|
| `v-cursor-pointer			`      | `cursor: pointer;` | 
| `v-cursor-col-resize		`     | `cursor: col-resize;` | 
| `v-cursor-context-menu		`     | `cursor: context-menu;` | 
| `v-cursor-all-scroll		`     | `cursor: all-scroll;` | 
| `v-cursor-cell		`     | `cursor: cell;` | 
| `v-cursor-alias		`     | `cursor: alias;` | 
| `v-cursor-default		`     | `cursor: default;` | 
| `v-cursor-none		`     | `cursor: none;` | 
| `v-cursor-progress		`     | `cursor: progress;` | 

The table above presents several types of cursors with different variants.

## Example Code
``` jsx title="index.html"
<div>
    <div class="v-cursor-pointer">
    </div>
    <div class="v-cursor-all-scroll">
    </div>
    <div class="v-cursor-col-resize">
    </div>
    <div class="v-cursor-progree">
    </div>
</div>
```
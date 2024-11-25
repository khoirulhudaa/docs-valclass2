---
sidebar_position: 3
title:  "BgRepeat"
---

import {AiMagicIcon} from 'hugeicons-react';

# Class-repeat <AiMagicIcon className='icon' />

Utilities for controlling the position of an element's background image.

Use the `v-bg-rpt-*` utilities to control the repeat of an element.
You can use <br /> the [`feat: custom`](/docs/Core-Features/V-custom.md) feature if you want the background repeat to suit your needs.

## Table list repeats

| Class name  | Properties |
|---------------------|-------------------|
| `v-bg-rpt-repeat			`      | `background-repeat: repeat;` | 
| `v-bg-rpt-norepeat		`     | `background-repeat: norepeat;` | 

The table above presents several types of repeats with different variants.

## Example Code
``` jsx title="index.html"
<div>
    <span class="v-bg-rpt-repeat">
    </span>
</div>
```
---
sidebar_position: 5
title:  "BgClip"
---

import {AiMagicIcon} from 'hugeicons-react';

# Class-clip <AiMagicIcon className='icon' />

Utilities for controlling how a background image behaves when scrolling.

Use the `v-clip-*` utilities to control the clip of an element.
You can use <br /> the [`feat: custom`](/docs/Core-Features/V-custom.md) feature if you want the clip align to suit your needs.

## Table list clips

| Class name  | Properties |
|---------------------|-------------------|
| `v-bg-clip-border		`      | `background-clip: border-box;` | 
| `v-bg-clip-padding		`     | `background-clip: padding-box;` | 
| `v-bg-clip-content		`     | `background-clip: content-box;` | 
| `v-bg-clip-text		`     | `background-clip: text;` | 

The table above presents several types of clips with different variants.

## Example Code
``` jsx title="index.html"
<div>
    <spanclass="v-bg-clip-border"> 
            .bg-clip-border
    </span>
    <spanclass="v-bg-clip-padding"> 
            .bg-clip-padding
    </span>
    <spanclass="v-bg-clip-content"> 
            .bg-clip-border
    </span>
</div>
```
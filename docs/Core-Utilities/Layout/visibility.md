---
sidebar_visibility: 1
title:  "Visibility"
---

import {AiMagicIcon} from 'hugeicons-react';

# Class-visibility <AiMagicIcon className='icon' />

Utilities for controlling the visibility of an element.

Use the `v-visibility-*` utilities to control the visibility of an element.
You can use <br /> the [`feat: custom`](/docs/Core-Features/V-custom.md) feature if you want the visibility to suit your needs.

## Table list visibilities

| Class name  | Properties |
|---------------------|-------------------|
| `v-visibility-hidden			`      | `visibility: hidden;` | 
| `v-visibility-visible			`      | `visibility: visible;` | 
| `v-visibility-collapse			`      | `visibility: collapse;` | 

The table above presents several types of visibilities with different variants.

## Example Code
``` jsx title="index.html"	
<div>
    1
</div>
<div class="v-visibility-visible">
    2
</div>
<div>
    3
</div>
```
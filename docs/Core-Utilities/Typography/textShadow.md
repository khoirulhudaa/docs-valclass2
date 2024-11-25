---
sidebar_position: 4
title:  "TextShadow"
---

import {AiMagicIcon} from 'hugeicons-react';

# Class-textShadow <AiMagicIcon className='icon' />

Utilities for controlling the text color of an element.

Use the `v-text-shadow-*` utilities to control the text shadow of an element.
You can use <br /> the [`feat: custom`](/docs/Core-Features/V-custom.md) feature if you want the text shadow to suit your needs.

## Table list shadows

| Class name  | Properties |
|---------------------|-------------------|
| `v-text-shadow-sm		`      | `text-shadow: 2px 2px 2px rgb(199, 199, 199);` | 
| `v-text-shadow-md		`     | `text-shadow: 3px 3px 3px rgb(197, 197, 197);` | 
| `v-text-shadow-lg		`     | `text-shadow: 3.5px 3.5px 2px rgb(197, 197, 197);`| 
| `v-text-shadow-xl			`     | `text-shadow: 4px 4px 2px rgb(173, 173, 173);`| 

The table above presents several types of text shadows with different variants.

## Example Code
``` jsx title="index.html"	
<div class="v-text-shadow-sm">
</div>
<div class="v-text-shadow-md">
</div>
<div class="v-text-shadow-lg">
</div>
<div class="v-text-shadow-xl">
</div>
```
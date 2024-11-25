---
sidebar_position: 9
title:  "TextAlign"
---

import {AiMagicIcon} from 'hugeicons-react';

# Class-textAlign <AiMagicIcon className='icon' />

Utilities for controlling the alignment of text.

Use the `v-text-*` utilities to control the text align of an element.
You can use <br /> the [`feat: custom`](/docs/Core-Features/V-custom.md) feature if you want the text align to suit your needs.

## Table list aligns

| Class name  | Properties |
|---------------------|-------------------|
| `v-text-center		`      | `text-align: center;` | 
| `v-text-left		`     | `text-align: left;` | 
| `v-text-right		`     | `text-align: right;` | 
| `v-text-justify			`     | `text-align: justify;` | 

The table above presents several types of line heights with different variants.

## Example Code
``` jsx title="index.html"
<div>
    <span class="v-text-center"> 	
        Lorem ipsum dolor sit amet consectetur adipisicing elit. 
        Nam, magnam accusamus obcaecati earum sequi sapiente quam 
        eum molestiae vel corrupti, architecto laboriosam deleniti 
        aut, ipsa repudiandae ullam.
    </span>
</div>
```
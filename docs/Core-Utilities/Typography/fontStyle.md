---
sidebar_position: 10
title:  "FontStyle"
---

import {AiMagicIcon} from 'hugeicons-react';

# Class-fontStyle <AiMagicIcon className='icon' />

Style the text on your website.

The italic utility allows you to make text `style-italic`. On the other hand,
the `style-normal` utility is used to reset text to its normal style, often applied at different breakpoints.

## Table list style

| Class name  | Properties |
|---------------------|-------------------|
| `v-font-style-italic	`      | `font-style: italic;` | 
| `v-font-style-normal	`     | `font-style: normal;` | 
| `v-font-style-oblique	`     | `font-style: oblique;` | 

The table above presents several types of text style with different variants.

## Example Code
``` jsx title="index.html"
<div>
    <span class="v-font-style-normal"> 
        normal 
    </span>
    <span class="v-font-style-italic"> 
        italic 
    </span>
    <span class="v-font-style-oblique">  
        oblique 
    </span>
</div>
```
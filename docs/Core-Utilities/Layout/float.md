---
sidebar_position: 1
title:  "Float"
---

import {AiMagicIcon} from 'hugeicons-react';

# Class-float <AiMagicIcon className='icon' />

Utilities for controlling how the browser should calculate an element's total size.

Use the `v-float-*` utilities to control the float of an element.
You can use <br /> the [`feat: custom`](/docs/Core-Features/V-custom.md) feature if you want the float to suit your needs.

## Table list floats

| Class name  | Properties |
|---------------------|-------------------|
| `v-float-left			`      | `float: left;` | 
| `v-float-right			`      | `float: right;` | 
| `v-float-none			`      | `float: none;` | 
| `v-float-inline-start			`      | `float: inline-start;` | 
| `v-float-inline-end			`      | `float: inline-end;` | 

The table above presents several types of floats with different variants.

## Example Code
``` jsx title="index.html"
<div>
    <img src="valclass.png" class="v-float-right"> 
    <p> 
        Lorem ipsum dolor sit amet consectetur adipisicing. 
        Porro recusandae qui ducimus, itaque non architecto 
        Perspiciatis voluptatibus aut in mollitia ut?. 
        Adipisci porro quibusdam ex?
    </p>
</div>
```
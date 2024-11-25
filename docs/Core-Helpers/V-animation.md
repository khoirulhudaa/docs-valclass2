---
sidebar_position: 5
title:  "Help: Animation"
---

import {AiMagicIcon} from 'hugeicons-react';

# Helper-animation <AiMagicIcon className='icon' />

**Export table or text** to various types of animation files.

Create your animation feature instantly using the `v-helper` valclass.


## Table list animations

| Class name  | Properties |
|---------------------|-------------------|
| `v-animation-none`      | `animation: none;` | 
| `v-animation-spin`     | `animation: spin 1s linear infinite;` | 
| `v-animation-ping`     | `animation: ping 1s cubic-bezier(0, 0, 0.2, 1) infinite;` | 
| `v-animation-pulse`     | `animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;` | 
| `v-animation-bounce`     | `animation: bounce 2s infinite ease-in;` | 

The table above presents several types of animations with different variants.

``` jsx title="index.html"
<div>
    <div class="v-animation-ping">
    </div>
</div>
```
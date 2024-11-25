---
sidebar_position: 13
title:  "Help: Load"
---

import {AiMagicIcon} from 'hugeicons-react';

# Helper-load <AiMagicIcon className='icon' />

Utilities for animating elements loading or proccess with CSS animations.

Create your load feature instantly using the `v-helper` valclass.

## Table list loads

| Class name  | Properties |
|---------------------|-------------------|
| `v-load-spin`      | `animation: rotate 1s infinite linear;` | 
| `v-load-pulse`     | `animation: pulse 2s infinite linear;` | 
| `v-load-bounce`     | `animation: 2.3s ease 0s normal none infinite running bounce;` | 

The table above presents several types of loads with different variants.

## Spin load
!['load1'](/img/load1.png)

``` jsx title="index.html"
<div> class="v-overlay">
    <div class="v-loading v-loading2"></div>
    <div class="v-loading"></div>
</div>
```

## Pulse load
<img src='/img/load2.png' alt='load2' />
``` jsx title="index.html"
<div> class="v-overlay2">
    <div class="v-loading v-load1"></div>
    <div class="v-loading v-load2"></div>
    <div class="v-loading v-load3"></div>
</div>
```

## bounce load
<img src='/img/load3.png' alt='load3' />
#
``` jsx title="index.html"
<div> class="v-wrapper">
    <div class="v-bouncing-arrow v-bc1"></div>
</div>
```
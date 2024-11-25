---
sidebar_position: 9
title: "Help: Action"
---

import {AiMagicIcon} from 'hugeicons-react';

# Helper-action <AiMagicIcon className='icon' />

Click an element to create a light animation.

Create your action feature instantly using the `v-helper` valclass.


## Table list actions

| Class name  | Properties |
|---------------------|-------------------|
| `v-active-scale`| `(from) => transition: 0.3s; transform: scale(1); (to) => transition: 0.3s; transform: scale(0.97);` | 
| `v-active-up	`     | `(from) => transition: 0.3s; margin-top: 0px; (to) => transition: 0.3s; margin-top: -10px;` | 
| `v-active-pulse	`     | `(from) => transition: 0.3s; opacity: 1; (to) => transition: 0.3s; opacity: 0.5;` | 
| `v-hover-pulse	`     | `(from) => transition: 0.3s; opacity: 1; (to) => transition: 0.3s; opacity: 0.5;` | 
| `v-hover-pulse	`     | `(from) => transition: 0.3s; opacity: 1; (to) => transition: 0.3s; opacity: 0.5;` | 
| `v-hover-pulse	`     | `(from) => transition: 0.3s; opacity: 1; (to) => transition: 0.3s; opacity: 0.5;` | 

The table above presents several types of actions with different variants.

## (Click) - Scale animation
``` jsx title="index.html"
<div>
    <div class="v-active-scale">
    </div>
</div>
```

## (Click) - Up animation
``` jsx title="index.html"
<div>
    <div class="v-active-up">
    </div>
</div>
```

## (Click) - pulse animation
``` jsx title="index.html"
<div>
    <div class="v-active-pulse">
    </div>
</div>
```
---

## (Hover) - Scale animation
``` jsx title="index.html"
<div>
    <div class="v-hover-scale">
    </div>
</div>

## (Hover) - Up animation
``` jsx title="index.html"
<div>
    <div class="v-hover-up">
    </div>
</div>
```

## (Hover) - pulse animation
``` jsx title="index.html"
<div>
    <div class="v-hover-pulse">
    </div>
</div>
```
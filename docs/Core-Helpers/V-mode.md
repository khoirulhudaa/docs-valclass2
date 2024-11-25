---
sidebar_position: 12
title:  "Help: Mode"
---

import {AiMagicIcon} from 'hugeicons-react';

# Helper-mode <AiMagicIcon className='icon' />

Provide two different models on the website.

Create your mode feature instantly using the `v-helper` valclass.


## Table list modes

| Class name  | Properties |
|---------------------|-------------------|
| `v-template-dark-mode + v-dark-mode`      | `Light mode to dark mode` | 
| `v-template-light-mode + v-dark-mode`     | `dark mode to light mode` | 

The table above presents several types of modes with different variants.

## Result dark mode
!['image-download'](/img/darkmode.png)

``` jsx title="index.html"
<div class="v-template-dark-mode">
</div>
<div class="v-dark-mode">
  <div class="toggle-mode">
  </div>
</div>		
```

## Result light mode
!['image-download'](/img/lightmode.png)

``` jsx title="index.html"
<div class="v-template-light-mode">
</div>
<div class="v-dark-mode">
  <div class="toggle-mode">
  </div>
</div>	
```
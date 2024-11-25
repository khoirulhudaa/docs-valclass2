---
sidebar_position: 10
title:  "Help: Office"
---

import {AiMagicIcon} from 'hugeicons-react';

# Helper-office <AiMagicIcon className='icon' />

**Export table or text** to various types of office files.

Create your office feature instantly using the `v-helper` valclass.


## Table list offices

| Class name (1)  | Class name (2) |
|---------------------|-------------------|
| `v-office-dark`      | `v-template-excel` | 
| `v-office-word`     | `v-template-word` | 
| `v-office-pdf`     | `v-template-pdf` | 

The table above presents several types of offices with different variants.

## Download results
!['image-download'](/img/download.png)

``` jsx title="index.html"
<div class="v-template-excel">
    Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
    Vel ut repellend natus unde enim modi distinctio error 
    aliquid fugiat numquam ad nemo possi tenetur officia 
    doloremque eos quis! Lorem ipsum dolor sit amet 
    consectetur elit. 
</div>

<button class="v-btn-green v-office-excel">
</button>

```
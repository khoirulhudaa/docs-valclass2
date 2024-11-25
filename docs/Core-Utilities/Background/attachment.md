---
sidebar_position: 1
title:  "BgAttachment"
---

import {AiMagicIcon} from 'hugeicons-react';

# Class-attachment <AiMagicIcon className='icon' />

Utilities for controlling how a background image behaves when scrolling.

Use the `v-attachment-*` utilities to control the attachment of an element.
You can use <br /> the [`feat: custom`](/docs/Core-Features/V-custom.md) feature if you want the attachment align to suit your needs.

## Table list attachments

| Class name  | Properties |
|---------------------|-------------------|
| `v-attachment-fixed		`      | `background-attachment: fixed;` | 
| `v-attachment-local		`     | `background-attachment: local;` | 
| `v-attachment-scroll		`     | `background-attachment: scroll;` | 

The table above presents several types of attachments with different variants.

## Example Code
``` jsx title="index.html"
<div>
    <span class="v-attachment-fixed" style="background-image('v.png')">  
    </span>
</div>
```
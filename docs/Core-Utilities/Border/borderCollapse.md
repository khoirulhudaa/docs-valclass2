---
sidebar_position: 1
title:  "BorderCollapse"
---

import {AiMagicIcon} from 'hugeicons-react';

# Class-border-collapse <AiMagicIcon className='icon' />

Utilities for controlling whether table borders should collapse or be separated.

Use the `v-border-type-*` utilities to control the h of an element.
You can use <br /> the [`feat: custom`](/docs/Core-Features/V-custom.md) feature if you want the h border-collapse to suit your needs.

## Table list border-collapses

| Name class   | Properties   |
|------------------|----------|
| `v-border-type-collapse	`     | `border-collapse: collapse;`  |
| `v-border-type-separate	`      | `border-collapse: separate;`   |

The table above presents several types of border-collapsess with different variants.

## Example Code
``` jsx title="h.html"	
<div>
    <table class="v-border-type-collapse">
    </table>
    <table class="v-border-type-separate">
    </table>
</div>
```
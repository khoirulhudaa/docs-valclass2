---
sidebar_position: 14
title:  "Help: Time"
---

import {AiMagicIcon} from 'hugeicons-react';

# Helper-time <AiMagicIcon className='icon' />

Generate sequence of numbers automatically.

Create your time feature instantly using the `v-helper` valclass.

## Table list times

| Class name  | Type | Properties |
|-------------|------|------------|
| `v-day`      | `Mobile size` | `(min-width: 320px) and (max-width: 600px)` |
| `v-date`     | `Tablet size` | `(min-width: 600px) and (max-width: 900px)` |
| `v-month`     | `Normal size` | `(min-width: 900px) and (max-width: 1920px)` |
| `v-year`     | `PC size` | `(min-width: 1920px)` |

The table above presents several types of times with different variants.

<img src="/img/time.png" alt="time" />

``` jsx title="index.html"
<div>
    <p class="v-day"> 
    </p>
    <p class="v-date"> 
    </p>
    <p class="v-month"> 
    </p>
    <p class="v-year"> 
    </p>
</div>	
```
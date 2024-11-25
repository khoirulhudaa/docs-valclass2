---
sidebar_position: 2
title: "Feat: Custom"
---

import {PenTool03Icon} from 'hugeicons-react';

# Feature-custom <PenTool03Icon className='icon' />

Specifies the value of the class in valclass

You can specify the value of a CSS property using the utility classes defined in valclass. The last word of the utility class name will be used as the value for the corresponding CSS property.

## Usage: additional vocabulary

Use `"v-[value]" => "vc-[value]"` to prefix all your utilities to enable the use of custom and flexible values, with no limit on the number of options.

```jsx title="index.html"
<div class="vc-radius-{value of custom}">
    <div class="vc-bg-{value of custom}">
    </div>
    <div class="vc-color-{value of custom}">
    </div>
    <div class="vc-text-{value of custom}">
    </div>
</div>
```

## Example in your HTML.

``` jsx title="index.html"
 <div class="vc-radius-100000000px">

    // highlight-start
    result: background-color: car;
    // highlight-end
    <div class="vc-bg-car"> 
    </div>

    // highlight-start
    result: color: LOL;
    // highlight-end
    <div class="vc-color-LOL"> 
    </div>
    
    // highlight-start
    result: text-align: CenTeR;
    // highlight-end
    <div class="vc-text-CenTeR"> 
    </div>

</div
```
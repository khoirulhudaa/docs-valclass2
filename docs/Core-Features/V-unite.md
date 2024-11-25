---
sidebar_position: 4
title: "Feat: Unite"
---

import {FlowConnectionIcon} from 'hugeicons-react';

# Feature-unite <FlowConnectionIcon className='icon' />

Unite multiple utilities in one variable

You can now avoid using classes repeatedly for a component with the same tedious style. There's no need to enter the class multiple times when you can combine them into a single variable.

## Create: v-unite-config.js

`Ensure the file is in the folder's root, alongside your valclass.js file.`

```jsx title="v-unite-config.js"
createComponentClass({
  "@button@" : [
      "v-radius-full",
      "v-bg-primary",
      "v-text-center",
      "v-color-white",
      "v-weight-bold",
      "v-font-sz-16px",
  ],
  "@section@" : [
      "v-pst-relative",
      "v-w-screen",
      "v-h-max",
      "v-d-flex",
  ],
})
```

## Call in your HTML.

``` jsx title="index.html"
 <div class="@section@">

  <button class="@button@">
        Buy now
  </button>

</div>
```
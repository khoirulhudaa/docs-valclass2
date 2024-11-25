---
sidebar_position: 3
title: "Feat: Maker"
---


import {FlowSquareIcon} from 'hugeicons-react';

# Feature-maker <FlowSquareIcon className='icon' />

Make your own utilities as you wish

Now you can create your own class names, shorten them, or make them unique. Enjoy the ease of accessing and expressing your class names!

## Create: v-maker-config.js

`Ensure the file is in the folder's root, alongside your valclass.js file.`

```jsx title="v-maker-config.js"
createMakerUtilitiesName({
  let createUtilities = [
          "flex",
          "block",
          "center",
          "relative",
      ]

      let valueUtilities = [
          "display: flex;",
          "display: block;",
          "text-align: center;",
          "position: relative;",
      ],

      // menuBreakpoints => 
      // mb : untuk 320px - 600px 
      // tb : untuk 601px - 900px 
      // df : untuk 901px - 1920px 
      // pc : untuk min-width (1921px) 

      let breakpointsUtilities = [
          "mb",
          "tb",
          "df",
          "pc",
      ]
})
```

## Call in your HTML.

``` jsx title="index.html"
 <div class="relative flex">

      <button class="center block relative">
            Buy now
      </button>

  </div>
```
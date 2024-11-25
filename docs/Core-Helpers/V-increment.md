---
sidebar_position: 6
title: "Help: Increment"
---

import {AiMagicIcon} from 'hugeicons-react';

# Helper-increment <AiMagicIcon className='icon' />

Generate sequence of numbers automatically.

Create your increment feature instantly using the `v-helper` valclass.

## Table list increment

| Class name |
|---------------|
| `v-increment`|

The table above presents several types of increment.

## Increment results
!['image-download'](/img/table1.png)

``` jsx title="index.html"
<table class="v-table-hovered">
    <thead>
    <th>#</th>	
    <th>Name</th>							  				  
    <th>Last</th>								  				  
    </thead>

    <tbody>	
    <tr>
    // highlight-start
    <td class="v-increment"></td>							  				  
    // highlight-end
    <td>Jakarta</td>								  				  
    <td>anton@email.com</td>							  				  
    </tr>

    <tr>
    // highlight-start
    <td class="v-increment"></td>							  				  
    // highlight-end
    <td>Surabaya</td>								  				  
    <td>bryan@email.com</td>							  				  
    </tr>

    <tr>
    // highlight-start
    <td class="v-increment"></td>							  				  
    // highlight-end
    <td>Semarang</td>								  				  
    <td>cherly@email.com</td>							  				  
    </tr>

    <tr>
    // highlight-start
    <td class="v-increment"></td>							  				  
    // highlight-end
    <td>Makasar</td>								  				  
    <td>dean@email.com</td>							  				  
    </tr>
    </tbody>
</table>
```
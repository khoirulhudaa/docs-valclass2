---
sidebar_position: 1
title: "Comp: Table"
---

import {AiMagicIcon} from 'hugeicons-react';

# Component-table <AiMagicIcon className='icon' />

Utilities to create table components.

Create your table component instantly using the `v-component` valclass.


## Table list tables

| Class name          |
|---------------------|
| `v-table-hovered`      | 
| `v-table-striped`     |  
| `v-table-head-dark`     | 

The table above presents several types of tables with different variants, tailored to various conditions and needs.

## Interface table hovered
!['image-table'](/img/table1.png)

``` jsx title="index.html"
<table class="v-table-hovered">

    <thead>
        <th>#</td>	
        <td>Name</td>							  				  
        <td>Last</td>							  				  
        <td>Handle</td>							  				  
    </thead>

    <tbody>				  
        ...
    </tbody>

</table>
```

## Interface table striped
!['image-table'](/img/table2.png)

``` jsx title="index.html"
<table class="v-table-striped">

    <thead>
        <th>#</td>	
        <td>Name</td>							  				  
        <td>Last</td>							  				  
        <td>Handle</td>							  				  
    </thead>

    <tbody>				  
		...
    </tbody>

</table>
```


## Interface table dark head
!['image-table'](/img/table3.png)

``` jsx title="index.html"		
<table class="v-table-head-dark">

    <thead>
		<th>#</td>	
		<td>Name</td>							  				  
		<td>Last</td>							  				  
		<td>Handle</td>							  				  
    </thead>

    <tbody>				  
        ...
    </tbody>

</table>
```

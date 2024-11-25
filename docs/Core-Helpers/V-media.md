---
sidebar_position: 11
title:  "Help: Media"
---

import {AiMagicIcon} from 'hugeicons-react';

# Helper-media <AiMagicIcon className='icon' />

Generate sequence of numbers automatically.

Create your media feature instantly using the `v-helper` valclass.

## Table list medias

| Class name  | Properties |
|---------------------|-------------------|
| `v-media + v-play + v-pause + v-btn	`      | `play and pause music` | 
| `v-range + v-field + v-value + left + right + v-volume	`     | `setting volume music` | 

The table above presents several types of medias with different variants.

## Play & pause
``` jsx title="index.html"
<audio class="v-media" src="./music.mp3"></audio> 

<button class="v-play v-btn-primary">play</button> 
<button class="v-pause v-btn-primary">pause</button> 
```

## Setting volume
``` jsx title="index.html"
<div class="v-range">
    <div class="v-field">
        <div class="v-value left" >0</div> 
            <input type="range" class="v-volume" min="0"  max="100"  value="50"  steps="1">
        <div class="v-value right">100</div> 
    </div> 
</div> 
```
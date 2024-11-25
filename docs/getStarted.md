---
sidebar_position: 1
title: Introduction
---

import {PackageOpenIcon} from 'hugeicons-react';

# The Introduction <PackageOpenIcon className='icon' />

Welcome to the CSS Framework documentation - Valclass! This website will give you an introduction to 90% of Valclass concepts that might encourage you to use it every day.

## Getting Started

Get started by **getting a cdn link**.

:::danger
It is **highly recommended** that you have already **mastered** vanilla CSS beforehand.
:::

### What you'll need

- Understanding the use of [HTML](https://www.w3schools.com/html/) and [CSS](https://www.w3schools.com/css/):
- At least have experience using 
[Tailwind](https://tailwindcss.com/) or 
[Bootstrap](https://getbootstrap.com/docs/5.0/getting-started/introduction/)

## Link CDN

We provide 2 CDN links in Valclass, each with a different function. The first link is intended for using utilities, while the second link provides instant features of Valclass.

```jsx title="Utilities"
https://cdn.jsdelivr.net/gh/valclassdevelop/valclass/valclass.js
```
```jsx title="Features"
https://cdn.jsdelivr.net/gh/valclassdevelop/valclass/component-features.js
```

:::info
Or **try a better Valclass experience** by **[downloading it yourself](/docs/download)**.
:::

`Note` Place all these CDN links before the `</body>` tag inside the `<script>`.

## Template Code

Run the development server:

```jsx title="HTML"
<!DOCTYPE html>
<html lang="en">
    <head>  
        <!--All meta--> 
        <meta charset="utf-8">

        <!--Title Browser Tab--> 
        <title>@valclass</title>
    </head>
                
    <body>
      <h1 class="v-mt-100px v-font-poppins v-font-sz-50px v-color-green">
          Hi, my name is Valclass 
      </h1>

      <p class="v-pst-relative v-font-poppins">
          Valclass speeds up website development for web developers.
      </p>

      <!--include the script to connect with valclass--> 
      <!--Link for Utilities-->
      <!--Link for Features (Optional)-->
    </body>
</html>
```

## Meta tag

Valclass was also developed to ensure a user-friendly and improved web interface. To ensure proper rendering and touch zoom on all devices, add the responsive viewport meta tag to your `<head>`.

```jsx title="SEO keywords"
<meta name="keywords" content="web development, Docusaurus, Valclass">
```
```jsx title="Character encoding"
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">        
```
```jsx title="Browser compatibility"
<meta http-equiv="X-UA-Compatible" content="IE=edge">                
```
```jsx title="Responsive design"
<meta name="viewport" content="width=device-width">
```
```jsx title="Page description"
<meta name="description" content="example">
```
```jsx title="Page author"
<meta name="author" content="Your Name">
```
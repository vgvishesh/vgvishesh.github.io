---
layout: post
title:  "Types of Selectors in HTML and CSS"
author: vishesh gupta
description: A document for different types of selectors used in Html and css
published: true
---
![mountain_creek](/assets/images/mountain_creak.png)

In HTML and CSS, selectors are used to target HTML elements so that styles can be applied to them, or they can be manipulated using JavaScript. There are various types of selectors, each serving a different purpose.

# [1. Element Selector][1]
[1]: #1-element-selector
**Description**: Selects all elements of a specific type.<br>
```html
<p>This is a paragraph.</p>
```
This targets all `<p>` elements in the HTML document.
```css
p {
    color: blue;
}
```
This selects all <p> elements in the document.
```js
document.querySelectorAll('p');
```

# [2. Class Selector][2]
[2]: #2-class-selector
**Description**: Selects all elements with a specific class attribute.
```html
<div class="alert">Alert Box</div>
```
This targets all elements with class="alert".
```css
.alert {
    font-weight: bold;
}
```
This selects all elements with class="alert".
```js
document.querySelectorAll('.alert');
```

# [3. ID Selector][3]
[3]: #3-id-selector
**Description**: Selects a single element with a specific id attribute.
```html
<div id="navbar">Navigation Bar</div>
```
This targets the element with `id="navbar"`.
```css
#navbar {
    background-color: grey;
}
```
This selects the element with `id="navbar"` (though `querySelector` is more common for IDs).
```js
document.querySelectorAll('#navbar');
```

# [4. Attribute Selector][4]
[4]: #4-attribute-selector
**Description**: Selects elements based on the presence or value of an attribute.
```html
<input type="text">
```
This targets all `<input>` elements with `type="text"`.
```css
input[type="text"] {
    background-color: yellow;
}
```
This selects all `<input>` elements with `type="text"`.
```js
document.querySelectorAll('input[type="text"]');
```

# [5. Pseudo-class Selector][5]
[5]: #5-pseudo-class-selector
**Description**: Selects elements based on their state or relation to other elements.
```html
<a href="#">Link</a>
```
This targets `<a>` elements when they are hovered over.
```css
a:hover {
    color: red;
}
```
This targets `<a>` element when it is hovered over
```js
document.querySelector('a:hover');
```

# [6. Pseudo-element Selector][6]
[6]: #6-pseudo-element-selector
**Description**: Selects part of an element.
```html
<p>First letter styling</p>
```
This targets the first letter of each `<p>` element.<br>
```css
p::first-letter {
    font-size: 150%;
}
```
*NOTE:* Not applicable with `querySelectorAll`, as pseudo-elements are not part of the DOM.

# [7. Descendant Selector][7]
[7]: #7-descendant-selector
**Description**: Selects an element that is a descendant of another specified element.
```html
<div><p>Paragraph inside a div</p></div>
```
This targets `<p>` elements that are inside a `<div>`.
```css
div p {
    margin-left: 20px;
}
```
This selects `<p>` elements that are inside a `<div>`.
```js
document.querySelectorAll('div p');
```

# [8. Child Selector][8]
[8]: #8-child-selector
**Description**: Selects an element that is a direct child of another specified element.
```html
<ul><li>List Item</li></ul>
```
This targets `<li>` elements that are direct children of `<ul>`.
```css
ul > li {
    color: green;
}
```
This selects `<li>` elements that are direct children of `<ul>`.
```js
document.querySelectorAll('ul > li');
```

# [9. Adjacent Sibling Selector][9]
[9]: #9-adjacent-sibling-selector
**Description**: Selects an element that is an immediate sibling of another specified element.
```html
<h1>Heading</h1><p>Paragraph after heading</p>
```
This targets the first `<p>` element immediately following a `<h1>`.
```css
h1 + p {
    font-style: italic;
}
```
This selects the first `<p>` element immediately following a `<h1>`.
```js
document.querySelectorAll('h1 + p');
```

# [10. General Sibling Selector][10]
[10]: #10-general-sibling-selector
**Description**: Selects all elements that are siblings of a specified element.
```html
<h1>Heading</h1><p>First Paragraph</p><p>Second Paragraph</p>
```
This targets all `<p>` elements that follow a `<h1>`, regardless of their immediate adjacency.
```css
h1 ~ p {
    border: 1px solid black;
}
```
This selects all `<p>` elements that follow a `<h1>`, regardless of their immediate adjacency.
```js
document.querySelectorAll('h1 ~ p');
```

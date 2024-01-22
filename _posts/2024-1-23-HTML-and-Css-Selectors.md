---
layout: post
title:  "Types of Selectors in HTML and CSS"
author: vishesh gupta
description: A document for different types of selectors used in Html and css
---
![releif](/assets/images/mountain_creak.png)

In HTML and CSS, selectors are used to target HTML elements so that styles can be applied to them, or they can be manipulated using JavaScript. There are various types of selectors, each serving a different purpose.

# [1. Element Selector][1]
[1]: #1-element-selector
- **Description**: Selects all elements of a specific type.
- **Example**:
```css
p {
    color: blue;
}
```
This targets all `<p>` elements in the HTML document.
```js
document.querySelectorAll('p');
```
This selects all <p> elements in the document.

# [2. Class Selector][2]
[2]: #2-class-selector
- **Description**: Selects all elements with a specific class attribute.
- **Example**:
```css
.alert {
    font-weight: bold;
}
```
This targets all elements with class="alert".
```js
document.querySelectorAll('.alert');
```
This selects all elements with class="alert".

# [3. ID Selector][3]
[3]: #3-id-selector
- **Description**: Selects a single element with a specific id attribute.
- **Example**:
```css
#navbar {
    background-color: grey;
}
```
This targets the element with `id="navbar"`.
```js
document.querySelectorAll('#navbar');
```
This selects the element with `id="navbar"` (though `querySelector` is more common for IDs).

# [4. Attribute Selector][4]
[4]: #4-attribute-selector
- **Description**: Selects elements based on the presence or value of an attribute.
- **Example**:
```css
input[type="text"] {
    background-color: yellow;
}
```
This targets all `<input>` elements with `type="text"`.
```js
document.querySelectorAll('input[type="text"]');
```
This selects all `<input>` elements with `type="text"`.

# [5. Pseudo-class Selector][5]
[5]: #5-pseudo-class-selector
- **Description**: Selects elements based on their state or relation to other elements.
- **Example**:
```css
a:hover {
    color: red;
}
```
This targets `<a>` elements when they are hovered over.
```js
document.querySelector('a:hover');
```
This targets `<a>` element when it is hovered over

# [6. Pseudo-element Selector][6]
[6]: #6-pseudo-element-selector
- **Description**: Selects part of an element.
- **Example**:
```css
p::first-letter {
    font-size: 150%;
}
```
This targets the first letter of each `<p>` element.<br>
*NOTE:* Not applicable with `querySelectorAll`, as pseudo-elements are not part of the DOM.

# [7. Descendant Selector][7]
[7]: #7-descendant-selector
- **Description**: Selects an element that is a descendant of another specified element.
- **Example**:
```css
div p {
    margin-left: 20px;
}
```
This targets `<p>` elements that are inside a `<div>`.
```js
document.querySelectorAll('div p');
```
This selects `<p>` elements that are inside a `<div>`.

# [8. Child Selector][8]
[8]: #8-child-selector
- **Description**: Selects an element that is a direct child of another specified element.
- **Example**:
```css
ul > li {
    color: green;
}
```
This targets `<li>` elements that are direct children of `<ul>`.
```js
document.querySelectorAll('ul > li');
```
This selects `<li>` elements that are direct children of `<ul>`.

# [9. Adjacent Sibling Selector][9]
[9]: #9-adjacent-sibling-selector
- **Description**: Selects an element that is an immediate sibling of another specified element.
- **Example**:
```css
h1 + p {
    font-style: italic;
}
```
This targets the first `<p>` element immediately following a `<h1>`.
```js
document.querySelectorAll('h1 + p');
```
This selects the first `<p>` element immediately following a `<h1>`.

# [10. General Sibling Selector][10]
[10]: #9-adjacent-sibling-selector
- **Description**: Selects all elements that are siblings of a specified element.
- **Example**:
```css
h1 ~ p {
    border: 1px solid black;
}
```
This targets all `<p>` elements that follow a `<h1>`, regardless of their immediate adjacency.
```js
document.querySelectorAll('h1 ~ p');
```
This selects all `<p>` elements that follow a `<h1>`, regardless of their immediate adjacency.

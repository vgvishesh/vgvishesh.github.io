---
layout: post
title:  "List of Magic methods in Python"
author: vishesh gupta
description: Python has a lot of magic methods, this post lists them all.
---

In Python, special methods (also known as "magic methods" or "dunder methods" for their double underscores at the beginning and end) are used to implement and customize the behavior of built-in operations. These methods allow your objects to integrate more closely with the Python language. Here is a list of commonly used special methods:

### Basic Customization
**__new__(cls, [...])**: Called to create a new instance of the class.<br>
**__init__(self, [...])**: Called after the instance is created.<br>
**__del__(self)**: Called when the instance is about to be destroyed.<br>
**__repr__(self)**: Called by the repr() built-in to get the object’s string representation (for developers).<br>
**__str__(self)**: Called by the str() built-in and by the print function to get the object’s string representation (for end-users).<br><br>
### Comparison Methods
**__lt__(self, other)**: Defines behavior for the less-than operator (<).<br>
**__le__(self, other)**: Defines behavior for the less-than-or-equal-to operator (<=).<br>
**__eq__(self, other)**: Defines behavior for the equality operator (==).<br>
**__ne__(self, other)**: Defines behavior for the inequality operator (!=).<br>
**__gt__(self, other)**: Defines behavior for the greater-than operator (>).<br>
**__ge__(self, other)**: Defines behavior for the greater-than-or-equal-to operator (>=).<br><br>
### Arithmetic Operators
**__add__(self, other)**: Defines behavior for the addition operator (+).<br>
**__sub__(self, other)**: Defines behavior for the subtraction operator (-).<br>
**__mul__(self, other)**: Defines behavior for the multiplication operator (*).<br>
**__truediv__(self, other)**: Defines behavior for the division operator (/).<br>
**__floordiv__(self, other)**: Defines behavior for the floor division operator (//).<br>
**__mod__(self, other)**: Defines behavior for the modulo operator (%).<br>
**__pow__(self, other[, modulo])**: Defines behavior for the exponentiation operator (\*\*).<br>
**__lshift__(self, other)**: Defines behavior for the left bitwise shift operator (<<).<br>
**__rshift__(self, other)**: Defines behavior for the right bitwise shift operator (>>).<br>
**__and__(self, other)**: Defines behavior for the bitwise AND operator (&).<br>
**__or__(self, other)**: Defines behavior for the bitwise OR operator (|).<br>
**__xor__(self, other)**: Defines behavior for the bitwise XOR operator (^).<br><br>
### Unary Operators and Functions
**__pos__(self)**: Implements unary positive (e.g., +obj).<br>
**__neg__(self)**: Implements unary negative (e.g., -obj).<br>
**__abs__(self)**: Implements function abs().<br>
**__invert__(self)**: Implements bitwise inversion operator.<br>
### Type Conversion<br>
**__int__(self)**: Implements type conversion to int.<br>
**__float__(self)**: Implements type conversion to float.<br>
**__complex__(self)**: Implements type conversion to complex.<br>
**__bool__(self)**: Implements type conversion to bool.<br><br>
### Container Types
**__len__(self)**: Implements the built-in function len().<br>
**__getitem__(self, key)**: Implements accessing an element (self[key]).<br>
**__setitem__(self, key, value)**: Implements setting an element (self[key] = value).<br>
**__delitem__(self, key)**: Implements deleting an element (del self[key]).<br>
**__iter__(self)**: Implements iteration over the container.<br>
**__reversed__(self)**: Implements reversed iteration.<br>
**__contains__(self, item)**: Implements the in operator.<br><br>
### Context Managers
__enter__(self): Enters a runtime context (with statement).<br>
__exit__(self, exc_type, exc_value, traceback): Exits a runtime context.<br><br>
### Other Special Methods
**__call__(self, [...])**: Allows an instance of a class to be called as a function.<br>
**__getattr__(self, name)**: Called when an attribute lookup has not found the attribute in the usual places.<br>
**__setattr__(self, name, value)**: Called when an attribute assignment is attempted.<br>
**__delattr__(self, name)**: Called when an attribute deletion is attempted.<br>
**__hash__(self)**: Implements function hash(). If __eq__ is defined, __hash__ must be explicitly defined as well.<br>
**__copy__(self)**: Implements shallow copy for the copy module.<br>
**__deepcopy__(self, memo)**: Implements deep copy for the copy module.<br>
These methods allow your objects to mimic and behave like built-in types, making your code more intuitive and Pythonic. However, it's important to implement them correctly to avoid unexpected behavior.
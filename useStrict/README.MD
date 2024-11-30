# Understanding `"use strict"` in JavaScript

This repository demonstrates the use of `"use strict"` in JavaScript, its benefits, and how it aligns with modern standards.

## Overview

`"use strict"` is a directive that enforces strict mode in JavaScript, improving error handling, performance, and security. This repository includes examples of its use, impacts, and best practices.

## What Does `"use strict"` Do?

1. **Error Prevention**:
   - Catches undeclared variables and disallows unsafe actions.
2. **Memory Management**:
   - Prevents global variable leaks and optimizes garbage collection.
3. **Improves Security**:
   - Disallows `this` binding to the global object in functions.
4. **Encourages Standards**:
   - Enforces modern coding conventions.

## Compilation Differences

| Feature                     | Without `"use strict"`     | With `"use strict"`          |
|-----------------------------|----------------------------|------------------------------|
| Implicit Global Variables   | Allowed                   | Throws ReferenceError        |
| `this` in Functions         | Defaults to global object | `undefined`                  |
| Duplicate Object Properties | Allowed                   | SyntaxError                  |
| Reserved Words Usage        | Allowed                   | SyntaxError                  |

## Pros and Cons

### Pros
- Catches errors early in development.
- Optimizes performance.
- Promotes secure coding practices.
- Aligns with modern ES6+ standards.

### Cons
- May require refactoring legacy code.
- Stricter rules can be a learning curve.
- Incompatibility with older third-party scripts.

## Examples

### Global Strict Mode

```javascript
"use strict";

x = 10; // ReferenceError: x is not defined

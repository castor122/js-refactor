# Refactor Backbone Artist model

Please refactor as you like and explain your changes.

Result expected:

- diff file of refactored and original code
- description/briefing/log of your refactoring approach

In case you have any questions please don't hesitate to ask us.

# Rubyems used

- rails (3.2.22.4)
- jquery-rails (2.3.0)
- backbone-on-rails (1.1.2.1)
- backbone-relational-rails (0.10.0)
- i18n-js (3.0.0.rc12)

# Refactored following this
### 1. Grouped methods and large objects/arrays into modules
### 2. Converted into ES6
  - All functions without `this` into es6 arrow functions
  - `var` into `const/let`
  - `==` into `===`
  - used destruction where possible

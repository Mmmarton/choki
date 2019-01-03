# Choki
<<<<<<< HEAD
This is a small project for learning ngrx.

Choki comprises of a web application which aims at centralizing the opinions of people related to chocolate.  
The application is based on actions of the masses.  

- People can **search** chocolates.  
- If the user finds the given chocolate, (s)he can **view** and **review** it.  
- If the chocolate is not found, the user has the option to **add** it.  
- Newly created chocolates are **not shown** to the users before they are **approved by an admin**.
- Chocolates not approved yet are shown in the search list, but with **WIP status**.
- A chocolate can have a **single image**.
- A chocolate can be **red flagged** with an appended message.  
- Review can be **up/down voted**.
- Chocolates have **stats and ranking** which are given by the users.

### Implementation
Implementation will happen in 3 steps.

#### Phases
1) Walking skeleton  
  - landing page
  - search list with elements
  - view page
  - add page
2) Power of users
  - implement user login,logout,register
  - only users can add chocolates
  - users may have one review per chocolate
  - users may vote a review
  - users may raise a red flag if something is wrong with a chocolate
  - users may vote for the stats of chocolates
3) Big brothers  
  - derive admins from users
  - add WIP status management
  - admins can edit chocolates
  - admins may revoke user rights
  
  ### Design
  
  The palette of the webpage is as follows:
  
  - ![#5e0b15](https://placehold.it/15/5e0b15/000000?text=+) `#5e0b15`
  - ![#232020](https://placehold.it/15/232020/000000?text=+) `#232020`
  - ![#955e42](https://placehold.it/15/955e42/000000?text=+) `#955e42`
  - ![#8e443d](https://placehold.it/15/8e443d/000000?text=+) `#8e443d`
  - ![#f3e9dc](https://placehold.it/15/f3e9dc/000000?text=+) `#f3e9dc`
=======

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.1.4.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
>>>>>>> initial commit

# Choki
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

#### Details
  - for the grid system using **Bootstrap Grid v4.2.1**

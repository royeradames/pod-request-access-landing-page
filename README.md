# Frontend Mentor - Pod request access landing page solution

This is a solution to the [Pod request access landing page challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/pod-request-access-landing-page-eyTmdkLSG). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Frontend Mentor - Pod request access landing page solution](#frontend-mentor---pod-request-access-landing-page-solution)
  - [Table of contents](#table-of-contents)
  - [Overview](#overview)
    - [The challenge](#the-challenge)
    - [Screenshots of design file and production website](#screenshots-of-design-file-and-production-website)
      - [Given design file](#given-design-file)
      - [Mobile](#mobile)
      - [Tablet](#tablet)
      - [Desktop](#desktop)
    - [Links](#links)
  - [My process](#my-process)
    - [Built with](#built-with)
    - [What I learned](#what-i-learned)
      - [Use button tag instead of input type submit](#use-button-tag-instead-of-input-type-submit)
      - [Inputs always need a label even if there are not visable, and invisiable labels cand be added with area label](#inputs-always-need-a-label-even-if-there-are-not-visable-and-invisiable-labels-cand-be-added-with-area-label)
      - [There are multiple modules with names that only differ in casing can lead to unexpected behavior when compiling](#there-are-multiple-modules-with-names-that-only-differ-in-casing-can-lead-to-unexpected-behavior-when-compiling)
    - [Continued development](#continued-development)
    - [Useful resources](#useful-resources)
  - [Author](#author)
  - [Acknowledgments](#acknowledgments)

**Note: Delete this note and update the table of contents based on what sections you keep.**

## Overview

### The challenge

Users should be able to:

- View the optimal layout depending on their device's screen size
- See hover states for interactive elements
- Receive an error message when the form is submitted if:
  - The `Email address` field is empty should show "Oops! Please add your email"
  - The email is not formatted correctly should show "Oops! Please check your email"

### Screenshots of design file and production website
#### Given design file
![Design file](./readme_assets/design-file.png)
#### Mobile
![Mobile view](./readme_assets/mobile-view.png)
#### Tablet
![Table view](./readme_assets/tablet-view.png)
#### Desktop
![Desktop view](./readme-assets/../readme_assets/desktop-view.png)
### Links

- Solution URL: [Front End Mentor solution post](https://www.frontendmentor.io/solutions/pod-request-access-landing-page-react-sass-css-grid-app-SHAnNHC6z)
- Live Site URL: [pod-request-access-landing-page](https://royer-adames-pod-request.vercel.app/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- CSS Grid
- Mobile-first workflow
- [React](https://reactjs.org/) - JS library
- [Sass](https://sass-lang.com/) - For styles

### What I learned

Use this section to recap over some of your major learnings while working through this project. Writing these out and providing code samples of areas you want to highlight is a great way to reinforce your own knowledge.

To see how you can add code snippets, see below:
#### Use button tag instead of input type submit
```html
  <input
    type="submit"
    value="Request Access"
    className="form__request"
  />
```
More Semantic
```html
<button className="form__request">Request Access</button>
```

#### Inputs always need a label even if there are not visable, and invisiable labels cand be added with area label
```html
aria-label="Enter your email address for podcast access"
```

#### There are multiple modules with names that only differ in casing can lead to unexpected behavior when compiling
Before
```html
_main.scss
main.scss_
```
After
```html
_main-content.scss
main.scss_
```
### Continued development

A class on aria-label. Aria-label feels foreing to me even do I can get the job done with them. 

### Useful resources

- [HTML elements reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Element) - Helped me reference which semantic HTML tag I can use and why.
- [Inputs should always have a label](https://css-tricks.com/html-inputs-and-labels-a-love-story/) - Helped me understand that I need a label for every input even when I don't want to show a input.
- [Using the aria-label attribute](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/ARIA_Techniques/Using_the_aria-label_attribute) - Use it in cases where a text label is not visible on the screen.

## Author

- LinkedIn - [royer adames](https://www.linkedin.com/in/royer-adames/)
- Frontend Mentor - [@royeradames](https://www.frontendmentor.io/profile/royeradames)

## Acknowledgments

Thank you Austin Kelsay for looking into my project, and for your great feedback.
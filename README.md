# Readme
# Cyberpunk Character Hunt

## Overview

A Where's Waldo


### Screenshot

<p align="center">
  <img src="./src/images/screenshot_for_readme.png" alt="screenshot of personal website" width="30%" height="30%">
</p>

### Links

- [Live site](https://mattdimicelli.github.io/personal_website/)
- [Repo](https://github.com/mattdimicelli/personal_website)

## My process

### Built with

- CSS Modules

### What I learned

I learned about the HTML `<map>` element, it's use cases and syntax, and how 
it is associated with an `<img>`.  I realized that as the size of the `<img>`
changed (due to responsive design) the `<map>` functionality would break.  react-
image-map creates an ImageMap component which solves this problem using percent-based
map areas.

It turns out that React does not natively support inline CSS media queries (eg. using a style object inline).  An external stylesheet can be used for media queries.  A "CSS Module" stylesheet (which must end in .module.css) are advantageous over regular stylesheets because the styles aren't accessible in children components; they are local scoped.  Alternatively a third-party library such as react-responsive or react-media-hook.  

Use value of `unset` with CSS property `all` to remove all the default styles for
a given element.

According to CSS Modules documentation, camelCase is recommended for class names (as opposed to kebab-case).  Names *could* be accessed with bracket notation for kebab-case but it could also cause issues.

CSS `object-fit` property: `contain` fits according to aspect ratio, `fill` stretches object to fill, and `cover` overflows container but maintains ratio.

One way to get Flexbox to shrink images to fit: set `nowrap` on the flexbox container, and then `width: 100%` on the `<img>` children.




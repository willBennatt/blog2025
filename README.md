# Will or Won't Blog

This is my new blog built with the static-site generator Eleventy. I started from the [eleventy base blog](https://github.com/11ty/eleventy-base-blog) and then created my own pages and styles on top of the basic structure.

## Adding new posts

Just create a new markdown or html file in the content/blog/ directory, supply the necessary frontmatter that helps format each post nicely, and you're done.

I like to put each post in its own directory with the images used in them. The images get automatically transformed during the build to a range of sizes and formats using the [eleventy-img plugin](https://www.npmjs.com/package/@11ty/eleventy-img).

## Deploying

TBD.

#### Content Security Policy

If your site enforces a [Content Security Policy](https://developer.mozilla.org/en-US/docs/Web/HTTP/CSP) (as public-facing sites should), you have a few choices (pick one):

1. In `base.njk`, remove `<style>{% getBundle "css" %}</style>` and uncomment `<link rel="stylesheet" href="{% getBundleFileUrl "css" %}">`
2. Configure the server with the CSP directive `style-src: 'unsafe-inline'` (less secure).

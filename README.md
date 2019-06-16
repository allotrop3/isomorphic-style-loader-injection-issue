# Isormorphic style loader css issue

This repository reproduces an issue in isomorphic-style-loader (possibly) whereby css is injected into the dom in the incorrect order.

To see the issue follow these steps using yarn or npm:

1. Install npm dependencies.
2. Run the `start` package.json script.
3. Open the project at `http://localhost:3000`.

## What to look out for

This project creates two react components: `App` and `OverrideAppBackgroundColor`. `OverrideAppBackgroundColor` simply attempts to override the `background-color` initially set by `App`. This is done by passing a `className` of `.app` from `OverrideAppBackgroundColor` to `App` with the new `background-color`. However the `OverrideAppBackgroundColor` `background-color` of `green` cannot be seen. Inspecting the HTML you will find that the `App` styles are injected **AFTER** `OverrideAppBackgroundColor`, which is not the correct behavior.

## Why do I think this is an issue with this loader

Changing the order of the `scss` file imports has no effect. However changing the order of the usage of `useStyles` appears to dictate the order the css is injected into the page. This assumption holds when considering the `useStyles` in `OverrideAppBackgroundColor` is "seen first" before the `App` is instantiated.
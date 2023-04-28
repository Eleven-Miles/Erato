### Erato

This is a boilerplate Vite + React starter template.

## Create New Project

Run `npx @elevenmiles/create-erato YourApp` to create a new project.

## Stack

This project uses SCSS and ITCSS style structure, with React Router for routing, React Helmet for SEO and React Transition Group for page transtitions.

To create pages, add `jsx` components in the pages directory. The pages are routed using Vite's `import.meta.glob`. The menu navigation is dynamically poulated from this functionality.

## Context

The app's state and data can be managed using React's `useContext` hook.

## Tests

Create a test in `components/tests/ComponentName.test.jsx`.

Run `yarn test`.
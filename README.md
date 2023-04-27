### Erato

This is a boilerplate Vite + React starter.

## Set Up

Pull repo and run `yarn`

## Stack

This project uses SCSS and ITCSS style structure, with React Router for routing, React Helmet for SEO and React Transition Group for page transtitions.

To create pages, add `jsx` components in the pages directory. The pages are routed using Vite's `import.meta.glob`. The menu navigation is dynamically poulated from this functionality.

## Context

The app's state and data can be managed using React's `useContext` hook. This is set up and in as default.
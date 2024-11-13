# MSW demo

This is a simple app to demonstrate [MSW](https://mswjs.io) library.

It was created as part of my presentation on [Frontkon](https://www.frontkon.cz/) 2024 conference:

- [Frontkon talk](https://www.youtube.com/watch?v=QTN5kgc0FFo)
- internal [Cookielab.io](https://cookielab.io) talk _(my dry-run)_
- associated [blog post](https://www.cookielab.io/blog/mock-service-worker-vyuziti-pro-testovani-i-vyvoj)

## Usage

Set `.env.local` file (see `.env.example` for reference) and then.

```zsh
npm install
npm run dev
```

## Demo app

The app has a single view with 2 pringles cans, that loads the initial data using HTTP GET request and while user votes using buttons, it propagates those changes using WebSockets. You can tweak the MSW handlers in `./src/mocks/browser.js` to play with the data.

## Description

The stopwatch you want

## Demo

_Visit [Demo link](https://vvalvvizal.github.io/GamtiWatch/)_

## Features

## How to run

### Local development

- Clone the project and cd into project
- npm install
- npm start and go to [link](*http://localhost:3000*)

### Deployment

- npm install
- npm run build
- npm run deploy

## Key technologies & Libraries used

- Typescript
- React

<hr>

- PWA

Cross-platform App을 이용한 크로스플랫폼 앱 구축

```tsx
    /* index.html*/
    <script>
      if ("serviceWorker" in navigator) {
        navigator.serviceWorker
          .register("/GamtiWatch/ServiceWorker.js")
          .then((registration) => {
            console.log("Service worker registration succeeded:", registration);
          })
          .catch((err) => {
            console.log("Service worker registration failed:", error);
          });
      } else {
        console.log("Service workers are not supported.");
      }
    </script>
```

### UI Materials

- selectbutton
  https://primereact.org/selectbutton/

- react-circular-progressbar
  https://www.npmjs.com/package/react-circular-progressbar

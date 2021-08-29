import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  :root {
    --ff-primary: 'Barlow', sans-serif;
    --ff-secondary: 'Fraunces', serif;

    /* Primary colors */
    --soft-red: hsl(7, 99%, 70%);
    --yellow: hsl(51, 100%, 49%);
    --dark-desaturated-cyan: hsl(167, 40%, 24%);
    --dark-blue: hsl(198, 62%, 26%);
    --dark-moderate-cyan: hsl(168, 34%, 41%);

    /* Neutral colors */
    --very-dark-desaturated-blue: hsl(212, 27%, 19%);
    --very-dark-grayish-blue: hsl(213, 9%, 39%);
    --dark-grayish-blue: hsl(232, 10%, 55%);
    --grayish-blue: hsl(210, 4%, 67%);
    --white: hsl(0, 0%, 100%);
  }

  body {
    margin: 0;
    min-width: 375px;
    max-width: 1440p;
    font-family: var(--ff-primary);
    font-size: 18px;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
`;
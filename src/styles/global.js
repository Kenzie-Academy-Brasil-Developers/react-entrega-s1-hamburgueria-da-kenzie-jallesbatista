import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
:root {
  /* Colors Pallet*/
  --color-primary: #27AE60;
  --color-primary-50: #93D7AF;
  --color-secondary: #EB5757;

  /* Grey Scale */
  --gray-100: #333333;
  --grey-50: #828282;
  --grey-20: #E0E0E0;
  --grey-0: #F5F5F5;
  --gray-4: #BDBDBD;
  /* Feedback Palette */
  --color-negative: #E60000;
  --color-warning: #FFCD07;
  --color-sucess: #168821;
  --color-information: #155BCB;

  /* Typography */
  --font-size-0: 1.625rem;
  --font-size-1: 1.375rem;
  --font-size-2: 1.125rem;
  --font-size-regular: 1rem;
  --font-size-3: 0.875rem;
  --font-size-small: 0.75rem;

  --font-weight-title: 700;
  --font-weight-button: 600;
  --font-weight-medium: 500;
  --font-weight-regular: 400;

  /* Sizes */
  --radius-0: 12px;
  --radius-1: 8px;
  --radius-2: 5px;

  --padding-button-1: 12px 20px;
  --padding-button-2: 20px;
  --padding-button-3: 10px 20px;
  --padding-container: 0 16px;
}

@import url('https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800&display=swap');

/* RESET */
html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed,
figure, figcaption, footer, header, hgroup,
menu, nav, output, ruby, section, summary,
time, mark, audio, video, select, input, button {
  outline: none;
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  font: inherit;
  vertical-align: baseline;
  box-sizing: border-box;
  font-family: 'Inter', sans-serif;
}

/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure,
footer, header, hgroup, menu, nav, section {
  display: block;
}

body {
  line-height: 1;
}

ol, ul {
  list-style: none;
}

blockquote, q {
  quotes: none;
}

blockquote:before, blockquote:after,
q:before, q:after {
  content: '';
  content: none;
}

table {
  border-collapse: collapse;
  border-spacing: 0;
}

/* Barra de Rolagem */
ul::-webkit-scrollbar {
  width: 6px;
}

ul::-webkit-scrollbar-track {
  background: transparent;
  border-radius: 2px;
}

ul::-webkit-scrollbar-thumb {
  background: rgba(0, 0, 0, 0.2);
  border-radius: 5px;
}

/* Global */
button {
  cursor: pointer;
  transition: 0.3s
}

button:active {
  scale: 0.9;
}

main {
  margin-top: 12px;
  max-width: 1200px;
  padding: var(--padding-container);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 6px;
}

@media (min-width: 768px) {
  main {
    flex-direction: row;
    gap: 12px;
    margin: 30px auto;
  }
}
`;

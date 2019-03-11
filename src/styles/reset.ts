import {css} from 'styled-components';

const reset = css`
  html,
  body,
  p,
  ol,
  ul,
  li,
  dl,
  dt,
  dd,
  blockquote,
  figure,
  fieldset,
  legend,
  textarea,
  pre,
  iframe,
  hr,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin: 0;
    padding: 0;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-size: 100%;
    font-weight: normal;
  }

  ul {
    list-style: none;
  }

  button,
  input,
  select,
  textarea {
    margin: 0;
  }

  html {
    box-sizing: border-box;
  }

  * {
    box-sizing: border-box;
  }

  *:before,
  *:after {
    box-sizing: inherit;
  }

  img,
  embed,
  object,
  audio,
  video {
    max-width: 100%;
  }

  iframe {
    border: 0;
  }

  table {
    border-collapse: collapse;
    border-spacing: 0;
  }

  td,
  th {
    padding: 0;
    text-align: left;
  }

  article,
  aside,
  figure,
  footer,
  header,
  hgroup,
  section {
    display: block;
  }

  small {
    font-size: 0.875em;
  }

  span {
    font-style: inherit;
    font-weight: inherit;
  }

  input[type='checkbox'],
  input[type='radio'] {
    vertical-align: baseline;
  }

  a[href^='tel'] {
    color: inherit;
    text-decoration: none;
  }

  a:visited {
    color: inherit;
  }
`;

export {reset};

import {css} from 'styled-components';

const content = css`
  main li + li {
    margin-top: 0.25em;
  }
  main h1,
  main h2,
  main h3,
  main h4,
  main h5,
  main h6 {
    color: inherit;
    font-weight: 400;
    line-height: 1.125;
  }
  main h1 {
    font-size: 4em;
    margin-bottom: 0.5em;
  }
  main h1:not(:first-child) {
    margin-top: 1em;
  }
  main h2 {
    font-size: 3em;
    margin-bottom: 0.5714em;
  }
  @media (max-width: 550px) {
    main h2 {
      font-size: 2rem;
    }
  }
  main h3 {
    font-size: 2.5em;
    margin-bottom: 0.6666em;
  }
  main h3:not(:first-child) {
    margin-top: 1.3333em;
  }
  main h4 {
    font-size: 28px;
    margin-bottom: 0.2em;
  }
  main h5 {
    font-size: 22px;
    margin-bottom: 0.28em;
  }
  main h6 {
    font-size: 18px;
    margin-bottom: 10px;
  }

  .text-light {
    color: #949ea8;
  }

  .text-dark {
    color: #323c46;
  }

  .text-alert {
    color: #ff4081;
  }
`;

export {content};

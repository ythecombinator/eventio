import {css} from 'styled-components';

const col = css`
  .cols-2 {
    margin-left: -1rem;
    margin-right: -1rem;
  }
  .cols-2:last-child {
    margin-bottom: -0.75rem;
  }
  .cols-2:not(:last-child) {
    margin-bottom: 0.75rem;
  }
  @media (max-width: 550px) {
    .cols-2 {
      max-width: 100%;
      margin-left: 0;
      margin-right: 0;
    }
  }
  .cols-2 .col {
    width: 50%;
    position: relative;
    box-sizing: border-box;
    vertical-align: top;
    float: left;
    padding: 1rem;
  }
  @media (max-width: 600px) {
    .cols-2 .col {
      width: 100%;
      padding-top: 5px;
      padding-bottom: 5px;
      padding-left: 0;
      padding-right: 0;
    }
  }

  .cols-3 {
    margin-left: -1rem;
    margin-right: -1rem;
  }
  .cols-3:last-child {
    margin-bottom: -0.75rem;
  }
  .cols-3:not(:last-child) {
    margin-bottom: 0.75rem;
  }
  @media (max-width: 550px) {
    .cols-3 {
      max-width: 100%;
      margin-left: 0;
      margin-right: 0;
    }
  }
  .cols-3 .col {
    width: 33.3333333333%;
    position: relative;
    box-sizing: border-box;
    vertical-align: top;
    float: left;
    padding: 1rem;
  }
  @media (max-width: 1000px) {
    .cols-3 .col {
      width: 50%;
    }
  }
  @media (max-width: 600px) {
    .cols-3 .col {
      width: 100%;
      padding-top: 5px;
      padding-bottom: 5px;
      padding-left: 0;
      padding-right: 0;
    }
  }

  .cols-4 {
    margin-left: -1rem;
    margin-right: -1rem;
  }
  .cols-4:last-child {
    margin-bottom: -0.75rem;
  }
  .cols-4:not(:last-child) {
    margin-bottom: 0.75rem;
  }
  @media (max-width: 550px) {
    .cols-4 {
      max-width: 100%;
      margin-left: 0;
      margin-right: 0;
    }
  }
  .cols-4 .col {
    width: 25%;
    position: relative;
    box-sizing: border-box;
    vertical-align: top;
    float: left;
    padding: 1rem 2%;
  }
  @media (max-width: 1050px) {
    .cols-4 .col {
      width: 50%;
      padding: 1rem;
    }
  }
  @media (max-width: 600px) {
    .cols-4 .col {
      width: 100%;
      padding-top: 5px;
      padding-bottom: 5px;
      padding-left: 0;
      padding-right: 0;
    }
  }

  .cols-1 > .col {
    padding: 0.5rem 0;
  }
`;

export {col};

import {css} from 'styled-components';

const column = css`
  .columns-2 {
    margin-left: -1rem;
    margin-right: -1rem;
  }

  .columns-2:last-child {
    margin-bottom: -0.75rem;
  }

  .columns-2:not(:last-child) {
    margin-bottom: 0.75rem;
  }

  @media (max-width: 550px) {
    .columns-2 {
      max-width: 100%;
      margin-left: 0;
      margin-right: 0;
    }
  }

  .columns-2 .column {
    width: 50%;
    position: relative;
    box-sizing: border-box;
    vertical-align: top;
    float: left;
    padding: 1rem;
  }

  @media (max-width: 600px) {
    .columns-2 .column {
      width: 100%;
      padding-top: 5px;
      padding-bottom: 5px;
      padding-left: 0;
      padding-right: 0;
    }
  }

  .columns-3 {
    margin-left: -1rem;
    margin-right: -1rem;
  }

  .columns-3:last-child {
    margin-bottom: -0.75rem;
  }

  .columns-3:not(:last-child) {
    margin-bottom: 0.75rem;
  }

  @media (max-width: 550px) {
    .columns-3 {
      max-width: 100%;
      margin-left: 0;
      margin-right: 0;
    }
  }

  .columns-3 .column {
    width: 33.3333333333%;
    position: relative;
    box-sizing: border-box;
    vertical-align: top;
    float: left;
    padding: 1rem;
  }

  @media (max-width: 1000px) {
    .columns-3 .column {
      width: 50%;
    }
  }

  @media (max-width: 600px) {
    .columns-3 .column {
      width: 100%;
      padding-top: 5px;
      padding-bottom: 5px;
      padding-left: 0;
      padding-right: 0;
    }
  }

  .columns-4 {
    margin-left: -1rem;
    margin-right: -1rem;
  }

  .columns-4:last-child {
    margin-bottom: -0.75rem;
  }

  .columns-4:not(:last-child) {
    margin-bottom: 0.75rem;
  }

  @media (max-width: 550px) {
    .columns-4 {
      max-width: 100%;
      margin-left: 0;
      margin-right: 0;
    }
  }

  .columns-4 .column {
    width: 25%;
    position: relative;
    box-sizing: border-box;
    vertical-align: top;
    float: left;
    padding: 1rem 2%;
  }

  @media (max-width: 1050px) {
    .columns-4 .column {
      width: 50%;
      padding: 1rem;
    }
  }
  @media (max-width: 600px) {
    .columns-4 .column {
      width: 100%;
      padding-top: 5px;
      padding-bottom: 5px;
      padding-left: 0;
      padding-right: 0;
    }
  }

  .columns-1 > .column {
    padding: 0.5rem 0;
  }
`;

export {column};

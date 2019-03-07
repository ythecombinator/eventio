import {css} from 'styled-components';

const helpers = css`
  .row:after,
  .cols-4 .col:after,
  .cols-3 .col:after,
  .cols-2 .col:after {
    display: table;
    clear: both;
    content: '';
  }

  .clickable {
    cursor: pointer;
  }

  .hidden {
    display: none;
  }

  .flex {
    display: flex;
  }

  .align-center {
    text-align: center;
  }

  .centered-content {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }

  .flex-row {
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
`;

export {helpers};

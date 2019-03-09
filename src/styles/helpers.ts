import {css} from 'styled-components';

const clickable = css`
  cursor: pointer;
`;

const hidden = css`
  display: none;
`;

const flex = css`
  display: flex;
`;

const alignCenter = css`
  text-align: center;
`;

const centeredContent = css`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const flexRow = css`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const container = css`
  max-width: 1300px;
  width: 100%;
  margin: 0 auto;
  position: relative;
  padding: 0 60px;

  @media (max-width: 1000px) {
    padding: 0 60px;
  }

  @media (max-width: 750px) {
    padding: 0 30px;
    max-width: none;
  }

  @media (max-width: 400px) {
    padding: 0 20px;
  }
`;

const text = {
  light: css`
    color: #949ea8;
  `,
  dark: css`
    color: #323c46;
  `,
  alert: css`
    color: #ff4081;
  `,
};

export {clickable, hidden, flex, alignCenter, centeredContent, flexRow, container, text};

import {column, helpers} from 'styles';

import {css} from 'styled-components';

import styled from 'utils/theme';

const ListView = styled.div`
  .List-filter li {
    list-style: none;
    display: inline-block;
    font-size: 14px;
    text-transform: uppercase;
    padding: 0 34px 0 0;
    font-weight: 600;
    color: #9ca5af;
    transition: color 0.2s cubic-bezier(0.165, 0.84, 0.44, 1);
  }
  .List-filter li div {
    cursor: pointer;
  }
  .List-filter li:hover {
    color: #cacdd0;
  }
  .List-filter li.active {
    color: #323c46;
  }

  .FilterMenu-dropdown {
    position: relative;
    font-size: 14px;
    font-weight: 600;
    color: #9ca5af;
    cursor: pointer;
  }

  .FilterMenu-selected {
    margin-left: 8px;
  }
  .FilterMenu-selected:hover {
    color: black;
  }
`;

const EventComponentContainerStyle = styled.div`
  :after {
    display: table;
    clear: both;
    content: '';
  }
`;

const GridView = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-gap: 15px;
`;

export {ListView, EventComponentContainerStyle, GridView};

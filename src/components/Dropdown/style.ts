import {hidden} from 'styles/helpers';

import styled from 'utils/theme';

interface DropdownViewProps {
  isOpen: boolean;
}

const DropdownView = styled.div<DropdownViewProps>`
  ${(props) => !props.isOpen && hidden};

  position: absolute;
  right: 0;
  top: 100%;
  padding-top: 15px;

  ul {
    position: relative;
    min-width: 115px;
    padding: 6px 0;
    background-color: white;
    box-shadow: 0 1px 50px rgba(0, 0, 0, 0.05);
    border-radius: 10px;
  }

  ul:after {
    content: '';
    position: absolute;
    top: -20px;
    right: 15px;
    width: 28px;
    height: 28px;
    background-image: url('/static/triangle.svg');
    background-repeat: no-repeat;
    background-position: center;
  }

  li {
    list-style: none;
    padding: 5px 20px;
  }

  a {
    color: #9ca5af;
    display: block;
  }

  a:hover {
    color: #323c46;
  }
`;

export default DropdownView;

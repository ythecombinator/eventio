import {css} from 'styled-components';
import {flexRow, text} from 'styles/mixins';

import styled, {colors} from 'utils/theme';

const DropDownView = styled.div`
  ${flexRow}
  position: relative;
  font-size: 14px;
  font-weight: 600;
  color: ${(props) => props.theme.colors.gray10};
  cursor: pointer;
  svg {
    margin-left: 10px;
  }
`;

const SelectedView = styled.p`
  ${text.dark}
  margin-left: 8px;
  :hover {
    color: black;
  }
`;

const DesktopMenuView = css`
  li {
    list-style: none;
    display: inline-block;
    font-size: 14px;
    text-transform: uppercase;
    padding: 0 34px 0 0;
    font-weight: 600;
    color: ${colors.gray10};
    transition: color 0.2s cubic-bezier(0.165, 0.84, 0.44, 1);
  }

  li div {
    cursor: pointer;
  }

  li:hover {
    color: ${colors.gray13};
  }
`;

const MobileMenuView = css`
  z-index: 10;
  display: none;
  position: absolute;
  width: 100%;
  top: 100%;
  background: white;
  text-align: left;
  padding: 1rem;
  text-transform: uppercase;
  box-shadow: 0 1px 50px rgba(0, 0, 0, 0.05);
  border-radius: 5px;

  div {
    cursor: pointer;
    padding: 10px 0;
  }

  div:hover {
    color: ${(props) => props.theme.colors.grayishBlue2};
  }
`;

const open = css`
  display: block;
`;

interface MenuViewProps {
  isDesktop: boolean;
  open: boolean;
}

const MenuView = styled.ul<MenuViewProps>`
  ${(props) => props.isDesktop && DesktopMenuView};
  ${(props) => !props.isDesktop && MobileMenuView};
  ${(props) => props.open && open};
`;

interface MenuItemViewProps {
  active: boolean;
}

const MenuItemView = styled.li<MenuItemViewProps>`
  color: ${(props) => props.active && props.theme.colors.grayishBlue2} !important;
`;

export {DropDownView, SelectedView, MenuView, MenuItemView};

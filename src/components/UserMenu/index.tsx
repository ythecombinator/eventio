import React, {FunctionComponent} from 'react';
import {Arrow} from 'components/Icons';
import Popover from 'components/Popover';

import styled, {theme} from 'utils/theme';

// Interfaces

interface UserMenuProps {
  userName: string;
  userPictureUrl: string;
}

// Components

const UserMenuNameView = styled.p`
  color: ${(props) => props.theme.UserMenu.name};
  font-size: 14px;
  padding: 0.5em;
`;

const UserMenuAvatarView = styled.div`
  width: 40px;
  height: 40px;
  color: ${(props) => props.theme.UserMenu.avatar.color};
  background-color: ${(props) => props.theme.UserMenu.avatar.backgroundColor};
  display: flex;
  position: relative;
  overflow: hidden;
  font-size: 1.25rem;
  align-items: center;
  flex-shrink: 0;
  border-radius: 50%;
  justify-content: center;
  img {
    width: 40px;
    height: 40px;
  }
`;

const UserMenuMainContent = styled.div`
  min-width: 160px;
  font-size: 14px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const UserMenuView = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

const UserMenuButton = styled.button`
  color: ${theme.UserMenu.button};
  display: inline-block;
  border: none;
  padding: 0.5rem;
  margin: 0;
  text-decoration: none;
  background: white;
  font-size: 1rem;
  line-height: 1;
  cursor: pointer;
  text-align: center;
  -webkit-appearance: none;
  -moz-appearance: none;
`;

const UserMenu: FunctionComponent<UserMenuProps> = (props) => {
  const {children, userName, userPictureUrl} = props;

  return (
    <Popover
      target={
        <UserMenuView>
          <UserMenuAvatarView>
            <img src={userPictureUrl} />
          </UserMenuAvatarView>
          <UserMenuNameView>{userName}</UserMenuNameView>
          <Arrow color={theme.UserMenu.dropdown} width={10} height={5} />
        </UserMenuView>
      }
      placement="bottom-end"
    >
      <UserMenuMainContent>{children}</UserMenuMainContent>
    </Popover>
  );
};

export default UserMenu;
export {UserMenuButton};

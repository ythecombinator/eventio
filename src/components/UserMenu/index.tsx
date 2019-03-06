import React, {FunctionComponent} from 'react';
import {Arrow} from 'components/Icons';
import Popover from 'components/Popover';

import {theme} from 'utils/theme';

import {
  UserMenuAvatarView,
  UserMenuButton,
  UserMenuMainContent,
  UserMenuNameView,
  UserMenuView,
} from './style';

interface UserMenuProps {
  userName: string;
  userPictureUrl: string;
}

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

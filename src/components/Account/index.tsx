import React, {PureComponent} from 'react';
import {User} from 'modules/auth/models';

import Avatar from 'components/Avatar';
import Dropdown, {DropdownProps} from 'components/Dropdown';

import {getName} from 'utils/user';

import {AccountView, ButtonView} from './style';

interface AccountProps extends Pick<DropdownProps, 'setLogout'> {
  user: User;
}

const defaultProps = {
  user: {} as User,
};

const initialState = {
  isDropdownVisible: false,
};

type AccountState = typeof initialState;

class Account extends PureComponent<AccountProps, AccountState> {
  static defaultProps = defaultProps;

  readonly state = initialState;

  open = () => {
    this.setState({isDropdownVisible: true});
  };

  close = () => {
    this.setState({isDropdownVisible: false});
  };

  render() {
    const {user, setLogout} = this.props;
    const {fullName, initials} = getName(user);

    return (
      <AccountView onClick={this.open} onMouseLeave={this.close}>
        <Avatar initials={initials} />
        <ButtonView>
          <p>{fullName}</p>
        </ButtonView>
        <Dropdown isOpen={this.state.isDropdownVisible} setLogout={setLogout} />
      </AccountView>
    );
  }
}

export default Account;

import React, {FunctionComponent} from 'react';
import Link from 'next/link';

import DropdownView from './style';

export interface DropdownProps {
  isOpen: boolean;
  setLogout: () => void;
}

const Dropdown: FunctionComponent<DropdownProps> = (props) => {
  const {isOpen = false, setLogout} = props;
  return (
    <DropdownView isOpen={isOpen}>
      <ul>
        <li>
          <Link href="/profile">
            <a>Profile</a>
          </Link>
        </li>
        <li>
          <a onClick={setLogout}>Logout</a>
        </li>
      </ul>
    </DropdownView>
  );
};

export default Dropdown;

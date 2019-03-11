import React, {Component} from 'react';
import {EventTypes} from 'modules/events/models';

import {Dropdown} from 'components/Icons';

import {colors} from 'utils/theme';

import {withContext} from '../../utils';
import {DropDownView, MenuItemView, MenuView, SelectedView} from './style';

const renderItem = (props) => {
  const {name, type, activeFilter, toggleFilter} = props;
  const active = activeFilter === type;
  return (
    <MenuItemView active={active}>
      <div onClick={() => toggleFilter(type)}>{name}</div>
    </MenuItemView>
  );
};

interface Props {
  filter: EventTypes;
  toggleFilter: () => void;
}

const initialState = {
  isDesktop: true,
  isOpen: true,
  selected: EventTypes.future,
};

type State = typeof initialState;

class FilterMenu extends Component<Props, State> {
  readonly state = initialState;

  static getDerivedStateFromProps(props: Props) {
    return {
      selected: props.filter,
    };
  }

  componentDidMount() {
    this.onResize();
    window.addEventListener('resize', this.onResize);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.onResize);
  }

  onResize = () => {
    const isDesktop = window.innerWidth > 750;
    if (isDesktop === this.state.isDesktop) {
      return false;
    }
    this.setState({isDesktop});
  };

  toggleDropdown = () => {
    this.setState({isOpen: !this.state.isOpen});
  };

  mobileVersion = () => {
    return (
      <DropDownView onClick={this.toggleDropdown}>
        <span>SHOW:</span>
        <SelectedView>{this.state.selected}</SelectedView>
        <Dropdown width={10} height={5} color={colors.grayishBlue2} />
        {this.menu()}
      </DropDownView>
    );
  };

  menu = () => {
    const {filter, toggleFilter} = this.props;
    const {isOpen, isDesktop} = this.state;
    return (
      <MenuView open={isOpen} isDesktop={isDesktop}>
        {renderItem({
          name: 'All events',
          type: EventTypes.all,
          activeFilter: filter,
          toggleFilter,
        })}
        {renderItem({
          name: 'Future events',
          type: EventTypes.future,
          activeFilter: filter,
          toggleFilter,
        })}
        {renderItem({
          name: 'Past events',
          type: EventTypes.past,
          activeFilter: filter,
          toggleFilter,
        })}
      </MenuView>
    );
  };

  render() {
    const {isDesktop} = this.state;
    return isDesktop ? this.menu() : this.mobileVersion();
  }
}

export default withContext(FilterMenu);

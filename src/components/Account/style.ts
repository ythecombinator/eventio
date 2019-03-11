import styled from 'utils/theme';

const AccountView = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  cursor: pointer;
`;

const ButtonView = styled.div`
  margin: 0 8px;
  display: flex;
  align-items: center;
  cursor: pointer;

  :after {
    content: '';
    margin-left: 8px;
    width: 10px;
    height: 10px;
    background-image: url('/static/icon/icon-dropdown.svg');
    background-repeat: no-repeat;
    background-position: center;
    background-size: 100%;
  }

  :hover {
    color: ${(props) => props.theme.colors.grayishBlue2};
  }

  :hover:after {
    background-image: url('/static/icon/icon-dropdown-dark.svg');
  }

  @media (max-width: 400px) {
    p {
      display: none;
    }

    :after {
      margin-left: 0;
    }
  }
`;

export {AccountView, ButtonView};

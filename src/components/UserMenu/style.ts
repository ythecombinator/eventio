import styled from 'utils/theme';

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

const UserMenuView = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

const UserMenuMainContent = styled.div`
  min-width: 160px;
  font-size: 14px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const UserMenuButton = styled.button`
  color: ${(props) => props.theme.UserMenu.button};
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

export {UserMenuNameView, UserMenuAvatarView, UserMenuView, UserMenuMainContent, UserMenuButton};

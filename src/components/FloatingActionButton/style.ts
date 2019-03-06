import styled from 'utils/theme';

const FloatingActionButtonView = styled.button`
  display: flex;
  justify-content: center;
  width: 55px;
  height: 55px;
  border: 0;
  border-radius: 50%;
  background: ${(props) => props.color};
  position: fixed;
  bottom: 30px;
  right: 30px;
  cursor: pointer;
  box-shadow: 0px 2px 5px #666;
`;

const FloatingActionButtonIconView = styled.div`
  font-size: 20px;
`;

export {FloatingActionButtonView, FloatingActionButtonIconView};

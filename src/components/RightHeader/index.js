import ReactDOM from 'react-dom';

const RightHeader = ({children}) => {
  const rightHeaderDiv = process.browser && document.getElementById('right-header');
  return rightHeaderDiv && ReactDOM.createPortal(children, rightHeaderDiv);
};

export default RightHeader;

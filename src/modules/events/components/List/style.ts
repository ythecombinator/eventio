import styled from 'utils/theme';

const EventComponentContainerStyle = styled.div`
  :after {
    display: table;
    clear: both;
    content: '';
  }
`;

interface GridViewProps {
  isList: boolean;
}

const GridView = styled.div<GridViewProps>`
  display: grid;
  grid-template-columns: repeat(
    auto-fill,
    minmax(${(props) => (props.isList ? '100%' : '300px')}, 1fr)
  );
  grid-gap: 15px;
`;

export {EventComponentContainerStyle, GridView};

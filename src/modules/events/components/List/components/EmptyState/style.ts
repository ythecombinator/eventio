import {centeredContent, container} from 'styles/mixins';

import styled from 'utils/theme';

const EmptyStateView = styled.section`
  margin-top: 100px;

  img {
    display: block;
    margin: 0;
    width: 350px;
    margin-bottom: 20px;
  }
`;

const ContainerView = styled.div`
  ${container}
  ${centeredContent}
`;

export {EmptyStateView, ContainerView};

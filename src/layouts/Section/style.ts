import {centeredContent, container} from 'styles/helpers';

import styled from 'utils/theme';

interface ContainerViewProps {
  centeredContent: boolean;
}

const ContainerView = styled.div<ContainerViewProps>`
  ${container}
  ${(props) => props.centeredContent && centeredContent};
`;

export {ContainerView};

import React, {FunctionComponent} from 'react';
import Spinner from 'components/Spinner';

import {colors} from 'utils/theme';

import {ContainerView, EmptyStateView} from './style';

interface Props {
  message: string;
  loading: boolean;
}

const EmptyState: FunctionComponent<Props> = (props) => {
  const {message, loading} = props;
  return (
    <EmptyStateView>
      <ContainerView>
        {loading ? (
          <Spinner size={60} color={colors.black1} />
        ) : (
          <>
            <img src="/static/images/empty-state.svg" />
            <p>{message}</p>
          </>
        )}
      </ContainerView>
    </EmptyStateView>
  );
};

EmptyState.defaultProps = {
  message: 'No Events',
};

export default EmptyState;

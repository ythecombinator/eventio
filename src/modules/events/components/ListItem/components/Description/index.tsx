import React, {FunctionComponent} from 'react';
import Link from 'next/link';

import {trim} from 'utils/string';

import {DescriptionView, TitleView, WrapperView} from './style';

interface Props {
  title: string;
  description: string;
  eventId: string;
}

const Description: FunctionComponent<Props> = (props) => {
  const {title, description, eventId} = props;

  const linkProps = {pathname: '/event', query: {id: eventId}};

  return (
    <Link href={linkProps}>
      <WrapperView>
        <TitleView>{title}</TitleView>
        <DescriptionView>{trim(description, 31)}</DescriptionView>
      </WrapperView>
    </Link>
  );
};

export default Description;

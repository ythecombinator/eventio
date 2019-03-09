import React, {ReactNode} from 'react';
import {ContainerView} from './style';

interface Props {
  container: boolean;
  centeredContent: boolean;
  children: ReactNode;
}

const Section = (props: Props) => {
  const {children, container, centeredContent} = props;

  return (
    <section>
      {container ? (
        <ContainerView centeredContent={centeredContent}>{children}</ContainerView>
      ) : (
        children
      )}
    </section>
  );
};

Section.defaultProps = {
  container: true,
  centeredContent: false,
};

export default Section;

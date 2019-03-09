import React, {FunctionComponent} from 'react';
import AvatarView from './style';

interface Props {
  image?: string;
  initials: string;
  size?: 'small' | 'big';
}

const Avatar: FunctionComponent<Props> = (props) => {
  const {image, initials, size} = props;
  const avatarBg = image ? {backgroundImage: `url(${image})`} : null;
  return (
    <AvatarView big={size === 'big'} style={avatarBg}>
      {!image && initials && <p>{initials}</p>}
    </AvatarView>
  );
};

Avatar.defaultProps = {
  size: 'small',
  image: null,
  initials: '',
};

export default Avatar;

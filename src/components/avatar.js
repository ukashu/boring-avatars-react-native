import React from 'react';
import PropTypes from 'prop-types';
import AvatarBauhaus from './avatar-bauhaus.js';
import AvatarRing from './avatar-ring.js';
import AvatarPixel from './avatar-pixel.js';
import AvatarBeam from './avatar-beam.js';
import AvatarSunset from './avatar-sunset.js';
import AvatarMarble from './avatar-marble.js';

const variants = ['pixel', 'bauhaus', 'ring', 'beam', 'sunset', 'marble'];
const deprecatedVariants = { geometric: 'beam', abstract: 'bauhaus' };

const Avatar = ({
  variant = 'marble',
  colors = ['#92A1C6', '#146A7C', '#F0AB3D', '#C271B4', '#C20D90'],
  name = 'Clara Barton',
  square = false,
  title = false,
  size = 40,
  ...props
}) => {
  const avatarProps = { colors, name, title, size, square, ...props };
  const checkedVariant = () => {
    if (Object.keys(deprecatedVariants).includes(variant)) {
      return deprecatedVariants[variant];
    }
    if (variants.includes(variant)) {
      return variant;
    }
    return 'marble';
  };
  const avatars = {
    pixel: <AvatarPixel {...avatarProps} />,
    bauhaus: <AvatarBauhaus {...avatarProps} />,
    ring: <AvatarRing {...avatarProps} />,
    beam: <AvatarBeam {...avatarProps} />,
    sunset: <AvatarSunset {...avatarProps} />,
    marble: <AvatarMarble {...avatarProps} />,
  };
  return avatars[checkedVariant()];
};

Avatar.propTypes = {
  variant: PropTypes.oneOf(variants),
};

export default Avatar;

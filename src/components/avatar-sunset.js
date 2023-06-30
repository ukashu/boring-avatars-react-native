import * as React from 'react';
import { hashCode, getRandomColor } from '../utilities.js';
import Svg, { ClipPath, Rect, G, Defs, LinearGradient, Stop, Text, Path } from 'react-native-svg'

const ELEMENTS = 4;
const SIZE = 80;

function generateColors(name, colors) {
  const numFromName = hashCode(name);
  const range = colors && colors.length;

  const colorsList = Array.from({ length: ELEMENTS }, (_, i) =>
    getRandomColor(numFromName + i, colors, range),
  );

  return colorsList;
}

const AvatarSunset = (props) => {
  const sunsetColors = generateColors(props.name, props.colors);
  const name = props.name.replace(/\s/g, '');
  const maskID = React.useId();

  return (
    <Svg
      viewBox={'0 0 ' + SIZE + ' ' + SIZE}
      fill="none"
      role="img"
      xmlns="http://www.w3.org/2000/svg"
      width={props.size}
      height={props.size}
    >
      {props.title && <Text>{props.name}</Text>}
      <ClipPath id={maskID} maskUnits="userSpaceOnUse" x={0} y={0} width={SIZE} height={SIZE}>
        <Rect width={SIZE} height={SIZE} rx={props.square ? undefined : SIZE * 2} fill="#FFFFFF" />
      </ClipPath>
      <G clipPath={`url(#${maskID})`}>
        <Path fill={'url(#gradient_paint0_linear_' + name + ')'} d="M0 0h80v40H0z" />
        <Path fill={'url(#gradient_paint1_linear_' + name + ')'} d="M0 40h80v40H0z" />
      </G>
      <Defs>
        <LinearGradient
          id={'gradient_paint0_linear_' + name}
          x1={SIZE / 2}
          y1={0}
          x2={SIZE / 2}
          y2={SIZE / 2}
          gradientUnits="userSpaceOnUse"
        >
          <Stop stopColor={sunsetColors[0]} />
          <Stop offset={1} stopColor={sunsetColors[1]} />
        </LinearGradient>
        <LinearGradient
          id={'gradient_paint1_linear_' + name}
          x1={SIZE / 2}
          y1={SIZE / 2}
          x2={SIZE / 2}
          y2={SIZE}
          gradientUnits="userSpaceOnUse"
        >
          <Stop stopColor={sunsetColors[2]} />
          <Stop offset={1} stopColor={sunsetColors[3]} />
        </LinearGradient>
      </Defs>
    </Svg>
  );
};

export default AvatarSunset;

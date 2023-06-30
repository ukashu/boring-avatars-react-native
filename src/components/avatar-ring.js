import React from 'react';
import { hashCode, getRandomColor } from '../utilities.js';
import Svg, { ClipPath, Rect, Text, G, Circle, Path } from 'react-native-svg'

const SIZE = 90;
const COLORS = 5;

function generateColors(colors, name) {
  const numFromName = hashCode(name);
  const range = colors && colors.length;
  const colorsShuffle = Array.from({ length: COLORS }, (_, i) =>
    getRandomColor(numFromName + i, colors, range),
  );
  const colorsList = [];
  colorsList[0] = colorsShuffle[0];
  colorsList[1] = colorsShuffle[1];
  colorsList[2] = colorsShuffle[1];
  colorsList[3] = colorsShuffle[2];
  colorsList[4] = colorsShuffle[2];
  colorsList[5] = colorsShuffle[3];
  colorsList[6] = colorsShuffle[3];
  colorsList[7] = colorsShuffle[0];
  colorsList[8] = colorsShuffle[4];

  return colorsList;
}

const AvatarRing = (props) => {
  const ringColors = generateColors(props.colors, props.name);
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
        <Path d="M0 0h90v45H0z" fill={ringColors[0]} />
        <Path d="M0 45h90v45H0z" fill={ringColors[1]} />
        <Path d="M83 45a38 38 0 00-76 0h76z" fill={ringColors[2]} />
        <Path d="M83 45a38 38 0 01-76 0h76z" fill={ringColors[3]} />
        <Path d="M77 45a32 32 0 10-64 0h64z" fill={ringColors[4]} />
        <Path d="M77 45a32 32 0 11-64 0h64z" fill={ringColors[5]} />
        <Path d="M71 45a26 26 0 00-52 0h52z" fill={ringColors[6]} />
        <Path d="M71 45a26 26 0 01-52 0h52z" fill={ringColors[7]} />
        <Circle cx={45} cy={45} r={23} fill={ringColors[8]} />
      </G>
    </Svg>
  );
};

export default AvatarRing;

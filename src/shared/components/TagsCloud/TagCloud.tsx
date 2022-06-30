import React, { FC } from 'react';
import { TagCloud } from 'react-tagcloud';
import { keyframes } from '@emotion/react';
import { Box } from '@mui/material';

const blinker = keyframes({ '50%': { opacity: 0 } });

const data = [
  { value: 'jQuery' },
  { value: 'MongoDB' },
  { value: 'JavaScript' },
  { value: 'React' },
  { value: 'Nodejs' },
  { value: 'Express.js' },
  { value: 'HTML5' },
  { value: 'CSS3' },
  { value: 'Webpack' },
  { value: 'Babel.js' },
  { value: 'ECMAScript' },
  { value: 'Jest' },
  { value: 'Mocha' },
  { value: 'React Native' },
];

const customRenderer = (tag: any, size: any, color: any) => (
  <Box
    key={tag.value}
    sx={{
      animation: `${blinker} 1s linear infinite`,
      display: 'inline-block',
      animationDelay: `${Math.random() * 2}s`,
      fontSize: `${size / 2}em`,
      border: `2px solid ${color}`,
      margin: '3px',
      padding: '3px',
      color,
    }}
  >
    {tag.value}
  </Box>
);

interface ITagCloudComponent {
  props?: any;
}

const TagCloudComponent: FC<ITagCloudComponent> = () => (
  <TagCloud
    tags={data}
    minSize={1}
    maxSize={5}
    renderer={customRenderer}
    onClick={(tag: { value: string }) => alert(`'${tag.value}' was selected!`)}
  />
);

export default TagCloudComponent;

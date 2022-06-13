import { Box } from '@material-ui/core';
import React, { FC } from 'react';

interface IHomePage {
  name: string;
  surname: string;
}

const HomePage: FC<IHomePage> = ({ name, surname }) => (
  <Box>
    {name}
    {surname}
  </Box>
);

export default HomePage;

import React, { FC } from 'react';
import { Box, Container, makeStyles } from '@material-ui/core';
import Grid from '@mui/material/Grid';
import Header from '../../components/Header/Header';
import Sidebar from '../../components/Sidebar/Sidebar';
import ToolBar from '../../components/ToolBar/ToolBar';
import CarouselComponent from '../../components/Carousel/Carousel';
import CardItem from '../../shared/components/CardItem';

const useStyles = makeStyles({
  root: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  grid: {
    flex: 1,
  },
  grid_item: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    height: '100%',
  },
  list: {
    flex: 1,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    columnGap: '2px',
    flexWrap: 'wrap',
  },
});

interface IHomePage {
  name: string;
  surname: string;
}

const HomePage: FC<IHomePage> = ({ name, surname }) => {
  const classes = useStyles();
  console.log(name, surname);

  return (
    <Box className={classes.root}>
      <Header />
      <Container className={classes.grid} fixed>
        <Grid
          sx={{ height: '100%' }}
          container
          columnSpacing={{ xs: 1, sm: 2, md: 3 }}
        >
          <Grid item xs={3} sm={4}>
            <Sidebar />
          </Grid>
          <Grid item xs={9} sm={8}>
            <Box className={classes.grid_item}>
              <CarouselComponent />
              <Box className={classes.list}>
                <CardItem />
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>
      <ToolBar />
    </Box>
  );
};

export default HomePage;

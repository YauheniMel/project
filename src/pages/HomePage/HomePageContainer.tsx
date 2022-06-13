import React, { FC } from 'react';
import { connect } from 'react-redux';
import HomePage from './HomePage';

interface IHomePageContainer {
  name: string;
  surname: string;
}

const HomePageContainer: FC<IHomePageContainer> = ({ name, surname }) => (
  <HomePage name={name} surname={surname} />
);

const mapStateToProps = (state: any) => ({
  name: state.user.name,
  surname: state.user.surname,
});

export default connect(mapStateToProps)(HomePageContainer);

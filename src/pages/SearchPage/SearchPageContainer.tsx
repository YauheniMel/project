import React, { FC } from 'react';
import { connect } from 'react-redux';
import SearchPage from './SearchPage';

interface ISearchPageContainer {
  props?: any;
}

const SearchPageContainer: FC<ISearchPageContainer> = () => <SearchPage />;

// const mapStateToProps = (state: AppStateType) => ({
//   id: getUserId(state),
//   name: getUserName(state),
//   surname: getUserSurname(state),
//   isAuth: getIsAuth(state),
// });

// const mapDispatchToProps = (dispatch: AppDispatchType) => ({
//   logOutUser: () => dispatch(logOutAction()),
// });

export default connect()(SearchPageContainer);

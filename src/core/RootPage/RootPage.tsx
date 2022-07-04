import React, { FC } from 'react';
import { connect } from 'react-redux';
import { Container } from '@mui/material';
import { Outlet } from 'react-router-dom';
import Header from '../../components/Header/Header';
import ToolBar from '../../components/ToolBar/ToolBar';
import { AppStateType } from '../../redux';
import {
  getUserIdFirebase,
  getUserIsAdmin,
  getUserName,
  getUserSurname,
} from '../../redux/selectors/user-selector';
import { getIsAuth } from '../../redux/selectors/auth-selector';
import { logOutThunk } from '../../redux/actions/auth-action';
import {
  getSearchItemsSelector,
  getSearchUsersSelector,
} from '../../redux/selectors/search-selector';
import {
  clearSearchDataAction,
  searchThunk,
  setSearchListAction,
} from '../../redux/actions/search-action';

interface IRootPage {
  id: string;
  name: string;
  surname: string;
  isAuth: boolean;
  isAdmin: boolean;
  logOutUser: (id: string) => void;
  search: (substr: string) => void;
  itemsSearch: any;
  usersSearch: any;
  clearSearchData: () => void;
  setSearchList: () => void;
}

const RootPage: FC<IRootPage> = ({
  id,
  name,
  surname,
  search,
  isAuth,
  logOutUser,
  itemsSearch,
  usersSearch,
  clearSearchData,
  setSearchList,
  isAdmin,
}) => (
  <>
    <Header
      name={name}
      clearSearchData={clearSearchData}
      surname={surname}
      isAdmin={isAdmin}
      isAuth={isAuth}
      search={search}
      setSearchList={setSearchList}
      itemsSearch={itemsSearch?.map((item: any) => ({
        link: item.title,
        routeId: item.collectionId,
        id: item.id,
        icons: [item.icon],
      }))}
      usersSearch={usersSearch?.map((user: any) => ({
        link: `${user.name} ${user.surname}`,
        id: user.id,
        routeId: user.id,
        icons: user.collections.map((collection: any) => collection.icon),
      }))}
    />
    <Container>
      <Outlet />
    </Container>
    <ToolBar logOutUser={logOutUser} id={id} />
  </>
);

const mapStateToProps = (state: AppStateType) => ({
  id: getUserIdFirebase(state),
  name: getUserName(state),
  surname: getUserSurname(state),
  isAuth: getIsAuth(state),
  isAdmin: getUserIsAdmin(state),
  itemsSearch: getSearchItemsSelector(state),
  usersSearch: getSearchUsersSelector(state),
});

const mapDispatchToProps = (dispatch: any) => ({
  logOutUser: (id: string) => dispatch(logOutThunk(id)),
  search: (substr: string) => dispatch(searchThunk(substr)),
  clearSearchData: () => dispatch(clearSearchDataAction()),
  setSearchList: () => dispatch(setSearchListAction()),
});

export default connect(mapStateToProps, mapDispatchToProps)(RootPage);

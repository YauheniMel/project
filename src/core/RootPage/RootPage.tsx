import React, { FC, useEffect } from 'react';
import { connect } from 'react-redux';
import { Container } from '@mui/material';
import { Outlet } from 'react-router-dom';
import { io } from 'socket.io-client';
import Header from '../../components/Header/Header';
import ToolBar from '../../components/ToolBar/ToolBar';
import { AppStateType } from '../../redux';
import {
  getUserId,
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
import { getUntouchedCommentsThunk } from '../../redux/actions/collection-action';
import { UntouchedCommentType } from '../../types';
import { getUntouchedComments } from '../../redux/selectors/collection-selector';

interface IRootPage {
  id: string;
  userId: number;
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
  untouchedComments: UntouchedCommentType[] | null;
  getUntouchedComments: (userId: number) => void;
}

const RootPage: FC<IRootPage> = ({
  id,
  logOutUser,
  itemsSearch,
  usersSearch,
  userId,
  getUntouchedComments,
  ...rest
}) => {
  const socket = io('http://localhost:5000');

  useEffect(() => {
    if (userId) {
      getUntouchedComments(userId);
    }
    socket.on('comment', (res: any) => {
      if (userId === res.userId) {
        getUntouchedComments(userId);
      }
    });
  }, [userId]);

  return (
    <>
      <Header
        {...rest}
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
};

const mapStateToProps = (state: AppStateType) => ({
  id: getUserIdFirebase(state),
  userId: getUserId(state),
  name: getUserName(state),
  untouchedComments: getUntouchedComments(state),
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
  getUntouchedComments: (userId: number) => {
    dispatch(getUntouchedCommentsThunk(userId));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(RootPage);

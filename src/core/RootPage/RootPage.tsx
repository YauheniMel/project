import React, { FC, useEffect, useState } from 'react';
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
}

const RootPage: FC<IRootPage> = ({
  id,
  logOutUser,
  itemsSearch,
  usersSearch,
  userId,
  ...rest
}) => {
  const [comment, setComment] = useState<
  Array<{ collectionId: number; itemId: string }>
  >([]);
  const socket = io('http://localhost:5000');

  useEffect(() => {
    socket.on('comment', (res: any) => {
      if (userId === res.userId) {
        setComment((prev) => [
          ...prev.filter((commentInfo) => commentInfo.itemId !== res.itemId),
          {
            collectionId: res.collectionId,
            itemId: res.itemId,
          },
        ]);
      }
    });
  }, [userId]);

  return (
    <>
      <pre>{!!comment.length && JSON.stringify(comment, null, 2)}</pre>
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

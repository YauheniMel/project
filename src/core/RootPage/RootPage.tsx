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
  getUserName,
  getUserRole,
  getUserSurname,
} from '../../redux/selectors/user-selector';
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
import { logOutThunk } from '../../redux/actions/user-action';
import { getThemeValue, toggleTheme } from '../../services/theme';
import { getLanguageValue, toggleLanguage } from '../../services/language';
import logout from '../../auth/services/logout';
import { logError, logSuccess, logWarning } from '../../services/logger';

interface IRootPage {
  id: string;
  userId: number;
  name: string;
  surname: string;
  role: 'Admin' | 'User' | 'Reader';
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
  role,
  getUntouchedComments,
  ...rest
}) => {
  const socket = io('https://course-project-melnik.herokuapp.com/');

  async function handlePolicy(event: any) {
    event.stopPropagation();

    try {
      await logout();

      logOutUser(id);

      window.removeEventListener('click', handlePolicy, { capture: true });
    } catch (err: any) {
      logError(err.message);
    }
  }

  useEffect(() => {
    if (userId) {
      getUntouchedComments(userId);
    }

    const theme = getThemeValue();

    if (!theme) {
      toggleTheme('light');
    }
    const language = getLanguageValue();

    if (!language) {
      toggleLanguage('eng');
    }

    socket.on('comment', (res: any) => {
      console.log(res);

      if (userId === res.userId) {
        getUntouchedComments(userId);
      }
    });

    socket.on('block', (res: any) => {
      console.log(res);
      if (userId === res.userId) {
        logWarning('Your account has been blocked');
        window.addEventListener('click', handlePolicy, {
          capture: true,
          once: true,
        });
      }
    });

    socket.on('unblock', (res: any) => {
      if (userId === res.userId) {
        logSuccess('Your account has been unblocked');

        window.removeEventListener('click', handlePolicy, { capture: true });
      }
    });
  }, [userId]);

  return (
    <>
      <Header
        {...rest}
        role={role}
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
      <Container sx={{ flex: 1, paddingTop: '3.2rem' }}>
        <Outlet />
      </Container>
      <ToolBar logOutUser={logOutUser} id={id} role={role} />
    </>
  );
};

const mapStateToProps = (state: AppStateType) => ({
  id: getUserIdFirebase(state),
  userId: getUserId(state),
  name: getUserName(state),
  untouchedComments: getUntouchedComments(state),
  surname: getUserSurname(state),
  role: getUserRole(state),
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

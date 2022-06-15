export enum UserActionTypes {
  getUser = 'GET-USER',
}

export const getUsersAction = () => ({
  type: UserActionTypes.getUser,
});

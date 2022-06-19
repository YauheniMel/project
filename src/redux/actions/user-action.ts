import { UserPersonalInfoType } from '../../types';

export enum UserActionTypes {
  setUserPersonalInfo = 'SET-USER-PERSONAL-INFO',
}

export const setUserPersonalInfoAction = (payload: UserPersonalInfoType) => ({
  type: UserActionTypes.setUserPersonalInfo,
  payload,
});

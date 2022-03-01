import React, { useCallback, useEffect, useMemo } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import ProfileHeader from "../components/Profile/ProfileHeader";
import SelectedAsset from "../components/Profile/SelectedAsset";
import UserActions from "../components/Profile/UserActions";
import Assets from "../components/Profile/Assets";
import useHTTP from "../hooks/use-http";
import { USERS_API } from "../lib/Constants";
import { profileActions } from "../store/profileSlice";

const UserProfile = () => {
  const params = useParams();
  const dispatch = useDispatch();

  const findUser = useCallback(
    (data) => {
      const returnedUsers = Object.values(data).find(
        (user) => user.email === params.email
      );
      dispatch(profileActions.setEmail({ email: returnedUsers.email }));
      dispatch(profileActions.setAssets({ assets: returnedUsers.assets }));
    },
    [dispatch, params.email]
  );

  const requestConfig = useMemo(() => {
    return { url: USERS_API };
  }, []);
  const { sendRequest: fetchUserInfo } = useHTTP(requestConfig, findUser);

  useEffect(() => {
    fetchUserInfo();
  }, [fetchUserInfo]);
  return (
    <div className="profile">
      <ProfileHeader />
      <SelectedAsset />
      <UserActions />
      <Assets />
    </div>
  );
};

export default UserProfile;

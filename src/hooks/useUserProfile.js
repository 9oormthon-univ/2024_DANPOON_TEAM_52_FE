import { useEffect, useState } from "react";
import { reqGetUser } from "../../apis/user";
import { useRecoilState } from "recoil";
import userAtom from "../../store/atoms/user";

export const useUserProfile = () => {
  const [userData, setUserData] = useRecoilState(userAtom);

  useEffect(() => {
    const fetchUser = async () => {
      const res = await reqGetUser();
      if (res) {
        setUserData({
          nickname: res.data.nickname,
          img: res.data.image_url,
        });
      }
    };
    fetchUser();
  }, [setUserData]);

  return userData;
};

import { useEffect, useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { API_BASE_URL } from "../utils/apiBaseUrl";
import { setAuthData, clearAuth } from "../redux_store/slices/auth.slice";

export const useAuthCheck = () => {
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    const verifyToken = async () => {
      try {
        const res = await axios.get(`${API_BASE_URL}/dashboard`, {
          withCredentials: true,
        });
        if (res.status === 200 && res.data.user) {
          dispatch(setAuthData(res.data.user));
        } else {
          dispatch(clearAuth());
        }
      // eslint-disable-next-line no-unused-vars
      } catch (err) {
        dispatch(clearAuth());
      } finally {
        setLoading(false);
      }
    };
    verifyToken();
  }, [dispatch]);

  return loading;
};

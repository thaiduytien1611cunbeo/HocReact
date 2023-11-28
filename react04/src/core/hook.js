// Custom HOOK
import { ProviderContext } from "../core/Provider";
import { useContext } from "react";
// HOOK đọc state từ global
export const useSelector = (callback) => {
  const { state } = useContext(ProviderContext);
  return callback(state);
};

export const useDispatch = () => {
  const { dispatch } = useContext(ProviderContext);
  return dispatch;
};

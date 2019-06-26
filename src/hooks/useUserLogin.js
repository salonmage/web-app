import { useSelector, shallowEqual } from "react-redux";

function useUserLogin() {
  const userLogin = useSelector(state => state.userLogin, shallowEqual)
  return userLogin
}

export default useUserLogin
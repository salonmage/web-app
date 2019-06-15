import Loadable from "react-loadable";
import Loading from "./Loading";

const LayzyLoad = component => {
  return Loadable({
    loader: () => component,
    loading: Loading
  });
};

export default LayzyLoad
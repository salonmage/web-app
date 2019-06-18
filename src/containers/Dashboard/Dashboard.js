import React from "react";
import { actionHello } from "../../redux/reducers/hello/actions";
import { useTranslation } from "react-i18next";
import { useSelector, shallowEqual, useDispatch } from "react-redux";

const Dashboard = props => {
  const dispatch = useDispatch();
  const hello = useSelector(state => state.hello, shallowEqual);
  const helloSaga = useSelector(state => state.helloSaga, shallowEqual);

  const handleChangeData = () => {
    dispatch(actionHello());
  };

  const handleChangeDataAsync = () => {
    dispatch({ type: "INCREMENT_ASYNC" });
  };

  const { t, i18n } = useTranslation();

  return (
    <div>
      <h1>Home</h1>
      <h2>{hello}</h2>
      <button onClick={handleChangeData}>Test Redux</button>
      {<h2>{helloSaga}</h2>}
      <button onClick={handleChangeDataAsync}>Test Saga</button>
      <h3>{t("Welcome to React")}</h3>
      <button
        onClick={() =>
          i18n.changeLanguage(i18n.language === "en" ? "vi" : "en")
        }
      >
        Change language
      </button>
    </div>
  );
};

export default Dashboard;

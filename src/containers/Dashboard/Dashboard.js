import React from "react";
import { useTranslation } from "react-i18next";
import { useSelector, shallowEqual } from "react-redux";

const Dashboard = props => {
  const hello = useSelector(state => state.hello, shallowEqual);
  const helloSaga = useSelector(state => state.helloSaga, shallowEqual);

  const { t, i18n } = useTranslation();

  return (
    <div>
      <h1>Home</h1>
      <h2>{hello}</h2>
      {<h2>{helloSaga}</h2>}
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

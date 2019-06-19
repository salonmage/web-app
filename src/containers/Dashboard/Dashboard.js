import React from "react";
import { useTranslation } from "react-i18next";

const Dashboard = props => {
  const { t } = useTranslation();

  return (
    <div>
      <h1>Home</h1>
      <h3>{t("Welcome to Sbeauty")}</h3>
    </div>
  );
};

export default Dashboard;

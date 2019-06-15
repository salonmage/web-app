import React from "react";
import { useTranslation } from "react-i18next";

const Loading = props => {
  const { t } = useTranslation();

  const handleRefresh = () => {
    window.location.reload();
  };

  if (props.error) {
    return (
      <div>
        <button onClick={handleRefresh}>{t('Refresh')}</button>
      </div>
    );
  }
  return <div className="animated fadeIn pt-1 text-center">{t('Loading')}...</div>;
};

export default Loading;

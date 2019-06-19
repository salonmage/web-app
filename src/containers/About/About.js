import React from 'react'
import { useTranslation } from "react-i18next";

const About = () => {

  const { t } = useTranslation()

  return (
    <div>
      <h1>About</h1>
      <h3>{t('Giới thiệu về Sbeauty')}</h3>
    </div>
  )
}

export default About
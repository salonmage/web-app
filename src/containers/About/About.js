import React from 'react'
import { useTranslation } from "react-i18next";

const About = () => {

  const { t } = useTranslation()

  return (
    <div>
      <h1>About</h1>
      <h3>{t('Welcome to React')}</h3>
    </div>
  )
}

export default About
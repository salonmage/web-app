import React from 'react'
import { connect } from 'react-redux'
import { useTranslation } from "react-i18next";

const About = (props) => {

  const { t } = useTranslation()

  return (
    <div>
      <h1>About</h1>
      {
        props.hello + props.helloSaga
      }
      <h3>{t('Welcome to React')}</h3>
    </div>
  )
}

const mapStateToProps = state => {
  return {
    hello: state.hello,
    helloSaga: state.helloSaga
  }
}

export default connect(mapStateToProps)(About)
import React from 'react'
import { connect } from 'react-redux'
import store from '../../redux/store'
import { actionHello } from '../../redux/reducers/hello/actions'
import { useTranslation } from "react-i18next";

const Dashboard = (props) => {

  const handleChangeData = () => {
    store.dispatch(actionHello())
  }

  const handleChangeDataAsync = () => {
    store.dispatch({ type: "INCREMENT_ASYNC" })
  }

  const { t, i18n } = useTranslation()

  return (
    <div>
      <h1>Home</h1>
      <h2>{props.hello}</h2>
      <button onClick={handleChangeData}>Test Redux</button>
      {
        <h2>{props.helloSaga}</h2>
      }
      <button onClick={handleChangeDataAsync}>Test Saga</button>
      <h3>{t('Welcome to React')}</h3>
      <button onClick={() => i18n.changeLanguage(i18n.language === 'en' ? 'vi' : 'en')}>Change language</button>
    </div>
  )

}

const mapStateToProps = state => {
  return {
    hello: state.hello,
    helloSaga: state.helloSaga,
    userLogin: state.userLogin
  }
}

export default connect(mapStateToProps)(Dashboard)
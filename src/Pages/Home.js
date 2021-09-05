import React from 'react'
import { useTranslation } from 'react-i18next'
import className from 'classnames'


const Home = () => {
  const ns = 'homeTranslation'
  const { t } = useTranslation()

  const releaseDate = new Date('2021-03-07')
  const timeDifference = new Date() - releaseDate
  const number_of_days = Math.floor(timeDifference / (1000 * 60 * 60 * 24))

  return (
      <div className="d-flex flex-column align-items-start">
        <h1 className="font-weight-normal mb-3">{t(`${ns}:welcome_header`)}</h1>
        <p>{t(`${ns}:days_since_release`, { number_of_days })}</p>
      </div>
  )
}

export default Home
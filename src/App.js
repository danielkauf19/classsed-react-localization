import React, { useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import cookies from 'js-cookie'
import { Route, Switch } from "react-router-dom"


import Home from './Pages/Home'
import About from './Pages/About'
import NotMatch from './Pages/NotMatch'
import LanguagesDropdown from './Components/LanguagesDropdown'
import languages from './Languages/Languages'


const App = () => {
  const Languages = languages.languages;
  const currentLanguageCode = cookies.get('i18next') || 'en'
  const currentLanguage = Languages.find((lang) => lang.code === currentLanguageCode)
  const { t } = useTranslation()

  useEffect(() => {
    console.log('Setting page stuff')
    document.body.dir = currentLanguage.dir || 'ltr'
    document.title = t('app_title')
  }, [currentLanguage, t])

  return (
    <>
          <LanguagesDropdown />
      <Switch>
                <Route exact path="/">
                    <div className="container">
                        <div className="inner">
                        <Home />
                        </div>
                    </div>
                </Route>
                <Route path="/about">
                    <About />
                </Route>
                <Route path="*">
                    <NotMatch />
                </Route>
            </Switch>
    </>
  )
}

export default App
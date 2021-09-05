import React from "react"
import { useRouteMatch, Route, Link } from "react-router-dom"
import { useTranslation } from "react-i18next"

import SinglePage from "./SinglePage"


const About = () => {
    const { t } = useTranslation();
    const ns = 'aboutTranslation';
    const { url, path } = useRouteMatch()
    return (
        <div className="about__content">
            <ul className="about__list">
                <li>
                    <Link to={`${url}/about-app`}>{t(`${ns}:about_app_link`)}</Link>
                </li>
                <li>
                    <Link to={`${url}/about-author`}>{t(`${ns}:about_author_link`)}</Link>
                </li>
            </ul>
            <Route path={`${path}/:slug`}>
                <SinglePage />
            </Route>
        </div>
    )
}
export default About
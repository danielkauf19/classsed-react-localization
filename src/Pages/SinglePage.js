import React from "react"
import { useParams } from "react-router-dom"
import { useTranslation } from 'react-i18next'


const SinglePage = () => {
    const { t } = useTranslation()
    const ns = 'aboutTranslation'
    const aboutData = [
        {
            slug: "about-app",
            title: `${t(`${ns}:about_app_title`)}`,
            description: `${t(`${ns}:about_app_description`)}`
        },
        {
            slug: "about-author",
            title: `${t(`${ns}:about_author_title`)}`,
            description: `${t(`${ns}:about_author`)}`
        },
    ]

    const { slug } = useParams()
    const aboutContent = aboutData.find(item => item.slug === slug)
    const { title, description } = aboutContent

    return (
        <div className="main__content">
            <h1>{title}</h1>
            <p></p>
            <p>{description}</p>
        </div>
    )
}
export default SinglePage
import React from "react"
import { useTranslation } from 'react-i18next'


const NotMatch = () => {
    const { t } = useTranslation();
    const ns = 'errorTranslation'
    return (
        <div>
            <h3>{t(`${ns}:not_match`)}</h3>
        </div>
    )
}
export default NotMatch
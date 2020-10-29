import React from 'react';
import { withTranslation } from 'react-i18next';

function ServicesContent({ t }) {
    return (
        <div className="content">{t('Services.content')}</div>
    )
}

export default withTranslation()(ServicesContent);
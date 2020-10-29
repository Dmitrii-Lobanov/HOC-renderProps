import React from 'react';
import { withTranslation } from 'react-i18next';

function HeaderTitle({ t }) {
    return (
        <h1>{t('Header.airportTitle')}</h1>
    )
}

export default withTranslation()(HeaderTitle);
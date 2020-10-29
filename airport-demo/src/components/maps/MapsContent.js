import React from 'react';
import { withTranslation } from 'react-i18next';

function MapsContent({ t }) {
    return (
        <div className="content">
            {t('Maps.content')}
        </div>
    )
}

export default withTranslation()(MapsContent);
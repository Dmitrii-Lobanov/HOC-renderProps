import React from 'react';
import { action } from '@storybook/addon-actions';
import Options from './Options';

export default {
    component: Options,
    title: 'Options'
}

export const optionsData = {
    lng: 'ru'
}

export const actionsData = {
    chooseLanguage: action('chooseLanguage'),
    isBackClicked: action('isBackClicked'),
    isBackBtnClicked: action('isBackBtnClicked')
}

export const Default = () => {
    return <Options lng={{ ...optionsData }} {...actionsData} /> 
}
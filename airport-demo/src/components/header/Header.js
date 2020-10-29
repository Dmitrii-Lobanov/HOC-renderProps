import React from 'react';
import HeaderTitle from './HeaderTitle';
import LanguageBtn from './LanguageBtn';
import BackBtn from './BackBtn';

function Header({ lng }) {
        return(
            <div className="header">
                    <BackBtn />
                    <HeaderTitle />
                    <LanguageBtn lng={lng} />
                </div>
            
        )
}

export default Header;
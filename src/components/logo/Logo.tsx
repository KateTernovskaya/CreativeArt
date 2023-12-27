import React from 'react';
import {Icon} from "../icon/Icon";
import {Link} from "react-scroll";

export const Logo = () => {
    return (
        <Link
            to={'main'}
            smooth={true}>
            <Icon iconId={'logo'} width={'196'} height={'60'} viewBox={'0 0 196 38'}/>
        </Link>
    );
};
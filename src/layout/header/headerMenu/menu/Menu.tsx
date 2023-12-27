import React from 'react';
import {S} from '../../Header_Styles'

const itemsMenu = [
    {
        title: "Marketplace",
        href: "marketplace",
    },
    {
        title: "Artists",
        href: "artists",
    },
    {
        title: "Community",
        href: "community",
    },
    {
        title: "Collections",
        href: "collections",
    },
]

export const Menu: React.FC<{ onClick?: () => void }> = ({onClick}) => {
    return (
        <ul>
            {itemsMenu.map((item, index) => {
                return <li key={index}>
                    <S.NavLink
                        onClick={onClick}
                        to={item.href}
                        smooth={true}
                    >{item.title}</S.NavLink>
                </li>
            })}
        </ul>
    );
};
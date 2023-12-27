import React, {useEffect, useState} from 'react';
import {Menu} from "../menu/Menu";
import {StyledBtn} from "../../../../components/button/Button";
import {S} from '../../Header_Styles'

export const MobileMenu: React.FC = () => {
    const [menuIsOpen, setMenuIsOpen] = useState(false);

    useEffect(() => {
        const body = document.querySelector('body')
        if (!body) {
            return
        }
        if (menuIsOpen) {
            body.style.overflow = 'hidden'
            return
        }
        body.style.overflow = ''
    }, [menuIsOpen])
    const onBurgerBtnClick = () => {
        setMenuIsOpen(!menuIsOpen)
    }

    return (
        <S.MobileMenu>
            <S.BurgerButton isOpen={menuIsOpen} onClick={onBurgerBtnClick}>
                <span></span>
            </S.BurgerButton>

            <S.MobileMenuPopup isOpen={menuIsOpen} onClick={() => {
                setMenuIsOpen(false)
            }}>
                <Menu onClick={() => {
                    setMenuIsOpen(false)
                }}/>
                <StyledBtn primary>Contact</StyledBtn>
            </S.MobileMenuPopup>
        </S.MobileMenu>
    );
};
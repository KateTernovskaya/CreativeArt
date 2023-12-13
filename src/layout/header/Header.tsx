import React from 'react';
import {Logo} from "../../components/logo/Logo";
import {StyledBtn} from "../../components/Button";
import {Container} from "../../components/wrapper/Container";
import {FlexWrapper} from "../../components/wrapper/FlexWrapper";
import {DesktopMenu} from "./headerMenu/desktopMenu/DesktopMenu";
import {MobileMenu} from "./headerMenu/mobileMenu/MobileMenu";
import {S} from './Header_Styles'

const itemsMenu = ["Marketplace", "Artists", "Community", "Collections",]

export const Header: React.FC = () => {
    const [width, setWidth] = React.useState(window.innerWidth);
    const breakpoint = 768;

    React.useEffect(() => {
        const handleWindowResize = () => setWidth(window.innerWidth)
        window.addEventListener("resize", handleWindowResize);

        return () => window.removeEventListener("resize", handleWindowResize);
    }, []);

    return (
        <S.Header>
            <Container>
                <FlexWrapper justify={'space-between'} align={'center'}>
                    <Logo/>

                    {width < breakpoint ? <MobileMenu menuItems={itemsMenu}/>
                        : <DesktopMenu menuItems={itemsMenu}/>}
                    <StyledBtn primary>Contact</StyledBtn>
                </FlexWrapper>
            </Container>
        </S.Header>
    );
};
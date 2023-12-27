import React from 'react';
import {FlexWrapper} from "../../components/wrapper/FlexWrapper";
import {Logo} from "../../components/logo/Logo";
import {Icon} from "../../components/icon/Icon";
import {Container} from "../../components/wrapper/Container";
import {S} from './Footer_Styles'
import {Link} from "../../components/link/Link";

const socialItems = [
    {
        iconId: 'facebook',
        viewBox: '-5 -2 20 20',
    },
    {
        iconId: 'telegram',
        viewBox: '-2 -4 20 20',
    },
    {
        iconId: 'twitter',
        viewBox: '-4 -2 20 20',
    },
    {
        iconId: 'linkedin',
        viewBox: '-4 -1 20 20',
    },
]
const footerMenuItems = [
    {
        title: 'Explore',
        link: ['Art Sign In', 'Collectibles', 'Domain Name', ' Utility',]
    },
    {
        title: 'Statistic',
        link: ['Ranking', 'Collectibles', 'Activity',]
    },
    {
        title: 'Company',
        link: ['About Us', 'Career', 'Support', 'Partners',]
    },
    {
        title: 'Resources',
        link: ['Help Center', 'Platform Status', 'Blog',]
    },
]

export const Footer: React.FC = () => {
    return (
        <S.Footer>
            <Container>
                <FlexWrapper justify={'space-between'} wrap={'wrap'} gap={'20px'}>
                    <S.LogoFooter>
                        <Logo/>
                        <p>Discover NFTs by category, track the latest drop, and and follow the collections you love.
                            Enjoy it!</p>
                        <FlexWrapper gap={'12px'} align={'center'}>
                            {socialItems.map((item, index) => {
                                return <S.SocialLink key={index}>
                                    <Icon iconId={`${item.iconId}`} viewBox={`${item.viewBox}`}/>
                                </S.SocialLink>
                            })}
                        </FlexWrapper>
                    </S.LogoFooter>

                    <S.FooterMenu>
                        {footerMenuItems.map((item, index) => {
                            return <div key={index}>
                                <h4>{item.title}</h4>
                                <ul>
                                    {item.link.map((i, index) => {
                                        return <li key={index}>
                                            <Link>{i}</Link>
                                        </li>
                                    })}
                                </ul>
                            </div>
                        })}
                    </S.FooterMenu>
                </FlexWrapper>
                <FlexWrapper gap={'20px'} wrap={'wrap'} justify={'space-between'}>
                    <span>© Copyright 2023 - Creativeart</span>
                    <FlexWrapper gap={'28px'}>
                        <span>Privacy Policy</span>
                        <span>Terms & Conditions</span>
                    </FlexWrapper>
                </FlexWrapper>
            </Container>
        </S.Footer>
    );
};
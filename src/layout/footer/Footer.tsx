import React from 'react';
import styled from "styled-components";
import {FlexWrapper} from "../../components/wrapper/FlexWrapper";
import {Logo} from "../../components/logo/Logo";
import {Icon} from "../../components/icon/Icon";
import {Container} from "../../components/wrapper/Container";
import {theme} from "../../styles/Theme";


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
        link: ['Art Sign In', 'Collectibles', 'Domain Name', ' Utility', ]
    },
    {
        title: 'Statistic',
        link: ['Ranking', 'Collectibles', 'Activity', ]
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

export const Footer = () => {
    return (
        <StyledFooter>
            <Container>
                <FlexWrapper justify={'space-between'} wrap={'wrap'} gap={'20px'}>
                    <LogoFooter>
                        <Logo/>
                        <p>Discover NFTs by category, track the latest drop, and and follow the collections you love.
                            Enjoy it!</p>
                        <FlexWrapper gap={'12px'} align={'center'}>
                            {socialItems.map((item) => {
                                return <SocialLink>
                                    <Icon iconId={`${item.iconId}`} viewBox={`${item.viewBox}`}/>
                                </SocialLink>
                            })}
                        </FlexWrapper>
                    </LogoFooter>

                    <FooterMenu>
                        {footerMenuItems.map((item) =>{
                            return <div>
                            <h4>{item.title}</h4>
                                <ul>
                                    {item.link.map((i) =>{
                                       console.log(i)
                                        return <li>
                                            <a href="">{i}</a>
                                        </li>
                                    })}
                                </ul>
                            </div>
                        })}
                   </FooterMenu>
                </FlexWrapper>
                <FlexWrapper gap={'20px'} wrap={'wrap'} justify={'space-between'}>
                    <span>© Copyright 2023 - Creativeart</span>
                    <FlexWrapper gap={'28px'}>
                        <span>Privacy Policy</span>
                        <span>Terms & Conditions</span>
                    </FlexWrapper>
                </FlexWrapper>
            </Container>
        </StyledFooter>
    );
};

const StyledFooter = styled.footer`
  padding: 92px 0;

  ${FlexWrapper}:first-child {
    margin-bottom: 48px;
    padding-bottom: 48px;
    border-bottom: 1px solid ${theme.colors.dissable};
  }
`

const LogoFooter = styled.div`
  display: flex;
  max-width: 272px;
  flex-direction: column;

`

const SocialLink = styled.a`
  margin-top: 24px;
  background-color: ${theme.colors.font};
  height: 24px;
  width: 24px;
  border-radius: 3px;
  transition: ${theme.animation.transition};

  &:hover {
    transform: translateY(-4px);
    background-color: ${theme.colors.accent};
  }
`

const FooterMenu = styled.div`
  display: flex;
  gap: 94px;
  flex-wrap: wrap;

  h4 {
    font-size: 20px;
    font-weight: 700;
    line-height: 120%;
    margin-bottom: 24px;
  }

  li {
    line-height: 160%;
    margin-top: 8px;

    a {
      transition: ${theme.animation.transition};
      border: none;
    }

    a:hover {
      border-bottom: 1px solid ${theme.colors.accent};
    }
  }
`


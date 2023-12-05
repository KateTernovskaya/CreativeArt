import React from 'react';
import styled from "styled-components";
import {FlexWrapper} from "../../components/wrapper/FlexWrapper";
import {Logo} from "../../components/logo/Logo";
import {Icon} from "../../components/icon/Icon";


export const Footer = () => {
    return (
        <StyledFooter>
            <FlexWrapper justify={'space-between'}>
                <FlexWrapper direction={'column'}>
                    <Logo/>
                    <p>Discover NFTs by category, track the latest drop, and and follow the collections you love. Enjoy
                        it!</p>
                    <FlexWrapper gap={'10px'} align={'center'}>
                        <SocialLink>
                            <Icon iconId={'facebook'}/>
                        </SocialLink>
                        <SocialLink>
                            <Icon iconId={'telegram'}/>
                        </SocialLink>
                        <SocialLink>
                            <Icon iconId={'twitter'}/>
                        </SocialLink>
                        <SocialLink>
                            <Icon iconId={'linkedin'}/>
                        </SocialLink>

                    </FlexWrapper>

                </FlexWrapper>

                <FlexWrapper>
                    <div>
                        <h4>Explore</h4>
                        <ul>
                            <li><a href="#">
                                Art Sign In
                            </a></li>
                            <li><a href="#">
                                Collectibles
                            </a></li>
                            <li><a href="#">
                                Domain Name
                            </a></li>
                            <li><a href="#">
                                Utility
                            </a></li>
                        </ul>
                    </div>

                    <div>
                        <h4>Statistic</h4>
                        <ul>
                            <li><a href="#">
                                Ranking
                            </a></li>
                            <li><a href="#">
                                Collectibles
                            </a></li>
                            <li><a href="#">
                                Activity
                            </a></li>
                        </ul>
                    </div>

                    <div>
                        <h4>Company</h4>
                        <ul>
                            <li><a href="#">
                                About Us
                            </a></li>
                            <li><a href="#">
                                Career
                            </a></li>
                            <li><a href="#">
                                Support
                            </a></li>
                            <li><a href="#">
                                Partners
                            </a></li>
                        </ul>
                    </div>

                    <div>
                        <h4>Resources</h4>
                        <ul>
                            <li><a href="#">
                                Help Center
                            </a></li>
                            <li><a href="#">
                                Platform Status
                            </a></li>
                            <li><a href="#">
                                Blog
                            </a></li>

                        </ul>
                    </div>
                </FlexWrapper>

            </FlexWrapper>

            <FlexWrapper justify={'space-between'}>
                <span>© Copyright 2023 - Creativeart</span>
                <FlexWrapper gap={'20px'}>
                    <span>Privacy Policy</span>
                    <span>Terms & Conditions</span>
                </FlexWrapper>
            </FlexWrapper>

        </StyledFooter>
    );
};

const StyledFooter = styled.footer`
  background-color: black;
  min-height: 50vh;
`

const SocialLink = styled.a`

`


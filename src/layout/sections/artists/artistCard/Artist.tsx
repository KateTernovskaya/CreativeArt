import React from 'react';
import styled from "styled-components";
import {FlexWrapper} from "../../../../components/wrapper/FlexWrapper";
import {theme} from "../../../../styles/Theme";

import Bg1 from '../../../../assets/images/section/popular-artists/work1.png'
import Bg2 from '../../../../assets/images/section/popular-artists/work2.png'
import Bg3 from '../../../../assets/images/section/popular-artists/work3.png'
import Bg4 from '../../../../assets/images/section/popular-artists/work4.png'
import Bg5 from '../../../../assets/images/section/popular-artists/work5.png'

import UserImg1 from '../../../../assets/images/section/popular-artists/user/user (1).png'
import UserImg2 from '../../../../assets/images/section/popular-artists/user/user (2).png'
import UserImg3 from '../../../../assets/images/section/popular-artists/user/user (3).png'
import UserImg4 from '../../../../assets/images/section/popular-artists/user/user (4).png'
import UserImg5 from '../../../../assets/images/section/popular-artists/user/user (5).png'

const itemsArtist = [
    {
        bg: Bg1,
        userPhoto: UserImg1,
        userName: 'Osvaldo Percy',
    },
    {
        bg: Bg5,
        userPhoto: UserImg5,
        userName: 'Ranson Sqiure',
    },
    {
        bg: Bg2,
        userPhoto: UserImg2,
        userName: 'Cristio leo',
    },
    {
        bg: Bg4,
        userPhoto: UserImg4,
        userName: 'Sebastian waltan',
    },
    {
        bg: Bg3,
        userPhoto: UserImg3,
        userName: 'Abraham Zack',
    },
]

export const Artist: React.FC = () => {
    return (
        <>
            {itemsArtist.map((item) => {
                return <Card>
                    <CardImg src={`${item.bg}`}/>
                    <OwnerInfo>
                     <img src={`${item.userPhoto}`} alt=""/>
                    <FlexWrapper direction={'column'}>
                    <span>Owner</span>
                    <OwnerName>{`${item.userName}`}</OwnerName>
                    </FlexWrapper>
                    </OwnerInfo>
                </Card>
            })}
        </>
    )
};


const OwnerInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;

  & img {
    width: 48px;
    max-width: 100%;
    border-radius: 48px;
  }

  & span {
    font-size: 14px;
    line-height: 160%;
  }
`

const Card = styled.article`
  border-radius: 16px;
  position: relative;
  z-index: 1;
  
  
  &::before {
    content: '';
    width: 100%;
    height: 100%;
    display: block;
    position: absolute;
    border-radius: 16px;
    background: linear-gradient(2deg, rgba(19, 30, 58, 0.92) 17%, rgba(19, 30, 58, 0.00) 52.73%);
    //transition:  all 1s ease-in-out;
  }

  &:hover {
    ${OwnerInfo} {
      opacity: 0;
    }
  }
  
  &:hover::before{
    background: none;
  }
  

  ${OwnerInfo} {
    position: absolute;
    z-index: 2;
    bottom: 24px;
    left: 24px;
    transition:  ${theme.animation.transition};
  }
`

const CardImg = styled.img`
  width: 100%;
  object-fit: cover;
  height: 100%;
  border-radius: 16px;
  object-position: top;
`

const OwnerName = styled.span`
  font-size: 16px;
  font-weight: 700;
  line-height: 120%;
`
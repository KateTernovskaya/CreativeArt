import React from 'react';
import {FlexWrapper} from "../../../../components/wrapper/FlexWrapper";
import {S} from '../Artists_Styles'

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
            {itemsArtist.map((item, index) => {
                return <S.Card key={index}>
                    <S.CardImg src={`${item.bg}`}/>
                    <S.OwnerInfo>
                        <img src={`${item.userPhoto}`} alt=""/>
                        <FlexWrapper direction={'column'}>
                            <span>Owner</span>
                            <S.OwnerName>{`${item.userName}`}</S.OwnerName>
                        </FlexWrapper>
                    </S.OwnerInfo>
                </S.Card>
            })}
        </>
    )
};
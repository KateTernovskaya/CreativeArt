import React from 'react';
import {FlexWrapper} from "../../../../components/wrapper/FlexWrapper";
import {Icon} from "../../../../components/icon/Icon";
import {StyledBtn} from "../../../../components/button/Button";
import {S} from '../Market_Styles'

import Img1 from '../../../../assets/images/section/marketplace/1market.png'
import Img2 from '../../../../assets/images/section/marketplace/2market.png'
import Img3 from '../../../../assets/images/section/marketplace/3market.png'
import Img1_2x from '../../../../assets/images/section/marketplace/1market@2x.png'
import Img2_2x from '../../../../assets/images/section/marketplace/2market@2x.png'
import Img3_2x from '../../../../assets/images/section/marketplace/3market@2x.png'

const marketItems = [
    {
        src: Img1,
        src2x: Img1_2x,
        title: 'Cyberpunk Cocomo',
        cost: 490,
    },
    {
        src: Img2,
        src2x: Img2_2x,
        title: 'Charge, Qi tiao yu',
        cost: 490,
    },
    {
        src: Img3,
        src2x: Img3_2x,
        title: 'Surgeon, Josh Rife',
        cost: 490,
    },
]

export const MarketCard: React.FC = () => {
    return (
        <>
            {marketItems.map((item) => {
                return <S.Card><S.CardWrapper>
                    <img src={item.src} srcSet={`${item.src2x} 2x`} alt=""/>
                    <FlexWrapper align={'center'} justify={'space-between'} gap={'15px'}>
                        <S.CardName>{`${item.title}`}</S.CardName>
                        <FlexWrapper>
                            <Icon iconId={'ethereum'}/>
                            {`${item.cost}`}ETH
                        </FlexWrapper>
                    </FlexWrapper>
                    <S.CardInfo>
                        <FlexWrapper direction={'column'} grow={'1'}>
                            <S.End>Ending In </S.End>
                            <FlexWrapper className='clock' gap={'12px'}>
                                <Icon iconId={'clock'}/>
                                03:24:56
                            </FlexWrapper>
                        </FlexWrapper>
                        <StyledBtn outlined> Place A Bid</StyledBtn>
                    </S.CardInfo>
                </S.CardWrapper>
                </S.Card>
            })}
        </>
    )
}

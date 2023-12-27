import React from 'react';
import {FlexWrapper} from "../../../components/wrapper/FlexWrapper";
import {MarketCard} from "./marketCard/MarketCard";
import {Container} from "../../../components/wrapper/Container";
import {S} from './Market_Styles'
import {SectionTitle} from "../../../components/title/Title";

export const Marketplace = () => {
    return (
        <S.Marketplace id={'marketplace'}>
            <Container>

                <SectionTitle withBtn>
                    <span className='accent'>Amazing </span> and Super Unique Art of This
                    <span className='accent'> Week</span>
                </SectionTitle>
                <FlexWrapper justify={'space-between'} gap={'30px'}
                             align={'center'} wrap={'wrap'} grow={'1'}>
                    <MarketCard/>
                </FlexWrapper>
            </Container>
        </S.Marketplace>
    );
};
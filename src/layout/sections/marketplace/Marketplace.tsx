import React from 'react';
import {FlexWrapper} from "../../../components/wrapper/FlexWrapper";
import {MarketCard} from "./marketCard/MarketCard";

import {StyledBtn} from "../../../components/button/Button";
import {Container} from "../../../components/wrapper/Container";
import {S} from './Market_Styles'

export const Marketplace = () => {
    return (
        <S.Marketplace id={'marketplace'}>
            <Container>
                <S.SectionTitle>
                    <S.Title> <span className='accent'>Amazing </span> and Super Unique Art of This
                        <span className='accent'> Week</span></S.Title>
                    <StyledBtn className='title_btn' primary>See All</StyledBtn>
                </S.SectionTitle>

                <FlexWrapper justify={'space-between'} gap={'30px'}
                             align={'center'} wrap={'wrap'} grow={'1'}>
                    <MarketCard />
                </FlexWrapper>
            </Container>
        </S.Marketplace>
    );
};
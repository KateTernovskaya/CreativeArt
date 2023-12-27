import React from 'react';
import {Artist} from "./artistCard/Artist";
import {Container} from "../../../components/wrapper/Container";
import {SectionTitle} from "../../../components/title/Title";
import {S} from './Artists_Styles'

export const PopularArtists = () => {
    return (
        <S.PopularArtists id={'artists'}>
            <Container>
                <SectionTitle withBtn>
                    Popular <span className='accent'>Artists</span> <br/>On This Week
                </SectionTitle>
                <S.Artists>
                    <Artist/>
                </S.Artists>
            </Container>
        </S.PopularArtists>
    );
};
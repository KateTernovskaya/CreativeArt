import React from 'react';
import styled from "styled-components";
import {Artist} from "./artistCard/Artist";

import {StyledBtn} from "../../../components/button/Button";
import {S} from "../marketplace/Market_Styles";
import {Container} from "../../../components/wrapper/Container";
import {theme} from "../../../styles/Theme";

export const PopularArtists = () => {
    return (
        <StyledPopularArtists id={'artists'}>
            <Container>
                <S.SectionTitle>
                    <S.Title> Popular <span className='accent'>Artists</span> <br/>
                        On This Week</S.Title>
                    <StyledBtn className='title_btn' primary>See All</StyledBtn>
                </S.SectionTitle>

                <Artists>
                    <Artist />
                </Artists>
            </Container>
        </StyledPopularArtists>
    );
};

const StyledPopularArtists = styled.section`
  @media ${theme.media.mobile} {
    .cards {
      justify-content: center;
    }
    ${Container} {
      position: relative;

      .title_btn {
        position: absolute;
        bottom: -80px;
        left: 50%;
        translate: -50%;
      }
    }
  }
`

const Artists = styled.div`
  display: grid;
  grid-auto-rows: 311px;
  grid-template-columns: repeat(3, auto);
  gap: 30px;

  & article:nth-child(3) {
    grid-row: 1/3;
    grid-column: 3;
  }

  @media ${theme.media.tablet} {
    grid-template-columns: 1fr 1fr;

    & article :nth-child(3) {
      grid-row: auto;
      grid-column: auto;
    }
  }

  @media ${theme.media.mobile} {
    grid-template-columns: 1fr ;
  }
`

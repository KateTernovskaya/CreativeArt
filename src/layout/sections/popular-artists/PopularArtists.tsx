import React from 'react';
import styled from "styled-components";
import {FlexWrapper} from "../../../components/wrapper/FlexWrapper";
import {Artist} from "./Artist";
import Bg1 from '../../../assets/images/section/popular-artists/artictWork1.webp'
import Bg2 from '../../../assets/images/section/popular-artists/artictWork2.webp'
import Bg3 from '../../../assets/images/section/popular-artists/artictWork3.webp'
import Bg4 from '../../../assets/images/section/popular-artists/artictWork4.webp'
import Bg5 from '../../../assets/images/section/popular-artists/artictWork5.webp'

import UserImg1 from '../../../assets/images/section/popular-artists/user/user (1).png'
import UserImg2 from '../../../assets/images/section/popular-artists/user/user (2).png'
import UserImg3 from '../../../assets/images/section/popular-artists/user/user (3).png'
import UserImg4 from '../../../assets/images/section/popular-artists/user/user (4).png'
import UserImg5 from '../../../assets/images/section/popular-artists/user/user (5).png'
import {StyledBtn} from "../../../components/Button";

export const PopularArtists = () => {
    return (
        <StyledPopularArtists>
            <FlexWrapper justify={'space-between'}>
                <h2>Popular <span>Artists </span>
                    On This Week</h2>
                <StyledBtn primary>See All</StyledBtn>
            </FlexWrapper>
            <Artists>
                <Artist bg={Bg1}
                        userPhoto={UserImg1}
                        userName={'Osvaldo Percy'}/>

                <Artist bg={Bg5}
                        userPhoto={UserImg5}
                        userName={'Ranson Sqiure'}/>

                <Artist bg={Bg2}
                        userPhoto={UserImg2}
                        userName={'Cristio leo'}/>

                <Artist bg={Bg3}
                        userPhoto={UserImg3}
                        userName={'Abraham Zack'}/>

                <Artist bg={Bg4}
                        userPhoto={UserImg4}
                        userName={'Sebastian waltan'}/>


            </Artists>
        </StyledPopularArtists>
    );
};

const StyledPopularArtists = styled.section`
  min-height: 50vh;
  background-color: black;
`

const Artists = styled.div`

`

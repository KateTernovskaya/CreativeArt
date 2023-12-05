import React from 'react';
import styled from "styled-components";
import Img1 from '../../../assets/images/section/subscribe/Rectangle1.webp'
import Img2 from '../../../assets/images/section/subscribe/Rectangle2.webp'
import {FlexWrapper} from "../../../components/wrapper/FlexWrapper";
import {StyledBtn} from "../../../components/Button";

export const Subscribe = () => {
    return (
        <StyledSubscribe>
            <ImgBlock>
                <img src={Img1} alt=""/>
                <img src={Img2} alt=""/>
            </ImgBlock>

            <FlexWrapper direction={'column'}>
                <h2>Subscribe And <span>get our
                    Updates</span> Every Week</h2>
                <p>We have a blog related to NFT so we can share thoughts and routines on our blog which is updated
                    weekly</p>
                <div>
                    <input type="text"/>
                    <StyledBtn primary type={"submit"}>Subscribe</StyledBtn>
                </div>
            </FlexWrapper>
        </StyledSubscribe>
    );
};

const StyledSubscribe = styled.section`
  background-color: #021641;
  min-height: 50vh;
  display: flex;
`

const ImgBlock = styled.div`

`


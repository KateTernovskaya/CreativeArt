import React from 'react';
import Img1 from '../../../assets/images/section/subscribe/img1.png'
import Img2 from '../../../assets/images/section/subscribe/img2.png'
import {FlexWrapper} from "../../../components/wrapper/FlexWrapper";
import {StyledBtn} from "../../../components/button/Button";
import {Container} from "../../../components/wrapper/Container";
import {SectionTitle} from "../../../components/title/Title";
import {S} from './Subscribe_Styles'

export const Subscribe = () => {
    return (
        <S.Subscribe id={'community'}>
            <Container>
                <S.ImgBlock>
                    <img src={Img1} alt=""/>
                    <img src={Img2} alt=""/>
                </S.ImgBlock>
                <FlexWrapper direction={'column'}>
                    <SectionTitle>
                        Subscribe And <span className='accent'>get our
                    Updates</span> Every Week
                    </SectionTitle>

                    <p>We have a blog related to NFT so we can share thoughts and routines on our blog which is updated
                        weekly</p>
                    <S.SubscribeForm>
                        <input type="text" placeholder='Enter your e-mail'/>
                        <StyledBtn primary type={"submit"}>Subscribe</StyledBtn>
                    </S.SubscribeForm>
                </FlexWrapper>
            </Container>
        </S.Subscribe>
    );
};
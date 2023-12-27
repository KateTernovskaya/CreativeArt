import styled from "styled-components";
import {font} from "../../styles/FontMixin";
import {StyledBtn} from "../button/Button";
import React, {ReactNode} from "react";

type SuperTitlePropsType = {
    children: ReactNode
    withBtn?: boolean
}

export const SectionTitle = (props: SuperTitlePropsType) => {
    return (
        <Title>
            <Name> {props.children} </Name>
            {props.withBtn ? <StyledBtn as={"a"} className='title_btn' primary>See All</StyledBtn> : null}
        </Title>
    )
};

const Title = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  align-self: stretch;
  margin-bottom: 60px;
`

const Name = styled.h2`
  max-width: 626px;
  width: 100%;
  ${font({family: 'Kalnia', weight: 500, Fmax: 48, Fmin: 31})}
  line-height: 120%;
`;
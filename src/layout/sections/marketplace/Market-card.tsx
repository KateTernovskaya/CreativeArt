import React from 'react';
import styled from "styled-components";
import {FlexWrapper} from "../../../components/wrapper/FlexWrapper";
import {Icon} from "../../../components/icon/Icon";
import {StyledBtn} from "../../../components/Button";

type MarketCardPropsType = {
    img: string;
    name?: string
    cost?: string
}

export const MarketCard = (props: MarketCardPropsType) => {
    return (
        <Card>
            <img src={props.img} alt=""/>
            <FlexWrapper>
                <span>{props.name}</span>
                <div>
                    <Icon iconId={'ethereum'} />
                    {props.cost || '490ETH'}
                </div>
            </FlexWrapper>
            <FlexWrapper>
                <FlexWrapper direction={'column'}>
                    Ending In
                    <div>
                        <Icon iconId={'clock'} />
                        03:24:56
                    </div>
                </FlexWrapper>
                <StyledBtn outlined>
                    Place A Bid
                </StyledBtn>
            </FlexWrapper>

        </Card>
    );
};


const Card = styled.div`

`
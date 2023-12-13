import React from 'react';
import styled from "styled-components";

type ArtistPropsType = {
    bg: string
    userPhoto: string
    userName: string
}

export const Artist = (props: ArtistPropsType) => {
    return (
        <div>
            <Card>
                <img src={props.bg} alt=""/>
                <div>
                    <img src={props.userPhoto} alt=""/>
                    <div>
                        <span>Owner</span>
                        <span>{props.userName}</span>
                    </div>

                </div>
            </Card>
        </div>
    );
};

const Card = styled.div`
  border-radius: 16px;
 // background: linear-gradient(2deg, rgba(19, 30, 58, 0.92) 16.36%, rgba(19, 30, 58, 0.00) 52.73%), 
 /* url('{bg}')*/, lightgray 50% / cover no-repeat;
`
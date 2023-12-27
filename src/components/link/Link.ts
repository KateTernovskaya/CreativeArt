import styled from "styled-components";

type LinkPropsType = {
    href?: string
}

export const Link = styled.a<LinkPropsType>`
  a,
  a:visited {
    cursor: pointer;
    text-decoration: none;
  }
`
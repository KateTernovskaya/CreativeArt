import {theme} from "./Theme";

type FontPropsType = {
    family?: string;
    color?: string;
    limeHeight?: number;
    weight?: number;
    Fmin?: number;
    Fmax?: number;
}
export const font = ({family, color, limeHeight, weight, Fmin, Fmax}: FontPropsType) => `
font-family: ${family || 'Inter'};
color: ${color || theme.colors.font};
font-weight: ${weight || 400};
line-height: ${limeHeight || 1.6};
font-size: calc( (100vw - 360px)/(1512 - 360) * (${Fmax || 18} - ${Fmin || 14}) + ${Fmin}px);
`
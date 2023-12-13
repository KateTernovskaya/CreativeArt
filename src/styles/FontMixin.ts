import {theme} from "./Theme";

type FontPropsType = {
    family?: string;
    color?: string;
    weight?: number;
    Fmin?: number;
    Fmax?: number;
}
export const font = ({family, color, weight, Fmin, Fmax}: FontPropsType) => `
font-family: ${family || 'Inter'};
color: ${color || theme.colors.font};
font-weight: ${weight || 400};
font-size: calc( (100vw - 360px)/(1512 - 360) * (${Fmax || 16} - ${Fmin || 16}) + ${Fmin}px);
`
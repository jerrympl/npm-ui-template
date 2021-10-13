import { FunctionComponent } from "react";
export declare type ButtonProps = {
    variant?: 'primary' | 'secondary';
    size?: number;
} & JSX.IntrinsicElements['button'];
export declare const Button: FunctionComponent<ButtonProps>;

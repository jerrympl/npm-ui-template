import React, { FunctionComponent } from "react";

export type ButtonProps = {
    variant?: 'primary' | 'secondary';
    size?: number;
} & JSX.IntrinsicElements['button'];

export const Button: FunctionComponent<ButtonProps> = ({ children, variant = 'primary', ...props}) => {
    const propsToPass = {
        ...props,
        className: `${props.className} Button--${variant}`
    }
    return (
        <button {...propsToPass}>{children}</button>
    );
}
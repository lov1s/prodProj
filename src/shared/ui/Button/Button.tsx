import cls from "./Button.module.scss";
import { classNames, type Mods } from "shared/lib/classNames/classNames";
import {
    type ButtonHTMLAttributes,
    type FC,
    memo,
    type ReactNode,
} from "react";

export enum ThemeButton {
    CLEAR = "clear",
    OUTLINE = "outline",
    BACKGROUND = "background",
    BACKGROUND_INVERTED = "backgroundInverted",
}
export enum ButtonSize {
    M = "size_m",
    L = "size_l",
    XL = "size_xl",
}
interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string;
    theme?: ThemeButton;
    square?: boolean;
    size?: ButtonSize;
    disabled?: boolean;
    children?: ReactNode;
}

export const Button: FC<ButtonProps> = memo((props: ButtonProps) => {
    const {
        className,
        children,
        theme = ThemeButton.OUTLINE,
        square,
        size = ButtonSize.M,
        disabled,
        ...otherProps
    } = props;
    const mods: Mods = {
        [cls[theme]]: true,
        [cls.square]: square,
        [cls[size]]: true,
        [cls.disabled]: disabled,
    };
    return (
        <button
            type="button"
            className={classNames(cls.Button, mods, [className])}
            disabled={disabled}
            {...otherProps}
        >
            {children}
        </button>
    );
});

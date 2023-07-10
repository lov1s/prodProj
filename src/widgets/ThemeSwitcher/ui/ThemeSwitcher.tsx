import cls from "./ThemeSwitcher.module.scss";
import { classNames } from "shared/lib/classNames/classNames";
import { Theme, useTheme } from "app/providers/ThemeProvider";
import DarkIcon from "shared/assets/icons/dark-mode.svg";
import LightIcon from "shared/assets/icons/light-mode.svg";
import { Button, ThemeButton } from "shared/ui/Button/Button";

interface ThemeSwitcherProps {
    className?: string;
}
export const ThemeSwitcher = ({ className }: ThemeSwitcherProps) => {
    const { theme, toggleTheme } = useTheme();
    return (
        <Button
            theme={ThemeButton.CLEAR}
            className={classNames(cls.ThemeSwitcher, {}, [className!])}
            onClick={toggleTheme}
        >
            {theme === Theme.LIGHT ? <DarkIcon fill={"#fff"} /> : <LightIcon />}
        </Button>
    );
};

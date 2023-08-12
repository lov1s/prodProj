import cls from "./LoginForm.module.scss";
import { classNames } from "shared/lib/classNames/classNames";
import { useTranslation } from "react-i18next";
import { Button } from "shared/ui/Button/Button";
import { Input } from "shared/ui/Input/Input";

interface LoginFormProps {
    className?: string;
}
export const LoginForm = ({ className }: LoginFormProps) => {
    const { t } = useTranslation();
    return (
        <div className={classNames(cls.LoginForm, {}, [])}>
            <Input
                autofocus
                type="text"
                className={cls.input}
                placeholder={t("Input username")}
            />
            <Input
                type="text"
                className={cls.input}
                placeholder={t("Input password")}
            />
            <Button className={cls.loginBtn}>{t("Log in")}</Button>
        </div>
    );
};

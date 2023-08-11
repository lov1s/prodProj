import React from "react";
import { t } from "i18next";
import { Counter } from "entities/Counter";

const MainPage = () => {
    return (
        <div>
            {t("MainPage")}
            <Counter />
        </div>
    );
};

export default MainPage;

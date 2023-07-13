import type { Preview } from "@storybook/react";
import { Decorator } from "@storybook/react";
import { StyleDecorator } from "shared/config/storybook/styleDecorator/StyleDecorator";
import { ThemeDecorator } from "shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { RouterDecorator } from "shared/config/storybook/RouterDecorator/RouterDecorator";
import { Theme } from "app/providers/ThemeProvider";

export const preview: Preview = {
    parameters: {
        actions: { argTypesRegex: "^on[A-Z].*" },
        controls: {
            matchers: {
                color: /(background|color)$/i,
                date: /Date$/,
            },
        },
    },
};
export const decorators = [
    StyleDecorator,
    ThemeDecorator(Theme.LIGHT),
    RouterDecorator,
];
// Decorator(StyleDecorator);
// addDecorator(ThemeDecorator(Theme.LIGHT));
// addDecorator(RouterDecorator);

import { ThemeProvider } from "styled-components";
import GlobalStyles from "../src/theme/globalStyle";

export const parameters = {
	actions: { argTypesRegex: "^on[A-Z].*" },
	controls: {
		matchers: {
			color: /(background|color)$/i,
			date: /Date$/,
		},
	},
};

export const decorators = [
	(Story) => (
		<ThemeProvider>
			<GlobalStyles />
			<Story />
		</ThemeProvider>
	),
];

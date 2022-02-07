import 'rsuite/styles/index.less';
import {
    createGlobalStyle,
    DefaultTheme,
    ThemeProvider as StyledThemeProvider,
} from 'styled-components';
import { defaultTheme } from './defaultTheme';

const GlobalStyle = createGlobalStyle`
    body {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
`;

type ThemeProviderProps = {
    theme?: DefaultTheme;
};

export const ThemeProvider: React.FC<ThemeProviderProps> = ({
    children,
    theme = defaultTheme,
}) => (
    <>
        <GlobalStyle />
        <StyledThemeProvider theme={theme}>{children}</StyledThemeProvider>
    </>
);

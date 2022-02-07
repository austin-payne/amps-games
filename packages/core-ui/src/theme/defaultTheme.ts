import { DefaultTheme } from 'styled-components';

declare module 'styled-components' {
    export interface DefaultTheme {
        colors: {
            primary: string;
        };
    }
}

export const defaultTheme: DefaultTheme = {
    colors: {
        primary: '#0070f3',
    },
};

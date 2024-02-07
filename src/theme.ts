import { DefaultTheme } from "styled-components/native";

declare module 'styled-components' {
    export interface DefaultTheme {
        colors: {
            separator: string;
            gray: string;
            background: {
                primary: string;
                secondary: string;
                tertiary: string;
            }
            system: {
                primary: string;
                secondary: string;
                tertiary: string;
                white: string;
            }
            text: {
                high: string;
                medium: string;
                disabled: string;
            }
        }
        
        fonts: {
            largeTitle: {
                family: string;
                size: string;
            }
            title2: {
                family: string;
                size: string;
            }
            title1: {
                family: string;
                size: string;
            }
            headline: {
                family: string;
                size: string;
            }
            body: {
                family: string;
                size: string;
            }
            tab: {
                family: string;
                size: string;
            }
            footnote: {
                family: string;
                size: string;
            }
            subhead: {
                family: string;
                size: string;
            }
        }

        spaces: {
            space1: string;
            space2: string;
            space3: string;
            space4: string;
            space5: string;
        },

    }
}

export const theme: DefaultTheme = {
    colors: {
        separator: '#21283F',
        gray: '#73798C', //'#8E8E93',
        background: {
            primary: '#141927',
            secondary: '#21283F',
            tertiary: '#2D344B'
        },
        system: {
            primary: '#4870FF',
            secondary: '#00D971',
            tertiary: '#FF9C41',
            white: '#fff'
        },
        text: {
            high: '#fff',
            medium: 'rgba(235, 235, 245, .60)',
            disabled: 'rgba(235, 235, 245, .30)',
        }
    },
    fonts: {
        largeTitle: {
            family: 'Nunito_700Bold',
            size: '34px',
        },
        title2: {
            family: 'Nunito_700Bold',
            size: '22px',
        },
        title1: {
            family: 'Nunito_700Bold',
            size: '20px',
        },
        headline: {
            family: 'Nunito_600SemiBold',
            size: '17px',
        },
        body: {
            family: 'Nunito_400Regular',
            size: '17px',
        },
        tab: {
            family: 'Nunito_500Medium',
            size: '10px',
        },
        footnote: {
            family: 'Nunito_400Regular',
            size: '13px',
        },
        subhead: {
            family: 'Nunito_400Regular',
            size: '15px',
        }
    },
    spaces: {
        space1: '4px',
        space2: '8px',
        space3: '16px',
        space4: '24px',
        space5: '48px',
    }
}
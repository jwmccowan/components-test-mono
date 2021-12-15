import { createTheme } from "@mui/material/styles";

const lightTheme = createTheme({
    components: {
        MuiButton: {
            styleOverrides: {
                root: {
                    borderRadius: '8px',
                    padding: '0.5rem 0.75rem',
                    fontSize: '1rem',
                    lineHeight: '150%',
                    textTransform: 'none',
                    fontWeight: 500,
                },
                outlined: {
                    padding: 'calc(0.5rem - 1px) calc(0.75rem - 1px)',
                },
                outlinedSecondary: {
                    color: '#18252E',
                },
                textSecondary: {
                    color: '#18252E',
                },
            },
            defaultProps: {
                disableElevation: true,
            }
        },
        MuiButtonBase: {
            styleOverrides: {
                root: {
                    borderRadius: '12px',
                    padding: '8px 12px',
                }
            },
            defaultProps: {
                disableRipple: true,
                disableTouchRipple: true,
            }
        }
    },
    palette: {
        primary: { main: '#6B30FA' },
        secondary: { main: '#AEB7C7' },
    },
    typography: {
        fontFamily: ['\'Poppins\'', 'sans-serif'].join(', ')
    }
});

export default lightTheme;

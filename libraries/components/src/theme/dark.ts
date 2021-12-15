import { createTheme } from "@mui/material/styles";
import lightTheme from "./light";

const darkTheme = createTheme({
    ...lightTheme,
    palette: {
        ...lightTheme.palette,
        mode: 'dark'
    },
});

export default darkTheme;

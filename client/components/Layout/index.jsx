import Navbar from "../Navbar";
import { ThemeProvider } from "@mui/material/styles";
import theme from "../../styles/theme";
import GlobalStyles from "../../styles/GlobalStyles";
import StyledEngineProvider from "@mui/material/StyledEngineProvider";
import Meta from "../Meta";

const Layout = ({ children }) => {
  return (
    <>
      <Meta />
      <ThemeProvider theme={theme}>
        <StyledEngineProvider injectFirst>
          <GlobalStyles />
          <Navbar />
          {children}
        </StyledEngineProvider>
      </ThemeProvider>
    </>
  );
};

export default Layout;

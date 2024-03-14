import "@styles/globals.scss";
import { ThemeProvider } from "next-themes";

export default function App({ Component, pageProps }) {
    return (
        <ThemeProvider>
            <Component {...pageProps} />
        </ThemeProvider>
    );
}

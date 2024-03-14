import { useTheme } from "next-themes";

export const ThemeChanger = () => {
    const { theme, setTheme } = useTheme();

    return (
        <button
            className="font-normal"
            onClick={() => setTheme(theme == "light" ? "dark" : "light")}
        >
            Change theme
        </button>
    );
};

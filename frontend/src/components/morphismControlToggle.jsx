import { useTheme } from "next-themes";
import { ToggleButton } from "./ui/ToggleButton.jsx";
import { Icon } from "./ui/Icon.jsx";

export function MorphismToggle({ falseState, trueState, trueIconName, falseIconName, className }) {
    const { resolvedTheme, setTheme } = useTheme();
    const currentTheme = resolvedTheme.includes('dark') ? 'dark' : 'light';
    // console.log("Current custom theme: ", currentTheme, "resolved theme: ", resolvedTheme)
    const currentMorphismTheme = resolvedTheme.replace(`${currentTheme}_`, "");

    return (
        <ToggleButton
            trueState={currentTheme + "_"+ trueState}
            falseState={currentTheme +"_" + falseState}
            setFunc={setTheme}
            state={resolvedTheme}
            className={className}
        >
            {/* {console.log("true state", trueState, trueState +"_"+ resolvedTheme, currentCustomTheme)} */}
            {currentMorphismTheme === trueState ? <Icon name={trueIconName} /> : <Icon name={falseIconName} />}
        </ToggleButton>
    );
}
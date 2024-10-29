import React, { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { ToggleButton } from "./ui/ToggleButton.jsx";
import { Icon } from "./ui/Icon.jsx";

export function UIModeToggle({ falseState, trueState, trueIconName, falseIconName, className }) {
    const { resolvedTheme, setTheme } = useTheme();
    const currentMorphismTheme = resolvedTheme.includes('on') ? 'on' : 'off';
    const currentTheme = resolvedTheme.replace(`_${currentMorphismTheme}`, "");
    return (
        <ToggleButton
            trueState={trueState +"_"+ currentMorphismTheme}
            falseState={falseState + "_" + currentMorphismTheme}
            setFunc={setTheme}
            state={resolvedTheme}
            className={className}
        >
            {currentTheme === trueState ? <Icon name={trueIconName} /> : <Icon name={falseIconName} />}
        </ToggleButton>
    );
}
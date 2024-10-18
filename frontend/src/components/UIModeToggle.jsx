import React, { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { ToggleButton } from "./ui/ToggleButton.jsx";
import { Icon } from "./ui/Icon.jsx";

export function UIModeToggle({ className }) {
    const { resolvedTheme, setTheme } = useTheme();

    return (
        <ToggleButton
            falseState={'light'}
            trueState={'dark'}
            setFunc={setTheme}
            state={resolvedTheme}
            className={className}
        >
            {resolvedTheme === 'dark' ? <Icon name="Moon" /> : <Icon name="Sun" />}
        </ToggleButton>
    );
}
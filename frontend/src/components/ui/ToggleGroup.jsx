import React, { createContext, useContext, useState } from 'react';

const ToggleContext = createContext(null);

export function ToggleGroup({ children, onChange }) {
    const [selectedValue, setSelectedValue] = useState(null);

    const handleToggle = (value) => {
        setSelectedValue(prevValue => prevValue === value ? null : value);
        onChange?.(value);
    };

    return (
        <ToggleContext.Provider value={{ selectedValue, onToggle: handleToggle }}>
            <div className="flex space-x-2">
                {children}
            </div>
        </ToggleContext.Provider>
    );
}

export function ToggleOption({ value, children }) {
    const { selectedValue, onToggle } = useContext(ToggleContext);
    const isSelected = selectedValue === value;

    return (
        <button
            className={`px-4 py-2 rounded ${isSelected ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
            onClick={() => onToggle(value)}
            aria-pressed={isSelected}
        >
            {children}
        </button>
    );
}
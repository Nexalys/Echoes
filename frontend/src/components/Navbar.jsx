import { SearchBar } from "./ui/Input.jsx";
import { Icon } from './ui/Icon.jsx';
import { SampleAvatar } from "./ui/Profile.jsx";
import { UIModeToggle } from "./UIModeToggle.jsx";
import { Link } from "react-router-dom";
import { Dropdown, DropdownSeperator, Option, OptionGroup } from "./ui/Dropdown.jsx";
import { useState } from "react";
import { Button } from "./ui/Button.jsx";
import { ToggleGroup, ToggleOption } from "./ui/ToggleGroup.jsx";
import { MorphismToggle } from "./morphismControlToggle.jsx";

export function Navbar() {
    return (
        <nav className='flex items-center gap-5 py-5 px-8 shadow-main border-main rounded-xl'>
            <div className='rounded-full aspect-square h-[45px] border-[0.5px] border-accent shadow-main border-main'></div>
            <Link to='/'>
                <h1 className='echoes-accent font-bold text-4xl mr-2'>ECHOES</h1>
            </Link>
            <SearchBar />
            <Link to='/edit'>
                <div className='rounded-xl shadow-sub aspect-square h-[45px] border-[0.5px]
            border-accent flex items-center justify-center'>
                    <Icon name='Plus' />
                </div>
            </Link>
            <div className="flex flex-row ml-auto gap-[59px] mx-10">
                <UIModeToggle
                    trueState="dark"
                    falseState="light"
                    trueIconName="Moon"
                    falseIconName="Sun"
                    className='ml-auto' />

                <MorphismToggle
                    trueState="on"
                    falseState="off"
                    trueIconName="AArrowUp"
                    falseIconName="AArrowDown"
                    className='ml-auto' />
            </div>

            <SampleAvatar className='h-[50px] rounded-full' />
        </nav>
    )
}

export function EditorNav() {
    const [selectedTheme, setSelectedTheme] = useState('Default');

    const themes = [
        'Default',
        'Solarised',
        'Tokyo Night',
        'Material',
        'Gruvbox',
        'Github',
    ]

    return (
        <nav className='flex items-center gap-5 py-5 px-8 shadow-main border-main rounded-xl'>
            <div className='rounded-full aspect-square h-[45px] border-[0.5px] border-accent shadow-main border-main'></div>
            <div className='flex gap-0 items-end'>
                <Link to='/'>
                    <h1 className='echoes-accent font-bold text-4xl mr-2'>ECHOES</h1>
                </Link>
                <em className='echoes-accent text-2xl'>Editor</em>
            </div>
            <div className='flex gap-4 items-center ml-auto'>
                <Dropdown
                    buttonType='outline'
                    icon={<Icon name='Palette' />}
                    title='Editor Theme'
                >
                    {themes.map((theme) => {
                        return (
                            <Option
                                key={theme}
                                selected={theme === selectedTheme}
                                onClick={() => { setSelectedTheme(theme) }}
                            >
                                {theme}
                            </Option>
                        );
                    })
                    }
                </Dropdown>
                <ToggleGroup>
                    <ToggleOption>
                        <Icon name='Bold' />
                    </ToggleOption>
                    <ToggleOption>
                        <Icon name='Italic' />
                    </ToggleOption>
                    <ToggleOption>
                        <Icon name='Underline' />
                    </ToggleOption>
                </ToggleGroup>
            </div>
            <UIModeToggle className='ml-auto' />
        </nav>
    );
}
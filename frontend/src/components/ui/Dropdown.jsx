import { useState } from "react";
import { Button } from '../ui/Button';
import { Icon } from "../ui/Icon";

function DropdownSeperator() {
    return (
        <div className='border-t-[0.5px] w-full border-text self-center my-4'/>
    )
}

function OptionGroup({ children }) {
    return (
        <div className='dropdown-option-group'>
            {children}
        </div>
    );
}

function Option(props) {
    return (
        <div
            {...props}
            className={`option whitespace-nowrap hover:bg-primary/20 px-5 py-2 rounded-md 
            flex gap-5 items-center relative ${props.className} ${props.selected && 'text-accent'}`}
        >
            {props?.selected && <span className='absolute left-[-1px] flex items-center text-accent'>
                <Icon name='Dot'/>
            </span>}
            {props.children}
        </div>
    );
}

function Dropdown({ children, trigger, icon, title, buttonType }) {
    const [isOpen, setIsOpen] = useState(false);
    const [position, setPosition] = useState('bottom');

    const positionStyle = {
        'bottom': " top-full ease my-[20px] p-[20px] flex flex-col z-[2]",
        "top": " bottom-full my-[20px] p-[20px] flex flex-col z-[2]"
    }

    let onDropdown = false;

    const handleMouseLeaveDropdown = (e) => {
        e.preventDefault();
        setTimeout(() => setIsOpen(false),400);
    }

    const handleLeaveButton = (e) => {
        e.preventDefault();
        setTimeout(() => {
            if (!onDropdown) {
                setIsOpen(false)
            }
        }, 350)
    }

    const handleMouseEnterDropdown = (e) => {
        e.preventDefault();
        onDropdown = true;
    }

    const handleButtonClick = (e) => {
        e.preventDefault();
        if ((e.clientY + e.target.clientHeight) > 0.7*window.innerHeight) {
            setPosition('top');
        } else {
            setPosition('bottom');
        }
        setIsOpen(true);
    }

    return (
        <div className="dropdown relative w-fit">
            <Button onClick={(e) => handleButtonClick(e)} type={buttonType} onMouseLeave={(e) => handleLeaveButton(e)}>
                {icon}
                {trigger}
            </Button>
            <div
                className={positionStyle[position] + ` ${isOpen ? 'opacity-100 translate-x-[20%] visible' : 'opacity-0 invisible'} reg-transition
                dropdown-content rounded-md shadow-main mt-2 h-fit w-fit bg-background border-accent border-[0.1px] min-w-[200px] absolute right-0`}
                onMouseLeave={(e) => handleMouseLeaveDropdown(e)}
                onMouseEnter={(e) => handleMouseEnterDropdown(e)}
            >
                {title && <div className='text-center text-text-sc text-sm my-3'>
                    {title}
                </div>}
                {children}
            </div>
        </div>
    );
}

export { Option, OptionGroup, Dropdown, DropdownSeperator };
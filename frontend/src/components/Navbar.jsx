import { SearchBar } from "./ui/Input.jsx";
import { Icon } from './ui/Icon.jsx';
import { SampleAvatar } from "./ui/Profile.jsx";
import { UIModeToggle } from "./UIModeToggle.jsx";

export function Navbar() {
    return (
        <nav className='flex items-center gap-5 py-5 px-8 shadow-main rounded-xl'>
            <div className='rounded-full aspect-square h-[45px] border-[0.5px] border-accent shadow-main'></div>
            <h1 className='echoes-accent font-bold text-4xl mr-[40px]'>ECHOES</h1>
            <SearchBar/>
            <div className='rounded-xl shadow-sub aspect-square h-[45px] border-[0.5px]
            border-accent flex items-center justify-center'>
                <Icon name='Plus'/>
            </div>
            <UIModeToggle className='ml-auto'/>
            <SampleAvatar className='h-[50px] rounded-full'/>
        </nav>
    )
}
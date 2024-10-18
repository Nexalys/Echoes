import { Outlet } from 'react-router-dom';
import { Navbar } from "../components/Navbar.jsx";

export default function Root() {
    return (
        <section className='flex flex-col p-5 gap-10'>
            <Navbar/>
            <Outlet/>
        </section>
    )
}
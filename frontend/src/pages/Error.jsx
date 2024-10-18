import { useRouteError } from "react-router-dom";

export default function Error() {
    const error = useRouteError();
    console.log(error);

    return (
        <div
            className='absolute inset-0 m-auto h-fit w-[40%] shadow-main rounded-xl p-10
            flex flex-col gap-10 border-[0.5px] border-accent'
        >
            <h1 className='text-5xl font-bold self-center'>This is an <span className='text-red-500'>error</span>!</h1>
            <ul className='flex flex-col gap-4'>
                <li>Hi! I'm Wechoes. I hate you for breaking me!</li>
                <li>For all that is holy I beg you please fix this so we can go back to being besties and I can pretend that I don't hate you!</li>
            </ul>
            <h1 className='text-accent text-4xl self-center'>Check the console loves</h1>
        </div>
    );
}
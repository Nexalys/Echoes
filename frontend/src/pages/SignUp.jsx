import { DoubleBorderInput } from "../components/ui/Input.jsx";

export default function SignUp() {
    return (
        <section className='flex w-full min-h-screen items-center justify-center'>
            <div className='flex flex-col gap-[2rem] w-[45%] items-center h-fit p-[4.5rem] shadow-main rounded-xl border-[0.5px] border-accent'>
                <h3 className='text-3xl font-bold'>Sign up here to Start Reading!</h3>
                <div className='w-[80%]'>
                    <DoubleBorderInput
                        placeholder='Email'
                        type='email'
                        label='Email'
                    />
                </div>
            </div>
        </section>
    );
}
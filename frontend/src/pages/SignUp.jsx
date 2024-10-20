import { DoubleBorderInput } from "../components/ui/Input.jsx";
import { HR } from "../components/ui/Line.jsx";
import { Button } from "../components/ui/Button.jsx";

export default function SignUp() {
    return (
        <section className='w-screen h-screen'>
            <div className='flex flex-col inset-0 m-auto min-h-0 absolute
            gap-[4rem] w-[45%] items-center h-fit p-[4.5rem] shadow-main rounded-xl border-[0.5px] border-accent'>
                <h3 className='text-3xl font-bold'>Sign up here to Start Reading!</h3>
                <div className='w-[80%] flex flex-col gap-7'>
                    <DoubleBorderInput
                        placeholder='Email'
                        type='email'
                        label='Email'
                        error='Enter a fucking email'
                    />
                    <DoubleBorderInput
                        placeholder='Email'
                        type='email'
                        label='Email'
                        error=''
                    />
                    <HR>
                        OR
                    </HR>
                    <Button type='primary'>
                        Log In With Google
                    </Button>
                </div>
            </div>
        </section>
    );
}
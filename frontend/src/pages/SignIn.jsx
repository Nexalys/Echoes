// import React from 'react';
import { useForm } from 'react-hook-form';
import { DoubleBorderInput } from '../components/ui/Input';
import { Button } from '../components/ui/Button';

export default function SignIn() {
    const { register, handleSubmit, formState: { errors, isSubmitted } } = useForm();

    const onSubmit = (data) => {
        console.log('Sign In data:', data);
    };

    return (
        <div className='flex flex-col items-center justify-center h-[100vh] p-10 gap-10'>
            <h1 className='text-6xl'>ECHOES</h1>
            <div className='shadow-main rounded-2xl flex flex-col h-[580px] w-[45%] justify-evenly items-center p-10 border-[1.8px] border-accent border:blur-sm '>
                <form 
                    onSubmit={handleSubmit(onSubmit)} 
                    className='flex flex-col h-[443px] w-[80%] justify-center gap-[4%] items-center'
                >
                    <h3 className='text-4xl'>Sign In to your account</h3>
                    <div className='flex flex-col h-[60%] items-center justify-evenly w-[100%]'>
                    <DoubleBorderInput
                        placeholder='Enter your email'
                        type='text'
                        label='Email'
                        error={errors.email?.message}
                        {...register("email", {
                            required: "Email is required",
                            pattern: {
                                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                                message: "Invalid email address",
                            },
                        })}
                    />

<DoubleBorderInput
                        placeholder='Password'
                        type='password'
                        label='Password'
                        error={errors.password?.message}
                        {...register("password", {
                            required: "Password is required",
                            minLength: { value: 6, message: "Password must be at least 6 characters" },
                        })}
                    />
                    </div>

                    <div className='flex items-center justify-between w-[100%]'>
                        <Button type="submit">Sign In</Button>
                        <a href="" className='underline'>Don't have an account?&nbsp; Sign up here</a>
                    </div>
                </form>
                <div className='h-[116px] flex items-center'>
                    images
                </div>
            </div>
        </div>
    );
}

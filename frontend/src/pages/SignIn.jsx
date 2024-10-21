import React from 'react'

import { DoubleBorderInput } from '../components/ui/Input'
import { Button } from '../components/ui/Button'

export default function SignIn() {
    return (
        <div className='flex flex-col items-center justify-center h-[100vh] p-10 gap-10'>
            <h1 className='text-6xl'>ECHOES</h1>
            <div className='shadow-main rounded-2xl flex flex-col h-[580px] w-[45%] justify-evenly items-center p-10 border-[1.8px] border-accent border:blur-sm '>
                <div className='flex flex-col h-[443px] w-[80%] justify-center gap-[4%] items-center'>
                    <h3 className='text-4xl'>Sign In to your account</h3>
                    <div className='flex flex-col h-[60%] items-center justify-evenly w-[100%]'>
                        <DoubleBorderInput
                            label="Username"
                            placeholder="Enter your username"
                            className='w-[90%] h-[50px]'
                            error = "username already in use!"
                        />

                        <DoubleBorderInput
                            label="Password"
                            placeholder="Enter your password"
                            className='w-[90%] h-[50px]'
                        />
                    </div>

                    <div className='flex items-center justify-between w-[100%] '>
                        <Button className = "" type = "" children="Sign In"/>
                        <a href="" className='underline'>Don't have an account?&nbsp; Sign up here</a>
                    </div>
                </div>
                <div className='h-[116px] flex items-center'>
                    images
                </div>
            </div>

        </div>
    )
}


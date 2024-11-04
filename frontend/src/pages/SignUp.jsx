import { useForm } from "react-hook-form";
import { DoubleBorderInput } from "../components/ui/Input.jsx";
import { HR } from "../components/ui/Line.jsx";
import { Button } from "../components/ui/Button.jsx";
import { Link } from "react-router-dom";

export default function SignUp() {
    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
        reset,
        watch
    } = useForm();

    const onSubmit = (data) => {
        console.log("Form data:", data);
    };

    return (
        <section className='w-screen h-screen flex flex-col justify-start items-center p-10'>
            <h2 className="text-5xl">ECHOES</h2>
            <div className='flex flex-col inset-0 my-10 min-h-0 
            gap-[4rem] w-[55%] items-center h-fit px-[4rem] py-[4rem] shadow-main overflow-auto rounded-xl border-[0.5px] border-accent'>
                <div className="flex flex-col items-center w-[65%] justify-center gap-7">
                    <h3 className='text-3xl font-bold'>Sign up here to Start Reading!</h3>
                    <p className="text-sm">Enter the following data so that we can make your account and you can start publishing your amazing written work! We will need you to connect your preferred cloud storage platform (Google Drive, Dropbox, etc.) to store your blog files, we’d recommend using the same email here as on said platform. We are happy to have you as a writer on our platform ❤</p>
                </div>
                <form onSubmit={handleSubmit(onSubmit)} className='w-[80%] flex flex-col gap-7'>
                    <DoubleBorderInput
                        placeholder='Firstname'
                        type='text'
                        label='Firstname'
                        error={errors.firstname?.message}
                        {...register("firstname", { required: "Firstname is required" })}
                    />
                    <DoubleBorderInput
                        placeholder='Lastname'
                        type='text'
                        label='Lastname'
                        error={errors.lastname?.message}
                        {...register("lastname", { required: "Lastname is required" })}
                    />
                    <DoubleBorderInput
                        placeholder='Username'
                        type='text'
                        label='Username'
                        error={errors.username?.message}
                        {...register("username", {
                            required: "Username is required",
                            minLength: { value: 3, message: "Username must be at least 3 characters" },
                        })}
                    />
                    <DoubleBorderInput
                        placeholder='Email'
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
                    <DoubleBorderInput
                        placeholder='Confirm password'
                        type='password'
                        label='Confirm password'
                        error={errors.confirmPassword?.message}
                        {...register("confirmPassword", {
                            required: "Please confirm your password",
                            validate: (value) =>
                                value === watch("password") || "Passwords do not match",
                        })}
                    />
                    <div className="flex flex-row w-[100%] justify-between items-center my-8">
                        <Button type='submit' className="w-[140px]" disabled={isSubmitting}>
                            Sign Up
                        </Button>

                        <Link to="/sign-in" className="underline">Have an Account? Sign In here!</Link>
                    </div>
                    <HR>
                        OR
                    </HR>
                    <Button type='primary'>
                        Log In With Google
                    </Button>
                </form>
            </div>
        </section>
    );
}

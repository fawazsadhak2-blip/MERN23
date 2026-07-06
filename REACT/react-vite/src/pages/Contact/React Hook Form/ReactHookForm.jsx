import React from 'react'
import { useForm } from "react-hook-form"
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod'; // or 'zod/v4'
import { email } from 'zod';

const ReactHookForm = () => {

    const schema = z.object({
  name: z.string().min(1, { message: 'Required' }), //these must be the register names taken in input section
  email: z.email(), //.email itself does all the regex validations
  message: z.string().min(5),
});

    const {
    register,
    handleSubmit,
    formState: { errors }, //if wrong emai format then it goes to form state and throws error
  } = useForm({
    resolver: zodResolver(schema),
  });

    const onSubmit = (data) => {
        console.log(data);
        
    }
  return (
    <div className="p-2">
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-5 border shadow-lg p-5 rounded-lg">
        <h2 className='text-2xl font-body text-center'>React Hook Contact Form</h2>
        <div className='flex flex-col gap-2'>
            <label htmlFor="name">Name :</label>
            <input type="text" name="name" id="name" className="py-2 rounded-lg outline-none border pl-2"
            {...register("name")} />   {/* names : value like a variable */}
            {errors.name?.message && <p>{errors.name?.message}</p>}
        </div>
        <div className='flex flex-col gap-2'>
            <label htmlFor="email">Email :</label>
            <input type="text" name="email" id="email" className="py-2 rounded-lg outline-none border pl-2" 
            {...register("email")} />  {/* email:value  */}
            {errors.email?.message && <p>{errors.email?.message}</p>} {/* //error msg to be put below input (website)*/}
        </div>

        <div className='flex flex-col gap-2'>
            <label htmlFor="message">Message :</label>
            <input type="text" name="message" id="message" className="py-2 rounded-lg outline-none border pl-2" 
            {...register("message")} />  {/* email:value  */}
            {errors.message?.message && <p>{errors.message?.message}</p>}             
        </div>

        <button className='py-2 px-3 rounded-lg bg-green-600 text-white'>Submit</button>
    </form>
    </div>
  )
}

export default ReactHookForm
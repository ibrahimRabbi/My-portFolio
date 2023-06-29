import TitleBar from "../utility/TitleBar";
import { FaFacebookMessenger, FaWhatsapp } from 'react-icons/fa';
import { useForm } from "react-hook-form";
import emailjs from '@emailjs/browser';
import  { useRef } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();
import Swal from 'sweetalert2'
 

const Contact = () => {

    const form = useRef();
    const { register, handleSubmit, reset, formState: { errors } } = useForm();

    const submit = (data) => {
        console.log(data)     
        emailjs.sendForm('service_zzmtr15', 'template_v82vz5s', form.current, '1i82K5U5J2626tuR8')
            .then((result) => {
                console.log(result.text)
                reset()
                  
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'email send succesfully',
                    showConfirmButton: false,
                    timer: 1500
                })
            }, (error) => {
                console.log(error.text);
            });
    
}

    return (
        <section id='contract' className="my-28">
            <TitleBar title='Contect with Me' subTitle='Get in Touch'/>

            <div data-aos="flip-down" className="flex lg:flex-row flex-col-reverse justify-center gap-9 mt-11 items-center">
                <div className="flex gap-4 lg:block lg:space-y-5">
                    <div className="bg-gradient-to-tl from-amber-300 to-amber-500 p-8 font-semibold text-center rounded-xl">
                        <FaWhatsapp className="text-2xl mx-auto mb-3" />
                        <span className="text-xl">WhatsApp</span><br />
                        <span className="text-sm text-gray-700">019-86711517</span><br />
                        <a href='https://wa.me/01986711517' className="text-purple-700 cursor-pointer">Send Message</a>
                    </div>

                    <div data-aos="flip-down" className="bg-gradient-to-tl from-amber-300 to-amber-500 p-6 font-semibold text-center rounded-xl">
                        <FaFacebookMessenger className="text-2xl mx-auto mb-3"/>
                        <span className="text-xl">Messenger</span><br />
                        <span className="text-sm text-gray-700">egatortutorials</span><br />
                        <a href="https://m.me/ebrahimrabby" className="text-purple-700 cursor-pointer">Send Message</a>
                    </div>
                </div>

                <form ref={form} onSubmit={handleSubmit(submit)}  className="lg:w-1/2 w-full  lg:p-3 space-y-3">

                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text font-semibold">Input your full Name*</span>
                        </label>
                        <input type="text"
                            placeholder="Type here"
                            name="user_name"
                            className="input input-ghost input-bordered input-warning w-full"
                            {...register("name",{required:true})}
                        />
                        {errors.name && <span className="text-yellow-300">your name is required</span>}
                    </div>

                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text font-semibold">Input Your Email*</span>
                        </label>
                        <input type="email"
                            placeholder="Type here"
                            name="user_email"
                            className="input input-ghost input-bordered input-warning w-full"
                            {...register('email',{required:true})}
                        />
                        {errors.email && <span className="text-yellow-300">your Email is required</span>}
                    </div>

                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text font-semibold">Email Subject</span>
                        </label>
                        <input
                            type="text"
                            placeholder="Type here"
                            name="user_sub"
                            className="input input-ghost input-bordered input-warning w-full"
                            {...register('subject')}
                        />
                    </div>



                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text font-semibold">Messege*</span>
                        </label>
                        <textarea
                            cols='10'
                            rows='4'
                            type="text"
                            placeholder="Type here"
                            className=" textarea textarea-ghost textarea-bordered textarea-warning w-full"
                            {...register('message',{required:true,minLength: 15})}
                        />
                        {errors.message?.type === "required" && <span className="text-yellow-300">message is required</span>}
                        {errors.message?.type === 'minLength' && <span className="text-yellow-300">expalin details why you email me?</span>}
                    </div>
                    <input className="bg-gradient-to-tl from-amber-300 to-amber-500 p-2 font-semibold text-center rounded-xl w-full" type="submit" value="Send" />
                </form>
            </div>
        </section>
    );
};

export default Contact;
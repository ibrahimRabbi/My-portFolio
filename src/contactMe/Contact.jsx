import TitleBar from "../utility/TitleBar";
import { FaFacebookMessenger, FaWhatsapp } from 'react-icons/fa';
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";



const Contact = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();

    const submit = (data) => {
    console.log(data)
}

    return (
        <section id='contract' className="mt-28">
            <TitleBar title='Contect with Me' subTitle='Get in Touch'/>

            <div className="flex justify-center gap-9 mt-11 items-center">
                <div className="space-y-5">
                    <div className="bg-gradient-to-tl from-amber-300 to-amber-500 p-8 font-semibold text-center rounded-xl">
                        <FaWhatsapp className="text-2xl mx-auto mb-3" />
                        <span className="text-xl">WhatsApp</span><br />
                        <span className="text-sm text-gray-700">019-86711517</span><br />
                        <a href='https://wa.me/01986711517' className="text-purple-700 cursor-pointer">Send Message</a>
                    </div>

                    <div className="bg-gradient-to-tl from-amber-300 to-amber-500 p-6 font-semibold text-center rounded-xl">
                        <FaFacebookMessenger className="text-2xl mx-auto mb-3"/>
                        <span className="text-xl">Messenger</span><br />
                        <span className="text-sm text-gray-700">egatortutorials</span><br />
                        <a href="https://m.me/ebrahimrabby" className="text-purple-700 cursor-pointer">Send Message</a>
                    </div>
                </div>

                <form onSubmit={handleSubmit(submit)} className="w-1/2 p-3 space-y-3">

                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text font-semibold">Input your full Name*</span>
                        </label>
                        <input type="text"
                            placeholder="Type here"
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
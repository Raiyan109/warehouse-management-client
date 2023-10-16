import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_t3rlyd6', 'template_k8rrwcu', form.current, 'W_0i0So-npwUb6b5D')
            .then((result) => {
                console.log(result.text);
                e.target.reset()
            }, (error) => {
                console.log(error.text);
            });
    };

    return (
        <div className='my-16 mx-4 px-12 md:px-44 lg:px-80'>
            <div className='my-10'>
                <h1 className="text-5xl lg:text-7xl text-center">Contact Us</h1>
            </div>
            <form ref={form} onSubmit={sendEmail}>
                <div className='flex flex-col justify-center '>
                    <div className="mb-6">
                        <label for="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your Name</label>
                        <input type="text" name='user_name' className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Name" required />
                    </div>
                    <div className="mb-6">
                        <label for="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your Email</label>
                        <input type="email" id="email" name="user_email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Email" required />
                    </div>
                    <div className="mb-6">
                        <label for="message" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your message</label>
                        <textarea name="message" id="message" rows="4" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Leave a comment..."></textarea>
                    </div>
                    <button type="submit" value="Send" className="text-white bg-[#F2921D] border border-transparent hover:bg-transparent hover:text-[#F2921D] hover:border-[#F2921D] hover:border-1 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 w-full">Send</button>
                </div>
            </form>

        </div>
    );
};

export default Contact;
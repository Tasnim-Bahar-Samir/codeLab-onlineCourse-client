import React from 'react'
import img from '../../assets/images/contactImg.jpeg'
import {IoIosSend} from 'react-icons/io'
import emailjs from '@emailjs/browser';
import { useRef } from 'react';
import toast from 'react-hot-toast';

const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_nfcpj2h', 'template_o8jmm9l', form.current, 'ZUW9TzzxieswQrWmB')
        .then((result) => {
            console.log(result.text);
            e.target.reset()
            toast.success("Message Sent Successfully")
            
        }, (error) => {
            console.log(error.text);
        });
    };
  return (
    <div>
        <h2 id='contact' className='text-4xl font-bold text-center mt-16 mb-5'>Contact</h2>
        <div className=" px-16">
  <div className=" gap-4 flex md:flex-row flex-col items-center">
    <div className="text-center lg:text-left">
      <img src={img} alt="" />
    </div>
    <div className="border shadow-2xl">
      <form ref={form} onSubmit={sendEmail} className="card-body">
        <div className="form-control">
          <input type="text" placeholder="Name" name='user_name' className="input input-bordered" required/>
        </div>
        <div className="form-control">
          <input type="email" placeholder="Email" name='user_email' className="input input-bordered" required/>
        </div>
        <div>
            <textarea className='textarea textarea-bordered' name="message" id="" cols="40" rows="5" placeholder='Message' required></textarea>
        </div>
        <div className=" mt-6">
          <button className="px-5 py-2 rounded-sm bg-orange-600 text-white flex items-center gap-1"><IoIosSend/>Send</button>
        </div>
      </form>
    </div>
  </div>
</div>
    </div>
  )
}

export default Contact
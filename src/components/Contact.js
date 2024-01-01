import React, { useRef } from 'react'
import { Image } from './Profile'
import { Button } from 'reactstrap'
import emailjs from '@emailjs/browser'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ContactCards = (props) => {
    return (
        <>
            <div className='col-md-3 mb-4'>
                <div className='bg-white rounded-lg shadow p-4 text-center skill-container'>
                    <span className='c-span'><i className='fa-solid fa-location-dot c-icon'></i></span>
                    <h5 className='mb-4'>Address</h5>
                    <p className='mt-4 mb-4 profile-p'>Gotegaon, Madhya Pradesh, India</p>
                </div>
            </div>

            <div className='col-md-3 mb-4'>
                <div className='bg-white rounded-lg shadow p-4 text-center skill-container'>
                    <span className='c-span'><i className='fa-solid fa-phone-volume c-icon'></i></span>
                    <h5 className='mb-4'>Wanna Call Me?</h5>
                    <a className='c-anchor mb-4 mt-4' href='tel:9589661210'>+91 95896 61210</a>
                </div>
            </div>

            <div className='col-md-3 mb-4'>
                <div className='bg-white rounded-lg shadow p-4 text-center skill-container'>
                    <span className='c-span'><i className='fa-solid fa-paper-plane c-icon'></i></span>
                    <h5 className='mb-4'>You can also mail me!</h5>
                    <a className='c-anchor  mb-4 mt-4' href='mailto:iamsuru07@gmail.com'>iamsuru07@gmail.com</a>
                </div>
            </div>
        </>
    )
}

function Contact() {

    const form = useRef()

    const sendEmail = (e) => {
        e.preventDefault()

        emailjs.sendForm('service_xx5qvoj', 'template_3zyz9sh', form.current, '9ODwGHyJHzPaP2BkE')
            .then((result) => {
                if (result.status === 200) {
                    form.current.reset();
                    toast.success('Email sent successfully!', {
                        position: toast.POSITION.BOTTOM_RIGHT
                    });
                }

            }, (error) => {
                console.log('Email sending failed:', error);
                toast.error('Failed to send email!', {
                    position: toast.POSITION.BOTTOM_RIGHT
                });
            });
    }
    return (
        <div className='container mb-5 text-center'>
            <h1 className='mb-5 mt-5 profile-h2'>Contact Me</h1>
            <p className='mb-5 profile-p'>Feel free to reach me!!!</p>

            <div className='row d-flex justify-content-center'>
                <ContactCards />

                <div className='mt-5'>
                    <div className='row d-flex justify-content-center'>
                        <div className='col-md-5 d-flex justify-content-center' style={{ backgroundColor: '#f8f9fa' }}>
                            <Image />
                        </div>

                        <div className='col-md-5' style={{ backgroundColor: '#f8f9fa' }}>
                            <form ref={form} onSubmit={sendEmail}>
                                <div className="mb-3 c-form-group">
                                    <input type="text" name='from_name' className="form-control" placeholder="Your Name" required/>
                                </div>
                                <div className="mb-3 c-form-group">
                                    <input type="email" name='user_email' className="form-control" placeholder="Your Email" required/>
                                </div>
                                <div className="mb-3 c-form-group">
                                    <input type="text" name='subject' className="form-control" placeholder="Subject"required />
                                </div>
                                <div className="mb-3 c-form-group">
                                    <textarea className="form-control" name='message' placeholder='Message' rows={5} required></textarea>
                                </div>
                                <div className="mb-3 c-form-group">
                                    <Button type="submit" className='con-btn'>Send Message</Button>
                                </div>
                            </form>
                            <ToastContainer />
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Contact
import React from 'react'
import { Image } from './Profile'
import { Button, Form, FormGroup, Input } from 'reactstrap'


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


const connectForm = () => {

}


function Contact() {
    return (
        <div className='container mb-5 text-center'>
            <h1 className='mb-5 mt-5 profile-h2'>Contact Me</h1>
            <p className='mb-5 profile-p'>Feel free to reach me!!!</p>

            <div className='row d-flex justify-content-center'>
                <ContactCards />

                <div className='mt-5'>
                    <div className='row d-flex justify-content-center'>
                        <div className='col-md-5 d-flex justify-content-center'  style={{ backgroundColor: '#f8f9fa' }}>
                            <Image />
                        </div>

                        <div className='col-md-5'  style={{ backgroundColor: '#f8f9fa' }}>
                            <Form>
                                <FormGroup className='c-form-group'>
                                <Input
                                    id="name"
                                    name="contacter_name"
                                    placeholder="Your Name"
                                    type="text"
                                />
                                </FormGroup>

                                <FormGroup className='c-form-group'>
                                <Input
                                    id="email"
                                    name="contacter_email"
                                    placeholder="Your Email"
                                    type="email"
                                />
                                </FormGroup>
                                
                                <FormGroup className='c-form-group'>
                                <Input
                                    id="subject"
                                    name="contacter_subject"
                                    placeholder="Subject"
                                    type="text"
                                />
                                </FormGroup>

                                <FormGroup className='c-form-group'>
                                <Input
                                    id="message"
                                    name="contacter_message"
                                    placeholder="Message"
                                    type="textbox"
                                />
                                </FormGroup>

                                <FormGroup className='c-form-group'>
                                <Button type="submit" className='con-btn'>Send Message</Button>
                                </FormGroup>
                            </Form>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Contact
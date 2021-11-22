import React,{useState} from 'react';
import { useForm, ValidationError } from '@formspree/react';

const Conatct = () =>{
    const [state, handleSubmit] = useForm("meqnjjee");
    const [ismessageSent,setIsmessageSent] = useState(false);
    if(state.succeeded){
        setIsmessageSent(true);
    }
    return (
        <section className="introduction contact">
            <div className="flex-jc-sa">
                <div className="img-holder">
                    <h3>Contact Us</h3><br />
                    <br />
                    <img src="https://i.ibb.co/WgY9VxB/undraw-contact-us-15o2.png" />
                </div>
                <div className="contact-box">
                    {ismessageSent && 'Message Sent !'}
                    <form onSubmit={handleSubmit}><br />
                        <input className="form-control" type="text" placeholder="Name" name="name" /><br />
                        <input className="form-control" type="email" placeholder="Email" name="email" /><br />
                        <textarea placeholder="Type Something here..." className="form-control" name="message">Type Something here...</textarea><br /><br />
                        <button className="primary-btn" type="submit" >send</button>
                    </form>
                    <br /><h4>or</h4>send us mail <a href="mailto:sahiljena46@gmail.com">here</a>
                </div>
            </div>
            <br />
            <br />
            <br />
        </section>
    );
}
export default Conatct;
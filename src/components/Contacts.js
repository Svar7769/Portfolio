import React, {useState} from "react";

import emailjs from "emailjs-com";
import {useForm} from "react-hook-form";

const Contacts = () => {
    const [successMessage, setSuccessMessage] = useState("");

    const { register, handleSubmit, formState: { errors } } = useForm();


    const serviceID = "service_ID";
    const templateID = "template_ID";
    const userID = "user_kdQ5QlBuBIUTiYlBDgzBy";

    const onSubmit = (data, r) => {
        sendEmail(
            serviceID,
            templateID,
            {
                name: data.name,
                phone: data.phone,
                email: data.email,
                message: data.message,
            },
            userID
        )
        r.target.reset();
    }

    const sendEmail = (serviceID, templateID, variables, userID) => {
        emailjs.send(serviceID, templateID, variables, userID)
            .then(() => {
                setSuccessMessage("Form Successfully Send");
            }).catch(err => console.error(`Something Went wrong ${err}`));
    }

    return (
        <div className="contact">
            <div className="text-center">
                <h1>CONTACT ME</h1>
                <p>
                    Fill the Form to Contact Me.
                </p>
                <span className="success-message">{successMessage}</span>
            </div>
            <div className="container">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="row">
                        <div className="col-md-6 col-xs-12">
                            <div className="text-center">
                            <input className="form-control"
                               type="text"
                               placeholder="Name"
                               name="name"
                               {...register("name",{
                                   required:"Pls Enter Your Name",
                                   maxLength: {value:20,message:"Name Too Long!!!!"}
                                   })
                               }
                            />
                            <div className="line"></div>
                            </div>
                            <span className="error-message">
                                {errors.name && errors.name.message}
                            </span>

                            <div className="text-center">
                            <input className="form-control"
                                   type="text"
                                   placeholder="Phone Number"
                                   name="phone"
                                   {...register("phoneNo",{
                                       required:"Pls Enter Your Mobile No",
                                       minLength: {value:10,message:"Number To Short!!!!"},
                                       pattern:{
                                           value: /^[0-9]{2,}$/i,
                                           message: "invalid Mobile"
                                       }
                                   })}
                            />
                            <div className="line"></div>
                            </div>
                            <span className="error-message">
                                {errors.phoneNo && errors.phoneNo.message}
                            </span>


                            <div className="text-center">
                            <input className="form-control"
                                   type="email"
                                   placeholder="Email"
                                   name="email"
                                   {...register("email",{
                                       required:"Pls Enter Your Email",
                                       pattern:{
                                           value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                           message: "invalid Email"
                                       }
                                   })}
                            />
                            <div className="line"></div>
                            </div>
                            <span className="error-message">
                                {errors.email && errors.email.message}
                            </span>
                        </div>

                        <div className="col-md-6 col-xs-12">
                            <div className="text-center">
                            <textarea className="form-control"
                                      type="text"
                                      placeholder="Message"
                                      name="message"
                                      {...register("message",{
                                          required:"Pls Enter Your Message"
                                      })}
                            />
                            <div className="line"></div>
                            </div>
                            <span className="error-message">
                                {errors.message && errors.message.message}
                            </span>
                            <button className="btn-main-offer contact-btn" type="submit">SUBMIT</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Contacts;
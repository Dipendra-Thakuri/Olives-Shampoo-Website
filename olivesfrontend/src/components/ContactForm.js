import axios from "axios";
import { useForm } from "react-hook-form";
import styled from "styled-components";

const ContactWrapper = styled.section`
    display : flex;
    background: linear-gradient(135deg, #f3f2ef 0%, #e3e3e3ff 100%);
    padding: 3vw;
    text-align: center;
    justify-content : space-evenly;
`;

const ContactUs = styled.div`
    padding : 5vw 0 0 0;
    width : 40%;
    justify-content : center;
`;

const ContactUsForm = styled.form`
    width: 30%;
    height : 30vw;
    margin: 0;
    background: white;
    padding: 4vw 2vw 3vw 2vw;
    border-radius: 5px;
    box-shadow: 0 4px 10px rgba(0,0,0,0.1);
`;

const ContactTitle = styled.h3`
    font-size : 2.5vw;
`;

const ContactDescription = styled.p`
    font-size : 1.5vw;
`;

const Input = styled.input`
    width: 85%;
    padding: 1vw;
    margin: 1vw;
    border: 1px solid #ccc;
    border-radius: 5px;
    font-size: 1.3vw;
`;

const Textarea = styled.textarea`
    width: 85%;
    padding: 1vw;
    margin: 1vw;
    border: 1px solid #ccc;
    border-radius: 5px;
    font-size: 1.3vw;
    resize: none;
`;

const Button = styled.button`
    background: #b48a60;
    color: white;
    border: none;
    padding: 1vw 2vw;
    margin : 2vw;
    border-radius: 8px;
    font-size: 1.3vw;
    cursor: pointer;
    transition: background 0.3s;

    &:hover {
        background: #9e774f;
    }
`;

const Error = styled.p`
    color: red;
    font-size: 1vw;
    margin : -0.7vw -1vw 0 1.5vw;
    text-align: left;
`;


const ContactForm = () => {

    const { register, handleSubmit, formState : {errors}, reset } = useForm();

    const onSubmit = async (data) => {
        try {
            const response = await axios.post("http://localhost:8080/api/contacts", data);
            if (response.status === 200 || response.status === 201) {
                alert("Message sent successfully!");
                reset(); // clears the form
            }
        } catch (error) {
            console.error("Error sending contact:", error);
            alert("Something went wrong. Please try again later.");
        }
    };

    return (
        <ContactWrapper id="ContactUs">
            <ContactUs>
                <ContactTitle>Connect with Us</ContactTitle>
                <ContactDescription>We'd love to hear from you! Whether you have questions about our products, need assistance, or just want to share your feedback, our team is here to help.
                     Reach out to us through the form below, and we'll get back to you as soon as possible.
                </ContactDescription>
            </ContactUs>
            <ContactUsForm onSubmit={handleSubmit(onSubmit)}>
                <Input 
                    type="text" 
                    placeholder="Your Name"
                    {...register("name", {required : "Name is Required"})}    
                />
                {errors.name && <Error>{errors.name.message}</Error>}
                <Input 
                    type="email" 
                    placeholder="Your Email"
                    {...register("email", {required : "Email is Required",
                        pattern : {
                            value : /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                            message : "Invalid Email Address!",
                        },
                    })}    
                />
                {errors.email && <Error>{errors.email.message}</Error>}
                <Textarea 
                    rows='5'
                    placeholder="Write your Message here..."
                    {...register("message", {required : "Message is Required"})}    
                />
                {errors.message && <Error>{errors.message.message}</Error>}
                <Button type="submit">Send Message</Button>
            </ContactUsForm>
        </ContactWrapper>
    );
}

export default ContactForm;
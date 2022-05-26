import React ,{useState} from 'react'
import { createUserDocument , createAuthWithEmailAndPassword } from '../../utilities/firebase/Firebase';

const defaultFormFields = {
    username : "",
    email : "",
    password : "",
    confirmPassword : ""
  }


function Register() {
    
    const [formFields , setFormFields] = useState(defaultFormFields)
    
    const { username , email , password , confirmPassword } = formFields;

    const resetFormFields = () => {
        setFormFields(defaultFormFields);
    }
    
    const submitHandle = async (event) => {
        event.preventDefault();
        console.log(formFields)
        // confirm password and confirm password are the same 
        if(password !== confirmPassword) {
            alert('error')
        } 
        
        try {
            const { user } = await createAuthWithEmailAndPassword(email , password);
        
            await createUserDocument(user , { username });
            resetFormFields();
        
        } catch (error) {
            if(error.code === 'auth/email-already-in-use'){
            alert('email already resgistered')
            }
        }
    }
    
    
    // target names and formfields names should be the same
    const handleChange = (event) => {
        const { name , value} = event.target;
        setFormFields({...formFields , [name]: value})

    }

    
    
    return (
        <div className="login-form-container">
            <div className="login-register-form">
                <form onSubmit={submitHandle}>
                    <input
                        type="text"
                        name="username"
                        placeholder="Username"
                        onChange={handleChange}
                        value={username}
                    />
                    <input 
                        name="email" 
                        placeholder="Email" 
                        type="email"
                        onChange={handleChange}
                        value={email}
                    />

                    <input
                        type="password"
                        name="password"
                        placeholder="Password"
                        onChange={handleChange}
                        value={password}
                        required
                    />
                    <input
                        type="password"
                        name="confirmPassword"
                        placeholder="Confirm Password"
                        onChange={handleChange}
                        value={confirmPassword}
                        required
                    />
                    <div className="button-box btn-hover">
                        <button type="submit">Register</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Register
import React , {useState} from 'react'
import { signInWithGooglePopup , signInAuthWithEmailAndPassword } from '../../utilities/firebase/Firebase';
import { useNavigate } from 'react-router-dom';

const defaultFormFields = {
    email: "",
    password: ""
}


function Login() {

    const [formFields , setFormFields] = useState(defaultFormFields);
    const { email , password } = formFields;
  
    const navigate = useNavigate()

  const signInWithGoogle = async () => {
     await signInWithGooglePopup();
     navigate('/')
  }
  
  const resetFormFields = () => {
    setFormFields(defaultFormFields)
  }
  
  const handleChange =  (event) => {
    const { name , value } = event.target;
    setFormFields({...formFields, [name]: value});
  }
  
  const handleSubmit = async (event) => {
    event.preventDefault()
  
    try {
      const {user} = await signInAuthWithEmailAndPassword(email, password);
  
      resetFormFields();
      navigate('/')
    } catch (error) {
      if(error.code === 'auth/user-not-found'){
        alert('User not found')
      }
      console.log(error)
      if(error.code === 'auth/wrong-password'){
        alert('Password is incorrect')
      }
    }
  
  
  }
   


    return (
        <div className="login-form-container">
            <div className="login-register-form">
                <form  onSubmit={handleSubmit}>
                    <input
                        type="text"
                        name="email"
                        placeholder="Email"
                        onChange={handleChange}
                        value={email}
                    />
                    <input
                        type="password"
                        name="password"
                        placeholder="Password"
                        onChange={handleChange}
                        value={password}
                    />
                    <div className="button-box btn-hover">
                        <button type="submit">Login</button>
                        <button onClick={signInWithGoogle} type="submit">Sign in with Google</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Login
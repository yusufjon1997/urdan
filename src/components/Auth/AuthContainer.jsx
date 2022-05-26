import React, {useState} from 'react'
import Login from './Login';
import Register from './Register';

function AuthContainer() {

    const [isRegistered , setIsRegistered] = useState(true);

    return (
        <div className="login-register-area pb-100 pt-95">
            <div className="container">
                <div className="row">
                    <div className="col-lg-8 col-md-12 offset-lg-2">
                        <div className="login-register-wrapper">
                            <div className="login-register-tab-list nav">
                                <a className={`${isRegistered && 'active'}`} onClick={() => setIsRegistered(true)} >
                                    <h4> login </h4>
                                </a>
                                <a className={`${isRegistered || 'active'}`} onClick={() => setIsRegistered(false)} >
                                    <h4> register </h4>
                                </a>
                            </div>
                            <div className="tab-content">
                                <div id="lg1" className={`tab-pane ${isRegistered && 'active'}`}>
                                    <Login />
                                </div>
                                <div id="lg2" className={`tab-pane ${isRegistered || 'active'}`} >
                                    <Register />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AuthContainer
import HumaaansWireframe from '../Images/Humaaans Wireframe.png';
import '../Styles/SignUp.modules.css';
import React, { FormEvent } from 'react';
import { useState, useEffect } from 'react';
import SignupForm from "./SignupForm";
import LoginForm from "./LoginForm";



interface Props {
    backToLoginHandler: () => void;
}

function SignUp({backToLoginHandler}: Props) {
    
    const [registrationSuccess, setRegistrationSuccess] = useState<boolean>(false);
    const [testVariable, setTestVariable] = useState<string>('');
    const [testVariable2, setTestVariable2] = useState<string>('');
    const [errorMessage, setErrorMessage] = useState<string>('');
    const apiUrl = 'http://localhost:8080';

    useEffect(() => {
        // 在组件加载时发送请求
        fetch(apiUrl + '/api/users/testVariable')
            .then(response => response.json())
            .then(data => setTestVariable(data));
    }, []);

    useEffect(() => {
        // 在组件加载时发送请求
        fetch(apiUrl + '/api/users/testVariable2')
            .then(response2 => response2.json())
            .then(data2 => setTestVariable2(data2));
    }, []);

    const signUpHandler = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const formData = new FormData(event.currentTarget);
        const requestData = {
            email: formData.get('email-address'),
            password: formData.get('pass-word'),
            firstName: formData.get('first-name'),
            lastName: formData.get('last-name')
        };

        try {
            //const response = await fetch(apiUrl + '/api/users/SignUp', {
            const response = await fetch(apiUrl + '/SignUp', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(requestData)
            });
            if (response.ok) {
                // 注册成功，显示提示消息
                setRegistrationSuccess(true);
                window.location.href = '/login'; // 修改浏览器的 URL 地址
            } else {
                // 注册失败，处理错误信息
                const errorData = await response.json();
                setErrorMessage(errorData.message);
            }
        } catch (error) {
            console.error('Error occurred:', error);
        }
    };

    return (
        
        <div style={{
            margin: 0,
            padding: 0,
            height: '100vh',
            background: 'linear-gradient(to right, #6358DC 50%, white 50%)'
        }}>
            <div>Test Variable: {testVariable}</div>
            <div>Test Variable2: {testVariable2}</div>
            <div>{<SignupForm />}</div>
            <div>{<LoginForm />}</div>
            
            {registrationSuccess && <div>Registration successful!</div>}
            {errorMessage && <div>{errorMessage}</div>}
            <div className="blue-half">
                <img id="wireframe" src={HumaaansWireframe} alt="login image" />
            </div>

            <div className="white-half">
                <button id='back' onClick={backToLoginHandler}>
                    &lt; Back
                </button>
                <div id="sign-up-container">
                    <div id="account-signup">
                        Account Sign Up
                    </div>

                    <div id="descriptionn">
                        Become a member and enjoy pro learning
                    </div>

                    <div id="sign-up-form">
                        {/* <form> */}
                        <form onSubmit={signUpHandler}>
                            <div id="sign-up-fields">
                                <div id="float-left">
                                    <label htmlFor="first-name">First name</label><br />
                                    <input type="text" className="name" name="first-name"/>
                                </div>
                                <div id="float-right">
                                    <label htmlFor="last-name" >Last name</label><br />
                                    <input type="text" className="name" name="last-name"/>
                                </div>
                            </div>
                            <label htmlFor="emailaddress"> Email address</label><br />
                            <input type="text" id="emailaddress" name="email-address"/><br />
                            <label htmlFor="pass-word"> password</label><br />
                            <input type="text" id="pass-word" name="pass-word" /><br />

                            <button type="submit" id="submit"> Submit </button>
                            
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SignUp;
import HumaaansWireframe from '../Images/Humaaans Wireframe.png';
import '../Styles/SignUp.modules.css';

interface Props {
    backToLoginHandler: () => void;
}

function SignUp({backToLoginHandler}: Props) {
    const signUpHandler = async (event) => {
        event.preventDefault();

        const formData = new FormData(event.target);
        const requestData = {
            email: formData.get('email-address'),
            password: formData.get('pass-word'),
            firstName: formData.get('first-name'),
            lastName: formData.get('last-name')
        };

        try {
            const response = await fetch('/SignUp', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(requestData)
            });
            if (response.ok) {
                // 注册成功，可以进行一些操作，比如跳转页面等
            } else {
                // 注册失败，处理错误信息
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

                            <button type="submit" id="submitt"> Submit </button>
                            
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SignUp;
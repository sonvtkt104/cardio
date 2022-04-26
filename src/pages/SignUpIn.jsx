import { useState } from "react"
import { Link} from 'react-router-dom'


export default function SignUpIn({ isSignUp }) {
    const [signUp, setSignUp] = useState(isSignUp);

    const handleToggleClass = () => {
        setSignUp(!signUp);
    }

    console.log(signUp);

    return (
        <>
            {/* copy code */}
            <p className="tip" style={{ opacity: 0 }}>hello</p>
            <div className={signUp ? 'cont s--signup' : 'cont'}>
                <div className="form sign-in">
                    <h2>Welcome back</h2>
                    <label>
                        <span>Email</span>
                        <input type="email" />
                    </label>
                    <label>
                        <span>Password</span>
                        <input type="password" />
                    </label>
                    <p className="forgot-pass">Forgot password?</p>
                    <Link to="/home"><button type="button" className="submit" style={{margin: '40px auto 20px', backgroundColor: 'var(--color-blue)'}}>Sign In</button></Link>
                    <button type="button" className="fb-btn" style={{margin: '20px auto 20px'}}>Connect with <span>facebook</span></button>
                </div>
                <div className="sub-cont">
                    <div className="img">
                        <div className="img__text m--up">
                            <h2 style={{color: 'white'}}>New here?</h2>
                            <p>Sign up and discover great amount of new opportunities!</p>
                        </div>
                        <div className="img__text m--in">
                            <h2 style={{color: 'white'}}>One of us?</h2>
                            <p>If you already has an account, just sign in. We've missed you!</p>
                        </div>
                        <div className="img__btn" onClick={handleToggleClass}>
                            <span className="m--up">Sign Up</span>
                            <span className="m--in">Sign In</span>
                        </div>
                    </div>
                    <div className="form sign-up">
                        <h2>Time to feel like home</h2>
                        <label>
                            <span>Name</span>
                            <input type="text" />
                        </label>
                        <label>
                            <span>Email</span>
                            <input type="email" />
                        </label>
                        <label>
                            <span>Password</span>
                            <input type="password" />
                        </label>
                        <Link to="/home"><button type="button" className="submit" style={{margin: '40px auto 20px', backgroundColor: 'var(--color-blue)'}}>Sign Up</button></Link>
                        <button type="button" className="fb-btn" style={{margin: '20px auto'}}>Join with <span>facebook</span></button>
                    </div>
                </div>
            </div>

        </>
    )
}
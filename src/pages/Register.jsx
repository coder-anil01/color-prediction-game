import React, { useState } from 'react'
import { ImMobile } from "react-icons/im";
import { IoIosMail } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";
import { MdLock } from "react-icons/md";
import { GoCodeOfConduct } from "react-icons/go";

import "../style/Register.css";

const Register = () => {

    const [registerType, setRegisterType] = useState("phone");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [inviteCode, setInviteCode] = useState("");
    const [error, setError] = useState("");
    const [acceptTerms, setAcceptTerms] = useState(true);


    const handleRegister = () => {
        if (!email || !password || !confirmPassword) {
          setError("Please fill out all required fields.");
          return;
        }
        if (password !== confirmPassword) {
          setError("Passwords do not match.");
          return;
        }
        setError("");
        console.log("Registration details:", { email, password, inviteCode });
        alert("Registered successfully!");
      };

  return (
    <>
    <div className="register">
        <div className="register-head">
            <span><IoIosArrowBack/></span>
            <h1>Register</h1>
            <div>Please register by phone number or email</div>
        </div>
        <div className="register-phone-email">
            <div className={`register-phone-${registerType=== "phone" ? "active" : "desible"}`}
                onClick={()=> setRegisterType("phone")}>
                <span><ImMobile/></span>
                <div>Phone</div>
            </div>
            <div className={`register-phone-${registerType=== "email" ? "active" : "desible"}`}
                onClick={()=> setRegisterType("email")}>
                <span><IoIosMail/></span>
                <div>Email</div>
            </div>
        </div>

        {/* Register-Page */}
        <div className="register-page">
            {registerType == "phone" ?
            <div>
                <label><span><ImMobile/></span> Phone number</label>
                <div className="register-page-phone">
                    <select id="country-code" name="country-code">
                        <option value="+1">+91</option>
                    </select>
                    <input
                    type="Number"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="Enter your Phone number"
                    />
                </div>
            </div> :
            <div>
                <label><span><IoIosMail/></span> Email</label>
                <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                />
            </div>
            }
            <div>
                <label><span><MdLock/></span> Set Password</label>
                <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your password"
                />
            </div>
            <div>
                <label><span><MdLock/></span> Confirm Password</label>
                <input
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                placeholder="Confirm your password"
                />
            </div>
            <div>
                <label><span><GoCodeOfConduct/></span> Invite Code</label>
                <input
                type="text"
                value={inviteCode}
                onChange={(e) => setInviteCode(e.target.value)}
                placeholder="Enter invite code"
                />
            </div>
            <div className="checkbox-container">
                <input
                type="checkbox"
                id="terms"
                checked={acceptTerms}
                onChange={(e) => setAcceptTerms(e.target.checked)}
                />
                <label htmlFor="terms">
                    I accept the <span>terms and conditions</span>
                </label>
            </div>
        </div>
        <>
            <button className='Register-button' onClick={handleRegister}>Register</button>
            {/* <button className='login-button' onClick={handleRegister}>Login</button> */}
        </>
    </div>
    </>
  )
}

export default Register

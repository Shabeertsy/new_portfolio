import React from 'react'
import './Otp.css'

export default function Otp() {
    return (
        <div>
            <div className="otp-main">
                <form class="otp-Form">

                    <span class="mainHeading">Enter OTP</span>
                    <p class="otpSubheading">We have sent a verification code to your mobile number</p>
                    <div class="inputContainer">
                        <input required="required" maxlength="1" type="text" class="otp-input" id="otp-input1" />
                        <input required="required" maxlength="1" type="text" class="otp-input" id="otp-input2" />
                        <input required="required" maxlength="1" type="text" class="otp-input" id="otp-input3" />
                        <input required="required" maxlength="1" type="text" class="otp-input" id="otp-input4" />

                    </div>
                    <button class="verifyButton" type="submit">Verify</button>
                    <button class="exitBtn">×</button>
                    <p class="resendNote">Didn't receive the code? <button class="resendBtn">Resend Code</button></p>

                </form>



            </div>
        </div>
    )
}

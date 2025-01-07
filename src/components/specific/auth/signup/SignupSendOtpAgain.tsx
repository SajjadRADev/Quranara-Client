"use client";

import { useToggle } from "usehooks-ts";

import useSignupStore from "@/store/signup";

import SendOtpAgainTimer from "../SendOtpAgainTimer";

function SignupSendOtpAgain() {
    const { user, TTL, resetTTL, getOtp } = useSignupStore();
    const [disabled, toggleDisabled] = useToggle(true);

    const sendAgain = async () => {
        await getOtp(user.phone);
        toggleDisabled();
    };

    return (
        <div className="flex items-center justify-between">
            <SendOtpAgainTimer seconds={TTL} onEndCountdown={toggleDisabled} reset={resetTTL} />
            <button className="font-pelak-medium text-sm text-gray-800 dark:text-gray-200 cursor-pointer disabled:opacity-50 disabled:cursor-default" onClick={sendAgain} disabled={disabled}>
                ارسال دوباره کد
            </button>
        </div>
    );
}



export default SignupSendOtpAgain;

import React, { Fragment } from "react";
import IncomingCallLogo from "../assets/IncomingCall.png";
import OutgoingCallLogo from "../assets/OutgoingCall.png";

interface CallDirectionProps {
    direction: string;
    from: number;
    to: number;
}

export const CallDirection = ({ direction, from, to }: CallDirectionProps) => {
    if (direction === "inbound") {
        return <Fragment>{from || "Private"}</Fragment>;
    } else if (direction === "outbound") {
        return <Fragment>{to || "Private"}</Fragment>;
    } else {
        return <Fragment>{"Private"}</Fragment>;
    }
}

export const CallDirectionIcon = ({ direction }: { direction: string }) => {
    if (direction === "inbound") {
        return <img src={IncomingCallLogo} alt="" className='w-8 h-8 mr-3' />;
    } else if (direction === "outbound") {
        return <img src={OutgoingCallLogo} alt="" className='w-8 h-8 mr-3' />;
    } else {
        return <img src={IncomingCallLogo} alt="" className='w-8 h-8 mr-3' />;
    }
}
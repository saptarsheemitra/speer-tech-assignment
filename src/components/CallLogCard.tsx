import React, { Fragment, useEffect, useState } from "react";
import { PhoneIncoming, PhoneMissed, Voicemail, MoreVertical } from "@styled-icons/feather";
import { format } from 'date-fns';
import { Modal } from "../modal/Modal";
import CallLogDetails from "../modal/CallLogDetails";
// import MissedCallIcon from "../assets/MissedCall.png"
import {CallDirection} from "./CallDirection";

interface CallLogProps {
    call_type: string;
    created_at: string;
    direction: string;
    duration: number;
    from: number;
    id: string;
    is_archived: boolean;
    to: number;
    via: number;
}



interface CallTypeProps {
    call_type: string;
}

const CallLogCard = (callLog: CallLogProps) => {

    const [showLogDetails, setShowLogDetails] = useState(false); // Show log details
    const [formattedDate, setFormattedDate] = useState("");
    const [formattedTime, setFormattedTime] = useState("");
    const [formatedAmPm, setFormatedAmPm] = useState("");


    useEffect(() => {
        const dateObject = new Date(callLog.created_at);
        const monthInWords = format(dateObject, 'MMMM'); // Month in words
        const day = format(dateObject, 'd'); // Day of the month
        const year = format(dateObject, 'yyyy'); // Year
        const timeIn12Hours = format(dateObject, 'h:mm'); // 12-hour time format with AM/PM
        const amPm = format(dateObject, 'a'); // AM/PM separately

        setFormattedDate(`${monthInWords} ${day}, ${year}`);
        setFormattedTime(`${timeIn12Hours}`);
        setFormatedAmPm(`${amPm}`);

    }, [callLog.created_at]);

    const changeShowLogDetails = () => {
        setShowLogDetails(!showLogDetails);
    }

    return (
        <>
            <div className='flex flex-col justify-center items-center w-full cursor-pointer mt-4'>
                <div className='mb-4'>
                    <span className="opacity-40">----------------</span>
                    <span className="text-sm text-[#616060c3] font-bold"> {formattedDate} </span>
                    <span className="opacity-40">----------------</span>
                </div>
                <div className='flex items-center w-[90%] border border-gray-300 rounded-xl py-2'
                    onClick={() => setShowLogDetails(!showLogDetails)}
                >
                    <CallType call_type={callLog.call_type} />
                    <div className='flex flex-col'>
                        <span className="font-semibold text-start">
                            <CallDirection direction={callLog?.direction} from={callLog?.from} to={callLog?.to} />
                        </span>
                        <span className="text-[#a9a9a9] text-xs text-start">tried to call on
                            <span className="font-semibold"> {callLog.via} </span>
                        </span>
                    </div>
                    <MoreVertical size="18" style={{ marginLeft: 'auto', color: '#a9a9a9', minWidth: '14px' }} />
                    <div className="text-[#a9a9a9] text-xs font-bold mr-1">{formattedTime}</div>
                    <div className='text-[#a9a9a9] text-[10px] font-bold border-[#d3d3d3] border-y border-l rounded-l px-1 py-0.5'>{formatedAmPm}</div>
                </div>
            </div>
            {showLogDetails && (
                <Modal onClose={() => { }}>
                    <CallLogDetails
                        // call_type={callLog.call_type}
                        // created_at={callLog.created_at}
                        // direction={callLog.direction}
                        // duration={callLog.duration}
                        // from={callLog.from}
                        id={callLog.id}
                        // is_archived={callLog.is_archived}
                        // to={callLog.to}
                        // via={callLog.via}
                        formattedDate={formattedDate}
                        formattedTime={formattedTime}
                        formatedAmPm={formatedAmPm}
                        changeShowLogDetails={changeShowLogDetails}
                    />
                </Modal>
            )}
        </>
    )
}

// const CallDirection = ({ direction, from, to }: CallDirectionProps) => {
//     if (direction === "inbound") {
//         return <Fragment>{from || "Private"}</Fragment>;
//     } else if (direction === "outbound") {
//         return <Fragment>{to || "Private"}</Fragment>;
//     } else {
//         return <Fragment>{"Private"}</Fragment>;
//     }
// }

const CallType = ({ call_type }: CallTypeProps) => {
    if (call_type === "answered") {
        return <PhoneIncoming size="18" style={{ margin: "0 15px", minWidth: "16px", color: "green" }} />
    } else if (call_type === "voicemail") {
        return <Voicemail size="18" style={{ margin: "0 15px", minWidth: "16px", color: "black" }} />
    } else if (call_type === "missed") {
        return <PhoneMissed size="18" style={{ margin: "0 15px", minWidth: "16px", color: "red" }} />
    } else {
        return null;
    }
}

export default CallLogCard;
import { useState, useEffect } from 'react'
import PersonLogo from "../assets/user.png";
import CloseIcon from "../assets/close.png";
import ArchiveIcon from "../assets/Archive.png";
import { fetchCallDetail, updateCallDetail } from '../api/fetchData';
import {CallDirection, CallDirectionIcon} from '../components/CallDirection';


interface Props {
    id: string;
    formattedDate: string;
    formattedTime: string;
    formatedAmPm: string;
    changeShowLogDetails: () => void
}


const CallLogDetails = ({ id, formattedDate, formattedTime, formatedAmPm,changeShowLogDetails }: Props) => {
    const [callLogDetails, setCallLogDetails] = useState({} as any);
    const [isLoading, setIsLoading] = useState(false);

    const fetchCallDetails = async () => {
        setIsLoading(true);
        const data = await fetchCallDetail(id);
        setCallLogDetails({...data});
        setIsLoading(false);
    }

    const updateCallDetails = async () => {
        setIsLoading(true);
        await updateCallDetail(id, !callLogDetails.is_archived);
        fetchCallDetails();
    }

    useEffect(() => {
        fetchCallDetails();
    }, [])

    if (isLoading) {
        return <div>Loading...</div>
    }

    return (
        <div className='flex flex-col w-full px-2'>
            <img src={CloseIcon} alt="" className='relative self-center left-[48%] top-6 w-3 h-3 cursor-pointer' onClick={changeShowLogDetails} />
            <div className='flex flex-col justify-center items-center mt-6'>
                <img src={PersonLogo} alt="" className='w-20 h-20 mb-2' />
                <span className='text-xl'>
                    <CallDirection direction={callLogDetails.direction} from={callLogDetails.from} to={callLogDetails.to} />
                </span>
            </div>
            <div className='flex flex-col mt-2'>
                <span className='font-semibold'>Call log details:</span>
                <div className='flex justify-between items-center w-full mt-2 mb-2'>
                    <div className='flex items-center'>
                        <CallDirectionIcon direction={callLogDetails.direction} />
                        <div className='flex flex-col mr-2'>
                            <span className='font-medium'>{callLogDetails.direction}</span>
                            <span className='text-sm font-semibold'>{formattedDate} {formattedTime}{formatedAmPm}</span>
                        </div>
                    </div>

                    <div className='flex flex-col items-center mr-1'>
                        <span className=' font-medium'>{callLogDetails.duration} Sec</span>
                        <span className='text-sm font-semibold'>{callLogDetails.call_type}</span>
                    </div>
                </div>
                <div className='flex items-center'>
                    <div className='w-8 h-8 mr-3' />
                    <div className='flex flex-col mr-2'>
                        <span className='text-sm mb-2'> Call from: {callLogDetails.from}</span>
                        <span className='text-sm mb-2'>Call to: {callLogDetails.to}</span>
                        <span className='text-sm mb-2'>Call via: {callLogDetails.via}</span>
                        <span className='text-sm mb-2'>Archive status: {callLogDetails.is_archived ? "True" : "False"}</span>
                        <span className='text-sm mb-2'>ID: {callLogDetails.id}</span>
                    </div>
                </div>
            </div>
            <button className='flex justify-center items-center self-center w-[80%] border border-gray-300 rounded-lg py-2 mt-3 mb-9'
                onClick={updateCallDetails}
            >
                <img src={ArchiveIcon} alt="." className='w-5 h-5 mr-2' />
                <span className='font-medium'>{callLogDetails.is_archived ? "Unarchive this call" : "Archive this call"}</span>
            </button>

        </div>
    )
}



export default CallLogDetails;
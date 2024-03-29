import React, { useState, useEffect } from 'react'
import ArchiveIcon from "../assets/Archive.png";
import CallLogCard from './CallLogCard';
import { fetchData, resetArchiveCalls } from '../api/fetchData';

interface Activity {
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

const ArchiveFeed = () => {

    const [activities, setActivities] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    const resetArchiveData = async () => {
        setIsLoading(true);
        await resetArchiveCalls();
        const data = await fetchData();
        setActivities(data);
        setIsLoading(false);
    }

    const fetchActivityData = async () => {
        setIsLoading(true);
        const data = await fetchData();
        setActivities(data);
        setIsLoading(false);
        console.log(data);
    }

    useEffect(() => {
        fetchActivityData();
    }, []);

    if (isLoading) {
        return <div>Loading...</div>
    }
    return (
        <section className='flex flex-col items-center h-full overflow-scroll pt-4 pb-[9rem] bg-[#f4f4f4]'>
            <button className='bg-red- flex justify-center items-center w-[80%] border border-gray-300 rounded-lg py-2'>
                <img src={ArchiveIcon} alt="." className='w-5 h-5 mr-2' />
                <span className='font-medium'
                    onClick={resetArchiveData}>
                    Unarchive all calls
                </span>
            </button>
            {activities.map((activity: Activity, index: number) => {
                return (activity.is_archived ?
                    <CallLogCard
                        call_type={activity.call_type}
                        created_at={activity.created_at}
                        direction={activity.direction}
                        duration={activity.duration}
                        from={activity.from}
                        id={activity.id}
                        is_archived={activity.is_archived}
                        to={activity.to}
                        via={activity.via}
                        key={index}
                    /> : "")
            })}

        </section>
    )
}

export default ArchiveFeed;

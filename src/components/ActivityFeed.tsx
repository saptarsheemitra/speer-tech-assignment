import React, { useState, useEffect } from 'react'
import ArchiveIcon from "../assets/Archive.png";
import CallLogCard from './CallLogCard';
import { fetchData, updateCallDetail } from '../api/fetchData';


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

const ActivityFeed = () => {

    const [activities, setActivities] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    const fetchActivityData = async () => {
        setIsLoading(true);
        const data = await fetchData();
        setActivities(data);
        setIsLoading(false);
    }

    const archiveAllCalls = async () => {
        activities.forEach(async (activity: Activity) => {
            if (!activity.is_archived) {
                await updateCallDetail(activity.id, true);
            }
        })
        await fetchActivityData();
    }

    useEffect(() => {
        fetchActivityData();
    }, []);

    if (isLoading) {
        return <div>Loading...</div>
    }
    return (
        <section className='flex flex-col items-center h-full overflow-scroll py-4 bg-[#f4f4f4]'>
            <button className='bg-red- flex justify-center items-center w-[80%] border border-gray-300 rounded-lg py-2'
            onClick={archiveAllCalls}>
                <img src={ArchiveIcon} alt="." className='w-5 h-5 mr-2' />
                <span className='font-medium'>Archive all calls</span>
            </button>
            {activities.map((activity: Activity, index: number) => {
                return (!activity.is_archived && activity.duration ?
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
export default ActivityFeed;

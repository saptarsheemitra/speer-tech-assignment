import { useState } from 'react'
import NavBar from "../components/Nav";
import ActivityFeed from '../components/ActivityFeed';
import ArchiveFeed from '../components/ArchiveFeed';
import Footer from '../components/Footer';


const Home = () => {
    const [showArchive, setShowArchive] = useState(false);

    const changeActiveTab = (prop:boolean) => {
        setShowArchive(prop);
    }

    return (
        <div className='h-[70vh] overflow-hidden'>
            <section className='sticky top-0 flex justify-center w-full border border-b-[#dad9d9]'>
                <NavBar showArchive={showArchive} changeActiveTab={changeActiveTab} />
            </section>
            {!showArchive ? <ActivityFeed /> : <ArchiveFeed />}
            <Footer />
        </div>
    );

}

export default Home;

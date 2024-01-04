
import PhoneLogo from "../assets/Phone.png"
import FilterIcon from "../assets/Filter.png"
import { MoreVertical } from "@styled-icons/feather";

interface NavProps {
    showArchive: boolean;
    changeActiveTab: (prop: boolean) => void
}

const Nav = ({ showArchive, changeActiveTab }: NavProps) => {

    return (
        <nav className='flex justify-between items-center w-full h-[4rem] '>
            <div className='flex justify-center items-center w-[35%] h-full bg-white'>
                <img src={PhoneLogo} alt="call" className='w-8 h-8 mr-2' />
                <span className='text-xl font-bold'>Activity</span>
            </div>
            <div className='flex justify-around items-center w-[65%] h-full bg-[#f4f4f4] pl-2'>
                <button className={`flex justify-center items-center font-semibold py-3 px-2 ml-1 ${!showArchive ? "opacity-100" : "opacity-60"}`}
                    onClick={() => changeActiveTab(false)}>
                    All Call
                </button>
                <MoreVertical size="18" style={{ marginLeft: 'auto', color: '#a9a9a9', minWidth: '1px' }} />
                <button className={`flex justify-center items-center font-semibold py-3 px-2 ml-1 ${showArchive ? "opacity-100" : "opacity-60"}`}
                    onClick={() => changeActiveTab(true)}>
                    Archived
                </button>
                <MoreVertical size="18" style={{ marginLeft: 'auto', color: '#a9a9a9' }} />
                <span className=' p-3 cursor-pointer'>
                    <img src={FilterIcon} alt="" className='w-7 h-7' />
                </span>
            </div>
        </nav>
    )
}

export default Nav;
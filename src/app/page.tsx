import LeftSidebar from './sections/LeftSidebar';
import { BsBell, BsTwitter, BsEnvelope,  BsDot, BsChat } from 'react-icons/bs';
import { HiOutlineHashtag } from 'react-icons/hi';
import {AiOutlineHeart, AiOutlineRetweet, } from 'react-icons/ai';
import { IoPaperPlane, IoShareOutline, IoStatsChart } from 'react-icons/io5';
import MainSection from './sections/MainSection';
import RightSection from './sections/RightSection';

export default function Home() {
  return (
    <div className="w-full min-h-screen flex bg-black text-white">
      {/* Left Sidebar */}
        <LeftSidebar/>
        <MainSection/>
        <RightSection/>
    </div>
  );
}

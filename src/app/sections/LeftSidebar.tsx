import React from 'react'
import Link from 'next/link';
import { BiHomeCircle, BiUser } from 'react-icons/bi';
import { BsBell, BsTwitter, BsEnvelope, BsThreeDots } from 'react-icons/bs';
import { HiOutlineHashtag } from 'react-icons/hi';

const NAVIGATION_ITEM = [
  { title: 'Twitter', icon: BsTwitter },
  { title: 'Home', icon: BiHomeCircle },
  { title: 'Explore', icon: HiOutlineHashtag },
  { title: 'Notification', icon: BsBell },
  { title: 'Message', icon: BsEnvelope },
  { title: 'Profile', icon: BiUser },
];

const LeftSidebar = () => {
  return (
    <section className="fixed w-[275px] h-full flex flex-col justify-between p-4 bg-gray-900">
    <div className="space-y-6">
      {/* Navigation Items */}
      {NAVIGATION_ITEM.map((item) => (
        <Link
          href={`/${item.title.toLowerCase()}`}
          key={item.title}
          className={`flex items-center space-x-4 p-4 rounded-full text-xl font-medium hover:bg-gray-800 ${
            item.title === 'Twitter' ? 'justify-center text-3xl' : ''
          }`}
        >
          <item.icon />
          {item.title !== 'Twitter' && <span>{item.title}</span>}
        </Link>
      ))}
      {/* Tweet Button */}
      <button className="w-full bg-blue-500 text-lg py-3 rounded-full hover:bg-blue-400 transition">
        Tweet
      </button>
    </div>

    {/* User Profile */}
    <button className="flex items-center justify-between p-4 hover:bg-gray-800 rounded-full">
      <div className="flex items-center space-x-3">
        <div className="w-10 h-10 bg-gray-700 rounded-full"></div>
        <div>
          <div className="text-sm font-medium">Bors L</div>
          <div className="text-xs text-gray-400">@BorsL</div>
        </div>
      </div>
      <BsThreeDots />
    </button>
  </section>
  )
}

export default LeftSidebar
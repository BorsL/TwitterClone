import React from 'react'
import { BsDot, BsChat } from 'react-icons/bs';
import {AiOutlineHeart, AiOutlineRetweet, } from 'react-icons/ai';
import { IoShareOutline, IoStatsChart } from 'react-icons/io5';

const MainSection = () => {
  return (
    <main className="ml-[275px] flex w-[600px] flex-col border-l border-r border-gray-600">
    {/* Header */}
    <h1 className="text-2xl font-bold p-4 border-b border-gray-600">Home</h1>
  
    {/* Tweet Input Section */}
    <div className="flex flex-col border-t border-b border-gray-600 p-4 space-y-4">
      {/* Input Area */}
      <div className="flex space-x-4">
        <div className="w-10 h-10 bg-slate-400 rounded-full"></div>
        <input
          type="text"
          placeholder="What's happening?"
          className="w-full bg-transparent text-white focus:outline-none placeholder-gray-400 text-lg"
        />
      </div>
      {/* Action Buttons */}
      <div className="flex justify-between items-center">
        {/* Left Action Icons Placeholder */}
        <div className="flex space-x-4 text-gray-400">
          {/* Example icons */}
          {/* <BsImage className="text-xl cursor-pointer" /> */}
          {/* <BsEmojiSmile className="text-xl cursor-pointer" /> */}
        </div>
        {/* Tweet Button */}
        <button className="bg-blue-500 text-white text-sm px-6 py-2 rounded-full hover:bg-blue-400 transition">
          Tweet
        </button>
      </div>
    </div>
  
    {/* Tweets Feed */}
    <div className="flex flex-col space-y-4 p-4">
      {Array.from({ length: 5 }).map((_, i) => (
        <div
          key={i}
          className="border-b border-gray-600 flex space-x-4 pb-4"
        >
          {/* User Avatar */}
          <div className="w-12 h-12 bg-slate-400 rounded-full"></div>
  
          {/* Tweet Content */}
          <div className="flex flex-col flex-1 space-y-2">
            {/* User Info */}
            <div className="flex items-center space-x-2">
              <span className="text-white font-bold">Bors L</span>
              <span className="text-gray-400 text-sm">@BorsL</span>
              <BsDot className="text-gray-400" />
              <span className="text-gray-400 text-sm">5h</span>
            </div>
  
            {/* Tweet Text */}
            <div className="text-white text-sm">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos fugiat
              dolore repellat soluta delectus laborum odit obcaecati sit autem
              tenetur. Tempora maxime, nulla illo iste cumque eligendi
              perferendis magni porro.
            </div>
  
            {/* Tweet Media */}
            <div className="bg-slate-600 rounded-xl overflow-hidden">
              <div className="aspect-video bg-slate-400"></div>
            </div>
  
            {/* Tweet Actions */}
            <div className="flex items-center  justify-between text-gray-400 text-sm">
              <div className="flex items-center space-x-6 ">
                <button className="flex items-center space-x-1 hover:text-blue-400 transition rounded-full hover:bg-white/20">
                  <BsChat className="text-lg" />
                  <span>12</span>
                </button>
                <button className="flex items-center space-x-1 hover:text-green-400 transition rounded-full hover:bg-white/20">
                  <AiOutlineRetweet className="text-lg" />
                  <span>4</span>
                </button>
                <button className="flex items-center space-x-1 hover:text-red-400 transition rounded-full hover:bg-white/20">
                  <AiOutlineHeart className="text-lg" />
                  <span>56</span>
                </button>
                <button className="flex items-center space-x-1 hover:text-gray-300 transition rounded-full hover:bg-white/20">
                  <IoStatsChart className="text-lg" />
                </button>
                <button className="flex items-center space-x-1 hover:text-gray-300 transition rounded-full hover:bg-white/20">
                  <IoShareOutline className="text-lg" />
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  </main>
  )
}

export default MainSection
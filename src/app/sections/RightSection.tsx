import React from 'react'

const RightSection = () => {
  return (
    <div>
         {/* Right Sidebar */}
         <section className="w-[350px] hidden h-full lg:flex flex-col space-y-6 p-4 bg-gray-900">
         {/* Search */}
         <div className="bg-gray-800 rounded-full p-3">
           <input
             type="text"
             placeholder="Search Twitter"
             className="bg-transparent w-full text-sm placeholder-gray-500 focus:outline-none"
           />
         </div>
 
         {/* Trends */}
         <div className="bg-gray-800 rounded-xl p-4">
           <h2 className="text-lg font-semibold mb-4">Trends for you</h2>
           <div className="space-y-4">
             {[...Array(5)].map((_, i) => (
               <div key={i} className="flex flex-col text-sm space-y-1">
                 <span className="text-gray-400">Trending in Tech</span>
                 <span className="font-medium">React is Awesome</span>
                 <span className="text-gray-400">25.6K Tweets</span>
               </div>
             ))}
           </div>
         </div>
 
         {/* Who to Follow */}
         <div className="bg-gray-800 rounded-xl p-4">
           <h2 className="text-lg font-semibold mb-4">Who to follow</h2>
           {[...Array(3)].map((_, i) => (
             <div key={i} className="flex items-center justify-between mb-4">
               <div className="flex items-center space-x-3">
                 <div className="w-10 h-10 bg-gray-700 rounded-full"></div>
                 <div>
                   <div className="text-sm font-medium">User {i + 1}</div>
                   <div className="text-xs text-gray-400">@user{i + 1}</div>
                 </div>
               </div>
               <button className="bg-blue-500 text-sm px-4 py-1 rounded-full hover:bg-blue-400 transition">
                 Follow
               </button>
             </div>
           ))}
         </div>
       </section>
    </div>
  )
}

export default RightSection
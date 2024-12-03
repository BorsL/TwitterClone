import LeftSidebar from './sections/LeftSidebar';
import MainSection from './sections/MainSection';
import RightSection from './sections/RightSection';
import { login, signup } from './actions'
import { createServerClient } from '@supabase/ssr';
import { Database } from '@/lib/database.types';
import { createClient } from '../../utils/supabase/server';


const Home = async () => {

  return (
    <div className="w-full min-h-screen flex bg-black text-white">
      {/* Left Sidebar */}
        <LeftSidebar/>
        <MainSection/>
        <RightSection/>
    </div>
  );
}

export default Home;
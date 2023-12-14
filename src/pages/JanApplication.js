import React from 'react';
import Nav from "../components/Nav/index";
import Header from "../components/Header/index";
import Footer from '../components/Footers/footer';

const JanApplication = () => {
  return (
    <div>
        <Nav />
        <Header />
        <div className='w-full flex flex-1 flex-shrink-0 justify-start align-top bg-slate-500 py-10 px-24 sm:px-6'>
            <div className='p-6 flex flex-col flex-shrink justify-start gap-4 bg-blue-900'>
                <h1 className='text-white font-black text-base text-left'>January Mobile Application Program</h1>
                <p className='text-white'>Unlock Your Potential with Our Mobile Development Program.</p>
            </div>
            <div className=''>

            </div>
        </div>
        <Footer />
    </div>
  )
}

export default JanApplication
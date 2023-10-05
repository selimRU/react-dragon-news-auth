import React from 'react';
import Header from '../Shared/Header';
import Navbar from '../Shared/Navbar';
import Marquee from 'react-fast-marquee';
import MainPart from '../MainPart/MainPart';

const Home = () => {
    return (
        <div className=' font-fonts max-w-6xl mx-auto space-y-3 mt-5'>
            <Header></Header>
            <div className=' flex items-center bg-[#F3F3F3] py-10 px-5 rounded-md' style={{ speed: 100 }}>
                <button className=' bg-red-600 text-white px-4 py-1 rounded-md'>Latest</button>
                <Marquee pauseOnHover={true} direction={'right'} speed={70}>
                    <p>Match Highlights: Germany vs Spain — as it happened   !   Match Highlights: Germany vs Spain as..</p>
                </Marquee>
            </div>
            <Navbar></Navbar>
            <MainPart></MainPart>
        </div>
    );
};

export default Home;
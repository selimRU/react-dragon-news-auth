import React, { useContext } from 'react';
import { NewsContext } from '../Context/Context';
import Header from '../Shared/Header';
import RightNav from '../MainPart/RightNav/RightNav';
import { useParams } from 'react-router-dom';
import Navbar from '../Shared/Navbar';

const NewsDetails = () => {
    const { id } = useParams()
    const { news } = useContext(NewsContext)
    console.log(news);
    const categoryNews = news.filter(category => category._id === id)
    console.log(categoryNews);
    return (
        <div className='max-w-6xl mx-auto text-center space-y-4'>
            <Header></Header>
            <Navbar></Navbar>
            <h3 className=' text-start'>Dragon News</h3>
            <div className='grid lg:grid-cols-3 gap-5'>
                <div className=' lg:col-span-2'>
                    {categoryNews.map(category => <div className="space-y-4 ">
                        <img className=" w-full mx-auto" src={category.thumbnail_url} alt="" />
                        <p className='w-[60%] font-semibold text-lg mx-auto'>{category.title}</p>
                        <p className=' w-[60%] mx-auto text-center'>{category.details}</p>
                    </div>)
                    }
                </div>
                <div className=' static'>
                    <RightNav></RightNav>
                </div>
            </div>
        </div>
    )

};

export default NewsDetails;
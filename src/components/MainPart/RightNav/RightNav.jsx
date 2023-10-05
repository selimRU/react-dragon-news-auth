import React from 'react';
import { AiOutlineGoogle, AiFillGithub } from 'react-icons/ai';
import SocialConnection from './SocialConnection';
const RightNav = () => {
    return (
        <div className=' pb-5 pt-1 px-3 space-y-3 sticky top-0'>
            <h3 className=' font-semibold text-xl'>Login With</h3>
            <div className=' flex items-center gap-1 btn btn-outline border-blue-400 mb-3'>
                <AiOutlineGoogle className=' text-blue-700 text-lg'></AiOutlineGoogle>
                <button>Log With Google</button>
            </div>
            <div className=' flex items-center gap-1 btn btn-outline'>
                <AiFillGithub className=' text-xl'></AiFillGithub>
                <button>Log With Google</button>
            </div>
            <SocialConnection></SocialConnection>
        </div>
    );
};

export default RightNav;
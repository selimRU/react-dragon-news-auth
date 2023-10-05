import { AiOutlineTwitter, AiFillInstagram } from 'react-icons/ai';
import { BiLogoFacebook } from 'react-icons/bi';

const SocialConnection = () => {
    return (
        <div>
            <div className=' flex items-center gap-2 border rounded-t-md py-3 px-3'>
                <div className='bg-[#F3F3F3] rounded-full text-xl p-3 text-blue-400'><BiLogoFacebook></BiLogoFacebook></div>
                <h4 className=' text-[#706F6F]'>Facebook</h4>
            </div>
            <div className='flex items-center gap-2 border-x py-3 px-3'>
                <div className='bg-[#F3F3F3] rounded-full text-xl p-3 text-blue-700'><AiOutlineTwitter ></AiOutlineTwitter></div>
                <h4 className='text-[#706F6F]'>Twitter</h4>
            </div>
            <div className='flex items-center gap-2 border rounded-b-md py-3 px-3 '>
                <div className='bg-[#F3F3F3] rounded-full text-xl p-3 text-red-500'><AiFillInstagram ></AiFillInstagram></div>
                <h4 className='text-[#706F6F]'>Instagram</h4>
            </div>
        </div>
    );
};

export default SocialConnection;
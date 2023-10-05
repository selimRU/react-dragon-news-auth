
import LeftNav from './LeftNav/LeftNav';
import MiddlePart from './MiddlePart/MiddlePart';
import RightNav from './RightNav/RightNav';

const MainPart = () => {
    return (
        <div className='grid md:grid-cols-1 lg:grid-cols-4 gap-6'>
            <div>
                <LeftNav></LeftNav>
            </div>
            <div className='lg:col-span-2'>
                <MiddlePart></MiddlePart>
            </div>
            <div>
                <RightNav></RightNav>
            </div>
        </div>
    );
};

export default MainPart;
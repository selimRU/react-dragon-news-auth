
import { useContext } from 'react';
import MiddlePartCard from './MiddlePartCard';
import { NewsContext } from '../../Context/Context';
'../../Context/Context';

const MiddlePart = () => {
    const { news } = useContext(NewsContext)
    return (
        <div className=' px-5'>
            <h3>Dragon News Home</h3>
            {
                news.map(singleNews => <MiddlePartCard
                    key={singleNews._id}
                    singleNews={singleNews}
                ></MiddlePartCard>)
            }
        </div>
    );
};

export default MiddlePart;
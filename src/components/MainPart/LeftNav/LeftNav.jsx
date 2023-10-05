import { useContext } from 'react';
import LeftNavCategory from './LeftNavCategory';
import { NewsContext } from '../../Context/Context';
import { useNavigate } from 'react-router-dom';

const LeftNav = () => {
    const { categories } = useContext(NewsContext)
    const navigate = useNavigate()
    const handleCategory = (id) => {
        navigate(`/categories/${id}`)
    }
    return (
        <div className=' space-y-10 text-center lg:text-start sticky top-0'>
            <h3>All Categories</h3>
            {
                categories.map(catrgory => <LeftNavCategory
                    handleCategory={handleCategory}
                    key={catrgory.id}
                    category={catrgory}
                ></LeftNavCategory>)
            }
        </div>
    );
};

export default LeftNav;
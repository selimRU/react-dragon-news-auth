import React from 'react';

const LeftNavCategory = ({ category, handleCategory }) => {
    const { id, name } = category;
    return (
        <div>
            <p onClick={() => handleCategory(id)} className='text-[#9F9F9F]'>{name}</p>
        </div>
    );
};

export default LeftNavCategory;
import { getData } from '@/lib/fetchData';
import React from 'react';

const AllPhotoPage = async() => {
    const photos = await getData();
    return (
        <div>
            
        </div>
    );
};

export default AllPhotoPage;
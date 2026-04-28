import PhotosCard from '@/components/PhotosCard';
import { getData } from '@/lib/fetchData';
import React from 'react';

const AllPhotoPage = async() => {
    const photos = await getData();
    return (
        <div className='mt-10'>
            <h2 className='font-bold text-2xl text-center'>All Photos</h2>
            <div className='grid grid-cols-1 md:grid-cols-4 gap-4 mt-10'>
                {
                    photos.map(photo => <PhotosCard key={photo.id} photo={photo}></PhotosCard>)
                }
            </div>
        </div>
    );
};

export default AllPhotoPage;
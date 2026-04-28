import React from 'react';
import PhotosCard from './PhotosCard';
import { getData } from '@/lib/fetchData';


const TopGenerations = async() => {
    const photos = await getData();
    console.log(photos);
    const topPhotos = photos.slice(0,8);
    return (
        <div className='mt-20'>
            <h1 className=' font-bold text-4xl text-center'>Top Generations</h1>
            <div className='grid grid-cols-1 md:grid-cols-4 gap-4 mt-10'>
                {
                    topPhotos.map(photo => <PhotosCard key={photo.id} photo={photo}></PhotosCard>)
                }
            </div>
        </div>
    );
};

export default TopGenerations;
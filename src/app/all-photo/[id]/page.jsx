import { getData } from '@/lib/fetchData';
import { Button, Card, Chip } from '@heroui/react';
import Image from 'next/image';
import React from 'react';
import { FaHeart, FaRegArrowAltCircleLeft } from 'react-icons/fa';
import { MdOutlineFileDownload } from 'react-icons/md';

const PhotoDetailsPage = async({params}) => {
    const {id} = await params;
    const photos = await getData();
    const expectedPhoto = photos.find(photo => photo.id == id);
    console.log(expectedPhoto)
    return (
        <div className='mt-10'>
           <div>
            <Card className='flex flex-row   gap-8'>
                <div>
                    <Image
                    src={expectedPhoto.imageUrl}
                    alt={expectedPhoto.title}
                    width={200}
                    height={200}
                    className='object-cover rounded-2xl'
                    />
                </div>
                <div className='space-y-2'>
                    <h1 className='font-bold text-2xl'>{expectedPhoto.title}</h1>
                    <p className='text-lg text-gray-600 '>{expectedPhoto.prompt}</p>
                    <div className='flex gap-4 items-center'>
                        <p className='text-gray-600 mb-2'>Model: {expectedPhoto.model}</p>
                      <p className='text-gray-600 mb-2'>Category: {expectedPhoto.category}</p>
                    </div>
                     <div className='flex gap-4 items-center'><span className='text-xl text-gray-600 '>Tags:</span>
                         {
                            expectedPhoto.tags.map((tag,ind)=> <Chip key={ind} color="accent">{tag}</Chip>)
                         }
                     </div>

                     <div className='flex  items-center gap-4 text-gray-600'>
                       <p className={'text-lg flex justify-between items-center gap-1'}><FaHeart />{expectedPhoto.likes}</p>
                       <p className={'text-lg flex justify-between items-center gap-1'}><MdOutlineFileDownload />{expectedPhoto.downloads}</p>
                     </div>
                     <Button variant='danger-soft'><FaRegArrowAltCircleLeft />All this category</Button>
                </div>
            </Card>
           </div>
        </div>
    );
};

export default PhotoDetailsPage;
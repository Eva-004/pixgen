import { Button, Card, Chip } from '@heroui/react';
import Image from 'next/image';
import React from 'react';
import { FaHeart } from 'react-icons/fa';
import { MdOutlineFileDownload } from 'react-icons/md';

const PhotosCard = ({photo}) => {
    return (
        <div>
            <Card className='border rounded-2xl'>
                <div className='relative aspect-square'>
                 <Image
                 src={photo.imageUrl}
                 alt={photo.title}
                 fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                 className='object-cover rounded-2xl'
                 />
                     <Chip size='sm' className='absolute right-1 top-1'>{photo.category}</Chip>
                </div>
                <div className='space-y-2'>
                    <h2 className='font-bold text-xl'>{photo.title}</h2>
                    <p className='text-gray-500 mb-2'>Model: {photo.model}</p>
                    <div className='flex justify-between items-center gap-4'>
                         <p className={'text-lg flex justify-between items-center gap-1'}><FaHeart />{photo.likes}</p>
                         <p className={'text-lg flex justify-between items-center gap-1'}><MdOutlineFileDownload />{photo.downloads}</p>
                    </div>
                    <Button variant='outline' className={'w-full'}>View</Button>
                </div>
            </Card>
        </div>
    );
};

export default PhotosCard;
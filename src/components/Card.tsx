"use client"
import styles from './Card.module.css'
import Image from 'next/image'
import InteractiveCard from './InteractiveCard';
import { Rating } from '@mui/material';

export default function ProductCard({venueName,imgsrc,onRatingChange}:{venueName:string,imgsrc:string,onRatingChange?:Function}){
    const pid = `${venueName} Rating`;
    return (
        <InteractiveCard venueName={venueName}>
            <div className="w-full h-[70%] relative">
                <Image src = {imgsrc}
                className='object-cover' 
                alt = 'Product picture'
                layout = "fill"
                objectFit='cover'
                />             
            </div>

            <h2 className='font-semibold'>{venueName}</h2>
           {/* <Rating
            id={pid}
            name ={pid}
            data-testid={pid}
            defaultValue={0}
            precision={1}
            onClick={(event) => event.stopPropagation()}
            onChange={(event, value) => onRatingChange(venueName, value)}
            /> */}
        </InteractiveCard>
    );
}
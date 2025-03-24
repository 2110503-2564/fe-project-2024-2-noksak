"use client"
import styles from './Card.module.css'
import Image from 'next/image'
import InteractiveCard from './InteractiveCard';
import { Rating } from '@mui/material';

export default function ProductCard({restaurantName,onRatingChange}:{restaurantName:string,onRatingChange?:Function}){
    const pid = `${restaurantName} Rating`;
    return (
        <InteractiveCard Name={restaurantName}>
            <div className="w-full h-[70%] relative">
                         
            </div>

            <h2 className='font-semibold'>{restaurantName}</h2>
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
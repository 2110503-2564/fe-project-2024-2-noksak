'use client'
import DateReserve from "@/components/DateReserve";
import dayjs, { Dayjs } from "dayjs";
import { useSearchParams } from "next/navigation";
import { useState } from "react";
import addReservation from "@/libs/addReservation";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function Reservations(){

    const {data:session}=useSession();
    if(!session) return <div>Please Login</div>;  
    console.log(session.user.token);

    const urlParams=useSearchParams();
    const id=urlParams.get('id');

    if(!id) return null;

    const [reservationDate,setReservationDate]=useState<Dayjs|null>(null);

    const router=useRouter();

    const makeReservation=async ()=>{
        if(id&&reservationDate){
            const reservationPromise=await addReservation(session.user.token,dayjs(reservationDate).toISOString(),id);
            if(reservationPromise.success){
                router.push('/myreservation')
            }
        }
    }

    return (
        <main className="w-[100%] flex flex-col items-center space-y-4">
            <div className="text-xl font-medium">New Reservation</div>
            <div className="w-fit space-y-2">
                <div className="text-md text-left text-gray-600">Reservation Date</div>
                <DateReserve onDateChange={(value:Dayjs)=>{setReservationDate(value)}}/>
            </div>
            <button className="block rounded-md bg-sky-600 hover:bg-indigo-600 px-3 py-2 text-white shadow-sm" onClick={makeReservation}>Reserve</button>
        </main>
    );
}
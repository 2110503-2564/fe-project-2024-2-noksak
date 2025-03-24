'use client'
import React, { useState, useEffect } from 'react'
import { ReservationItem, ReservationsJson } from '../../interface'
import { useSession } from 'next-auth/react'
import deleteReservation from '@/libs/deleteReservation'
import Link from 'next/link'

const ReservationList = async ({reservationJson}: {reservationJson: Promise<ReservationsJson>}) => {

    const {data:session}=useSession();
    if(!session) return <div>Please Login</div>;  
    console.log(session.user.token);


    const [reservations, setReservations] = useState<ReservationItem[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchReservations = async () => {
            const reservationReady = await reservationJson;
            setReservations(reservationReady.data);
            setLoading(false);
        };

        fetchReservations();
    }, [reservationJson]);

    const handleDelete = async (reservationId: string) => {
        await deleteReservation(session.user.token, reservationId);
        setReservations(prevReservations => prevReservations.filter(reservation => reservation._id !== reservationId));
    };

    const handleEdit = async (reservationId: string) => {
        // Here you can modify a specific reservation directly in the state, or re-fetch it if needed
        // For example, if you have an edit page, you can just navigate without modifying the state here.
    };

    if (loading) return <div>Loading...</div>;

    return reservations.length===0? (
        <span className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 font-ubuntu text-lg text-center flex flex-col items-center gap-4">
          <span className="text-6xl">📖❌</span> {/* ใช้ Emoji แทน BookX */}
          No Reservation
        </span>
      ):(
        <section className="m-1 flex flex-wrap gap-2">
            {reservations.map((reservation: ReservationItem) => (
            <div className="bg-slate-200 rounded px-5 mx-5 py-2 my-2 text-black" key={reservation._id}>
            <div className="text-xl">{reservation.restaurant.name}</div>
            <div className="text-sm">Reservation Date {reservation.apptDate}</div>
            <button className="block rounded-md bg-sky-600 hover:bg-indigo-600 px-3 py-2 text-white shadow-sm" onClick={()=>{handleDelete(reservation._id)}}>Remove</button>
            <Link href={`/reservation/edit?id=${reservation._id}`}>
              <button className="block rounded-md bg-sky-600 hover:bg-indigo-600 px-3 py-2 text-white shadow-sm">Edit</button>
            </Link>
            </div>
            ))}
          </section>
      )
}

export default ReservationList
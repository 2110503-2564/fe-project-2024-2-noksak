import React from 'react'
import { ReservationItem, ReservationJson } from '../../interface'

const ReservationList = async ({reservationJson}: {reservationJson: Promise<ReservationJson>}) => {

    const reservationReady = await reservationJson;

    return reservationReady.count===0? (
        <span className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 font-ubuntu text-lg text-center flex flex-col items-center gap-4">
          <span className="text-6xl">📖❌</span> {/* ใช้ Emoji แทน BookX */}
          No Reservation
        </span>
      ):(
        <section className="m-1 flex flex-wrap gap-2">
            {reservationReady.data.map((reservation: ReservationItem) => (
            <div className="bg-slate-200 rounded px-5 mx-5 py-2 my-2 text-black" key={reservation._id}>
            <div className="text-xl">{reservation.restaurant.name}</div>
            <div className="text-sm">Reservation Date {reservation.apptDate}</div>            
            </div>
            ))}
          </section>
      )
}

export default ReservationList
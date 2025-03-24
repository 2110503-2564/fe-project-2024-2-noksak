import React from 'react'
import { ReservationItem, ReservationJson } from '../../interface'

const ReservationList = async ({reservationJson}: {reservationJson: Promise<ReservationJson>}) => {

    

  return (
    <section className="m-1 flex flex-wrap gap-2">
        {(await (reservationJson)).data.map((reservation: ReservationItem) => (
        <div className="bg-slate-200 rounded px-5 mx-5 py-2 my-2 text-black" key={reservation._id}>
        <div className="text-xl">{reservation.restaurant.name}</div>
        <div className="text-sm">Reservation Date {reservation.apptDate}</div>            
        </div>
        ))}
      </section>
  )
}

export default ReservationList
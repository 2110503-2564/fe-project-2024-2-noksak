"use client";

import ReservationList from "@/components/ReservationList";
import getReservations from "@/libs/getReservations";
import { LinearProgress } from "@mui/material";
import React, { Suspense } from "react";
import { useSession } from "next-auth/react";

export default function RestaurantsPage() {
  
    const {data:session}=useSession();
    if(!session) return <div>Please Login</div>;
    console.log(session.user.token);
    const reservationPromise = getReservations(session.user.token);

  return (
    <main>
      <Suspense
        fallback={
          <p>
            Loading...
            <LinearProgress />
          </p>
        }
      >
        <ReservationList reservationJson={reservationPromise} />
      </Suspense>
    </main>
  );
}

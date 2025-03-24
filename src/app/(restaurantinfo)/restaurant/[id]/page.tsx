import React from "react";
import Image from "next/image";
import getRestaurant from "@/libs/getRestaurant";
import { RestaurantItem } from "../../../../../interface";
import Link from "next/link";

export default async function restaurantDetailPage({ params }: { params: { id: string } }) {
  const restaurantDetail = await getRestaurant(params.id);
  const restaurant = restaurantDetail.data as unknown as RestaurantItem;

  return (
    <>
      {restaurantDetail.data && (
        <main className="flex flex-wrap justify-center gap-2 m-4">
          <div className="flex flex-col gap-2 m-4">
            <h1 className="font-anuphan font-medium text-2xl">
              {restaurant.name}
            </h1>
            <div className="flex font-jetbrains gap-4 flex-wrap">
              <span>{restaurant.address}</span>
              <span>●</span>
              <span>{restaurant.tel}</span>
              <span>●</span>
              <span>{restaurant.office_hours.open} - {restaurant.office_hours.close} {restaurant.office_hours.tz}</span>
            </div>
            <Link href={`/reservation?id=${params.id}`}>
              <button className="block rounded-md bg-sky-600 hover:bg-indigo-600 px-3 py-2 text-white shadow-sm">Make Reservation</button>
            </Link>
          </div>
        </main>
      )}
    </>
  );
}

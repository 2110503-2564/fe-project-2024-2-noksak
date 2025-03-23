import React from "react";
import Image from "next/image";
import getVenue from "@/libs/getVenue";

export default async function VenueDetailPage({ params }: { params: { vid: string } }) {
  const venueDetail = await getVenue(params.vid);
  const venue = venueDetail.data as unknown as VenueItem;

  return (
    <>
      {venueDetail.data && (
        <main className="flex flex-wrap justify-center gap-2 m-4">
          <div className="w-80 rounded-lg overflow-hidden relative aspect-[3/2] shadow-md">
            <Image
              src={venue.picture}
              alt={venue.name}
              fill
              className="object-cover"
            />
          </div>
          <div className="flex flex-col gap-2 m-4">
            <h1 className="font-anuphan font-medium text-2xl">
              {venue.name}
            </h1>
            <div className="flex font-jetbrains gap-4 flex-wrap">
              <span>{venue.address}</span>
              <span>●</span>
              <span>{venue.district}</span>
              <span>●</span>
              <span>{venue.province}</span>
              <span>{venue.postalcode}</span>
            </div>
            <div className="flex gap-2">
              <span className="font-jetbrains bg-black text-white w-fit px-2 py-1 mt-2 rounded-md">
                {venue.dailyrate}฿ / day
              </span>
              <span className="font-jetbrains w-fit px-2 py-1 mt-2 rounded-md border-solid border-2 border-black">
                {venue.tel}
              </span>
            </div>
          </div>
        </main>
      )}
    </>
  );
}

"use client";

import React, { useReducer } from "react";
import Card from "./Card";
import Link from "next/link";

const CardPanel = () => {
  const ratingReducer = (
    ratingMap: Map<string, number>,
    action: { type: string; venueName: string; rating: number }
  ) => {
    const newRatingMap = new Map(ratingMap);
    switch (action.type) {
      case "add":
        newRatingMap.set(action.venueName, action.rating ?? 0);
        return newRatingMap;
      case "remove":
        newRatingMap.delete(action.venueName);
        return newRatingMap;
      default:
        return ratingMap;
    }
  };
  const defaultRating = new Map<string, number>([
    ["The Bloom Pavilion", 0],
    ["Spark Space", 0],
    ["The Grand Table", 0],
  ]);
  const [ratingMap, dispatchRatingChange] = useReducer(
    ratingReducer,
    defaultRating
  );

  interface VenueRepo {
    vid: string;
    name: string;
    image: string;
  }

  const mockVenueRepo: VenueRepo[] = [
    { vid: "001", name: "The Bloom Pavilion", image: "/img/bloom.jpg" },
    { vid: "002", name: "Spark Space", image: "/img/sparkspace.jpg" },
    { vid: "003", name: "The Grand Table", image: "/img/thammasat.jpg" },
  ];

  return (
    <>
      <section className="m-1 flex flex-wrap gap-20">
        {mockVenueRepo.map((venue) => (
          <Link href={`/venue/${venue.vid}`} key={venue.vid}>
            <Card
              key={venue.vid}
              venueName={venue.name}
              imgsrc={venue.image}
              onRatingChange={(venue: string, rating: number) =>
                dispatchRatingChange({
                  type: "add",
                  venueName: venue,
                  rating: rating,
                })
              }
            />
          </Link>
        ))}
      </section>
      <section className="m-1 p-4">
        <h2 className="font-jetbrains font-semibold bg-black text-white w-fit px-2 py-1">
          Venue with Ratings {ratingMap.size}
        </h2>
        <ul className="font-jetbrains my-2">
          {Array.from(ratingMap).map(([venue, rating]) => (
            <li
              key={venue}
              onClick={() =>
                dispatchRatingChange({
                  type: "remove",
                  venueName: venue,
                  rating: 0,
                })
              }
              data-testid={venue}
            >
              {venue}: {<b>{rating}</b>}
            </li>
          ))}
        </ul>
      </section>
    </>
  );
};

export default CardPanel;
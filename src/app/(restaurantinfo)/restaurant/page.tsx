"use client";

import RestaurantCatalog from "@/components/RestaurantCatalog";
import getRestaurants from "@/libs/getRestaurants";
import { LinearProgress } from "@mui/material";
import React, { Suspense } from "react";

export default function RestaurantsPage() {
  const restaurantPromise = getRestaurants();

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
        <RestaurantCatalog restaurantsJson={restaurantPromise} />
      </Suspense>
    </main>
  );
}

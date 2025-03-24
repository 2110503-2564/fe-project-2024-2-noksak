"use client";

import VenueCatalog from "@/components/VenueCatalog";
import getRestaurants from "@/libs/getRestaurants";
import { LinearProgress } from "@mui/material";
import React, { Suspense } from "react";

export default function VenuesPage() {
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
        <VenueCatalog restaurantsJson={restaurantPromise} />
      </Suspense>
    </main>
  );
}

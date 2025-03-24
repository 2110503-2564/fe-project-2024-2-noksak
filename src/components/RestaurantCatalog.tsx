import Link from 'next/link'
import React from 'react'
import Card from './Card'
import { RestaurantItem, RestaurantJson } from '../../interface'

const RestaurantCatalog = async ({restaurantsJson}: {restaurantsJson: Promise<RestaurantJson>}) => {
  return (
    <section className="m-1 flex flex-wrap gap-2">
        {(await (restaurantsJson)).data.map((restaurant: RestaurantItem) => (
          <Link href={`/restaurant/${restaurant._id}`} key={restaurant._id}>
            <Card
              key={restaurant._id}
              restaurantName={restaurant.name}
            />
          </Link>
        ))}
      </section>
  )
}

export default RestaurantCatalog
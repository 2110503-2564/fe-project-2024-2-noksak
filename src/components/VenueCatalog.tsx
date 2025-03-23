import Link from 'next/link'
import React from 'react'
import Card from './Card'

const VenueCatalog = async ({venuesJson}: {venuesJson: Promise<VenueJson>}) => {
  return (
    <section className="m-1 flex flex-wrap gap-2">
        {(await (venuesJson)).data.map((venue: VenueItem) => (
          <Link href={`/venue/${venue.id}`} key={venue.id}>
            <Card
              key={venue.id}
              venueName={venue.name}
              imgsrc={venue.picture}
            />
          </Link>
        ))}
      </section>
  )
}

export default VenueCatalog
export default async function getVenue(id: string): Promise<VenueJson> {
    await new Promise(resolve => setTimeout(resolve, 300)); // Delay 300ms

    const response = await fetch(`https://a08-venue-explorer-backend.vercel.app/api/v1/venues/${id}`);
    if (!response.ok) {
        throw new Error(`Failed to fetch venue with id: ${id}`);
    }

    return response.json();
}

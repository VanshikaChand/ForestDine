// In-memory data store — replaced by a real database in Week 5

const stays = [
  {
    id: "1",
    title: "Cafe Magic Forest",
    location: "Uttarakhand",
    description:
      "A pine-shaded homestay and cafe in the Uttarakhand hills, with farm breakfasts and trail access.",
    pricePerNight: 3200,
    tag: "Uttarakhand",
    rating: 4.8,
    available: true,
  },
  {
    id: "2",
    title: "Coorg Coffee Cottage",
    location: "Coorg",
    description:
      "Stay inside a working coffee estate, with evening cuppings and a view over the western ghats.",
    pricePerNight: 4500,
    tag: "Coorg",
    rating: 4.7,
    available: true,
  },
  {
    id: "3",
    title: "Munnar Tea Hollow",
    location: "Munnar",
    description:
      "A two-room homestay tucked into a tea garden, run by a family who has farmed it for three generations.",
    pricePerNight: 2800,
    tag: "Munnar",
    rating: 4.9,
    available: true,
  },
  {
    id: "4",
    title: "Spiti Stone House",
    location: "Spiti Valley",
    description:
      "A traditional stone homestay at 11,000ft, with home-cooked Himachali meals and stargazing decks.",
    pricePerNight: 2200,
    tag: "Spiti Valley",
    rating: 4.6,
    available: false,
  },
];

const bookings = [
  {
    id: "b1",
    stayId: "1",
    guestName: "Rahul Sharma",
    checkIn: "2025-07-12",
    checkOut: "2025-07-14",
    status: "confirmed",
    createdAt: new Date().toISOString(),
  },
  {
    id: "b2",
    stayId: "2",
    guestName: "Priya Mehta",
    checkIn: "2025-07-20",
    checkOut: "2025-07-23",
    status: "pending",
    createdAt: new Date().toISOString(),
  },
];

module.exports = { stays, bookings };

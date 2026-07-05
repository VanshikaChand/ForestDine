// Seeds the database with the same 4 stays used in the old in-memory data.js,
// so your CRUD screenshots have real data to work with.
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

async function main() {
  await prisma.booking.deleteMany();
  await prisma.stay.deleteMany();

  const staysData = [
    {
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

  const createdStays = [];
  for (const stay of staysData) {
    createdStays.push(await prisma.stay.create({ data: stay }));
  }

  await prisma.booking.create({
    data: {
      stayId: createdStays[0].id,
      guestName: "Rahul Sharma",
      checkIn: new Date("2025-07-12"),
      checkOut: new Date("2025-07-14"),
      status: "confirmed",
    },
  });

  await prisma.booking.create({
    data: {
      stayId: createdStays[1].id,
      guestName: "Priya Mehta",
      checkIn: new Date("2025-07-20"),
      checkOut: new Date("2025-07-23"),
      status: "pending",
    },
  });

  console.log("Seed complete:", createdStays.length, "stays created.");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });

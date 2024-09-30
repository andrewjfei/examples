import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
    await prisma.user.create({
        data: {
            username: "ricksmith",
            email: "ricksmith@test.com",
            password: "password",
            locationEvent: {
                create: [
                    {
                        longitude: 25.123456,
                        latitude: 63.111111,
                        timestamp: new Date()
                    }
                ]
            }
        }
    });

    const allUsers = await prisma.user.findMany({
        include: {
            locationEvent: true
        }
    });

    console.dir(allUsers, { depth: null });
}

main()
    .then(async () => {
        await prisma.$disconnect();
    })
    .catch(async (err) => {
        console.error(err);
        await prisma.$disconnect();
        process.exit(1);
    });

import cron from "node-cron"
import prisma from "../../libs/prismadb"
import { sendMail } from "@/utils/sendMail";

cron.schedule('0 5 * * *', async () => {
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);

    const bookings = await prisma.booking.findMany({
        where: { serviceDate: { gte: tomorrow, lt: new Date(tomorrow.getTime() + 86400000) } },
    });

    bookings.forEach((booking) => {
        sendMail(booking)
    });
});
import cron from "node-cron"
import mailer from 'nodemailer';
import prisma from "../../libs/prismadb"

const transporter = mailer.createTransport({
    service: 'gmail',
    auth: { user: process.env.EMAIL_USER, pass: process.env.EMAIL_PASS },
});

cron.schedule('0 5 * * *', async () => {
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);

    const bookings = await prisma.booking.findMany({
        where: { serviceDate: { gte: tomorrow, lt: new Date(tomorrow.getTime() + 86400000) } },
    });

    bookings.forEach((booking) => {
        transporter.sendMail({
            from: process.env.EMAIL_USER,
            to: booking.email,
            subject: 'MotorBike Service Reminder',
            text: `Hi ${booking.fullname}, your motorbike service is scheduled for ${booking.serviceDate}.`,
        });
    });
});
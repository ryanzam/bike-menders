import { Booking } from '@prisma/client';
import mailer from 'nodemailer';

const transporter = mailer.createTransport({
    service: 'gmail',
    auth: { user: process.env.EMAIL_USER, pass: process.env.EMAIL_PASS },
});

export const sendMail = async (booking: Booking) => {

    transporter.sendMail({
        from: process.env.EMAIL_USER,
        to: booking.email,
        subject: 'MotorBike Service Reminder',
        text: `Hi ${booking.fullname}, your motorbike service is scheduled for ${booking.serviceDate}.`,
    }, (error, info) => {
        if (error) return console.log(error, "Error sending an email.")

        console.log(`Email sent to ${booking.email} : ` + info.response)
    });
}
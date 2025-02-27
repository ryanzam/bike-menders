import { NextResponse } from "next/server";
import prisma from "../../../libs/prismadb"
import { sendMail } from "@/utils/sendMail";

export async function GET() {
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);

    const bookings = await prisma.booking.findMany({
        where: { serviceDate: { gte: tomorrow, lt: new Date(tomorrow.getTime() + 86400000) } },
    });

    bookings.forEach((booking) => {
        sendMail(booking)
    });

    return NextResponse.json({ message: "Email reminder job has been set up" }, { status: 200 })
}
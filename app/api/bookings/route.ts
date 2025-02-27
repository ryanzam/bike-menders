import { NextResponse } from "next/server";

import prisma from "../../../libs/prismadb"

export async function POST(req: Request) {
    const { fullname, email, phone, serviceDate, description } = await req.json()

    const booking = await prisma.booking.create({
        data: { fullname, email, phone, serviceDate: new Date(serviceDate), description }
    })

    return NextResponse.json(booking, { status: 201 })
}

export async function GET() {
    const booking = await prisma.booking.findMany({
        select: { serviceDate: true }
    })

    const allBookings = booking.map(b => b.serviceDate)

    return NextResponse.json(allBookings, { status: 200 })
}
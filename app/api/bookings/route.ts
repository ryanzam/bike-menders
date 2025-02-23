import { NextResponse } from "next/server";

import prisma from "../../../libs/prismadb"

export async function POST(req: Request) {
    const { fullname, email, phone, serviceDate, description } = await req.json()

    console.log({ fullname, email, phone, serviceDate, description })
    const booking = await prisma.booking.create({
        data: { fullname, email, phone, serviceDate: new Date(serviceDate), description }
    })

    return NextResponse.json(booking, { status: 201 })
}
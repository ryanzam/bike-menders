"use client"

import React, { useEffect, useState } from 'react'
import Button from './ui/Button'
import { useRouter } from 'next/navigation'
import Image from 'next/image'

const timeData = [
    "08:00",
    "09:00",
    "10:00",
    "11:00",
    "12:00",
    "13:00",
    "14:00",
    "15:00",
    "16:00",
    "17:00",
    "18:00"
]


export default function Booking() {

    const [bookingTime, setBookingTime] = useState("")
    const [bookingDate, setBookingDate] = useState(new Date().toISOString().split("T")[0])

    const [bookedDates, setBookedDates] = useState<string[]>([])

    const [formData, setFormData] = useState({
        fullname: "",
        email: '',
        phone: '',
        serviceDate: '',
        description: ''
    })

    const router = useRouter()

    useEffect(() => {
        fetch("/api/bookings")
            .then(res => res.json())
            .then(data => setBookedDates(data))
    }, [])

    const isDateBooked = () => {
        const allBookedDates = bookedDates.map(b => b.split("T")[0])
        return allBookedDates.includes(bookingDate)
    }

    const handleTimeChange = (val: any) => {
        const allBookedTimes = bookedDates.map(b => {
            const time = b.split("T")[1]
            return time.split(":").slice(0, 2).join(":")
        })

        if (isDateBooked() && allBookedTimes.includes(val)) {
            alert("This time is booked. Choose another time.")
            return
        }
        setBookingTime(val)
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        formData.serviceDate = bookingDate + "T" + bookingTime + ":00"

        const response = await fetch('/api/bookings', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(formData),
        });
        if (response.ok) {
            router.push('/confirmation');
        }
    }

    return (
        <section
            className="flex w-full place-content-center place-items-center gap-[10%] overflow-hidden bg-[#EFEFEF] p-4 px-[10%] max-md:flex-col"
            id="booking"
        >
            <div
                className="flex h-[350px] w-[350px] overflow-hidden rounded-md max-md:hidden"
            >
                <Image
                    src="/bike1.jpg"
                    alt="bike wash"
                    className="w-full object-cover"
                    width={350}
                    height={350}
                />
            </div>
            <div className="mt-[5%] flex h-full flex-col gap-[5%]">
                <div className="flex flex-col gap-2">
                    <h2
                        className="text-purple-950 text-5xl font-medium max-md:text-3xl"
                    >
                        Book a time
                    </h2>
                </div>
                <form
                    onSubmit={handleSubmit}
                    className="mt-4 flex max-w-[350px] flex-col gap-3"
                >
                    <div className="flex flex-col gap-4">
                        <div className="flex flex-col gap-1">
                            <div className="text-gray-500">Full Name</div>
                            <input
                                className='p-3 rounded-lg focus:outline-purple-950'
                                type="text"
                                maxLength={20}
                                minLength={3}
                                required
                                placeholder="Full name"
                                value={formData.fullname}
                                onChange={(e) => setFormData({ ...formData, fullname: e.target.value })}
                            />
                        </div>
                        <div className="flex flex-col gap-1">
                            <div className="text-gray-500">Phone</div>
                            <input
                                className='p-3 rounded-lg focus:outline-purple-950'
                                type="tel"
                                required
                                placeholder="Phone"
                                value={formData.phone}
                                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                            />
                        </div>
                        <div className="flex flex-col gap-1">
                            <div className="text-gray-500">Email</div>
                            <input
                                className='p-3 rounded-lg focus:outline-purple-950'
                                type="email"
                                required
                                placeholder="Email"
                                id="email"
                                value={formData.email}
                                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            />
                        </div>
                    </div>

                    <div className="flex gap-4">
                        <div className="flex flex-col gap-1">
                            <div className="text-gray-500">Date</div>
                            <input
                                className='p-3 rounded-lg focus:outline-purple-950'
                                type='date'
                                required
                                min={new Date().toISOString().split("T")[0]}
                                value={bookingDate}
                                onChange={e => setBookingDate(e.target.value)}
                            />
                        </div>

                        <div className="flex w-full flex-col gap-1">
                            <div className="text-gray-500">Time</div>

                            <input
                                className='p-3 rounded-lg focus:outline-purple-950'
                                type='time'
                                required
                                list='opening-hours'
                                value={bookingTime}
                                onChange={e => handleTimeChange(e.target.value)}
                                min={new Date().getHours() + 1 + ":00"}
                            />
                            <datalist id="opening-hours">
                                {timeData.map((td, idx) =>
                                    <option key={idx} value={td} />)}
                            </datalist>
                        </div>
                    </div>

                    <div className="flex w-full flex-col gap-2">
                        <div className="text-gray-500">Describe the service</div>
                        <textarea
                            className="rounded-lg focus:outline-purple-950 max-h-[250px] min-h-[60px] w-full resize-y"
                            required
                            value={formData.description}
                            onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                        ></textarea>
                    </div>

                    <Button
                        title='Book now'
                        icon='bi bi-arrow-right'
                        type={"submit"}
                    />

                </form>
            </div>
        </section>

    )
}

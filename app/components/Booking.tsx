import React from 'react'
import Button from './ui/Button'

export default function Booking() {
    return (
        <section
            className="flex w-full place-content-center place-items-center gap-[10%] overflow-hidden bg-[#EFEFEF] p-4 px-[10%] max-md:flex-col"
            id="booking"
        >
            <div
                className="flex h-[350px] w-[350px] overflow-hidden rounded-md max-md:hidden"
            >
                <img
                    src="./bike1.jpg"
                    alt="car wash"
                    className="w-full object-cover"
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
                    className="mt-4 flex max-w-[350px] flex-col gap-3"
                >
                    <div className="flex flex-col gap-4">
                        <div className="flex flex-col gap-1">
                            <div className="text-gray-500">Name</div>
                            <input
                                className='p-3 rounded-lg focus:outline-purple-950'
                                type="text"
                                maxLength={20}
                                minLength={3}
                                required
                                placeholder="Full name"
                            />
                        </div>
                        <div className="flex flex-col gap-1">
                            <div className="text-gray-500">Phone</div>
                            <input
                                className='p-3 rounded-lg focus:outline-purple-950'
                                type="tel"
                                required
                                placeholder="Phone"
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
                            />
                        </div>
                    </div>

                    <div className="flex gap-4">
                        <div className="flex w-full flex-col gap-1">
                            <div className="text-gray-500">Time</div>
                            <input
                                className='p-3 rounded-lg focus:outline-purple-950'
                                type='time'
                                required
                                list='opening-hours'
                            />
                            <datalist id="opening-hours">
                                <option value="08:00" />
                                <option value="09:00" />
                                <option value="10:00" />
                                <option value="11:00" />
                                <option value="12:00" />
                                <option value="13:00" />
                                <option value="14:00" />
                                <option value="15:00" />
                                <option value="16:00" />
                                <option value="17:00" />
                                <option value="18:00" />
                            </datalist>
                        </div>
                        <div className="flex flex-col gap-1">
                            <div className="text-gray-500">Date</div>
                            <input
                                className='p-3 rounded-lg focus:outline-purple-950'
                                type='date'
                                required
                                min={new Date().toISOString().split("T")[0]}
                            />
                        </div>
                    </div>

                    <div className="flex w-full flex-col gap-2">
                        <div className="text-gray-500">Describe the service</div>
                        <textarea
                            className="rounded-lg focus:outline-purple-950 max-h-[250px] min-h-[60px] w-full resize-y"
                        ></textarea>
                    </div>

                    <Button
                        title='Book now'
                        icon='bi bi-arrow-right'
                    />

                </form>
            </div>
        </section>

    )
}

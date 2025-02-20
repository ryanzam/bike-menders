import React from 'react'

const TopBar = () => {
    return (
        <div
            className="flex h-[80px] w-full place-items-center justify-around bg-gray-200 px-5 max-md:hidden"
        >
            <p className="primary-text-color text-3xl font-semibold">
                Bike Menders
            </p>

            <div className="flex gap-4">
                <div
                    className="flex h-[50px] w-[50px] place-content-center place-items-center rounded-full bg-secondary p-3 text-white"
                >
                    <i className="bi bi-clock text-3xl font-bold text-purple-800"></i>
                </div>
                <div>
                    <p className="text-xl font-semibold text-primary">
                        Opening hours
                    </p>
                    <p className="text-gray-600">Sun-Sat, 7:00 - 19:00</p>
                </div>
            </div>

            <div className="flex gap-4">
                <div
                    className="flex h-[50px] w-[50px] place-content-center place-items-center rounded-full bg-secondary p-3 text-white"
                >
                    <i className="bi bi-telephone text-3xl font-bold text-purple-800"></i>
                </div>
                <div>
                    <p className="text-xl font-semibold text-primary">
                        Call us
                    </p>
                    <p className="text-gray-600">+977 222-222-222</p>
                </div>
            </div>

            <div className="flex gap-4">
                <div
                    className="flex h-[50px] w-[50px] place-content-center place-items-center rounded-full bg-secondary p-3 text-white"
                >
                    <i className="bi bi-envelope text-3xl font-bold text-purple-800"></i>
                </div>
                <div>
                    <p className="text-xl font-semibold text-primary">
                        Email us
                    </p>
                    <p className="text-gray-600">bigbrosbike@google.com</p>
                </div>
            </div>
        </div>
    )
}

export default TopBar
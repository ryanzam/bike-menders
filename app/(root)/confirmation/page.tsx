import React from 'react'

function page() {
    return (
        <div className="m-20 bg-teal-50 border-t-2 border-teal-500 rounded-lg p-4 dark:bg-teal-800/30" role="alert" aria-labelledby="hs-bordered-success-style-label">
            <div className="flex">
                <div className="shrink-0">
                    <span className="inline-flex justify-center items-center size-8 rounded-full border-4 border-teal-100 bg-teal-200 text-teal-800 dark:border-teal-900 dark:bg-teal-800 dark:text-teal-400">
                        <svg className="shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"></path>
                            <path d="m9 12 2 2 4-4"></path>
                        </svg>
                    </span>
                </div>
                <div className="ms-3">
                    <h3 id="hs-bordered-success-style-label" className="text-gray-800 font-semibold dark:text-white">
                        Your Booking has been saved.
                    </h3>
                    <p className="text-sm text-gray-700 dark:text-neutral-400">
                        Your will receive an email about your booking.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default page
import React, { useState, useEffect } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

const ConsultationBooking = () => {
    const [selectedDate, setSelectedDate] = useState(null);
    const [availableTimes, setAvailableTimes] = useState([]);
    const [selectedTime, setSelectedTime] = useState(null);
    const [showPhoneInput, setShowPhoneInput] = useState(false);
    const [phoneNumber, setPhoneNumber] = useState('');
    const [isBooked, setIsBooked] = useState(false);

    // Mock function to get unavailable dates (replace with actual API call)
    const getUnavailableDates = () => {
        return [new Date(2023, 5, 10), new Date(2023, 5, 15), new Date(2023, 5, 20)];
    };

    // Mock function to get available times for a date (replace with actual API call)
    const getAvailableTimes = (date) => {
        // Simulating API response
        return ['09:00', '11:00', '14:00', '16:00'];
    };

    useEffect(() => {
        if (selectedDate) {
            const times = getAvailableTimes(selectedDate);
            setAvailableTimes(times);
        }
    }, [selectedDate]);

    const tileDisabled = ({ date, view }) => {
        if (view === 'month') {
            return getUnavailableDates().some(disabledDate =>
                date.getFullYear() === disabledDate.getFullYear() &&
                date.getMonth() === disabledDate.getMonth() &&
                date.getDate() === disabledDate.getDate()
            );
        }
    };

    const handleDateChange = (date) => {
        setSelectedDate(date);
        setSelectedTime(null);
    };

    const handleTimeSelection = (time) => {
        setSelectedTime(time);
    };

    const handleConfirmClick = () => {
        if (!showPhoneInput) {
            setShowPhoneInput(true);
        } else {
            setIsBooked(true);
        }
    };

    return (
        <div className="consultation-booking">
            <style jsx>{`
                .react-calendar {
                    border: 2px solid var(--primary-color);
                    border-radius: 10px;
                    font-family: Arial, sans-serif;
                    background-color: white;
                    color: black;
                    overflow: hidden;
                }
                .react-calendar__tile--active {
                    background-color: var(--primary-color);
                    color: white;
                }
                .react-calendar__tile--now {
                    background-color: #f0f0f0;
                }
                .react-calendar__navigation button:enabled:hover,
                .react-calendar__navigation button:enabled:focus,
                .react-calendar__tile:enabled:hover,
                .react-calendar__tile:enabled:focus {
                    background-color: #e6e6e6;
                }
                .react-calendar__tile--active:enabled:hover,
                .react-calendar__tile--active:enabled:focus {
                    background-color: var(--primary-color);
                }
                .react-calendar__navigation {
                    background-color: var(--primary-color);
                    color: white;
                }
                .react-calendar__navigation button {
                    color: white;
                }
                .phone-input {
                    border: none;
                    border-bottom: 1px solid var(--primary-color);
                    outline: none;
                    padding: 5px 0;
                    margin-top: 10px;
                    width: 100%;
                    text-align: center;
                }
                .phone-input::placeholder {
                    text-align: center;
                }
            `}</style>
            {!isBooked ? (
                <>
                    <div className="calendar-container mb-4">
                        <Calendar
                            onChange={handleDateChange}
                            value={selectedDate}
                            tileDisabled={tileDisabled}
                            minDate={new Date()}
                        />
                    </div>
                    {selectedDate && (
                        <div className="time-slots">
                            <h3 className="text-xl font-semibold mb-2">Available Times:</h3>
                            <div className="grid grid-cols-2 gap-2">
                                {availableTimes.map((time) => (
                                    <button
                                        key={time}
                                        onClick={() => handleTimeSelection(time)}
                                        className={`p-2 rounded ${
                                            selectedTime === time
                                                ? 'bg-primary text-white'
                                                : 'bg-gray-200 hover:bg-gray-300'
                                        }`}
                                    >
                                        {time}
                                    </button>
                                ))}
                            </div>
                        </div>
                    )}
                    {selectedDate && selectedTime && (
                        <div className="mt-4">
                            <p className="text-base font-semibold sm:text-lg">
                                Reserve {selectedDate.toDateString()} at {selectedTime}
                            </p>
                            {showPhoneInput && (
                                <input
                                    type="tel"
                                    placeholder="Fill in your phone number"
                                    value={phoneNumber}
                                    onChange={(e) => setPhoneNumber(e.target.value)}
                                    className="phone-input"
                                />
                            )}
                            <div className="flex mt-3 justify-center">
                                <button 
                                    className="mt-2 bg-primary text-white px-4 py-2 rounded hover:bg-primary-dark"
                                    onClick={handleConfirmClick}
                                >
                                    {showPhoneInput ? 'Reserve' : 'Confirm Booking'}
                                </button>
                            </div>
                        </div>
                    )}
                </>
            ) : (
                <div className="flex flex-col items-center justify-center h-full text-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-primary mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <p className="text-xl font-semibold">Your Slot Has Been Reserved</p>
                    <p className="mt-2 text-primary">You Will Be Having Someone Reaching Out To You.</p>
                </div>
            )}
        </div>
    );
};

export default ConsultationBooking;

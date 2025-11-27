"use client"

import React, { useState, useRef } from 'react';
import { Star, ChevronLeft, ChevronRight, X, CheckCircle2, Calendar, Clock, Users } from 'lucide-react';
import Image from 'next/image';
import ContactHurricane from '../../components/ContactHurricane';

const reviewsData = [
    { id: 1, name: "Kevin Mwangi", rating: 5, text: "This workshop completely changed my perspective on marketing. Highly recommended!" },
    { id: 2, name: "Grace Wanjiku", rating: 5, text: "Incredible value. The strategies shared are practical and easy to implement." },
    { id: 3, name: "Brian Otieno", rating: 4, text: "Great content, very intense but worth every minute." },
    { id: 4, name: "Sarah Njeri", rating: 5, text: "Hurricane's team knows their stuff. My revenue has already started to grow." },
    { id: 5, name: "Dennis Kiptoo", rating: 5, text: "The case studies were eye-opening. A must-attend for any business owner." },
    { id: 6, name: "Emily Achieng", rating: 4, text: "Good pacing and excellent tools provided." },
    { id: 7, name: "Chris Barasa", rating: 5, text: "Simply the best investment I've made for my business this year." },
    { id: 8, name: "Amanda Wambui", rating: 5, text: "Clear, concise, and actionable. Loved it!" },
    { id: 9, name: "Tom Kilonzo", rating: 4, text: "Very informative session." },
];


export default function EventsPage() {
    const [showReviews, setShowReviews] = useState(false);
    const [visibleReviews, setVisibleReviews] = useState(3);
    const heroRef = useRef(null);

    const scroll = (direction) => {
        if (heroRef.current) {
            const scrollAmount = direction === 'left' ? -350 : 350;
            heroRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
        }
    };

    const handleViewMoreReviews = () => {
        setVisibleReviews((prev) => prev + 3);
    };

    const CarouselButton = ({ direction, onClick }) => (
        <button
            onClick={onClick}
            className="absolute top-1/2 -translate-y-1/2 z-10 bg-white hover:bg-gray-50 p-2 rounded-full shadow-sm transition-all border border-gray-200"
            style={{ [direction === 'prev' ? 'left' : 'right']: '-16px' }}
            aria-label={direction}
        >
            {direction === 'prev' ?
                <ChevronLeft className="w-4 h-4 text-gray-700" /> :
                <ChevronRight className="w-4 h-4 text-gray-700" />
            }
        </button>
    );

    const renderStars = (rating) => {
        return (
            <div className="flex gap-0.5">
                {[...Array(5)].map((_, i) => (
                    <Star
                        key={i}
                        className={`w-4 h-4 ${i < rating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}`}
                    />
                ))}
            </div>
        );
    };

    return (
        <div className="min-h-screen bg-white font-sans text-gray-900">
            {/* Header */}
            <div className='px-4 py-3 flex justify-between items-center border-b border-gray-100 mb-8'>
                <div className=''><span className='font-humane text-5xl'>H</span><span className='text-2xl font-bold'>urricane</span></div>
                <ContactHurricane />
            </div>

            {/* Hero Carousel Section */}
            <section className="pb-16 px-4 md:px-8">
                <div className="max-w-7xl mx-auto relative">
                    <h1 className="text-3xl font-light mb-8 tracking-tight">Upcoming Events</h1>
                    <div
                        ref={heroRef}
                        className="flex overflow-x-auto gap-5 scroll-smooth snap-x snap-mandatory hide-scrollbar pb-4"
                        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                    >
                        {/* Card 1: Workshop One */}
                        <div className="flex-shrink-0 w-full md:w-[500px] snap-center">
                            <div className="relative rounded-xl overflow-hidden shadow-lg border border-gray-100 h-80 group">
                                <div
                                    className="absolute inset-0 transition-transform duration-500 group-hover:scale-105"
                                    style={{
                                        backgroundImage: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.7)), url('/1for5-event.png')`,
                                        backgroundColor: '#1a1a1a', // Fallback
                                        backgroundSize: 'cover',
                                        backgroundPosition: 'center'
                                    }}
                                />
                                <div className="relative h-full flex flex-col justify-end p-8 text-white">
                                    <div className="mb-auto pt-4">
                                        <span className="bg-orange-600 text-white text-xs font-bold px-2 py-1 rounded uppercase tracking-wider">Completed</span>
                                    </div>

                                    <h2 className="text-3xl font-bold mb-2">Workshop One</h2>

                                    <div className="flex flex-col items-start gap-4 mb-4 text-sm text-gray-200">
                                        <div className="flex items-center gap-1">
                                            <span className="font-bold text-yellow-400">4.6</span>
                                            {renderStars(5)} {/* Static 5 stars visual, but text says 4.6 */}
                                        </div>
                                        <div className="flex items-center gap-1">
                                            <Users className="w-4 h-4" />
                                            <span>72 Business Owners Attended</span>
                                        </div>
                                    </div>

                                    <button
                                        className="self-start px-6 py-2.5 rounded-lg bg-white text-black text-sm font-medium transition-colors hover:bg-gray-100 flex items-center gap-2"
                                    >
                                        View Reviews
                                    </button>
                                </div>
                            </div>
                        </div>

                        {/* Card 2: Placeholder */}
                        <div className="flex-shrink-0 w-full md:w-[500px] snap-center">
                            <div className="relative rounded-xl overflow-hidden shadow-lg border border-gray-100 h-80 group">
                                <div
                                    className="absolute inset-0 transition-transform duration-500 group-hover:scale-105"
                                    style={{
                                        backgroundImage: `linear-gradient(rgba(0,0,0,0), rgba(0,0,0,0)), url('/1for5-event.png')`,
                                        backgroundColor: '#1a1a1a', // Fallback
                                        backgroundSize: 'cover',
                                        backgroundPosition: 'center'
                                    }}
                                />
                                <div className="relative h-full flex flex-col justify-end p-8 text-white">
                                    <div className="mb-auto pt-4">
                                        <span className="bg-orange-600 text-white text-xs font-bold px-2 py-1 rounded uppercase tracking-wider">Upcoming</span>
                                    </div>

                                    <button
                                        className="self-end translate-y-4 px-6 py-2.5 rounded-lg bg-white text-black text-sm font-medium transition-colors hover:bg-gray-100 flex items-center gap-2"
                                    >
                                        <a
                                            href="/events/questionnaire"
                                        >
                                            Access Workshop
                                        </a>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <CarouselButton direction="prev" onClick={() => scroll('left')} />
                    <CarouselButton direction="next" onClick={() => scroll('right')} />
                </div>
            </section>

            {/* Reviews Overlay */}
            {showReviews && (
                <div className="fixed inset-0 z-50 flex items-center justify-center px-4">
                    <div
                        className="absolute inset-0 bg-black/60 backdrop-blur-md transition-opacity"
                        onClick={() => setShowReviews(false)}
                    />
                    <div className="relative bg-white rounded-2xl shadow-2xl w-full max-w-lg max-h-[80vh] flex flex-col overflow-hidden animate-in fade-in zoom-in duration-200">
                        <div className="p-6 border-b border-gray-100 flex justify-between items-center bg-gray-50/50">
                            <div>
                                <h3 className="text-xl font-bold text-gray-900">Workshop Reviews</h3>
                                <div className="flex items-center gap-2 mt-1">
                                    <span className="text-2xl font-bold text-gray-900">4.6</span>
                                    {renderStars(5)}
                                    <span className="text-sm text-gray-500">(72 reviews)</span>
                                </div>
                            </div>
                            <button
                                onClick={() => setShowReviews(false)}
                                className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                            >
                                <X className="w-5 h-5 text-gray-500" />
                            </button>
                        </div>

                        <div className="overflow-y-auto p-6 space-y-6">
                            {reviewsData.slice(0, visibleReviews).map((review) => (
                                <div key={review.id} className="border-b border-gray-50 last:border-0 pb-6 last:pb-0">
                                    <div className="flex justify-between items-start mb-2">
                                        <h4 className="font-semibold text-gray-900">{review.name}</h4>
                                        {renderStars(review.rating)}
                                    </div>
                                    <p className="text-gray-600 text-sm leading-relaxed">{review.text}</p>
                                </div>
                            ))}

                            {visibleReviews < reviewsData.length && (
                                <button
                                    onClick={handleViewMoreReviews}
                                    className="w-full py-3 text-sm text-blue-600 font-medium hover:bg-blue-50 rounded-lg transition-colors"
                                >
                                    View More Reviews
                                </button>
                            )}
                        </div>
                    </div>
                </div>
            )}

            {/* Main Content Grid */}
            <section className="py-16 px-4 md:px-8 bg-gray-50">
                <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12">

                    {/* Event Description Column */}
                    <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 h-fit">
                        <div className="flex items-center gap-3 mb-6">
                            <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-semibold uppercase tracking-wide">Workshop</span>
                            <div className="flex items-center gap-1 text-gray-500 text-sm">
                                <Clock className="w-4 h-4" />
                                <span>1 Hour / Day</span>
                            </div>
                            <div className="flex items-center gap-1 text-gray-500 text-sm">
                                <Calendar className="w-4 h-4" />
                                <span>5 Days</span>
                            </div>
                        </div>

                        <h2 className="text-4xl font-bold text-gray-900 mb-6">1 Hour for 5 Days Workshop</h2>

                        <div className="my-8">
                            <a
                                href="/events/questionnaire"
                                className="inline-flex items-center justify-center px-8 py-3 text-base font-medium text-white transition-all duration-200 bg-black rounded-full hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
                            >
                                Access the workshop
                            </a>
                        </div>

                        <div className="prose prose-lg text-gray-600">
                            <p className="mb-6">
                                The workshop is meant to help ambitious business owners have access to world-class marketing strategies used by major companies in the world and startups that grew to unicorns within short periods of time.
                            </p>

                            <h3 className="text-xl font-semibold text-gray-900 mb-3">About the Sponsor</h3>
                            <p className="mb-6">
                                <span className="font-semibold text-gray-900">Hurricane</span> is a Marketing / Technology company that has been in business for more than 2 years now. We have been able to grow to work with several big companies like <span className="italic">Kiani Ridge</span> and <span className="italic">Mivida Homes</span> among others (mostly in the real estate industry), helping create strategies for their campaigns and products.
                            </p>

                            <h3 className="text-xl font-semibold text-gray-900 mb-3">Our Purpose</h3>
                            <p>
                                This workshop was created to help build businesses driven by knowledge and understanding of the market, rather than survivalist businesses that don't support creativity and innovation.
                            </p>

                        </div>
                    </div>

                    {/* What to Expect Column */}
                    <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 h-fit">
                        <h2 className="text-3xl font-bold text-gray-900 mb-8">What to Expect</h2>
                        <ul className="space-y-6">
                            <li className="flex items-start gap-4">
                                <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                                    <Users className="w-4 h-4 text-purple-600" />
                                </div>
                                <div>
                                    <h3 className="text-lg font-semibold text-gray-900">Global Case Studies</h3>
                                    <p className="text-gray-600">Deep dive into case studies of 3 major global companies and their marketing strategies.</p>
                                </div>
                            </li>

                            <li className="flex items-start gap-4">
                                <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                                    <CheckCircle2 className="w-4 h-4 text-green-600" />
                                </div>
                                <div>
                                    <h3 className="text-lg font-semibold text-gray-900">Scalable Strategy Ethics</h3>
                                    <p className="text-gray-600">Learn the best ethics of creating scalable marketing strategies that last.</p>
                                </div>
                            </li>

                            <li className="flex items-start gap-4">
                                <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                                    <Clock className="w-4 h-4 text-blue-600" />
                                </div>
                                <div>
                                    <h3 className="text-lg font-semibold text-gray-900">Business Dissection</h3>
                                    <p className="text-gray-600">A dissection of businesses and restructuring a good scaling strategy and a well laid out plan within a period of time.</p>
                                </div>
                            </li>

                            <li className="flex items-start gap-4">
                                <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                                    <Star className="w-4 h-4 text-orange-600" />
                                </div>
                                <div>
                                    <h3 className="text-lg font-semibold text-gray-900">Access to Tools</h3>
                                    <p className="text-gray-600">Access to premium tools that will help you with marketing and following through your strategy.</p>
                                </div>
                            </li>
                        </ul>
                    </div>

                </div>
            </section>

            {/* Requirements Section */}
            <section className="py-16 m-4 rounded-3xl px-4 md:px-8 bg-gray-900 text-white">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-3xl font-bold mb-12">Who is this for?</h2>
                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="flex flex-col items-center">
                            <div className="w-16 h-16 bg-gray-800 rounded-full flex items-center justify-center mb-6 border border-gray-700">
                                <span className="text-2xl font-bold">1</span>
                            </div>
                            <h3 className="text-xl font-semibold mb-2">Business Owners</h3>
                            <p className="text-gray-400 text-sm">Must be an active business owner looking to grow.</p>
                        </div>

                        <div className="flex flex-col items-center">
                            <div className="w-16 h-16 bg-gray-800 rounded-full flex items-center justify-center mb-6 border border-gray-700">
                                <span className="text-2xl font-bold">2</span>
                            </div>
                            <h3 className="text-xl font-semibold mb-2">Ambitious Goals</h3>
                            <p className="text-gray-400 text-sm">Have goals to double your revenue within the next 6 months to 1 year.</p>
                        </div>

                        <div className="flex flex-col items-center">
                            <div className="w-16 h-16 bg-gray-800 rounded-full flex items-center justify-center mb-6 border border-gray-700">
                                <span className="text-2xl font-bold">3</span>
                            </div>
                            <h3 className="text-xl font-semibold mb-2">Committed Time</h3>
                            <p className="text-gray-400 text-sm">Be available for 1 hour daily for 5 days.</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

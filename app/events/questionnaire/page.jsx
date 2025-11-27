"use client"

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Check } from 'lucide-react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

// Theme Colors
const THEME = {
    primary: 'rgb(230, 71, 31)',
    black: '#000000',
    white: '#ffffff',
    gray: '#f3f4f6',
    darkGray: '#1f2937',
};

const questions = [
    {
        id: 'education',
        title: 'Education Background',
        question: 'What is your highest education level, and what course did you study (if applicable)?',
        type: 'text',
        placeholder: 'e.g. Bachelor\'s in Marketing'
    },
    {
        id: 'age',
        title: 'Age',
        question: 'How old are you?',
        type: 'number',
        placeholder: 'e.g. 28'
    },
    {
        id: 'businessType',
        title: 'Business Type',
        question: 'What kind of business do you run?',
        type: 'text',
        placeholder: 'e.g. Real Estate Agency'
    },
    {
        id: 'dailyRevenue',
        title: 'Daily Revenue',
        question: 'What is your average daily sales revenue (KES)?',
        type: 'number',
        placeholder: 'e.g. 50000'
    },
    {
        id: 'timeInBusiness',
        title: 'Time in Business',
        question: 'How long have you been running this business?',
        type: 'radio',
        options: ['0–6 months', '1 yr', '2–3 yrs', '4–7 yrs', '8+ yrs']
    },
    {
        id: 'mainGoal',
        title: 'Main Goal',
        question: 'What specific goal do you want to achieve from this workshop?',
        type: 'text',
        placeholder: 'e.g. Scale to 1M monthly revenue'
    },
    {
        id: 'companiesToStudy',
        title: 'Companies to Study',
        question: "Which company's marketing strategy would you like us to study in the workshop?",
        type: 'vote',
        options: [
            { name: 'Apple', percentage: 45 },
            { name: 'Nike', percentage: 30 },
            { name: 'Coca-Cola', percentage: 15 },
            { name: 'Tesla', percentage: 10 }
        ]
    },
    {
        id: 'sessionTime',
        title: 'Preferred Session Time',
        question: 'What time are you most comfortable attending the workshop?',
        type: 'radio',
        options: ['5:00 AM (morning session)', '2:00 PM (afternoon session)', '8:00 PM (evening session)']
    },
    {
        id: 'personalBonus',
        title: 'Personal Bonus Question',
        question: 'What is one personal thing you would like to learn from this workshop?',
        type: 'text',
        placeholder: 'e.g. Time management'
    },
    {
        id: 'contactMethod',
        title: 'Preferred Contact Method',
        question: 'How should we contact you for workshop updates?',
        type: 'radio',
        options: ['TikTok', 'WhatsApp']
    },
    {
        id: 'contactDetail',
        title: 'Contact Details',
        question: 'Please enter your details',
        type: 'dynamic_contact'
    },
    {
        id: 'location',
        title: 'Location',
        question: 'What is your current location?',
        type: 'text',
        placeholder: 'e.g. Nairobi, Kenya'
    },
    {
        id: 'name',
        title: 'Name',
        question: 'What is your full name?',
        type: 'text',
        placeholder: 'e.g. John Doe'
    },
    {
        id: 'networking',
        title: 'Networking Comfort',
        question: 'Would you be comfortable joining other attendees in a future in-person networking event?',
        type: 'radio',
        options: ['Yes', 'No', 'Maybe']
    }
];

export default function QuestionnairePage() {
    const [currentStep, setCurrentStep] = useState(0);
    const [answers, setAnswers] = useState({});
    const [direction, setDirection] = useState(0);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);
    const router = useRouter();

    const totalSteps = questions.length;
    const progress = Math.round(((currentStep) / totalSteps) * 100);

    const handleNext = async () => {
        if (currentStep < totalSteps - 1) {
            setDirection(1);
            setCurrentStep(prev => prev + 1);
        } else {
            // Submit logic
            setIsSubmitting(true);
            try {
                const payload = {
                    ...answers,
                    timestamp: new Date().toISOString()
                };

                // Use FormData approach which works better with Google Apps Script
                const formData = new FormData();
                Object.entries(payload).forEach(([key, value]) => {
                    formData.append(key, value);
                });

                const response = await fetch('https://script.google.com/macros/s/AKfycbwXaLJY-gWkmZ7vpGAENBUY38H8REPwomU1usNE3KMjt2w9hB2QY53lVukZypP4LCUcqQ/exec', {
                    method: 'POST',
                    body: formData,
                    mode: 'no-cors' // Required for Google Apps Script
                });

                // With no-cors, we can't read the response, but if no error was thrown, it succeeded
                setIsSubmitted(true);

            } catch (error) {
                console.error('Error submitting form:', error);
                alert('Something went wrong. Please try again or contact support.');
            } finally {
                setIsSubmitting(false);
            }
        }
    };

    const handleBack = () => {
        if (currentStep > 0) {
            setDirection(-1);
            setCurrentStep(prev => prev - 1);
        }
    };

    const handleAnswer = (value) => {
        setAnswers(prev => ({ ...prev, [questions[currentStep].id]: value }));
    };

    const currentQuestion = questions[currentStep];

    // Dynamic Question Logic
    let displayQuestion = currentQuestion;
    if (currentQuestion.id === 'contactDetail') {
        const method = answers['contactMethod'];
        if (method === 'WhatsApp') {
            displayQuestion = {
                ...currentQuestion,
                question: 'Please enter your WhatsApp phone number.',
                type: 'text',
                placeholder: 'e.g. 0712345678'
            };
        } else {
            displayQuestion = {
                ...currentQuestion,
                question: 'Please enter your TikTok handle.',
                type: 'text',
                placeholder: 'e.g. @username'
            };
        }
    }

    // Animation variants
    const variants = {
        enter: (direction) => ({
            x: direction > 0 ? 50 : -50,
            opacity: 0,
            scale: 0.95
        }),
        center: {
            zIndex: 1,
            x: 0,
            opacity: 1,
            scale: 1
        },
        exit: (direction) => ({
            zIndex: 0,
            x: direction < 0 ? 50 : -50,
            opacity: 0,
            scale: 0.95
        })
    };

    return (
        <div className="min-h-screen bg-gray-50 flex flex-col font-sans text-gray-900">

            {/* Success Card Modal */}
            <AnimatePresence>
                {isSubmitted && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 z-50"
                    >
                        <motion.div
                            initial={{ scale: 0.9, opacity: 0, y: 20 }}
                            animate={{ scale: 1, opacity: 1, y: 0 }}
                            exit={{ scale: 0.9, opacity: 0, y: 20 }}
                            transition={{ type: "spring", damping: 20, stiffness: 300 }}
                            className="bg-white rounded-3xl p-8 md:p-12 max-w-md w-full shadow-2xl"
                        >
                            <div className="text-center">
                                {/* Success Icon */}
                                <div className="mb-6 inline-flex">
                                    <motion.div
                                        initial={{ scale: 0 }}
                                        animate={{ scale: 1 }}
                                        transition={{ delay: 0.2, type: "spring", damping: 15, stiffness: 300 }}
                                        className="w-20 h-20 rounded-full flex items-center justify-center"
                                        style={{ backgroundColor: THEME.primary }}
                                    >
                                        <Check className="w-10 h-10 text-white" strokeWidth={3} />
                                    </motion.div>
                                </div>

                                {/* Success Message */}
                                <motion.h2
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.3 }}
                                    className="text-3xl font-bold text-gray-900 mb-4"
                                >
                                    Application Submitted!
                                </motion.h2>
                                <motion.p
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.4 }}
                                    className="text-lg text-gray-600 mb-8 leading-relaxed"
                                >
                                    Thank you for applying to our workshop. We've received your application and will contact you once you've been selected.
                                </motion.p>

                                {/* Action Button */}
                                <motion.button
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.5 }}
                                    onClick={() => router.push('/events')}
                                    className="w-full py-4 px-6 rounded-xl text-white font-semibold text-lg transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5"
                                    style={{ backgroundColor: THEME.black }}
                                >
                                    Back to Events
                                </motion.button>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Header */}
            <div className="px-6 py-4 bg-white border-b border-gray-100 flex justify-between items-center sticky top-0 z-20 shadow-sm">
                <div className="flex items-center gap-4">
                    <Link href="/events" className="text-sm font-medium text-gray-500 hover:text-black transition-colors">
                        Cancel
                    </Link>
                </div>

                <div className="flex items-center gap-4">
                    <span className="text-sm font-semibold tracking-wide uppercase text-gray-400">Workshop Application</span>
                </div>

                <div className="flex items-center gap-3">
                    <div className="text-right">
                        <span className="block text-xs font-bold text-gray-900">{progress}%</span>
                        <span className="block text-[10px] text-gray-400 uppercase tracking-wider">Completed</span>
                    </div>
                    <div className="relative w-10 h-10">
                        <svg className="w-full h-full transform -rotate-90">
                            <circle
                                cx="20"
                                cy="20"
                                r="16"
                                stroke="#f3f4f6"
                                strokeWidth="4"
                                fill="none"
                            />
                            <circle
                                cx="20"
                                cy="20"
                                r="16"
                                stroke={THEME.primary}
                                strokeWidth="4"
                                fill="none"
                                strokeDasharray="100"
                                strokeDashoffset={100 - progress}
                                className="transition-all duration-500 ease-out"
                            />
                        </svg>
                    </div>
                </div>
            </div>

            {/* Main Content */}
            <div className="flex-1 flex flex-col items-center justify-center p-4 md:p-8 relative">

                {/* Background Elements */}
                <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                    <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-100/50 rounded-full blur-3xl opacity-30 mix-blend-multiply animate-blob"></div>
                    <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-purple-100/50 rounded-full blur-3xl opacity-30 mix-blend-multiply animate-blob animation-delay-2000"></div>
                    <div className="absolute bottom-1/4 left-1/3 w-96 h-96 bg-pink-100/50 rounded-full blur-3xl opacity-30 mix-blend-multiply animate-blob animation-delay-4000"></div>
                </div>

                <div className="w-full max-w-2xl h-full relative z-10">
                    {/* Navigation Buttons */}
                    <div className="flex justify-between mb-8">
                        <button
                            onClick={handleBack}
                            disabled={currentStep === 0}
                            className={`p-2 rounded-full border border-gray-200 bg-white transition-all ${currentStep === 0 ? 'opacity-30 cursor-not-allowed' : 'hover:bg-gray-50 hover:border-gray-300 shadow-sm'}`}
                        >
                            <ChevronLeft className="w-6 h-6" />
                        </button>
                        <button
                            onClick={handleNext}
                            disabled={isSubmitting}
                            className={`${currentStep === totalSteps - 1 ? 'px-6 py-2 rounded-xl' : 'p-2 rounded-full'} bg-black text-white transition-all shadow-lg transform ${isSubmitting ? 'opacity-70 cursor-not-allowed' : 'hover:bg-gray-800 hover:shadow-xl hover:-translate-y-0.5'}`}
                            style={{ backgroundColor: THEME.black }}
                        >
                            {isSubmitting ? (
                                <div className="w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin" />
                            ) : (
                                currentStep === totalSteps - 1 ? (
                                    <span className="font-medium">Submit</span>
                                ) : (
                                    <ChevronRight className="w-6 h-6" />
                                )
                            )}
                        </button>
                    </div>

                    {/* Question Card */}
                    <div className="relative min-h-[400px]">
                        <AnimatePresence initial={false} custom={direction} mode="wait">
                            <motion.div
                                key={currentStep}
                                custom={direction}
                                variants={variants}
                                initial="enter"
                                animate="center"
                                exit="exit"
                                transition={{
                                    x: { type: "spring", stiffness: 300, damping: 30 },
                                    opacity: { duration: 0.2 }
                                }}
                                className="w-full"
                            >
                                <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-gray-100 backdrop-blur-sm bg-white/90">
                                    <span className="text-xs font-bold tracking-widest text-gray-400 uppercase mb-4 block">
                                        Question {currentStep + 1} of {totalSteps}
                                    </span>

                                    <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
                                        {displayQuestion.title}
                                    </h2>
                                    <p className="text-lg text-gray-600 mb-8 font-light leading-relaxed">
                                        {displayQuestion.question}
                                    </p>

                                    <div className="space-y-4">
                                        {/* Text / Number Input */}
                                        {(displayQuestion.type === 'text' || displayQuestion.type === 'number') && (
                                            <input
                                                type={displayQuestion.type}
                                                placeholder={displayQuestion.placeholder}
                                                value={answers[displayQuestion.id] || ''}
                                                onChange={(e) => handleAnswer(e.target.value)}
                                                className="w-full bg-gray-50 border-0 rounded-xl px-6 py-4 text-lg focus:ring-2 focus:ring-offset-2 transition-all outline-none"
                                                style={{ '--tw-ring-color': THEME.primary }}
                                                autoFocus
                                            />
                                        )}

                                        {/* Dropdown */}
                                        {displayQuestion.type === 'dropdown' && (
                                            <div className="relative">
                                                <select
                                                    value={answers[displayQuestion.id] || ''}
                                                    onChange={(e) => handleAnswer(e.target.value)}
                                                    className="w-full bg-gray-50 border-0 rounded-xl px-6 py-4 text-lg focus:ring-2 focus:ring-offset-2 transition-all outline-none appearance-none cursor-pointer"
                                                    style={{ '--tw-ring-color': THEME.primary }}
                                                >
                                                    <option value="" disabled>Select an option</option>
                                                    {displayQuestion.options.map((opt, idx) => (
                                                        <option key={idx} value={opt}>{opt}</option>
                                                    ))}
                                                </select>
                                                <div className="absolute right-6 top-1/2 -translate-y-1/2 pointer-events-none">
                                                    <ChevronRight className="w-5 h-5 text-gray-400 rotate-90" />
                                                </div>
                                            </div>
                                        )}

                                        {/* Radio Options */}
                                        {displayQuestion.type === 'radio' && (
                                            <div className="grid gap-3">
                                                {displayQuestion.options.map((opt, idx) => (
                                                    <label
                                                        key={idx}
                                                        className={`flex items-center p-4 rounded-xl border-2 cursor-pointer transition-all ${answers[displayQuestion.id] === opt
                                                            ? 'border-black bg-gray-50'
                                                            : 'border-gray-100 hover:border-gray-200 hover:bg-gray-50'
                                                            }`}
                                                        style={{ borderColor: answers[displayQuestion.id] === opt ? THEME.primary : '' }}
                                                    >
                                                        <input
                                                            type="radio"
                                                            name={displayQuestion.id}
                                                            value={opt}
                                                            checked={answers[displayQuestion.id] === opt}
                                                            onChange={() => handleAnswer(opt)}
                                                            className="hidden"
                                                        />
                                                        <div className={`w-5 h-5 rounded-full border-2 mr-4 flex items-center justify-center transition-colors ${answers[displayQuestion.id] === opt ? 'border-transparent' : 'border-gray-300'
                                                            }`}
                                                            style={{ backgroundColor: answers[displayQuestion.id] === opt ? THEME.primary : 'transparent' }}
                                                        >
                                                            {answers[displayQuestion.id] === opt && <Check className="w-3 h-3 text-white" />}
                                                        </div>
                                                        <span className="font-medium text-gray-900">{opt}</span>
                                                    </label>
                                                ))}
                                            </div>
                                        )}

                                        {/* Vote Options */}
                                        {displayQuestion.type === 'vote' && (
                                            <div className="grid gap-4">
                                                {displayQuestion.options.map((opt, idx) => (
                                                    <label
                                                        key={idx}
                                                        className="relative group cursor-pointer"
                                                    >
                                                        <input
                                                            type="radio"
                                                            name={displayQuestion.id}
                                                            value={opt.name}
                                                            checked={answers[displayQuestion.id] === opt.name}
                                                            onChange={() => handleAnswer(opt.name)}
                                                            className="hidden"
                                                        />
                                                        {/* Bar Background */}
                                                        <div className="absolute inset-0 bg-gray-50 rounded-xl overflow-hidden">
                                                            <motion.div
                                                                initial={{ width: 0 }}
                                                                animate={{ width: `${opt.percentage}%` }}
                                                                transition={{ duration: 1, ease: "easeOut" }}
                                                                className="h-full opacity-10"
                                                                style={{ backgroundColor: THEME.primary }}
                                                            />
                                                        </div>

                                                        {/* Content */}
                                                        <div className={`relative p-4 rounded-xl border-2 transition-all flex justify-between items-center ${answers[displayQuestion.id] === opt.name
                                                            ? 'border-black'
                                                            : 'border-transparent hover:border-gray-200'
                                                            }`}
                                                            style={{ borderColor: answers[displayQuestion.id] === opt.name ? THEME.primary : '' }}
                                                        >
                                                            <div className="flex items-center">
                                                                <div className={`w-5 h-5 rounded-full border-2 mr-4 flex items-center justify-center transition-colors ${answers[displayQuestion.id] === opt.name ? 'border-transparent' : 'border-gray-300'
                                                                    }`}
                                                                    style={{ backgroundColor: answers[displayQuestion.id] === opt.name ? THEME.primary : 'transparent' }}
                                                                >
                                                                    {answers[displayQuestion.id] === opt.name && <Check className="w-3 h-3 text-white" />}
                                                                </div>
                                                                <span className="font-medium text-gray-900">{opt.name}</span>
                                                            </div>
                                                            <span className="text-sm font-bold text-gray-500">{opt.percentage}%</span>
                                                        </div>
                                                    </label>
                                                ))}
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </motion.div>
                        </AnimatePresence>
                    </div>

                </div>
            </div>

            <style jsx global>{`
        @keyframes blob {
          0% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
          100% { transform: translate(0px, 0px) scale(1); }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
        </div>
    );
}
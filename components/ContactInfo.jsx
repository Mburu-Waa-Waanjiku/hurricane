import React, { useState, useEffect } from 'react';
import { useStateContext } from '../utils/StateContext';
import { FaArrowRight, FaArrowLeft } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';
import Calendar from '../components/Calendar';

// ContactInfo component for handling user service selection and questionnaire
const ContactInfo = () => {
    // State management using context
    const { openContacts, setOpenContacts } = useStateContext();

    // Local state management
    const [selectedOptions, setSelectedOptions] = useState([]);
    const [currentOptionIndex, setCurrentOptionIndex] = useState(0);
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [showSelected, setShowSelected] = useState(false);
    const [isVisible, setIsVisible] = useState(false);
    const [answers, setAnswers] = useState({});
    const [showBooking, setShowBooking] = useState(false);
    const [isTransitioning, setIsTransitioning] = useState(false);
    const [direction, setDirection] = useState(1); // 1 for forward, -1 for backward

    // Available service options
    const options = [
        'Web design',
        'Mobile apps',
        'Online marketing',
        'Graphic design',
        'Banner design/printing',
        'Business cards',
        'Merchandising',
        'Fliers design/printing',
        'Custom packaging',
        'ERP integrations'
    ];

    // Questions for each service option
    const questions = {
        'Web design': [
            { question: 'What type of website do you need?', options: ['E-commerce', 'Portfolio', 'Blog', 'Corporate', 'Landing Page', 'Educational', 'Non-profit', 'Other'] },
            { question: 'Do you have existing branding?', options: ['Yes', 'No', 'Need help'] },
            { question: 'What\'s your target launch date?', options: ['ASAP', '1-3 months', '3-6 months', '6+ months'] },
            { question: 'Do you need ongoing maintenance?', options: ['Yes', 'No', 'Not sure'] },
            { question: 'What\'s your budget range?', options: ['Under KES 30000', 'KES 30000-KES 100000', 'KES 100000-KES 200000', 'KES 200000+'] },
            { question: 'Do you need content creation?', options: ['Yes', 'No', 'Partial'] },
            { question: 'What features do you need?', options: ['Contact form', 'Blog', 'User accounts', 'E-commerce', 'Booking system', 'Custom CMS', 'Other'] },
            { question: 'Do you need multilingual support?', options: ['Yes', 'No'] },
            { question: 'What\'s your primary target audience?', options: ['B2B', 'B2C', 'Both'] },
            { question: 'Do you need SEO optimization?', options: ['Yes', 'No', 'Not sure'] }
        ],
        'Mobile apps': [
            { question: 'What type of mobile app do you need?', options: ['iOS', 'Android', 'Cross-platform'] },
            { question: 'What\'s the primary purpose of your app?', options: ['E-commerce', 'Social networking', 'Utility', 'Entertainment', 'Education', 'Business', 'Other'] },
            { question: 'Do you need backend development?', options: ['Yes', 'No', 'Not sure'] },
            { question: 'What\'s your target launch date?', options: ['ASAP', '1-3 months', '3-6 months', '6+ months'] },
            { question: 'What\'s your budget range?', options: ['Under KES 100000', 'KES 100000- KES 200000', 'KES 200000- KES 500000', 'KES 500000+'] },
            { question: 'Do you need design services?', options: ['Yes', 'No', 'Partial'] },
            { question: 'Do you require any integrations?', options: ['Payment gateway', 'Social media', 'Maps', 'Push notifications', 'Analytics', 'Other'] },
            { question: 'Do you need ongoing maintenance and updates?', options: ['Yes', 'No', 'Not sure'] },
            { question: 'What\'s your monetization strategy?', options: ['Free', 'Paid app', 'In-app purchases', 'Subscription', 'Ads', 'Not sure'] },
            { question: 'Do you need help with app store optimization?', options: ['Yes', 'No', 'Not sure'] }
        ],
        'Online marketing': [
            { question: 'What type of online marketing services do you need?', options: ['SEO', 'PPC', 'Social media marketing', 'Content marketing', 'Email marketing', 'Influencer marketing', 'Other'] },
            { question: 'What\'s your primary marketing goal?', options: ['Increase brand awareness', 'Generate leads', 'Boost sales', 'Improve customer retention', 'Enter new markets', 'Other'] },
            { question: 'What\'s your target audience?', options: ['B2B', 'B2C', 'Both'] },
            { question: 'What\'s your monthly marketing budget?', options: ['Under KES 10000', 'KES 10000- KES 50000', 'KES 50000- KES 100000', 'KES 100000+'] },
            { question: 'Do you need help with content creation?', options: ['Yes', 'No', 'Partial'] },
            { question: 'How long do you want to run your marketing campaign?', options: ['1-3 months', '3-6 months', '6-12 months', 'Ongoing'] },
            { question: 'Do you have existing marketing materials?', options: ['Yes', 'No', 'Partial'] },
            { question: 'Which platforms do you want to focus on?', options: ['Google', 'Facebook', 'Instagram', 'LinkedIn', 'Twitter', 'TikTok', 'Other'] },
            { question: 'Do you need help with analytics and reporting?', options: ['Yes', 'No', 'Not sure'] },
            { question: 'Are you interested in A/B testing?', options: ['Yes', 'No', 'Not sure'] }
        ],
        'Graphic design': [
            { question: 'What type of graphic design do you need?', options: ['Logo design', 'Brand identity', 'Print design', 'Packaging design', 'Web design', 'Social media graphics', 'Other'] },
            { question: 'Do you have existing brand guidelines?', options: ['Yes', 'No', 'Partial'] },
            { question: 'What\'s your preferred design style?', options: ['Minimalist', 'Modern', 'Vintage', 'Playful', 'Corporate', 'Luxurious', 'Other'] },
            { question: 'What\'s your target audience?', options: ['B2B', 'B2C', 'Both'] },
            { question: 'What\'s your budget range?', options: ['Under KES 5000', 'KES 5000 - KES 20000', 'KES 20000 - KES 50000', 'KES 50000+'] },
            { question: 'How many design concepts do you need?', options: ['1-2', '3-5', '5+', 'Not sure'] },
            { question: 'Do you need illustrations or custom artwork?', options: ['Yes', 'No', 'Not sure'] },
            { question: 'What\'s your deadline for the project?', options: ['ASAP', '1-2 weeks', '2-4 weeks', '1+ month'] },
            { question: 'Do you need help with printing or production?', options: ['Yes', 'No', 'Not sure'] },
            { question: 'Will you need ongoing design services?', options: ['Yes', 'No', 'Not sure'] }
        ],
        'Banner design/printing': [
            { question: 'What type of banner do you need?', options: ['Indoor', 'Outdoor', 'Trade show', 'Digital', 'Other'] },
            { question: 'What size banner do you need?', options: ['Standard sizes', 'Custom size', 'Not sure'] },
            { question: 'Do you need single or double-sided printing?', options: ['Single-sided', 'Double-sided', 'Not sure'] },
            { question: 'What material do you prefer?', options: ['Vinyl', 'Fabric', 'Mesh', 'Paper', 'Other', 'Not sure'] },
            { question: 'Do you need design services?', options: ['Yes', 'No', 'Partial'] },
            { question: 'How many banners do you need?', options: ['1', '2-5', '5-10', '10+'] },
            { question: 'What\'s your budget range?', options: ['Under KES 5000', 'KES 5000 - KES 10000', 'KES 10000 - KES 20000', 'KES 20000+'] },
            { question: 'Do you need any special features?', options: ['Grommets', 'Pole pockets', 'Stands', 'Lighting', 'Other', 'None'] },
            { question: 'What\'s your deadline?', options: ['ASAP', '1 week', '2 weeks', '1 month+'] },
            { question: 'Do you need installation services?', options: ['Yes', 'No', 'Not sure'] }
        ],
        'Business cards': [
            { question: 'How many business cards do you need?', options: ['100', '250', '500', '1000', '2500+'] },
            { question: 'Do you need design services?', options: ['Yes', 'No', 'Partial'] },
            { question: 'What type of paper stock do you prefer?', options: ['Standard', 'Premium', 'Recycled', 'Not sure'] },
            { question: 'Do you want single or double-sided printing?', options: ['Single-sided', 'Double-sided'] },
            { question: 'What finish do you prefer?', options: ['Matte', 'Glossy', 'Soft touch', 'Not sure'] },
            { question: 'Do you need any special features?', options: ['Spot UV', 'Foil stamping', 'Embossing', 'Die-cutting', 'Other', 'None'] },
            { question: 'What\'s your budget range?', options: ['Under KES 1000', 'KES 1000 - KES 10000', 'KES 10000 - KES 20000', 'KES 20000+'] },
            { question: 'Do you have existing brand guidelines?', options: ['Yes', 'No', 'Partial'] },
            { question: 'What\'s your deadline?', options: ['ASAP', '1 week', '2 weeks', '1 month+'] },
            { question: 'Do you need rush delivery?', options: ['Yes', 'No', 'Not sure'] }
        ],
        'Merchandising': [
            { question: 'What type of merchandise are you interested in?', options: ['Apparel', 'Accessories', 'Office supplies', 'Tech gadgets', 'Eco-friendly items', 'Other'] },
            { question: 'What\'s the primary purpose of your merchandise?', options: ['Employee gifts', 'Customer giveaways', 'Event promotion', 'Retail sale', 'Brand awareness', 'Other'] },
            { question: 'How many items do you need?', options: ['Under 100', '100-500', '500-1000', '1000+'] },
            { question: 'Do you need design services?', options: ['Yes', 'No', 'Partial'] },
            { question: 'What\'s your budget per item?', options: ['Under KES 1000', 'KES 1000 - KES 5000', 'KES 5000 - KES 10000', 'KES 10000+'] },
            { question: 'Do you have a preferred brand or quality level?', options: ['Economy', 'Mid-range', 'Premium', 'Luxury', 'Not sure'] },
            { question: 'Do you need customization or personalization?', options: ['Yes', 'No', 'Not sure'] },
            { question: 'What\'s your deadline?', options: ['ASAP', '2-4 weeks', '1-2 months', '2+ months'] },
            { question: 'Do you need packaging for the merchandise?', options: ['Yes', 'No', 'Not sure'] },
            { question: 'Are you interested in eco-friendly or sustainable options?', options: ['Yes', 'No', 'Not sure'] }
        ],
        'Fliers design/printing': [
            { question: 'What size flyers do you need?', options: ['Standard (8.5x11)', 'Half page', 'Quarter page', 'Custom size'] },
            { question: 'How many flyers do you need?', options: ['100', '250', '500', '1000', '2500+'] },
            { question: 'Do you need design services?', options: ['Yes', 'No', 'Partial'] },
            { question: 'What type of paper do you prefer?', options: ['Standard', 'Glossy', 'Matte', 'Recycled', 'Not sure'] },
            { question: 'Do you want single or double-sided printing?', options: ['Single-sided', 'Double-sided'] },
            { question: 'What\'s the primary purpose of your flyers?', options: ['Promotional', 'Informational', 'Event announcement', 'Menu', 'Other'] },
            { question: 'What\'s your budget range?', options: ['Under KES 5000', 'KES 5000 - KES 10000', 'KES 10000 - KES 20000', 'KES 20000+'] },
            { question: 'Do you need any special finishes?', options: ['Spot UV', 'Foil stamping', 'Die-cutting', 'Other', 'None'] },
            { question: 'What\'s your deadline?', options: ['ASAP', '1 week', '2 weeks', '1 month+'] },
            { question: 'Do you need distribution services?', options: ['Yes', 'No', 'Not sure'] }
        ],
        'Custom packaging': [
            { question: 'What type of packaging do you need?', options: ['Boxes', 'Bags', 'Labels', 'Wraps', 'Other'] },
            { question: 'What material do you prefer?', options: ['Cardboard', 'Plastic', 'Paper', 'Fabric', 'Other', 'Not sure'] },
            { question: 'Do you need design services?', options: ['Yes', 'No', 'Partial'] },
            { question: 'What quantity do you need?', options: ['Under 100', '100-500', '500-1000', '1000+'] },
            { question: 'What\'s your budget range?', options: ['Under KES 5000', 'KES 5000 - KES 20000', 'KES 20000 - KES 50000', 'KES 50000+'] },
            { question: 'Do you need any special features?', options: ['Custom shapes', 'Windows', 'Inserts', 'Eco-friendly', 'Other', 'None'] },
            { question: 'What\'s the primary purpose of your packaging?', options: ['Product protection', 'Branding', 'Gifting', 'Shipping', 'Display', 'Other'] },
            { question: 'Do you have existing brand guidelines?', options: ['Yes', 'No', 'Partial'] },
            { question: 'What\'s your deadline?', options: ['ASAP', '2-4 weeks', '1-2 months', '2+ months'] },
            { question: 'Do you need assembly or fulfillment services?', options: ['Yes', 'No', 'Not sure'] }
        ],
        'ERP integrations': [
            { question: 'What ERP system are you using?', options: ['SAP', 'Oracle', 'Microsoft Dynamics', 'NetSuite', 'Other', 'Not using ERP yet'] },
            { question: 'What type of integration do you need?', options: ['E-commerce', 'CRM', 'Inventory management', 'Accounting', 'HR', 'Other'] },
            { question: 'How many users will be accessing the integrated system?', options: ['1-10', '11-50', '51-100', '100+'] },
            { question: 'What\'s your timeline for implementation?', options: ['ASAP', '1-3 months', '3-6 months', '6+ months'] },
            { question: 'Do you need data migration services?', options: ['Yes', 'No', 'Not sure'] },
            { question: 'What\'s your budget range for this project?', options: ['Under KES 50000', 'KES 50000- KES 100000', 'KES 100000- KES 200000', 'KES 200000+'] },
            { question: 'Do you need ongoing support and maintenance?', options: ['Yes', 'No', 'Not sure'] },
            { question: 'Are there any specific compliance requirements?', options: ['GDPR', 'HIPAA', 'SOX', 'Other', 'None', 'Not sure'] },
            { question: 'Do you need custom development for the integration?', options: ['Yes', 'No', 'Not sure'] },
            { question: 'How critical is real-time data synchronization for your business?', options: ['Very critical', 'Somewhat critical', 'Not critical', 'Not sure'] }
        ]
    };

    // Effect to handle visibility of the component
    useEffect(() => {
        if (openContacts) {
            setIsVisible(true);
        } else {
            setTimeout(() => setIsVisible(false), 300);
        }
    }, [openContacts]);

    // Function to toggle selection of options
    const toggleOption = (option) => {
        setSelectedOptions(prev => 
            prev.includes(option) 
                ? prev.filter(item => item !== option)
                : [...prev, option]
        );
    };

    // Function to handle "Okay" button click
    const handleOkay = () => {
        if (selectedOptions.length > 0) {
            setShowSelected(true);
            setCurrentOptionIndex(0);
            setCurrentQuestionIndex(0);
            setDirection(1);
        }
    };

    // Function to handle "Back" button click
    const handleBack = () => {
        setDirection(-1);
        if (currentQuestionIndex > 0) {
            setCurrentQuestionIndex(prev => prev - 1);
        } else if (currentOptionIndex > 0) {
            setCurrentOptionIndex(prev => prev - 1);
            setCurrentQuestionIndex(questions[selectedOptions[currentOptionIndex - 1]].length - 1);
        } else {
            setShowSelected(false);
            setAnswers({});
        }
    };

    // Function to handle answering a question
    const handleAnswer = (question, answer) => {
        setAnswers(prev => ({
            ...prev,
            [selectedOptions[currentOptionIndex]]: {
                ...prev[selectedOptions[currentOptionIndex]],
                [question]: answer
            }
        }));
        setIsTransitioning(true);
        setTimeout(() => {
            handleNext();
            setIsTransitioning(false);
        }, 500);
    };

    // Function to handle moving to the next question or option
    const handleNext = () => {
        setDirection(1);
        const currentOption = selectedOptions[currentOptionIndex];
        if (currentQuestionIndex < questions[currentOption].length - 1) {
            setCurrentQuestionIndex(prev => prev + 1);
        } else if (currentOptionIndex < selectedOptions.length - 1) {
            setCurrentOptionIndex(prev => prev + 1);
            setCurrentQuestionIndex(0);
        } else {
            setShowBooking(true);
        }
    };

    // Animation variants for fading effect
    const fadeVariants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1 },
        exit: { opacity: 0 }
    };

    // Animation variants for sliding effect
    const slideVariants = {
        enter: (direction) => {
            return {
                x: direction > 0 ? 1000 : -1000,
                opacity: 0
            };
        },
        center: {
            zIndex: 1,
            x: 0,
            opacity: 1
        },
        exit: (direction) => {
            return {
                zIndex: 0,
                x: direction < 0 ? 1000 : -1000,
                opacity: 0
            };
        }
    };

    // Render the component
    return (
        <>
            <div
                className={`fixed z-50 bottom-4 right-4 bg-white rounded-lg shadow-lg p-6 transition-all duration-300 ease-in-out transform ${
                    openContacts ? 'scale-100 opacity-100' : 'scale-0 opacity-0'
                } ${isVisible ? 'visible' : 'invisible'}`}
                style={{
                    width: 'min(80vw, 600px)',
                    height: 'min(75vh, 550px)',
                    overflowY: 'auto',
                    transformOrigin: 'bottom right'
                }}
            >
                <style jsx>{`
                    div::-webkit-scrollbar {
                        width: 8px;
                    }
                    div::-webkit-scrollbar-track {
                        background: #f1f1f1;
                        border-radius: 10px;
                    }
                    div::-webkit-scrollbar-thumb {
                        background: #888;
                        border-radius: 10px;
                    }
                    div::-webkit-scrollbar-thumb:hover {
                        background: #555;
                    }
                `}</style>
                <button
                    onClick={() => setOpenContacts(false)}
                    className="absolute top-2 right-2 text-gray-500 hover:text-gray-700 text-xl"
                >
                    ×
                </button>
                {showBooking ? (
                    // Render booking component
                    <div className="h-full flex flex-col">
                        <h3 className="text-2xl cute font-semibold mb-6 text-center">Book a Consultation</h3>
                        <div className="flex-grow flex flex-col items-center justify-start overflow-y-auto">
                            <Calendar />
                        </div>
                        <button
                            onClick={() => setShowBooking(false)}
                            className="mt-4 text-primary hover:text-primary-dark"
                        >
                            Back to Questions
                        </button>
                    </div>
                ) : showSelected ? (
                    // Render questions for selected options
                    <div className="h-full flex flex-col">
                        <h3 className="text-2xl cute font-semibold mb-6 text-center">{`Help Us Know More About Your ${selectedOptions[currentOptionIndex]}`}</h3>
                        {questions[selectedOptions[currentOptionIndex]] && (
                            <AnimatePresence initial={false} custom={direction}>
                                <motion.div
                                    key={currentOptionIndex}
                                    custom={direction}
                                    variants={slideVariants}
                                    initial="enter"
                                    animate="center"
                                    exit="exit"
                                    transition={{
                                        x: { type: "spring", stiffness: 300, damping: 30 },
                                        opacity: { duration: 0.2 }
                                    }}
                                    className="flex-grow flex flex-col items-center justify-center"
                                >
                                    <p className="font-semibold mb-4 text-center">{questions[selectedOptions[currentOptionIndex]][currentQuestionIndex].question}</p>
                                    <div className="flex flex-wrap justify-center gap-2">
                                        {questions[selectedOptions[currentOptionIndex]][currentQuestionIndex].options.map((option, optionIndex) => (
                                            <motion.button
                                                key={optionIndex}
                                                onClick={() => handleAnswer(questions[selectedOptions[currentOptionIndex]][currentQuestionIndex].question, option)}
                                                className={`px-3 py-1 rounded-full text-sm ${
                                                    answers[selectedOptions[currentOptionIndex]]?.[questions[selectedOptions[currentOptionIndex]][currentQuestionIndex].question] === option
                                                        ? 'bg-primary text-white'
                                                        : 'bg-gray-200 hover:bg-gray-300'
                                                }`}
                                                whileHover={{ scale: 1.05 }}
                                                whileTap={{ scale: 0.95 }}
                                            >
                                                {option}
                                            </motion.button>
                                        ))}
                                    </div>
                                </motion.div>
                            </AnimatePresence>
                        )}
                        <div className="flex justify-between mt-6">
                            <button
                                onClick={handleBack}
                                className="fixed bottom-4 left-4 w-12 h-12 rounded-full bg-primary flex items-center justify-center text-white hover:bg-primary-dark transition-colors duration-300"
                                disabled={isTransitioning}
                            >
                                <FaArrowLeft />
                            </button>
                        </div>
                    </div>
                ) : (
                    // Render initial options selection
                    <div className="h-full flex flex-col">
                        <h3 className="text-2xl cute font-semibold mb-6 text-center">Please select the service you need</h3>
                        <div className="flex-grow flex items-center justify-center">
                            <div className="flex flex-wrap justify-center gap-3">
                                {options.map((option, index) => (
                                    <motion.span
                                        key={index}
                                        className={`cursor-pointer px-4 py-2 rounded-full inline-block text-sm transition-colors duration-300 ${
                                            selectedOptions.includes(option) 
                                                ? 'bg-primary text-white' 
                                                : 'bg-gray-200 hover:bg-gray-300'
                                        }`}
                                        onClick={() => toggleOption(option)}
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                    >
                                        {option}
                                    </motion.span>
                                ))}
                            </div>
                        </div>
                        <div className="flex justify-between mt-6">
                            <button
                                onClick={() => setOpenContacts(false)}
                                className="fixed bottom-4 left-4 w-12 h-12 rounded-full bg-primary flex items-center justify-center text-white hover:bg-primary-dark transition-colors duration-300"
                            >
                                <FaArrowLeft />
                            </button>
                            <button
                                onClick={handleOkay}
                                className="fixed bottom-4 right-4 w-12 h-12 rounded-full bg-primary flex items-center justify-center text-white hover:bg-primary-dark transition-colors duration-300"
                                disabled={selectedOptions.length === 0}
                            >
                                <FaArrowRight />
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </>
    );
};

export default ContactInfo;

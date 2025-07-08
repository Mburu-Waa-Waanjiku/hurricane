// Data for the Web Design page

const websiteTypesData = [
  {
    id: 'business',
    title: '1. Business Websites in Kenya',
    keywords: ['business website design Kenya', 'company website Kenya', 'Kenyan business site'],
    useCases: 'SMEs, consultants, law firms, service providers',
    description: 'Establish a strong online presence for your Kenyan business. A professional business website builds credibility, showcases your services or products, and provides essential contact information. Ideal for SMEs, consultants, law firms, and service providers across Nairobi, Mombasa, Kisumu, and all major towns. We ensure your site is mobile-friendly and easy to navigate.',
    rateCard: {
      standardTitle: 'Standard Business Package',
      standardPages: 8,
      standardPrice: 25000,
      standardIncludes: [
        'Home Page', 'About Us', 'Services/Products Page', 'Team Profiles (Optional)', 'Testimonials/Success Stories', 'Contact Page with Form & Map', 'Blog Setup', 'FAQ Page'
      ],
      hostingIncluded: true,
      addOns: [
        { name: 'Unlimited Blog Pages', price: 5000 },
        { name: 'Online Booking/Appointment System', price: 7500 },
        { name: 'Live Chat Feature', price: 2000 }
      ],
      customText: 'Need specific features like advanced galleries or client portals? Request a custom quote.'
    }
  },
  {
    id: 'ecommerce',
    title: '2. E-commerce Websites in Kenya',
    keywords: ['online shop in Kenya', 'ecommerce website Kenya', 'sell products online Kenya', 'M-Pesa integration Kenya'],
    useCases: 'Retail shops, dropshipping, product brands, online stores',
    description: 'Start selling your products online across Kenya with a secure and user-friendly e-commerce website. We build online shops with features like product catalogs, shopping carts, secure payment gateway integration (including M-Pesa via Safaricom Daraja API or third-party providers), and order management. Perfect for retail businesses in Nairobi, Mombasa, Nakuru, Eldoret targeting a national customer base.',
    rateCard: {
      standardTitle: 'E-commerce Starter Package',
      standardPages: 10, // (Home, Shop, Product Detail, Cart, Checkout, Account, About, Contact, Blog, Policy)
      standardPrice: 45000,
      standardIncludes: [
        'Full E-commerce Setup', 'Up to 50 Product Uploads', 'Shopping Cart & Checkout', 'Basic Payment Gateway Setup (e.g., Pesapal, DPO, or guidance for M-Pesa Daraja)', 'Order Management System', 'User Account Area', 'Mobile Responsive Design', 'Basic SEO Setup'
      ],
      hostingIncluded: true,
      addOns: [
        { name: 'Advanced M-Pesa Till/Paybill Integration (Daraja API)', price: 15000 },
        { name: 'Additional 100 Product Uploads', price: 8000 },
        { name: 'Wishlist Functionality', price: 4000 }
      ],
      customText: 'Custom features like multi-vendor marketplaces or complex shipping rules available.'
    }
  },
  // Add the other 9 types similarly...
  {
    id: 'portfolio',
    title: '3. Portfolio & Freelance Websites Kenya',
    keywords: ['freelancer website Kenya', 'portfolio design Kenya', 'creative portfolio site', 'showcase work online Kenya'],
    useCases: 'Designers, developers, artists, photographers, writers, creatives',
    description: 'Showcase your skills and projects professionally with a stunning portfolio website. Attract clients and employers in Kenya\'s creative hubs like Nairobi or digitally nationwide. We design visually appealing sites optimized to highlight your best work, including galleries, project details, and contact forms. Essential for freelancers and creatives.',
    rateCard: {
      standardTitle: 'Creative Portfolio Package',
      standardPages: 5,
      standardPrice: 18000,
      standardIncludes: [
        'Home/Landing Page', 'Portfolio Gallery (up to 3 categories)', 'Project Detail Pages Template', 'About Me/Bio Page', 'Contact Form'
      ],
      hostingIncluded: true,
      addOns: [
        { name: 'Unlimited Portfolio Categories', price: 3000 },
        { name: 'Integrated Blog Section', price: 4000 },
        { name: 'Video Background/Integration', price: 2500 }
      ],
      customText: 'We can build custom filtering, animations, or unique layouts to match your style.'
    }
  },
   {
    id: 'blog-news',
    title: '4. Blog & News Websites Kenya',
    keywords: ['Kenya blog website', 'news website in Kenya', 'start a blog in Kenya', 'online magazine Kenya'],
    useCases: 'Personal bloggers, news platforms, lifestyle sites, niche content creators',
    description: 'Share your voice, news, or expertise with a dynamic blog or news website. We create platforms that are easy to update, SEO-friendly, and engaging for readers in Kenya and beyond. Features include category management, author profiles, comment sections, and social sharing integration. Ideal for building an online community or news outlet.',
    rateCard: {
      standardTitle: 'Blog/News Platform Package',
      standardPages: 6, // (Home, Blog Feed, Single Post, Category/Tag Archives, About, Contact)
      standardPrice: 22000,
      standardIncludes: [
        'WordPress CMS Setup', 'Customizable Blog Theme', 'Post & Category Management', 'Comment System Setup', 'Social Media Integration', 'Basic SEO Plugin Setup'
      ],
      hostingIncluded: true,
      addOns: [
        { name: 'Newsletter Signup Integration', price: 3000 },
        { name: 'Featured Content Slider', price: 2500 },
        { name: 'Ad Placement Areas Setup', price: 3500 }
      ],
      customText: "Need advanced features like membership or multiple authors? Let's discuss."
    }
  },
  {
    id: 'education',
    title: '5. Educational & E-learning Websites Kenya',
    keywords: ['school website Kenya', 'elearning platform Kenya', 'online courses Kenya', 'training website Kenya'],
    useCases: 'Schools, colleges, universities, tutors, online trainers, institutions',
    description: 'Deliver educational content or manage your institution online with a dedicated website. We develop sites for schools in Nairobi, Kisumu, etc., featuring course listings, student portals, online resources, and e-learning capabilities. Enhance communication and learning processes with a professional educational platform.',
    rateCard: {
      standardTitle: 'Educational Website Package',
      standardPages: 10,
      standardPrice: 35000,
      standardIncludes: [
        'Informational Pages (About, Admissions, etc.)', 'Course/Program Listings', 'Faculty/Staff Profiles', 'News/Events Section', 'Contact Information & Map', 'Basic Student Resource Area (Login Optional)', 'Gallery'
      ],
      hostingIncluded: true,
      addOns: [
        { name: 'Full E-learning Platform (LMS Integration)', price: 25000 },
        { name: 'Student/Parent Portal with Login', price: 12000 },
        { name: 'Online Application Form', price: 5000 }
      ],
      customText: 'Custom integrations with school management systems are possible.'
    }
  },
  {
    id: 'religious',
    title: '6. Church & Religious Websites Kenya',
    keywords: ['church website Kenya', 'ministry website Kenya', 'gospel site in Kenya', 'online sermons Kenya'],
    useCases: 'Churches, ministries, faith-based organizations, Christian groups',
    description: 'Connect with your congregation and community online. We build websites for churches and religious organizations across Kenya, featuring sermon archives (audio/video), event calendars, donation portals, ministry information, and contact details. Foster community and spread your message effectively online.',
    rateCard: {
      standardTitle: 'Ministry Website Package',
      standardPages: 8,
      standardPrice: 28000,
      standardIncludes: [
        'Homepage with Welcome Message', 'About Us/Our Beliefs', 'Ministries/Groups Info', 'Sermon Archive (Audio/Text uploads)', 'Events Calendar', 'Gallery', 'Contact & Location', 'Donation Information Page'
      ],
      hostingIncluded: true,
      addOns: [
        { name: 'Online Donation Integration', price: 6000 },
        { name: 'Live Streaming Setup Guidance', price: 4000 },
        { name: 'Member Directory (Password Protected)', price: 7000 }
      ],
      customText: 'Features like prayer request forms or small group management can be added.'
    }
  },
  {
    id: 'real-estate',
    title: '7. Real Estate & Property Websites Kenya',
    keywords: ['real estate website Kenya', 'property listing site Kenya', 'sell land online Kenya', 'agent website Kenya'],
    useCases: 'Realtors, real estate agencies, land sellers, property developers, property managers',
    description: "Showcase properties and generate leads with a professional real estate website. We create sites with property listings (searchable/filterable), agent profiles, image galleries, maps, and contact forms for inquiries. Essential for agents and companies operating in Kenya's dynamic property market, from Nairobi apartments to coastal plots in Mombasa.",
    rateCard: {
      standardTitle: 'Real Estate Listing Package',
      standardPages: 7, // (Home, Listings, Single Property, Agents, About, Blog, Contact)
      standardPrice: 38000,
      standardIncludes: [
        'Property Listing System', 'Search & Filter Functionality', 'Individual Property Pages', 'Image Galleries & Maps', 'Agent Profile Section', 'Lead Capture Forms', 'Mobile Responsive'
      ],
      hostingIncluded: true,
      addOns: [
        { name: 'Advanced Search Filters (e.g., Price Range, Beds/Baths)', price: 5000 },
        { name: 'Mortgage Calculator Integration', price: 3000 },
        { name: 'Featured Properties Section', price: 2500 }
      ],
      customText: 'IDX integration or custom map solutions available upon request.'
    }
  },
  {
    id: 'job-board',
    title: '8. Job Board & Career Websites Kenya',
    keywords: ['job board Kenya', 'post jobs online Kenya', 'career website Kenya', 'Kenyan job portal'],
    useCases: 'HR firms, recruitment agencies, career coaches, industry-specific job platforms',
    description: 'Create a platform to connect job seekers and employers in Kenya. We build job board websites allowing companies to post vacancies and candidates to search and apply. Features include job listings, company profiles, candidate resume uploads (optional), and application management tools.',
    rateCard: {
      standardTitle: 'Job Board Starter Package',
      standardPages: 8, // (Home, Job Listings, Single Job, Post Job, Companies, Candidates, Blog, Contact)
      standardPrice: 48000,
      standardIncludes: [
        'Job Posting Functionality (Admin/Employer)', 'Job Search & Filtering', 'Individual Job Detail Pages', 'Company Profile Pages', 'Application Submission Form', 'Basic Admin Dashboard'
      ],
      hostingIncluded: true,
      addOns: [
        { name: 'Candidate Resume Upload & Profiles', price: 10000 },
        { name: 'Employer Dashboard & Job Management', price: 12000 },
        { name: 'Paid Job Listing Packages Setup', price: 8000 }
      ],
      customText: 'Custom features like alerts, advanced matching, or assessments can be developed.'
    }
  },
  {
    id: 'ngo-gov',
    title: '9. Government & NGO Websites Kenya',
    keywords: ['government website Kenya', 'nonprofit website Kenya', 'NGO web design Kenya', 'county government website'],
    useCases: 'Local government agencies, county governments, NGOs, nonprofits, CBOs, donors',
    description: 'Build trust and communicate effectively with an official website for your government agency or non-profit organization in Kenya. We design accessible, informative sites to showcase projects, provide resources, announce tenders (for government), accept donations (for NGOs), and share contact information. Crucial for transparency and engagement.',
    rateCard: {
      standardTitle: 'NGO/Govt Info Website',
      standardPages: 10,
      standardPrice: 30000,
      standardIncludes: [
        'Homepage', 'About Us/Mission', 'Projects/Programs Section', 'Team/Leadership Page', 'Resources/Downloads Area', 'News/Updates Section', 'Gallery', 'Contact Information', 'Donation Info (NGO) / Tender Info (Govt)'
      ],
      hostingIncluded: true,
      addOns: [
        { name: 'Online Donation Integration (NGO)', price: 6000 },
        { name: 'Secure Document Portal', price: 8000 },
        { name: 'Events Calendar with Registration', price: 7000 }
      ],
      customText: 'Accessibility compliance (WCAG) and specific reporting features available.'
    }
  },
  {
    id: 'event-booking',
    title: '10. Event & Booking Websites Kenya',
    keywords: ['event booking website Kenya', 'online reservation site Kenya', 'event planner Kenya site', 'ticket booking Kenya'],
    useCases: 'Event planners, wedding venues, hotels, tour operators, conference organizers',
    description: 'Manage events and facilitate bookings online with a dedicated website. We create platforms for showcasing events, managing registrations or ticket sales, processing payments, and providing event details. Perfect for event planners in Nairobi, hotels in Mombasa, or tour operators across Kenya.',
    rateCard: {
      standardTitle: 'Event Booking Package',
      standardPages: 7, // (Home, Events, Single Event, Booking, About, Blog, Contact)
      standardPrice: 40000,
      standardIncludes: [
        'Event Listing Display', 'Individual Event Detail Pages', 'Online Booking/Registration Form', 'Basic Calendar View', 'Image/Video Gallery Integration', 'Contact Form'
      ],
      hostingIncluded: true,
      addOns: [
        { name: 'Online Payment Integration for Tickets/Bookings', price: 10000 },
        { name: 'Seat Selection / Capacity Management', price: 15000 },
        { name: 'Automated Confirmation Emails', price: 5000 }
      ],
      customText: 'Complex scheduling, multi-day events, or attendee management systems possible.'
    }
  },
  {
    id: 'membership',
    title: '11. Membership & Login-Based Websites Kenya',
    keywords: ['login website Kenya', 'member portal Kenya', 'subscription site Kenya', 'SACCO website Kenya'],
    useCases: 'SACCOs, clubs, gyms, professional associations, member organizations, subscription services',
    description: 'Create exclusive content or services for members with a secure login-based website. We build member portals for SACCOs in Kenya, clubs, associations, or subscription businesses, featuring user registration, login systems, restricted content areas, and profile management. Ideal for managing member communities and providing value.',
    rateCard: {
      standardTitle: 'Membership Portal Package',
      standardPages: 8, // (Landing, Login, Register, Member Dashboard, Profile, Restricted Content Example, About, Contact)
      standardPrice: 55000,
      standardIncludes: [
        'User Registration & Login System', 'Password Reset Functionality', 'Basic Member Dashboard', 'Content Restriction Setup (up to 3 levels/areas)', 'Member Profile Management', 'Admin User Management'
      ],
      hostingIncluded: true,
      addOns: [
        { name: 'Subscription Payment Integration (Recurring)', price: 15000 },
        { name: 'Member Directory / Social Features', price: 12000 },
        { name: 'Drip Content / Tiered Access Levels', price: 10000 }
      ],
      customText: 'Custom dashboards, forums, or integration with other systems are available.'
    }
  }
];

export { websiteTypesData }; 
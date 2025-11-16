"use client"

import React, { useState } from 'react';
import { Database, BarChart3, Users, Clock, Target, Shield, Zap, CheckCircle, TrendingUp, Calendar, FileText, Bell } from 'lucide-react';
import ContactHurricane from './ContactHurricane';
import Image from 'next/image';

const CRMSoftwarePage = () => {
  const [activeTab, setActiveTab] = useState('features');

  const stats = [
    { icon: TrendingUp, value: '45%', label: 'Average increase in sales productivity' },
    { icon: Users, value: '27%', label: 'Improvement in customer retention' },
    { icon: Clock, value: '14hrs', label: 'Saved per week per sales rep' },
    { icon: Target, value: '32%', label: 'Increase in conversion rates' }
  ];

  const benefits = [
    {
      icon: Database,
      title: 'Centralized Customer Data',
      description: 'All customer information in one accessible place'
    },
    {
      icon: BarChart3,
      title: 'Actionable Insights',
      description: 'Real-time analytics and reporting dashboards'
    },
    {
      icon: Zap,
      title: 'Automated Workflows',
      description: 'Streamline repetitive tasks and follow-ups'
    },
    {
      icon: Shield,
      title: 'Secure & Compliant',
      description: 'Enterprise-grade security for your business data'
    }
  ];

  const features = [
    'Contact and lead management',
    'Sales pipeline visualization',
    'Automated task reminders',
    'Email integration and tracking',
    'Custom reporting and analytics',
    'Mobile app access',
    'Team collaboration tools',
    'Integration with existing tools'
  ];

  return (
    <div className="min-h-screen bg-white" style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif' }}>
      {/* Header */}
      <div className='px-4 py-3 flex justify-between items-center'>
        <div className=''><span className='font-humane text-5xl'>H</span><span className='text-2xl font-bold'>urricane</span></div>
        <div className='flex relative hidden lg:block overflow-hidden h-9 w-9'>
          <Image
            alt='Hurricane'
            fill
            className='rounded-lg'
            src="/h.png"
          />
        </div>
        <div className='opacity-0'><span className='font-humane text-5xl'>H</span><span className='text-2xl font-bold'>urricane</span></div>
        <ContactHurricane/>
      </div>

      {/* Hero Section */}
      <section className="relative py-20 px-4 md:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-orange-50 to-white" />
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle at 2px 2px, rgb(230, 71, 31) 1px, transparent 0)',
            backgroundSize: '40px 40px'
          }} />
        </div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-light mb-6 tracking-tight text-gray-900">
                Manage Relationships,<br />Drive Growth
              </h1>
              <p className="text-lg text-gray-600 mb-8 font-light leading-relaxed">
                Transform how you manage customer relationships with our powerful CRM software built for modern businesses in Kenya and across Sub-Saharan Africa.
              </p>
              <ContactHurricane view={"whatsappstart"}/>
            </div>
            <div className="relative h-80 rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src="/crm1.jpg" 
                alt="CRM Dashboard"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 md:px-8 ">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-light mb-4 text-center tracking-tight text-gray-900">
            The Impact of Proper CRM
          </h2>
          <p className="text-center text-gray-600 mb-12 font-light max-w-3xl mx-auto">
            Businesses using CRM systems see significant improvements in sales performance, customer satisfaction, 
            and operational efficiency. Here's what the data shows.
          </p>
          
          <div className="grid md:grid-cols-4 gap-6">
            {stats.map((stat, idx) => {
              const Icon = stat.icon;
              return (
                <div key={idx} className="bg-white rounded-lg p-6 shadow-sm border border-gray-100 text-center hover:shadow-md transition-shadow">
                  <Icon className="w-8 h-8 mx-auto mb-4" style={{ color: 'rgb(230, 71, 31)' }} />
                  <div className="text-3xl font-light mb-2 text-gray-900">{stat.value}</div>
                  <div className="text-sm text-gray-600 font-light">{stat.label}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Problem/Solution */}
      <section className="py-16 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative h-96 rounded-2xl overflow-hidden shadow-xl">
              <img 
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600&fit=crop" 
                alt="Team meeting"
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <h2 className="text-3xl font-light mb-6 tracking-tight text-gray-900">
                Stop Losing Track of Opportunities
              </h2>
              <p className="text-gray-600 font-light leading-relaxed mb-6">
                Are customer details scattered across notebooks, spreadsheets, and different team members' phones? 
                Do sales opportunities slip through the cracks because someone forgot to follow up? 
                Is your team spending more time searching for information than actually selling?
              </p>
              <p className="text-gray-600 font-light leading-relaxed mb-6">
                Our CRM brings order to the chaos. Every customer interaction, every sales opportunity, 
                and every important detail is captured, organized, and accessible to your entire team. 
                No more missed follow-ups, no more duplicate efforts, no more lost revenue.
              </p>
              <div className="flex gap-4 text-sm text-gray-500 font-light">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4" style={{ color: 'rgb(230, 71, 31)' }}/>
                  <span>Easy to adopt</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4" style={{ color: 'rgb(230, 71, 31)' }} />
                  <span>Built for African businesses</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 md:px-8 bg-gray-50/50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-light mb-4 text-center tracking-tight text-gray-900">
            Everything You Need to Grow
          </h2>
          <p className="text-center text-gray-600 mb-12 font-light max-w-3xl mx-auto">
            Our CRM is designed specifically for the challenges faced by businesses in Kenya and Sub-Saharan Africa, 
            with features that actually get used.
          </p>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-100">
              <h3 className="text-xl font-normal mb-4 text-gray-900">Sales Management</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: 'rgb(230, 71, 31)' }}/>
                  <span className="text-gray-600 font-light">Visual pipeline to track every deal</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: 'rgb(230, 71, 31)' }}/>
                  <span className="text-gray-600 font-light">Automated follow-up reminders</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: 'rgb(230, 71, 31)' }}/>
                  <span className="text-gray-600 font-light">Lead scoring and qualification</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: 'rgb(230, 71, 31)' }}/>
                  <span className="text-gray-600 font-light">Sales forecasting and reporting</span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-100">
              <h3 className="text-xl font-normal mb-4 text-gray-900">Customer Management</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: 'rgb(230, 71, 31)' }}/>
                  <span className="text-gray-600 font-light">Complete customer history at your fingertips</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: 'rgb(230, 71, 31)' }}/>
                  <span className="text-gray-600 font-light">Communication tracking across all channels</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: 'rgb(230, 71, 31)' }}/>
                  <span className="text-gray-600 font-light">Customer segmentation and targeting</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: 'rgb(230, 71, 31)' }}/>
                  <span className="text-gray-600 font-light">Purchase history and preferences</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="relative h-64 rounded-2xl overflow-hidden shadow-xl">
            <img 
              src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&h=400&fit=crop" 
              alt="Data analytics"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Benefits Grid */}
      <section className="py-16 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-light mb-12 text-center tracking-tight text-gray-900">
            Why Businesses Choose Our CRM
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, idx) => {
              const Icon = benefit.icon;
              return (
                <div key={idx} className="bg-white rounded-lg p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                  <Icon className="w-10 h-10 mb-4" style={{ color: 'rgb(230, 71, 31)' }}/>
                  <h3 className="text-lg font-normal mb-2 text-gray-900">{benefit.title}</h3>
                  <p className="text-sm text-gray-600 font-light leading-relaxed">{benefit.description}</p>
                </div>
              );
            })}
          </div>

          <div className="mt-12 rounded-2xl p-8 border" style={{ borderColor: 'rgb(230, 71, 31)' }}>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <Calendar className="w-8 h-8 mx-auto mb-3" style={{ color: 'rgb(230, 71, 31)' }} />
                <div className="text-2xl font-light text-gray-900 mb-2">Never Miss a Beat</div>
                <p className="text-sm text-gray-600 font-light">Automated reminders for follow-ups</p>
              </div>
              <div className="text-center">
                <FileText className="w-8 h-8 mx-auto mb-3" style={{ color: 'rgb(230, 71, 31)' }} />
                <div className="text-2xl font-light text-gray-900 mb-2">Smart Reporting</div>
                <p className="text-sm text-gray-600 font-light">Insights that drive better decisions</p>
              </div>
              <div className="text-center">
                <Bell className="w-8 h-8 mx-auto mb-3" style={{ color: 'rgb(230, 71, 31)' }} />
                <div className="text-2xl font-light text-gray-900 mb-2">Mobile Access</div>
                <p className="text-sm text-gray-600 font-light">Manage your business on the go</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Integration Section */}
      <section className="py-16 px-4 md:px-8 bg-gray-50/50">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-light mb-6 tracking-tight text-gray-900">
                Works with Your Existing Tools
              </h2>
              <p className="text-gray-600 font-light leading-relaxed mb-6">
                Our CRM integrates seamlessly with the tools you already use. Connect your email, 
                WhatsApp Business, accounting software, and more. No need to start from scratch—
                we work with what you have.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: 'rgb(230, 71, 31)' }}/>
                  <span className="text-gray-600 font-light">WhatsApp Business API integration</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: 'rgb(230, 71, 31)' }}/>
                  <span className="text-gray-600 font-light">Email sync (Gmail, Outlook)</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: 'rgb(230, 71, 31)' }}/>
                  <span className="text-gray-600 font-light">M-Pesa payment tracking</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: 'rgb(230, 71, 31)' }}/>
                  <span className="text-gray-600 font-light">Custom integrations available</span>
                </li>
              </ul>
            </div>
            <div className="relative h-96 rounded-2xl overflow-hidden shadow-xl">
              <img 
                src="/crm2.jpg" 
                alt="Team collaboration"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative pt-20 pb-8 px-4 md:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-black" />
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
            backgroundSize: '32px 32px'
          }} />
        </div>
        
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-3xl md:text-4xl font-light text-white mb-6 tracking-tight">
            Ready to Transform Your Sales Process?
          </h2>
          <p className="text-gray-300 text-lg mb-8 font-light max-w-2xl mx-auto leading-relaxed">
            Join forward-thinking businesses across Kenya that are using our CRM to close more deals, 
            retain more customers, and grow faster. Schedule a demo today and see the difference.
          </p>
          
          <ContactHurricane view={"whatsapp"}/>

          <p className="text-gray-400 text-sm font-light">
            Setup in minutes
          </p>

          <div className="mt-8 pt-8 border-t border-white/10">
            <p className="text-xs text-gray-500 font-light">
              © 2024 Hurricane Marketing. All rights reserved.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CRMSoftwarePage;
"use client"

import React, { useState } from 'react';
import { MessageCircle, Users, Clock, TrendingUp, Zap, Shield, DollarSign, CheckCircle, ArrowRight } from 'lucide-react';
import ContactHurricane from './ContactHurricane';
import Image from 'next/image';

const WhatsAppAutomationPage = () => {
  const [activeTab, setActiveTab] = useState('features');

  const stats = [
    { icon: Users, value: '95%', label: 'Smartphone users with WhatsApp in Kenya' },
    { icon: Clock, value: '23x', label: 'Average daily WhatsApp opens per person' },
    { icon: TrendingUp, value: '38 mins', label: 'Average daily time spent on WhatsApp' },
    { icon: MessageCircle, value: '98%', label: 'Message open rate within 3 minutes' }
  ];

  const benefits = [
    {
      icon: Zap,
      title: 'Lightning Fast Delivery',
      description: 'Messages delivered instantly compared to SMS delays'
    },
    {
      icon: DollarSign,
      title: 'Cost-Effective',
      description: 'No per-message charges - only internet data required'
    },
    {
      icon: Shield,
      title: 'End-to-End Encryption',
      description: 'Secure communication for sensitive business information'
    },
    {
      icon: CheckCircle,
      title: 'Rich Media Support',
      description: 'Send images, documents, videos, and location data'
    }
  ];

  const features = [
    'Automated supplier reminders and follow-ups',
    'Large-scale customer outreach campaigns',
    'Personalized messages for each recipient',
    'Scheduled message delivery',
    'Contact list management and segmentation',
    'Real-time delivery and read receipts',
    'Template message creation',
    'Analytics and performance tracking'
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
        <div className="absolute inset-0 bg-gradient-to-br from-green-50 to-white" />
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle at 2px 2px, rgb(34, 197, 94) 1px, transparent 0)',
            backgroundSize: '40px 40px'
          }} />
        </div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-light mb-6 tracking-tight text-gray-900">
                Reach Every Customer,<br />Instantly
              </h1>
              <p className="text-lg text-gray-600 mb-8 font-light leading-relaxed">
                Automate your WhatsApp business communication and connect with thousands of customers in Sub-Saharan Africa's most-used messaging platform.
              </p>
              <ContactHurricane view={"whatsappstart"}/>
            </div>
            <div className="relative h-80 rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src="/whatsappbusiness.png" 
                alt="Business communication"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 md:px-8 bg-gray-50/50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-light mb-4 text-center tracking-tight text-gray-900">
            WhatsApp's Dominance in Kenya
          </h2>
          <p className="text-center text-gray-600 mb-12 font-light max-w-3xl mx-auto">
            In Sub-Saharan Africa, especially Kenya, WhatsApp isn't just popular—it's essential. 
            Nearly every smartphone user has WhatsApp installed, making it the most direct channel to reach your audience.
          </p>
          
          <div className="grid md:grid-cols-4 gap-6">
            {stats.map((stat, idx) => {
              const Icon = stat.icon;
              return (
                <div key={idx} className="bg-white rounded-lg p-6 shadow-sm border border-gray-100 text-center hover:shadow-md transition-shadow">
                  <Icon className="w-8 h-8 mx-auto mb-4 " style={{ color: 'rgb(230, 71, 31)' }} />
                  <div className="text-3xl font-light mb-2 text-gray-900">{stat.value}</div>
                  <div className="text-sm text-gray-600 font-light">{stat.label}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Platform Comparison */}
      <section className="py-16 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative h-96 rounded-2xl overflow-hidden shadow-xl">
              <img 
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop" 
                alt="Business analytics"
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <h2 className="text-3xl font-light mb-6 tracking-tight text-gray-900">
                Unmatched Business Accessibility
              </h2>
              <p className="text-gray-600 font-light leading-relaxed mb-6">
                WhatsApp creates a level playing field for business communication that other platforms simply can't match. 
                Unlike email (which many in Kenya don't regularly check) or Facebook (which requires constant scrolling), 
                WhatsApp messages are read almost immediately.
              </p>
              <p className="text-gray-600 font-light leading-relaxed mb-6">
                For B2B communication with suppliers, WhatsApp provides instant, reliable connectivity without the 
                formality barriers of email or the cost concerns of phone calls. For B2C outreach, you're meeting 
                customers where they already spend hours each day—no app downloads or account creation required.
              </p>
              <div className="flex gap-4 text-sm text-gray-500 font-light">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-600" style={{ color: 'rgb(230, 71, 31)' }}/>
                  <span>Higher engagement than email</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-600" style={{ color: 'rgb(230, 71, 31)' }} />
                  <span>More direct than social media</span>
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
            Automate Without Losing the Personal Touch
          </h2>
          <p className="text-center text-gray-600 mb-12 font-light max-w-3xl mx-auto">
            Our automation tool lets you communicate at scale while maintaining personalization. 
            Send customized messages to thousands without typing each one individually.
          </p>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-100">
              <h3 className="text-xl font-normal mb-4 text-gray-900">Supplier Management</h3>
              <ul className="space-y-3" >
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: 'rgb(230, 71, 31)' }}/>
                  <span className="text-gray-600 font-light">Automated payment reminders</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5  flex-shrink-0 mt-0.5" style={{ color: 'rgb(230, 71, 31)' }}/>
                  <span className="text-gray-600 font-light">Order confirmation follow-ups</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: 'rgb(230, 71, 31)' }}/>
                  <span className="text-gray-600 font-light">Delivery status updates</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: 'rgb(230, 71, 31)' }}/>
                  <span className="text-gray-600 font-light">Scheduled inventory requests</span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-100">
              <h3 className="text-xl font-normal mb-4 text-gray-900">Customer Outreach</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: 'rgb(230, 71, 31)' }}/>
                  <span className="text-gray-600 font-light">Personalized promotional campaigns</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: 'rgb(230, 71, 31)' }}/>
                  <span className="text-gray-600 font-light">Birthday and anniversary wishes</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: 'rgb(230, 71, 31)' }}/>
                  <span className="text-gray-600 font-light">Product launch announcements</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: 'rgb(230, 71, 31)' }}/>
                  <span className="text-gray-600 font-light">Customer feedback requests</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="relative h-64 rounded-2xl overflow-hidden shadow-xl">
            <img 
              src="https://images.unsplash.com/photo-1551434678-e076c223a692?w=1200&h=400&fit=crop" 
              alt="Team collaboration"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Benefits Over SMS */}
      <section className="py-16 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-light mb-12 text-center tracking-tight text-gray-900">
            Why WhatsApp Over SMS?
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
                <div className="text-2xl font-light text-gray-900 mb-2">Free to Send</div>
                <p className="text-sm text-gray-600 font-light">No per-message costs unlike SMS</p>
              </div>
              <div className="text-center">
                <div className="text-2xl font-light text-gray-900 mb-2">Rich Content</div>
                <p className="text-sm text-gray-600 font-light">Images, PDFs, videos, and more</p>
              </div>
              <div className="text-center">
                <div className="text-2xl font-light text-gray-900 mb-2">Two-Way Chat</div>
                <p className="text-sm text-gray-600 font-light">Enable real customer conversations</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-20 px-4 md:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-black" />
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
            backgroundSize: '32px 32px'
          }} />
        </div>
        
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-3xl md:text-4xl font-light text-white mb-6 tracking-tight">
            Ready to Transform Your Business Communication?
          </h2>
          <p className="text-gray-300 text-lg mb-8 font-light max-w-2xl mx-auto leading-relaxed">
            Join hundreds of Kenyan businesses already using our WhatsApp automation tool to reach more customers, 
            strengthen supplier relationships, and grow their revenue. Our team is ready to help you get started today.
          </p>
          
          <ContactHurricane view={"whatsapp"}/>

          <p className="text-gray-400 text-sm font-light">
            Setup in under 5 minutes
          </p>

          <div className="mt-16 pt-8 border-t border-white/10">
            <p className="text-xs text-gray-500 font-light">
              © 2024 Hurricane Marketing. All rights reserved.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WhatsAppAutomationPage;
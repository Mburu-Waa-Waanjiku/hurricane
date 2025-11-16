"use client"

import React from 'react';
import { MessageCircle, Users, Clock, TrendingUp, Zap, Shield, DollarSign, CheckCircle, ArrowRight } from 'lucide-react';
import ContactHurricane from './ContactHurricane';
import Image from 'next/image';

// Icon mapping object
const iconMap = {
  Users,
  Clock,
  TrendingUp,
  MessageCircle,
  Zap,
  DollarSign,
  Shield,
  CheckCircle
};

const MarketingProductPage = ({ product }) => {
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
                {product.hero.headline}
              </h1>
              <p className="text-lg text-gray-600 mb-8 font-light leading-relaxed">
                {product.hero.subheadline}
              </p>
              <ContactHurricane view={"whatsappstart"}/>
            </div>
            <div className="relative h-80 rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src={product.image} 
                alt={product.title}
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
            Proven Results
          </h2>
          <p className="text-center text-gray-600 mb-12 font-light max-w-3xl mx-auto">
            Our {product.title.toLowerCase()} services deliver measurable impact for businesses across Kenya and East Africa.
          </p>
          
          <div className="grid md:grid-cols-4 gap-6">
            {product.stats.map((stat, idx) => {
              const Icon = iconMap[stat.icon];
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

      {/* Detail Section */}
      {product.detailSections.map((section, idx) => (
        <section key={idx} className="py-16 px-4 md:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="relative h-96 rounded-2xl overflow-hidden shadow-xl">
                <img 
                  src={section.image} 
                  alt={section.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h2 className="text-3xl font-light mb-6 tracking-tight text-gray-900">
                  {section.title}
                </h2>
                <p className="text-gray-600 font-light leading-relaxed mb-6">
                  {section.content}
                </p>
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* Features Section */}
      <section className="py-16 px-4 md:px-8 bg-gray-50/50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-light mb-4 text-center tracking-tight text-gray-900">
            What You Get
          </h2>
          <p className="text-center text-gray-600 mb-12 font-light max-w-3xl mx-auto">
            Comprehensive {product.title.toLowerCase()} services designed to drive your business forward.
          </p>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {product.features.map((feature, idx) => (
              <div key={idx} className="flex items-start gap-3 bg-white rounded-lg p-6 shadow-sm border border-gray-100">
                <CheckCircle className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: 'rgb(230, 71, 31)' }}/>
                <span className="text-gray-700 font-light">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-light mb-12 text-center tracking-tight text-gray-900">
            Why Choose Hurricane
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {product.benefits.map((benefit, idx) => (
              <div key={idx} className="bg-white rounded-lg p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                <h3 className="text-lg font-normal mb-2 text-gray-900">{benefit.title}</h3>
                <p className="text-sm text-gray-600 font-light leading-relaxed">{benefit.description}</p>
              </div>
            ))}
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
            {product.ctaText}
          </h2>
          <p className="text-gray-300 text-lg mb-8 font-light max-w-2xl mx-auto leading-relaxed">
            Join hundreds of Kenyan businesses already working with Hurricane Marketing. 
            Our team is ready to help you get started today.
          </p>
          
          <ContactHurricane view={"whatsapp"}/>

          <p className="text-gray-400 text-sm font-light mt-4">
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

export default MarketingProductPage;
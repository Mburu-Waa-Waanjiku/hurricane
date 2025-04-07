'use client'

import { useState } from 'react'
import Header from './Header'
import ContactInfo from './ContactInfo'
import { motion } from 'framer-motion'
import { FaArrowLeft, FaBoxOpen, FaEnvelope, FaLink, FaLock, FaMapMarkerAlt, FaShoppingBag, FaStore, FaWhatsapp, FaCheck } from 'react-icons/fa'
import RentaStoreLanding from './RentaStoreLanding'
import axios from 'axios'

function RentaShop() {

  const [register, setRegister] = useState(false)
  const [signupStep, setSignupStep] = useState(1)
  const [loading, setLoading] = useState(false)
  const [formData, setFormData] = useState({
    shopName: '',
    categories: '',
    shopLink: '',
    whatsapp: '',
    email: '',
    plan: '',
  })

  const handleInputChange = (e) => {
    if (e.target.name === 'shopLink') {
      // Remove spaces and special characters
      const cleanValue = e.target.value.replace(/[^a-zA-Z0-9]/g, '').toLowerCase()
      setFormData({
        ...formData,
        [e.target.name]: cleanValue
      })
    } else {
      setFormData({
        ...formData,
        [e.target.name]: e.target.value
      })
    }
  }

  const nextStep = () => {
    setSignupStep(prev => Math.min(prev + 1, 4))
  }

  const prevStep = () => {
    setSignupStep(prev => Math.max(prev - 1, 1))
  }

  const handleSubmit = async () => {
    // Check if all fields are filled
    const isFormValid = Object.values(formData).every(value => value.trim() !== '')
    
    if (!isFormValid) {
      alert('Please fill in all fields before submitting')
      return
    }
    
    setLoading(true)

    try {
      const response = await axios.post('/api/rent-a-store', {
        ...formData,
      })

      if (response.status === 201) {
        setLoading(false)
        setSignupStep(5) // Show success state
        setTimeout(() => {
          setRegister(false) // Close after 3 seconds
        }, 3000)
      } else {
        setLoading(false)
        throw new Error('Failed to submit form')
      }
    } catch (error) {
      setLoading(false)
      alert('There was an error submitting your form. Please try again.')
      console.log('Form submission error:', error)
    }
  }

  const renderSignupStep = () => {
    switch(signupStep) {
      case 1:
        return (
          <div className="space-y-6">
            <div className="relative">
              <FaStore className="absolute left-4 top-1/2 -translate-y-1/2 text-primary" />
              <input
                type="text"
                name="shopName"
                value={formData.shopName}
                onChange={handleInputChange}
                placeholder="Shop Name"
                className="w-full bg-white/10 border border-white/20 rounded-xl py-3 pl-12 pr-4 text-white placeholder-white/80"
                required
              />
            </div>
            <div className="relative">
              <FaLink className="absolute left-4 top-1/2 -translate-y-1/2 text-primary" />
              <div className="flex items-center w-full bg-white/10 border border-white/20 rounded-xl py-3 pl-12 pr-4">
                <input
                  type="text"
                  name="shopLink"
                  value={formData.shopLink}
                  onChange={handleInputChange}
                  placeholder="yourshop"
                  className=" bg-transparent text-white placeholder-white/80 focus:outline-none"
                  required
                />
                <span className="text-primary">.co.ke</span>
              </div>
            </div>
          </div>
        )
      case 2:
        return (
          <div className="space-y-6">
            <div className="flex justify-center space-x-4 mb-8">
              <button
                onClick={() => setFormData({...formData, plan: 'small'})}
                className={`px-6 py-3 rounded-xl transition-all ${
                  formData.plan === 'small' 
                    ? 'bg-primary text-white' 
                    : 'bg-white/10 text-white/80 hover:bg-white/20'
                }`}
              >
                Small
              </button>
              <button
                onClick={() => setFormData({...formData, plan: 'medium'})}
                className={`px-6 py-3 rounded-xl transition-all ${
                  formData.plan === 'medium' 
                    ? 'bg-primary text-white' 
                    : 'bg-white/10 text-white/80 hover:bg-white/20'
                }`}
              >
                Medium
              </button>
              <button
                onClick={() => setFormData({...formData, plan: 'large'})}
                className={`px-6 py-3 rounded-xl transition-all ${
                  formData.plan === 'large' 
                    ? 'bg-primary text-white' 
                    : 'bg-white/10 text-white/80 hover:bg-white/20'
                }`}
              >
                Large
              </button>
            </div>

            {formData.plan && (
              <div className="bg-white/10 border border-white/20 rounded-xl p-6 text-white">
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold capitalize mb-2">{formData.plan} Plan</h3>
                  <div className="text-3xl font-bold text-primary">
                    KES {
                      formData.plan === 'small' ? '699' :
                      formData.plan === 'medium' ? '999' :
                      '1,499'
                    }
                    <span className="text-sm text-white/60">/month</span>
                  </div>
                </div>
                
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <FaCheck className="text-primary mr-2" />
                    {formData.plan === 'small' ? '300' : 
                    formData.plan === 'medium' ? '500' : 
                    '1000'} products
                  </li>
                  <li className="flex items-center">
                    <FaCheck className="text-primary mr-2" />
                    Complete order management
                  </li>
                  <li className="flex items-center">
                    <FaCheck className="text-primary mr-2" />
                    Use your Google Drive images for your store
                  </li>
                  <li className="flex items-center">
                    <FaCheck className="text-primary mr-2" />
                    Mpesa integration for online payments
                  </li>
                </ul>
              </div>
            )}
          </div>
        )
      case 3:
        return (
          <div className="space-y-6">
            <div className="relative">
              <FaShoppingBag className="absolute left-4 top-1/2 -translate-y-1/2 text-primary" />
              <input
                type="text"
                name="categories"
                value={formData.categories}
                onChange={handleInputChange}
                placeholder="Product Categories"
                className="w-full bg-white/10 border border-white/20 rounded-xl py-3 pl-12 pr-4 text-white placeholder-white/80"
                required
              />
            </div>
            <div className="relative">
              <FaWhatsapp className="absolute left-4 top-1/2 -translate-y-1/2 text-primary" />
              <input
                type="text"
                name="whatsapp"
                value={formData.whatsapp}
                onChange={handleInputChange}
                placeholder="WhatsApp Number"
                className="w-full bg-white/10 border border-white/20 rounded-xl py-3 pl-12 pr-4 text-white placeholder-white/80"
                required
              />
            </div>
          </div>
        )
      case 4:
        return (
          <div className="space-y-6">
            <div className="relative">
              <FaEnvelope className="absolute left-4 top-1/2 -translate-y-1/2 text-primary" />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="Email Address"
                className="w-full bg-white/10 border border-white/20 rounded-xl py-3 pl-12 pr-4 text-white placeholder-white/80"
                required
              />
            </div>
          </div>
        )
      case 5:
        return (
          <div className="flex flex-col items-center justify-center space-y-6 py-8">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", stiffness: 200, damping: 20 }}
              className="w-20 h-20 bg-primary rounded-full flex items-center justify-center"
            >
              <FaCheck className="text-white text-4xl" />
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-3xl font-bold text-white text-center"
            >
              Success!
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-white/80 text-center"
            >
              Your store has been created successfully. We'll contact you shortly!
            </motion.p>
          </div>
        )
      }
    }

  return (
    <>
      <Header/>
      <ContactInfo/>
      <RentaStoreLanding
        setRegister={setRegister}
      />
      {register && 
        <motion.div
         initial={{ opacity: 0, y: 50 }}
         animate={{ opacity: 1, y: 0 }}
         exit={{ opacity: 0, y: -50 }}
         className="fixed z-50  backdrop-blur-xl h-screen top-0 inset-0 flex justify-center items-center px-4 mt-4 mb-24"
        >
         <div className="max-w-md border h-fit z-50 border-white/30 scale-90 w-full bg-black/40 p-8 rounded-2xl shadow-2xl">
           <div className="flex justify-between items-center mb-8">
             <button 
               onClick={() => setRegister(false)}
               className="text-white hover:text-amber-500 transition-colors"
             >
               <FaArrowLeft size={24} />
             </button>
             <div className="flex space-x-2">
               {[1, 2, 3, 4].map(step => (
                 <div 
                   key={step}
                   className={`w-3 h-3 rounded-full ${
                     step === signupStep ? 'bg-primary' : 'bg-white/30'
                   }`}
                 />
               ))}
             </div>
           </div>

           <h3 className="text-3xl font-bold text-white text-center mb-8">
             {signupStep === 1 ? "Store Details" : signupStep === 2 ? "Shop Size" : signupStep === 3 ? "Products & Contact" : "Get A Shop"}
           </h3>

           {renderSignupStep()}

           <div className="flex justify-between mt-8">
             {signupStep > 1 && (
               <motion.button
                 whileHover={{ scale: 1.05 }}
                 whileTap={{ scale: 0.95 }}
                 onClick={prevStep}
                 className="px-6 py-2 bg-white/10 text-white rounded-xl hover:bg-white/20 transition-colors"
               >
                 Previous
               </motion.button>
             )}
             <motion.button
               whileHover={{ scale: 1.05 }}
               whileTap={{ scale: 0.95 }}
               onClick={signupStep === 4 ? handleSubmit : nextStep}
               className="px-6 py-2 bg-primary text-white rounded-xl ml-auto"
             >
               {signupStep === 4 && loading ?
                 <div className=" z-50 p-2 flex justify-center items-center">
                   <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-black"></div>
                 </div> : !loading && signupStep === 4 ? 
                 "Submit" : "Next"}
             </motion.button>
          </div>
         </div>
        </motion.div>
      }
    </>
  )
}

export default RentaShop
import React from 'react'
import WhatsAppAutomationPage from "../../../components/WhatsAppAutomationPage"
import { softwareMetadata } from '../../../data/softwareMetadata'

export const metadata = softwareMetadata.whatsappBulk

function page() {
  return (
    <div>
      <WhatsAppAutomationPage/>
    </div>
  )
}

export default page
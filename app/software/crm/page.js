import React from 'react'
import CRMSoftwarePage from '../../../components/CRMSoftwarePage'
import { softwareMetadata } from '../../../data/softwareMetadata'

export const metadata = softwareMetadata.crm

function page() {
  return (
    <div>
      <CRMSoftwarePage/>
    </div>
  )
}

export default page
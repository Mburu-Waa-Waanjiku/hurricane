import React from 'react';
import Image from 'next/image'; // Import Image

// Helper function to format currency 
const formatCurrency = (amount) => {
  return `KSH ${amount.toLocaleString('en-KE')}`;
};

const RateCard = ({ data }) => {
  if (!data) return null;

  return (
    // Added relative positioning and overflow-hidden for bg image
    <div className="mt-8 relative overflow-hidden rounded-lg border border-primary/50 shadow-lg">


      {/* Card Content - Added relative z-10 */}
      <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 p-6">
        {/* Standard Package Section - text color white */}
        <div className="border border-gray-500 rounded-lg p-4 flex flex-col bg-black/20 backdrop-blur-sm">
          <h3 className="text-xl font-semibold text-primary mb-2">{data.standardTitle || 'Standard Package'}</h3>
          {(data.standardPages || data.standardPrice) && (
            <p className="text-lg font-bold text-white mb-3">
              {data.standardPages && `(${data.standardPages} Pages)`} {data.standardPrice && `- ${formatCurrency(data.standardPrice)}`}
            </p>
          )}
          <p className="text-base font-medium text-gray-200 mb-2">Includes:</p>
          <ul className="list-disc list-inside space-y-1 text-gray-300 flex-grow">
            {data.standardIncludes?.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
          {data.hostingIncluded && (
            <p className="mt-4 text-sm font-semibold text-green-400">Hosting & domain name included</p>
          )}
        </div>

        {/* Add-ons Section - text color white */}
        <div className="flex flex-col gap-4">
          <div className="border border-gray-500 rounded-lg p-4 flex-grow bg-black/20 backdrop-blur-sm">
            <h3 className="text-xl font-semibold text-primary mb-2">Add-ons:</h3>
            {/* Removed redundant "Includes:" text? */} 
            <ul className="list-disc list-inside space-y-1 text-gray-300">
              {data.addOns?.map((item, index) => (
                <li key={index}>{item.name}: +{formatCurrency(item.price)}</li>
              ))}
            </ul>
          </div>
          {data.customText && (
             <div className="border border-gray-500 rounded-lg p-4 bg-black/20 backdrop-blur-sm">
               <p className="text-base text-gray-300">{data.customText}</p>
             </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default RateCard; 
import React from  'react';

export default function ProgressBar({
    name,
    step
}){
    
    return (
      <div className="mb-6">
        <div className="flex justify-between">
          <div className="text-xl font-medium">{name}</div>
          <div className="text-base">Step {`${step}`} of 6</div>
        </div>
        <div className="flex space-x-4 my-2">
          <div className="flex-1 items-center">
            <div className="h-2 bg-gray-300 rounded-full overflow-hidden">
                <div
                  className="h-full bg-brand rounded transition-all duration-300"
                  style={{ width: `${step === 1  ? 80: 100}%` }}
                ></div>
            </div>
            <div className="text-center mt-2 text-xs">DNV Quota Request</div>
          </div>
          <div className="flex-1 items-center">
            <div className="h-2 bg-gray-300 rounded-full overflow-hidden">
              {step >= 2 && (
                <div
                  className="h-full bg-brand rounded transition-all duration-300"
                  style={{ width: `${step === 2  ? 80: 100}%` }}
                ></div>
              )}
            </div>
            <div className="text-center mt-2 text-xs">Faculty Details</div>
          </div>
          <div className="flex-1 items-center">
           <div className="h-2 bg-gray-300 rounded-full overflow-hidden">
              {step >= 3 && (
                <div
                  className="h-full bg-brand rounded transition-all duration-300"
                  style={{ width: `${step === 3  ? 80: 100}%` }}
                ></div>
              )}
            </div>
            <div className="text-center mt-2 text-xs">Leadership Contacts</div>
          </div>
          <div className="flex-1 items-center">
            <div className="h-2 bg-gray-300 rounded-full overflow-hidden">
              {step >= 4 && (
                <div
                  className="h-full bg-brand rounded transition-all duration-300"
                  style={{ width: `${step === 4  ? 80: 100}%` }}
                ></div>
              )}
            </div>
            <div className="text-center mt-2 text-xs">Site Information</div>
          </div>
          <div className="flex-1 items-center">
            <div className="h-2 bg-gray-300 rounded-full overflow-hidden">
              {step >= 5 && (
                <div
                  className="h-full bg-brand rounded transition-all duration-300"
                  style={{ width: `${step === 5  ? 80: 100}%` }}
                ></div>
              )}
            </div>
            <div className="text-center mt-2 text-xs">
              Services & Certifications
            </div>
          </div>
          <div className="flex-1 items-center">
            <div className="h-2 bg-gray-300 rounded-full overflow-hidden">
              {step >= 6 && (
                <div
                  className="h-full bg-brand rounded transition-all duration-300"
                  style={{ width: `${step === 6  ? 80: 100}%` }}
                ></div>
              )}
            </div>
            <div className="text-center mt-2 text-xs">Review & Submit</div>
          </div>
        </div>
      </div>
    );
}
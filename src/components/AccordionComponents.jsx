import React from 'react'
import AccordionSection from './AccordionSection'

function BasicInfoAccordion({formData}){
return(
    <AccordionSection
      title="Basic Information"
      viewMode={
        <>
          <div className="grid grid-cols-2 gap-4 border-b border-b-gray-300 py-2">
            <span className="text-gray-600">Legal Entity Name</span>
            <span>{formData.legalentityname}</span>
          </div>

          <div className="grid grid-cols-2 gap-4 border-b border-b-gray-300 py-2">
            <span className="text-gray-600">d/b/a Name</span>
            <span>{formData.dbaname}</span>
          </div>
<div className="grid grid-cols-2 gap-4 border-b border-b-gray-300 py-2">
    <span className="text-gray-600">Primary Contact</span>
          <div className="mt-4 p-4 bg-gray-100 rounded">
            <p className="font-semibold">{formData.firstname} {formData.lastname}</p>
            <p>{formData.title}</p>
            <p>
              Work: {formData.workphone} | Cell: {formData.cellphone}
            </p>
            <p>Email: {formData.email} 
              <span className="ml-2 text-xs bg-green-200 text-green-800 px-2 py-1 rounded-full">
                Verified
              </span>
            </p>
            <p>Address: {formData.streetaddress}</p>
          </div>
          </div>
        </>
      }
    />
)
}


function FacilityAccordion({formData}){
return(
    <AccordionSection
      title="Facility Type"
      viewMode={
        <>
          <div className="grid grid-cols-2 gap-4 border-b border-b-gray-300 py-2">
            <span className="text-gray-600">Facility Type</span>
            <span>{formData.faculty_Type}</span>
          </div>
        </>
      }
    />
)
}

function LeadershipContactsAccordion({formData}){
return(
    <AccordionSection
      title="Leadership Contacts"
      viewMode={
        <>
          <div className="grid grid-cols-2 gap-4 border-b border-b-gray-300 py-2">
    <span className="text-gray-600">CEO</span>
          <div className="mt-4 p-4 bg-gray-100 rounded">
            <p className="font-semibold">{formData.firstname_CEO} {formData.lastname_CEO}</p>
            <p>
              Phone: {formData.workphone_CEO}
            </p>
            <p>Email: {formData.email} 
            </p>
            <p>Address: {formData.address}</p>
          </div>
          </div>
          <div className="grid grid-cols-2 gap-4 border-b border-b-gray-300 py-2">
    <span className="text-gray-600">Director of Quality</span>
          <div className="mt-4 p-4 bg-gray-100 rounded">
            <p className="font-semibold">{formData.firstname_DQ} {formData.lastname_DQ}</p>
            <p>
              Phone: {formData.phone_DQ}
            </p>
            <p>Email: {formData.email} 
            </p>
            <p>Address: {formData.address}</p>
          </div>
          </div>
          <div className="grid grid-cols-2 gap-4 border-b border-b-gray-300 py-2">
    <span className="text-gray-600">Invoicing Contact</span>
          <div className="mt-4 p-4 bg-gray-100 rounded">
            <p className="font-semibold">{formData.firstname_IC} {formData.lastname_IC}</p>
            <p>
              Phone: {formData.phone_IC}
            </p>
            <p>Email: {formData.email} 
            </p>
            <p>Address: {formData.address}</p>
          </div>
          </div>

         
        </>
      }
    />
)
}

function SiteInformationAccordion({formData}){
return(
    <AccordionSection
      title="Site Information"
      viewMode={
        <>
          <div className="grid grid-cols-2 gap-4 border-b border-b-gray-300 py-2">
            <span className="text-gray-600">Site Configuration</span>
            <span>{formData.sitesandLocations}</span>
          </div>
          <div className="grid grid-cols-2 gap-4 border-b border-b-gray-300 py-2">
            <span className="text-gray-600">Input Method</span>
            <span>{""}</span>
          </div>
        </>
      }
    />
)
}

function ServicesndCertificationsAccordion({formData}){
return(
    <AccordionSection
      title="Services & Certifications"
      viewMode={
        <>
          <div className="grid grid-cols-2 gap-4 border-b border-b-gray-300 py-2">
            <span className="text-gray-600">Services Provided</span>
            <span>{formData.servicesprovided && formData.servicesprovided.map(item => (
                 <button className="bg-transparent hover:bg-brand text-blue-700 font-semibold hover:text-white py-1 px-2 m-2 border border-brand hover:border-transparent rounded">
      {item}
    </button>
            ))}</span>
          </div>
          <div className="grid grid-cols-2 gap-4 border-b border-b-gray-300 py-2">
            <span className="text-gray-600">Standards to Apply</span>
            <span>{formData.standardToApply && formData.standardToApply.map(item => (
                 <button className="bg-transparent hover:bg-brand text-blue-700 font-semibold hover:text-white py-1 px-2 m-2 border border-brand hover:border-transparent rounded">
      {item}
    </button>
            ))}</span>
          </div>
           <div className="grid grid-cols-2 gap-4 border-b border-b-gray-300 py-2">
            <span className="text-gray-600">Date of Application</span>
            <span>{formData.dateofapplication}</span>
          </div>
           <div className="grid grid-cols-2 gap-4 border-b border-b-gray-300 py-2">
            <span className="text-gray-600">Expiration Date of Current Stroke Certification</span>
            <span>{formData.expirationdate}</span>
          </div>
           <div className="grid grid-cols-2 gap-4 border-b border-b-gray-300 py-2">
            <span className="text-gray-600">Dates of last twenty-five thrombolytic administrations</span>
            <span>{formData.lasttwentyfivethrombolytic && formData.lasttwentyfivethrombolytic.map(item => (
                 <span className='text-base text-brand'> {item},</span>
            ))}</span>
          </div>
          <div className="grid grid-cols-2 gap-4 border-b border-b-gray-300 py-2">
            <span className="text-gray-600">Dates of last fifteen thrombectomies</span>
            <span>{formData.lastfifteenthrombectomies && formData.lastfifteenthrombectomies.map(item => (
                 <span className='text-base text-brand'> {item}</span>
            ))}</span>
          </div>
        </>
      }
    />
)
}

export { BasicInfoAccordion, FacilityAccordion, LeadershipContactsAccordion, SiteInformationAccordion, ServicesndCertificationsAccordion}
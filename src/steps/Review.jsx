import { useContext } from "react";
import { FormContext } from "../context/FormContext";
import { useNavigate } from "react-router-dom";
import ProgressBar from "../components/ProgressBar";
import ErrorComp from "../components/ErrorComp";
import { errorInfo } from "../constants";
import {LeadershipContactsAccordion, BasicInfoAccordion, FacilityAccordion, SiteInformationAccordion, ServicesndCertificationsAccordion} from '../components/AccordionComponents'

const Review = () => {
  const { formData } = useContext(FormContext);
  const navigate = useNavigate();
  console.log(formData);

  const back = () => navigate("/react-med-concepts/servicescerts");

  const onSubmit = () => {
    alert("Form Submitted Successfully!");
    console.log("Final:", formData);
  };

  return (
     <form onSubmit={onSubmit}>
        <ProgressBar name="Review & Submit" step={6}/>
        <div className="bg-white rounded-md p-6">
         <BasicInfoAccordion formData={formData}/>
         <FacilityAccordion formData={formData}/>
         <LeadershipContactsAccordion formData={formData}/>
         <SiteInformationAccordion formData={formData}/>
         <ServicesndCertificationsAccordion formData={formData}/>
         <div className="p-3 border border-gray-400 rounded shadow-sm">
            <p className="text-xl font-medium mb-3">Ready to Submit?</p>
            <div className="mb-3">
            <input
          type="checkbox"
          name="certifyInformation"
          onChange={(e) => {
          console.log(e)
          }}
        />
        <span className="mx-3 text-base ">I certify that all information provided is accurate and complete to the best of my knowledge</span>
        </div>

        <p className="text-base text-gray-400 mb-3">By submitting this form, you agree to our terms and conditions. DNV will review your application and contact you within 2-3 business days.</p>
        <div className="flex px-1 py-4">
            <span className='text-base mr-4'>
            <button className="bg-transparent hover:bg-brand text-blue-700 font-semibold hover:text-white py-2 px-4 border border-brand hover:border-transparent rounded">
      Download as PDF
    </button>
            </span>
            <div className='text-base flex items-center'>
                
                <button className="bg-transparent hover:bg-brand text-blue-700 font-semibold hover:text-white py-2 px-4 border border-brand hover:border-transparent rounded">
      Export to CSV
    </button>
            </div>
        </div>
        </div>
        </div>
        
        <div className="flex justify-between px-1 py-4">
            <span className='text-xl'>
            <button type="button" className="bg-transparent hover:bg-brand text-blue-700 font-semibold hover:text-white py-2 px-4 border border-brand hover:border-transparent rounded" onClick={back}>
      Previous
    </button>
            </span>
            <div className='text-base flex items-center'>
                
                <button type="submit" className="bg-brand hover:bg-white hover:text-brand hover:border text-white font-bold py-2 px-4 rounded">
      Submit Application
    </button>
            </div>
        </div>
        </form>
  );
};

export default Review;

import { useContext, useState } from "react";
import { FormContext } from "../context/FormContext";
import { useNavigate } from "react-router-dom";
import FileUpload from '../components/FileUpload'
import ProgressBar from "../components/ProgressBar";

const Step4 = () => {
  const { formData, setFormData } = useContext(FormContext);
  const [locationState, setLocationState] = useState('')
    const handleClick = (val) =>{
        setLocationState(val);
    }
const navigate = useNavigate();

  const back = () => navigate("/react-med-concepts/leadershipcontacts")
  
  const onSubmit = (e) =>{
      e.preventDefault();
      let obj =  {'sitesandLocations': locationState}
      setFormData({...formData, ...obj})
      navigate("/react-med-concepts/servicescerts");
    }

  return (
    <form onSubmit={onSubmit}>
    <ProgressBar name="Site Information" step={4}/>
    <div className="bg-white rounded-md p-6">
      <h2 className="my-4 text-xl font-medium">Do you have multiple sites or locations?</h2>
      <div className="flex pb-6">
        <div className="flex-1">
          <a
            href="#"
            class={`bg-neutral-primary-soft  block p-4 border border-gray-200 mr-3 rounded shadow-xs ${locationState === 'single' ? 'bg-[#E2F0F8]': ""}`}
            onClick={handleClick.bind(this, 'single')}
          >
            <h5 class="mb-3 text-xl font-semibold tracking-tight text-heading leading-8">
              Single Location
            </h5>
            <p class="text-body">
              We operate from one facility only
            </p>
          </a>
        </div>
        <div className="flex-1">
          <a
            href="#"
            class={`bg-neutral-primary-soft  block p-4 border border-gray-200 mr-3 rounded shadow-xs ${locationState === 'multiple' ? 'bg-[#E2F0F8]': ""}`}
            onClick={handleClick.bind(this, 'multiple')}
          >
            <h5 class="mb-3 text-xl font-medium tracking-tight text-heading leading-8">
              Multiple Locations
            </h5>
            <p class="text-body">
             We have multiple facilities or practice locations
            </p>
          </a>
        </div>
      </div>
      {locationState === 'multiple' &&
        <div>
            <h2 className="my-4 text-xl font-medium">How would you like to add your site information?</h2>
         <a
            href="#"
            class={`bg-neutral-primary-soft  block p-4 border border-gray-200 mr-3 rounded shadow-xs ${locationState === 'multiple' ? 'bg-[#E2F0F8]': ""}`}
            onClick={handleClick.bind(this, 'single')}
          >
            <h5 class="mb-3 text-xl font-medium tracking-tight text-heading leading-8">
              Upload CSV / Excel
            </h5>
            <p class="text-body">
              Upload a spreadsheet with all site information
            </p>
          </a>
        <div className="border border-gray-200 rounded p-3 my-4 mr-3 bg-[#E2F0F8] file_upload_section">
                <FileUpload />
            </div>
        </div>
      }
    </div>
    {false && <div id="toast-success" className="flex items-center w-full max-w-sm p-4 text-body bg-neutral-primary-soft rounded-base shadow-xs border border-default" role="alert">
    <div className="inline-flex items-center justify-center shrink-0 w-7 h-7 text-fg-success bg-success-soft rounded">
        <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 11.917 9.724 16.5 19 7.5"/></svg>
        <span className="sr-only">Check icon</span>
    </div>
    <div className="ms-3 text-sm font-normal">Item moved successfully.</div>
    <button type="button" className="ms-auto flex items-center justify-center text-body hover:text-heading bg-transparent box-border border border-transparent hover:bg-neutral-secondary-medium focus:ring-4 focus:ring-neutral-tertiary font-medium leading-5 rounded text-sm h-8 w-8 focus:outline-none" data-dismiss-target="#toast-success" aria-label="Close">
        <span className="sr-only">Close</span>
        <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18 17.94 6M18 18 6.06 6"/></svg>
    </button>
</div>}
    <div className="flex justify-between px-1 py-4">
        <span className='text-xl'>
        <button type="button" className="bg-transparent hover:bg-brand text-blue-700 font-semibold hover:text-white py-2 px-4 border border-brand hover:border-transparent rounded" onClick={back}>
  Previous
</button>
        </span>
        <div className='text-base flex items-center'>
            <button className="bg-brand hover:bg-brand text-white font-bold py-2 px-4  mr-3 rounded">
  Save
</button>
            <button type="submit" className="bg-brand hover:bg-brand text-white font-bold py-2 px-4 rounded">
  Continue
</button>
        </div>
    </div>
    </form>
  );
};

export default Step4;

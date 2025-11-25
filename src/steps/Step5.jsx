import { useContext, useState } from "react";
import { FormContext } from "../context/FormContext";
import { useNavigate } from "react-router-dom";
import { FiSearch } from "react-icons/fi";
import MultiSelect from "../components/MultiSelect";
import DatePicker from "../components/DatePicker";
import MultiDatePicker from "../components/MultiDatePicker";
import ProgressBar from "../components/ProgressBar";
import {servicesList, siteInformation} from '../constants'


const Step5 = () => {
  const { formData, setFormData } = useContext(FormContext);
  const [currentData, setCurrentData] = useState(formData);

    const [currentState, setCurrentState] = useState('All Services')

    const navigate = useNavigate();

  const back = () => navigate("/react-med-concepts/siteinfo")
function clickHandler(val){
    setCurrentState(val)
}

const onSubmit = (e) =>{
      e.preventDefault();
       setFormData({...formData, ...currentData})
      navigate("/react-med-concepts/review");
    }


const toggleSelect = (option) => {
  setCurrentData((prev) => {
    const selected = prev.standardToApply || [];
    if (selected.includes(option)) {
      return {
        ...prev,
        standardToApply: selected.filter((item) => item !== option),
      };
    }
    return {
      ...prev,
      standardToApply: [...selected, option],
    };
  });
};


  const remove = (option) => {
    setCurrentData((prev) => ({
      ...prev,
      ['standardToApply']: currentData.standardToApply.filter((item) => item !== option),
    }));
  };

  const datepickerChange = (e) => {
      setCurrentData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  }

  const addDate = (e) => {
    if (!e.target.value) return;
    setCurrentData((prev) => {
    const selected = prev[e.target.name] || [];
    const formatted = new Date(e.target.value).toLocaleDateString("en-US");
    if (selected.includes(e.target.value)) {
      return {
        ...prev,
        [e.target.name]: selected.filter((item) => item !== formatted),
      };
    }
    return {
      ...prev,
      [e.target.name]: [...selected, formatted],
    };
  });
  };

 const removeDate = (index, fieldName) => {
  setCurrentData((prev) => {
    const selected = prev[fieldName] || [];

    return {
      ...prev,
      [fieldName]: selected.filter((_, i) => i !== index),
    };
  });
};
  return (
    <form onSubmit={onSubmit}>
      <ProgressBar name="Services & Certifications" step={5} />
      <div className="bg-white rounded-md p-6">
        <h2 className="my-4 text-xl">Service Offering</h2>

        <p>
          Primary contact receives all DNV Healthcare official communications
        </p>

        <div className="site_navbar flex border-b border-gray-400 mb-4">
          <button
            type="button"
            className={`font-medium p-4 bg-transparent text-blue-700 font-semibold  py-2 px-4 hover:text-brand ${
              currentState === "All Services"
                ? "text-brand border-b-2 border-gray-brand"
                : "text-gray-400"
            }`}
            onClick={clickHandler.bind(this, "All Services")}
          >
            All Services
          </button>
          <button
            type="button"
            className={`font-medium p-4 bg-transparent text-blue-700 font-semibold  py-2 px-4 hover:text-brand ${
              currentState === "Clinical"
                ? "text-brand border-b-2 border-gray-brand"
                : "text-gray-400"
            }`}
            onClick={clickHandler.bind(this, "Clinical")}
          >
            Clinical
          </button>
          <button
            type="button"
            className={`font-medium p-4 bg-transparent text-blue-700 font-semibold  py-2 px-4 hover:text-brand ${
              currentState === "Surgical"
                ? "text-brand border-b-2 border-gray-brand"
                : "text-gray-400"
            }`}
            onClick={clickHandler.bind(this, "Surgical")}
          >
            Surgical
          </button>
          <button
            type="button"
            className={`font-medium p-4 bg-transparent text-blue-700 font-semibold  py-2 px-4 hover:text-brand ${
              currentState === "Diagonistic"
                ? "text-brand border-b-2 border-gray-brand"
                : "text-gray-400"
            }`}
            onClick={clickHandler.bind(this, "Diagnostic")}
          >
            Diagnostic
          </button>
          <button
            type="button"
            className={`font-medium p-4 bg-transparent text-blue-700 font-semibold  py-2 px-4 hover:text-brand ${
              currentState === "Rehabilitation"
                ? "text-brand border-b-2 border-gray-brand"
                : "text-gray-400"
            }`}
            onClick={clickHandler.bind(this, "Rehabilitation")}
          >
            Rehabilitation
          </button>
          <button
            type="button"
            className={`font-medium p-4 bg-transparent text-blue-700 font-semibold  py-2 px-4 hover:text-brand ${
              currentState === "Speciality"
                ? "text-brand border-b-2 border-gray-brand"
                : "text-gray-400"
            }`}
            onClick={clickHandler.bind(this, "Specialty")}
          >
            Specialty
          </button>
        </div>

        <div className="search-input flex mb-4">
          <div className="w-full relative">
            <input
              type="text"
              placeholder="Search services..."
              onChange={(e) => {
                console.log("");
              }}
              className="w-full h-10 pl-4 pr-10 border border-gray-300 rounded-md text-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-brandBlue focus:border-brandBlue"
            />

            <FiSearch className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-6 mb-4">
          {servicesList[currentState] &&
            servicesList[currentState].map((item, i) => (
              <div
                id={`services_${item}_${i}`}
                className="border border-gray-400 rounded shadow p-4"
              >
                <h4 className="my-4 text-base font-medium">{item}</h4>

                {siteInformation[item].map((data, index) => (
                  <div>
                    <input
                      type="checkbox"
                      name={data}
                      id={`${data}_${index}`}
                      onChange={(e) => {
                        if (e.target.checked) {
                          setCurrentData((prev) => {
                            const selected = prev['servicesprovided'] || [];
                            if (!selected.includes(e.target.name)) {
                              return {
                              ...prev,
                              ['servicesprovided']: [...selected, e.target.name],
                            };
                            }
                          });
                        } else{
                           setCurrentData((prev) => {
                            const selected = prev['servicesprovided'] || [];
                              return {
                              ...prev,
                              ['servicesprovided']: selected.filter((item) => item !== e.target.name),
                            };
                          });
                        }
                      }}
                    />
                    <span className="mx-3 text-base">{data}</span>
                  </div>
                ))}
              </div>
            ))}
        </div>
        <button
          type="button"
          class="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border-2 border-blue-500 hover:border-transparent rounded-md mb-10"
        >
          + Add Other Service
        </button>

        <div className="standard-apply-section my-6">
          <h2 className="my-4 text-xl font-medium">Standards to Apply</h2>

          <MultiSelect
            toggleSelect={toggleSelect}
            selected={currentData && currentData["standardToApply"] || []}
            remove={remove}
          />
        </div>
        <div className="flex mb-6">
          <div className="flex-1 mr-2">
            <DatePicker
              onChange={datepickerChange}
              name="expirationdate"
              value={currentData["expirationdate"] || ""}
            />
          </div>
          <div className="flex-1">
            <DatePicker
              label="Date of Application"
              onChange={datepickerChange}
              name="dateofapplication"
              value={currentData["dateofapplication"] || ""}
            />
          </div>
        </div>
        <div className="mb-6">
          <MultiDatePicker
            label="Dates of last twenty-five thrombolytic administrations"
            addDate={addDate}
            removeDate={removeDate}
            flow="lasttwentyfivethrombolytic"
            dates={currentData["lasttwentyfivethrombolytic"] || []}
          />
        </div>
        <div className="mb-6">
          <MultiDatePicker
            label="Dates of last fifteen thrombectomies"
            addDate={addDate}
            removeDate={removeDate}
            flow="lastfifteenthrombectomies"
            dates={currentData["lastfifteenthrombectomies"] || []}
          />
        </div>
      </div>
      <div className="flex justify-between px-1 py-4">
        <span className="text-xl">
          <button
            type="button"
            className="bg-transparent hover:bg-brand text-blue-700 font-semibold hover:text-white py-2 px-4 border border-brand hover:border-transparent rounded"
            onClick={back}
          >
            Previous
          </button>
        </span>
        <div className="text-base flex items-center">
          <button className="bg-brand hover:bg-brand text-white font-bold py-2 px-4  mr-3 rounded">
            Save
          </button>
          <button
            type="submit"
            className="bg-brand hover:bg-brand text-white font-bold py-2 px-4 rounded"
          >
            Continue
          </button>
        </div>
      </div>
    </form>
  );
};

export default Step5;

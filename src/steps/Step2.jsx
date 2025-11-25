import { useContext, useState } from "react";
import { FormContext } from "../context/FormContext";
import { useNavigate } from "react-router-dom";
import ProgressBar from "../components/ProgressBar";
import ErrorComp from "../components/ErrorComp";
import { errorInfo } from "../constants";

const Step2 = () => {
  const { formData, setFormData } = useContext(FormContext);
  const [facultyData, setFacultyData] = useState(formData)
  const [error, setError] = useState(false)
  const navigate = useNavigate();

  const back = () => navigate("/react-med-concepts/facilitydetails");

  let options = ["Short-Term Acute Care", "Long-Term Acute Care", "Critical Access", "Children's", "Free-Standing Psychiatric", "Other"]

  const onSubmit = (e) => {
    e.preventDefault();
    if(!(facultyData && facultyData.faculty_Type)){
      setError(true)
    }
    if(!error && facultyData.faculty_Type){
      setFormData({ ...formData, ...facultyData });
      navigate("/react-med-concepts/leadershipcontacts");
    }
  };

  return (
    <form onSubmit={onSubmit}>
    <ProgressBar name="Facility Details" step={2}/>
    <div className="bg-white rounded-md p-6">
      <h2 className="my-4 text-xl">Facility and Organization Type</h2>

      <div className="flex flex-col mb-4 w-full">
      <label className="text-sm font-medium text-gray-700 mb-2">
        Faculty Type
        <span className="text-red-500"> *</span>
      </label>

      <div className="flex flex-col space-y-3">
        {options.map((option, i) => (
          <label key={i} className="flex items-center space-x-2 cursor-pointer">
            
            <input
              id={`faculty_${i}`}
              type="radio"
              name='faculty_Type'
              value={option}
              checked={facultyData.faculty_Type === option}
              onChange={(e) => {
                setFacultyData((prev)=>({
                  ...prev,
                  ['faculty_Type']: e.target.value
                }))
                setError(false)
              }}
              className="h-4 w-4 "
            />

            <span className="text-gray-800 font-medium">{option}</span>
          </label>
        ))}
        {error && <ErrorComp message={errorInfo['faculty_Type']}/>}
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

export default Step2;

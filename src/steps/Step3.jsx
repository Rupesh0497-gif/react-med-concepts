import { useContext , useState} from "react";
import { FormContext } from "../context/FormContext";
import { useNavigate } from "react-router-dom";
import CustomInput from "../components/CustomInput";
import ProgressBar from "../components/ProgressBar";
import { regexList, errorInfo , stateList} from "../constants";


const Step3 = () => {
  const { formData, setFormData } = useContext(FormContext);
  const [currentData, setCurrentData] = useState(formData);
    const [errors, setErrors] = useState({});
  const navigate = useNavigate();
  const back = () => navigate("/react-med-concepts/facilitydetails");

 const onChangeHandler = (e) => {
    setCurrentData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const onBlurHandler = (e) => {
    let flow = e.target.name.split('_')[1];
    let regexType= {'zipcode': 'onlyNumbers', 'city': 'onlyLetters', 'streetaddress': 'alphaNumeric'}
    if(flow){
      regexType = {
      [`firstname_${flow}`]: "onlyLetters",
      [`lastname_${flow}`]: "onlyLetters",
      [`phone_${flow}`]: "onlyNumbers",
      [`email_${flow}`]: "email",
    };
    }
    let currValue = e.target.value;
    let errObj = {};
    if (!regexList[regexType[e.target.name]].test(currValue)) {
      errObj["message"] = errorInfo[flow ? e.target.name.split('_')[0]: e.target.name];
    }
    setErrors((prev) => ({
      ...prev,
      [e.target.name]: errObj,
    }));
  };
  const onChangeCheckboxHandler = (e) =>{
    let flow = e.target.name.split('_')[1];
    if(e.target.checked){
    setCurrentData((prev) => ({
      ...prev,
      [`firstname_${flow}`]: formData['firstname'],
      [`lastname_${flow}`]: formData['lastname'],
      [`phone_${flow}`]: formData['workphone'],
      [`email_${flow}`]: formData['email']
    }));
    }
    
  }
  const onSubmit = (e) => {
    e.preventDefault();
    console.log(currentData);
    const isAllErrorObjectsEmpty = Object.values(errors).every(
      (value) =>
        value && typeof value === "object" && Object.keys(value).length === 0
    );
    const hasAllValues = Object.values(currentData).every(
      (value) => value !== "" && value !== null && value !== undefined
    );

    if (isAllErrorObjectsEmpty && hasAllValues) {
      setFormData({ ...formData, ...currentData });
      navigate("/react-med-concepts/siteinfo");
    }
  };


  return (
    <form onSubmit={onSubmit}>
    <ProgressBar name="Leadership Contacts" step={3}/>
    <div className="bg-white rounded-md p-6">
      <h2 className="my-4 text-xl">Contact Information</h2>
        <div className="border border-gray-200 rounded p-3 mb-4">

      <Step3SubComponent cheifName="Chief Executive Officer (CEO)" flow={"CEO"} 
      onChange={onChangeHandler} onBlur={onBlurHandler} data={currentData} 
      onChangeCheckboxHandler={onChangeCheckboxHandler}
      errors={errors}/>
      </div>

        <div className="border border-gray-200 rounded p-3 mb-4">

      <Step3SubComponent cheifName="Director of Quality" flow={"DQ"} 
      onChange={onChangeHandler} onBlur={onBlurHandler} 
      data={currentData} 
      onChangeCheckboxHandler={onChangeCheckboxHandler}
      errors={errors}
      />
      </div>
        <div className="border border-gray-200 rounded p-3 mb-4">
      <Step3SubComponent cheifName="Invoicing Contact" flow={"IC"} 
      onChange={onChangeHandler} onBlur={onBlurHandler} 
      data={currentData} 
      onChangeCheckboxHandler={onChangeCheckboxHandler}
      errors={errors}/>

      <h4 className="my-4 text-lg">Billing Address</h4>
      <CustomInput label="Street Address" className="flex-1" feildName="streetaddress" value={currentData["streetaddress"] || ""} 
      onChange={onChangeHandler} onBlur={onBlurHandler} errors={errors}/>
      <div className="flex items-center">
  <div className="flex-1 mr-2">
    <CustomInput
      label="City"
      feildName="city"
      value={currentData["city"] || ""}
      onChange={onChangeHandler} onBlur={onBlurHandler} errors={errors}
    />
  </div>

  <div className="flex-1 mr-2">
    <label htmlFor="countries" className="block mb-2 text-sm font-medium text-heading">
      State
    </label>

    <select id="countries" name="states" className="w-full h-10 px-3 border border-gray-300 rounded-md shadow-sm" onChange={onChangeHandler}> 
      <option value="" selected>Choose a state</option>
  {Object.entries(stateList).map(([code, name]) => (
    <option key={code} value={currentData["states"] === code}>
      {name}
    </option>
  ))}
    </select>
  </div>

  <div className="flex-1">
    <CustomInput label="Zip Code" feildName="zipcode" value={currentData["zipcode"] || ""} onChange={onChangeHandler} onBlur={onBlurHandler} errors={errors}
    />
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

export default Step3;

function Step3SubComponent(props){
    return (<>
           <h4 className="my-4 text-lg">{props.cheifName}</h4> 
        <input type="checkbox" name={`sameasprimaryfor_${props.flow}`} onChange={props.onChangeCheckboxHandler}/>
        <span className="mx-3 text-base">Same as Primary Contact entered in Step 1</span>
     <div className="flex">
                <CustomInput label="First Name" feildName={`firstname_${props.flow}`} 
                value={props.data[`firstname_${props.flow}`]} className="flex-1" 
                onChange={props.onChange} onBlur={props.onBlur}
                errors={props.errors}/>
                <CustomInput label="Last Name" feildName={`lastname_${props.flow}`} 
                value={props.data[`lastname_${props.flow}`]} className="flex-1" 
                onChange={props.onChange} onBlur={props.onBlur}
                errors={props.errors}/>
            </div>
        <CustomInput label="Phone" feildName={`phone_${props.flow}`} 
        value={props.data[`phone_${props.flow}`]} onChange={props.onChange} 
        onBlur={props.onBlur}
        errors={props.errors}/>
            <CustomInput label="Email" feildName={`email_${props.flow}`} 
            value={props.data[`email_${props.flow}`]} onChange={props.onChange} 
            onBlur={props.onBlur} errors={props.errors}/>
      </>
    )
}

import { useContext, useState } from "react";
import { FormContext } from "../context/FormContext";
import { useNavigate } from "react-router-dom";
import CustomInput from "../components/CustomInput";
import ProgressBar from "../components/ProgressBar";
import { regexList, errorInfo } from "../constants";

const Step1 = () => {
  const { formData, setFormData } = useContext(FormContext);
  const [currentData, setCurrentData] = useState(formData);
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const onSubmit = (e) => {
    e.preventDefault();
    const isAllErrorObjectsEmpty = Object.values(errors).every(
      (value) =>
        value && typeof value === "object" && Object.keys(value).length === 0
    );
    let allow = true, errObj = {};
    for(let obj in currentData){
      if(currentData[obj] === ''){
        allow = false;
        errObj[obj] = {}
        errObj[obj]['message'] = errorInfo[obj]
      }
    }
    if(!allow){
      setErrors(errObj)
    }
    if (isAllErrorObjectsEmpty && allow) {
      setFormData({ ...formData, ...currentData });
      navigate("/react-med-concepts/facilitydetails");
    }
  };

  const onChangeHandler = (e) => {
    setCurrentData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const onBlurHandler = (e) => {
    let regexType = {
      legalentityname: "onlyLetters",
      dbaname: "onlyLetters",
      firstname: "onlyLetters",
      lastname: "onlyLetters",
      title: "alphaNumeric",
      workphone: "onlyNumbers",
      cellphone: "onlyNumbers",
      email: "email",
    };
    let currValue = e.target.value;
    let errObj = {};
    if (!regexList[regexType[e.target.name]].test(currValue)) {
      errObj["message"] = errorInfo[e.target.name];
    }
    setErrors((prev) => ({
      ...prev,
      [e.target.name]: errObj,
    }));
  };

  return (
    <form onSubmit={onSubmit}>
      <ProgressBar name="New DNV Quote Request" step={1} />
      <div className="bg-white rounded-md p-6">
        <h2 className="my-4 text-xl">Identify Healthcare Organization</h2>
        <CustomInput
          label="Legal Entity Name"
          feildName="legalentityname"
          value={currentData["legalentityname"] || ""}
          onChange={onChangeHandler}
          onBlur={onBlurHandler}
          errors={errors}
        />
        <CustomInput
          label="Doing Business As (d/b/a) Name"
          feildName="dbaname"
          value={currentData["dbaname"] || ""}
          onBlur={onBlurHandler}
          errors={errors}
          onChange={onChangeHandler}
        />
        <input
          type="checkbox"
          name="sameaslegalentityName"
          onChange={(e) => {
            setCurrentData((prev) => ({
              ...prev,
              ["dbaname"]:
                e.target.checked && !errors["legalentityname"].message
                  ? prev["legalentityname"]
                  : "",
              ["sameaslegalentityName"]: e.target.checked,
            }));
            setErrors((prev) => ({
              ...prev,
              ["dbaname"]:
                e.target.checked && !errors["legalentityname"].message
                  ? {}
                  : prev["dbaname"],
            }));
          }}
        />
        <span className="mx-3 text-base">Same as Legal Entity Name</span>

        <h2 className="mt-4 mb-1 text-xl">Primary Contact Information</h2>
        <p>
          Primary contact receives all DNV Healthcare official communications
        </p>

        <div className="flex">
          <CustomInput
            label="First Name"
            feildName="firstname"
            value={currentData["firstname"] || ""}
            className="flex-1"
            onBlur={onBlurHandler}
            errors={errors}
            onChange={onChangeHandler}
          />
          <CustomInput
            label="Last Name"
            feildName="lastname"
            value={currentData["lastname"] || ""}
            className="flex-1"
            onBlur={onBlurHandler}
            errors={errors}
            onChange={onChangeHandler}
          />
        </div>
        <div className="">
          <CustomInput
            label="Title"
            value={currentData["title"] || ""}
            feildName="title"
            onBlur={onBlurHandler}
            errors={errors}
            onChange={onChangeHandler}
          />
        </div>
        <div className="flex">
          <CustomInput
            label="Work Phone"
            feildName="workphone"
            value={currentData["workphone"] || ""}
            className="flex-1"
            onBlur={onBlurHandler}
            errors={errors}
            onChange={onChangeHandler}
          />
          <CustomInput
            label="Cell Phone"
            feildName="cellphone"
            value={currentData["cellphone"] || ""}
            className="flex-1"
            onBlur={onBlurHandler}
            errors={errors}
            onChange={onChangeHandler}
          />
        </div>

        <div className="">
          <CustomInput
            label="Email"
            value={currentData["email"] || ""}
            feildName="email"
            onBlur={onBlurHandler}
            errors={errors}
            onChange={onChangeHandler}
          />
        </div>

        <button class="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
          Send Verification Email
        </button>
      </div>
      <div className="flex justify-between px-1 py-4">
        <span className="text-xl">
          <button type="button" className="bg-transparent hover:bg-brand text-blue-700 font-semibold hover:text-white py-2 px-4 border border-brand hover:border-transparent rounded">
            {"Exit"}
          </button>
        </span>
        <div className="text-base flex items-center">
          <button type="button" className="bg-brand hover:bg-white hover:text-brand hover:border text-white font-bold py-2 px-4  mr-3 rounded">
            Save
          </button>
          <button
            type="submit"
            className="bg-brand hover:bg-white hover:text-brand hover:border text-white font-bold py-2 px-4 rounded"
          >
            Continue
          </button>
        </div>
      </div>
    </form>
  );
};

export default Step1;

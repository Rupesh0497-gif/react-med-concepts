import { BrowserRouter, Routes, Route } from "react-router-dom";
import { FormProvider } from "./context/FormContext";
import Header from './components/Header';
import React, { Suspense } from "react";
import { FaRegUser } from "react-icons/fa";

const Step1 = React.lazy(() => import("./steps/Step1"));
const Step2 = React.lazy(() => import("./steps/Step2"));
const Step3 = React.lazy(() => import("./steps/Step3"));
const Step4 = React.lazy(() => import("./steps/Step4"));
const Step5 = React.lazy(() => import("./steps/Step5"));
const Review =  React.lazy(() => import("./steps/Review"));




function App() {
  return (
    <div className="bg-gray-100 h-auto min-h-screen w-full">
    <Header/>
    <div className="container mx-auto mt-5 p-5">
    <FormProvider>
      <BrowserRouter>  
       <Suspense fallback={<div>Loading Page…</div>}> 
        <Routes>
          <Route path="/" element={<Step1 />} />
          <Route path="/step/1" element={<Step1 />} />
          <Route path="/step/2" element={<Step2 />} />
          <Route path="/step/3" element={<Step3 />} />
          <Route path="/step/4" element={<Step4 />} />
          <Route path="/step/5" element={<Step5 />} />
          <Route path="/review" element={<Review />} />
        </Routes>
        </Suspense>  
      </BrowserRouter>
    </FormProvider>
     <button
            type="submit"
            className="bg-brand hover:bg-brand text-white font-bold py-2 px-4 fixed flex items-center rounded-3xl bottom-10 right-10"
          > <FaRegUser />
            <span className="ml-2 hidden md:block">Support Chat</span>
          </button>
    </div>
    </div>
  );
}

export default App;

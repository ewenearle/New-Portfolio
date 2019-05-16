import React from 'react';
import Profile from './Profile';
import RelevantEducation from './RelevantEducation';
import RelevantEmployment from './RelevantEmployment'; 
import AdditionalEmployment from './AdditionalEmployment'; 
import AdditionalTraining from './AdditionalTraining'; 

const Resume = () => {
  return (
    <div>
      <Profile />
      <RelevantEducation />
      <RelevantEmployment />
      <AdditionalEmployment />
      <AdditionalTraining />
    </div>
  );
};

export default Resume;
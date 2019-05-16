import React, { Fragment } from 'react';
import Profile from './Profile';
import RelevantEducation from './RelevantEducation';
import RelevantEmployment from './RelevantEmployment'; 
import AdditionalEmployment from './AdditionalEmployment'; 
import AdditionalTraining from './AdditionalTraining'; 

const Resume = () => {
  return (
    <Fragment>
      <Profile />
      <RelevantEducation />
      <RelevantEmployment />
      <AdditionalEmployment />
      <AdditionalTraining />
    </Fragment>
  );
};

export default Resume;
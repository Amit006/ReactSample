import React from 'react';
import InputSelection from './Selection';
import  MultipleSelectBox  from '../component/MultipleSelectBox';

function showMessage(v){
    console.log(' Message: ', v);
}

function InputSettingsGroups({ key=0, columns='Columns'}) {
  console.group(' --: InputSettingsGroups :-- ');
  console.log(' key: ', key, ' columns: ', columns);
  console.groupEnd();
    return (
      <div className="container">
            <div className="row">
            <InputSelection className="col-md-6"  onClick={()=>{  return showMessage(columns)} }/>
            <InputSelection className="col-md-6"  onClick={()=>{  return showMessage(columns)} } />
            </div>
            {/* <div className="row"> */}
              {/* <div className="col-lg-12"> */}
              <MultipleSelectBox />
              {/* </div> */}
            {/* </div> */}
      </div>
    );
  }

  export default InputSettingsGroups;
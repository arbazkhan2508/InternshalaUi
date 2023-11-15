import React from 'react'
import { HiOutlinePencil } from "react-icons/hi";
import { RiDeleteBinLine } from "react-icons/ri";
import { AiOutlinePlus } from "react-icons/ai";
import { useState } from 'react';
import style from "@/app/student/resume/style.module.css"
import { asyncaddResponsibility,asyncfindResponsibility,asyncupdateresp,asyncdeleteresp,asyncdeleteskill } from "@/store/Actions/studentresumeActions"
import { useDispatch , useSelector } from 'react-redux';
import { AiOutlineClose } from "react-icons/ai"
import { useEffect } from 'react';
import { asyncgetresume } from "@/store/Actions/studentActions"


const page = () => {
  const { student,resume, isAuthenticated} = useSelector((state) => state.studentReducers); 
  const { findResponsibility} = useSelector((state) => state.studentReducers); 
   const dispatch = useDispatch();
   const [showResponsibility, setShowResponsibility] = useState(false);
   const [Responsibility, setResponsibility] = useState([]);
   const [updateResponsibilityData, setUpdateResponsibilityData] = useState('');
  const [functionCalled, setFunctionCalled] = useState(false);


   useEffect(()=>{
    if (student && student.resume) {
      setResponsibility(student.resume.responsibilities);
    }
  },[student])

       
  useEffect(() => {
    if (functionCalled) {
      dispatch(asyncgetresume());
      dispatch(asyncgetresume());
      setFunctionCalled(false);
    }
  }, [functionCalled]);



    

  return (
    <>

         <div className={style.rsm}>
            <div className={style.edu}>
              <div className={style.l_edu}>
                <h4>POSITIONS OF RESPONSIBILITY</h4>
              </div>
              <div className={style.r_edu}>
              {Responsibility && (
        <div className={style.rows}>
            {Responsibility.map((el, i) => {
              
              return (
                  
                  <div key={i} className={style.row_container}>
                          <div className={style.row}>
                              <h6>{el.description}</h6>
                          </div>
                          
                  </div>
              );
            })}

    
      </div>
               )}
              
                
              </div>
            </div>
         </div>
    </>
  )
}

export default page
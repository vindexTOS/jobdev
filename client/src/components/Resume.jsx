import React from "react";
import { useState } from "react";
const Resume = ({ data }) => {

  return (
    <div className=" border-solid-2  border-black">
      <div className=" border-b-2 solid border-black">
        <h1 className="text-3xl">Personal Information</h1>
        <div>Job: {data.position}</div>
        <div>firstName: {data.firstName}</div>
        <div>lastName: {data.lastName}</div>
        <div>
          age:{data.age}
        </div>
        <div>email:{data.email}</div>
        <div>address:{data.address}</div>
      </div>
      {data.experience.map((elem) => {
        return (
          <div key={elem.compay} className=" border-b-2 solid border-black">
            <h1 className="text-3xl">Experince</h1>
            <div>company:{elem.compay}</div>
            <div>position:{elem.positon}</div>
            <div>description:{elem.desc}</div>
            <div>date:{elem.workingDate}</div>
          </div>
        );
      })}
            {data.experience.map((elem) => {
        return (
          <div key={elem.school} className=" border-b-2 solid border-black">
            <h1 className="text-3xl">Education</h1>
            <div>school:{elem.school}</div>
            <div>degrre:{elem.degrre}</div>
            <div>description:{elem.desc}</div>
            <div>date:{elem.eduDate}</div>
          </div>
        );
      })}
    </div>
  );
};

export default Resume;

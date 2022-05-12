import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

export default function SpecificUser() {
  const [specificEmployee, setSpecificEmployee] = useState(null);
  const [isLoading, setLoading] = useState(true);

  let { id } = useParams();

  useEffect(() => {
    axios(`http://dummy.restapiexample.com/api/v1/employee/${id}`)
      .then((res) => {
        setSpecificEmployee(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <h3>{specificEmployee.data.employee_name}</h3>
      <p>Lön: {specificEmployee.data.employee_salary}</p>
      <p>Ålder: {specificEmployee.data.employee_age}</p>
    </div>
  );
}

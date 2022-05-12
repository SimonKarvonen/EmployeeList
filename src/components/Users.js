import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function Users() {
  const [employeeList, setEmployeeList] = useState(null);
  const [isLoading, setLoading] = useState(true);

  let navigate = useNavigate();

  useEffect(() => {
    axios('http://dummy.restapiexample.com/api/v1/employees')
      .then((res) => {
        setEmployeeList(res.data);
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
    <div>
      {employeeList.data.map((employee) => (
        <div
          key={employee.id}
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <h3>{employee.employee_name}</h3>
          <button
            onClick={() => {
              navigate(`employee/${employee.id}`);
            }}
            style={{ marginLeft: '10px' }}
          >
            More
          </button>
        </div>
      ))}
    </div>
  );
}

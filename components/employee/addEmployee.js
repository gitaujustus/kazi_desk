import React, { useState } from 'react';
import { MdClose, MdFileUpload } from 'react-icons/md';

const AddEmployee = ({ onClose }) => {
  const [formData, setFormData] = useState({
    employeeId: '',
    salutation: '',
    employeeName: '',
    employeeEmail: '',
    dateOfBirth: '',
    designation: '',
    department: '',
    profilePicture: null,
    country: '',
    code: '',
    phone: '',
    gender: '',
    joiningDate: '',
    reportingTo: '',
    language: '',
    userRole: '',
    address: '',
    about: '',
    loginAllowed: false,
    emailNotifications: false,
    hourlyRate: '',
    slackMemberID: '',
    skills: [],
    probationEndDate: '',
    noticePeriodStartDate: '',
    noticePeriodEndDate: '',
    employmentType: '',
    maritalStatus: '',
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    // Handle form submission logic here
  };

  return (
    <form onSubmit={handleSubmit}>
        <h1>Add Employee</h1>

        <main>
            <h2>Account Details</h2>
            <section>
                <section className='flex'>
                    <div className='flex'>
                        <div>
                            <label htmlFor="employeeId">Employee ID</label>
                            <input type="text" id="employeeId" name="employeeId" value={formData.employeeId} onChange={handleChange} placeholder='1' />
                        </div>
                        <div>
                            <label htmlFor="salutation">Salutation</label>
                            <select id="salutation" name="salutation" value={formData.salutation} onChange={handleChange}>
                                <option value="" selected disabled>-- Select --</option>
                                <option value="Mr">Mr</option>
                                <option value="Mrs">Mrs</option>
                                <option value="Ms">Ms</option>
                            </select>
                        </div>
                        <div>
                            <label htmlFor="employeeName">Employee Name</label>
                            <input type="text" id="employeeName" name="employeeName" value={formData.employeeName} onChange={handleChange} placeholder='e.g John Doe' />
                        </div>
                        <div>
                            <label htmlFor="employeeEmail">Employee Email</label>
                            <input type="email" id="employeeEmail" name="employeeEmail" value={formData.employeeEmail} onChange={handleChange} placeholder='e.g johndoe@example.com' />
                        </div>
                    </div>

                    <div className='flex'>
                        <div>
                            <label htmlFor="dateOfBirth">Date of Birth</label>
                            <input type="date" id="dateOfBirth" name="dateOfBirth" value={formData.dateOfBirth} onChange={handleChange} placeholder='Select Date' />
                        </div>
                        <div>
                        <label htmlFor="designation">Designation</label>
                            <select id="designation" name="designation" value={formData.designation} onChange={handleChange}>
                                <option value="" selected disabled>-- Select --</option>
                                <option value="Mr">Mr</option>
                                <option value="Mrs">Mrs</option>
                                <option value="Ms">Ms</option>
                            </select>
                        </div>
                        <div>
                        <label htmlFor="department">Department</label>
                            <select id="department" name="department" value={formData.department} onChange={handleChange}>
                                <option value="" selected disabled>-- Select --</option>
                                <option value="Mr">Mr</option>
                                <option value="Mrs">Mrs</option>
                                <option value="Ms">Ms</option>
                            </select>
                        </div>
                    </div>
                </section>
                <section>
                    <div>
                        <label htmlFor="profilePicture">Profile Picture</label>
                        <div className='flex'>
                            <input type="file" id="profilePicture" name="profilePicture" value={formData.profilePicture} onChange={handleChange} />
                            <MdFileUpload />
                        </div>
                    </div>
                </section>
            </section>
        </main>

    </form>
  );
};

export default AddEmployee;
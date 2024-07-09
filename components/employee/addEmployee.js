import React, { useState } from 'react';
import { MdClose, MdFileUpload } from 'react-icons/md';

const AddEmployee = ({ onClose }) => {
  const [formData, setFormData] = useState({
    employeeId: '',
    employeeName: '',
    employeeEmail: '',
    dateOfBirth: '',
    designation: '',
    department: '',
    country: '',
    phoneNumber: '',
    gender: '',
    joiningDate: '',
    reportingTo: '',
    language: '',
    userRole: '',
    address: '',
    about: '',
    legalAdvocate: false,
    backgroundVerification: false,
    dutyTime: '',
    shiftName: '',
    noticePerodStartDate: '',
    noticePerodEndDate: '',
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
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center p-4">
      <div className="bg-white rounded-lg shadow-xl w-full max-w-2xl max-h-[90vh] overflow-y-auto">
        <div className="p-6">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-2xl font-bold">Add Employee</h2>
            <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
              <MdClose size={24} />
            </button>
          </div>
          
          <form onSubmit={handleSubmit}>
            <div className="space-y-6">
              <div className="border-b pb-4">
                <h3 className="text-lg font-semibold mb-2">Account Details</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Employee ID*</label>
                    <input type="text" name="employeeId" value={formData.employeeId} onChange={handleChange} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" required />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Employee Name*</label>
                    <input type="text" name="employeeName" value={formData.employeeName} onChange={handleChange} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" required />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Employee Email*</label>
                    <input type="email" name="employeeEmail" value={formData.employeeEmail} onChange={handleChange} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" required />
                  </div>
                  <div className="flex items-center justify-center border-2 border-dashed border-gray-300 px-6 py-4">
                    <div className="space-y-1 text-center">
                      <MdFileUpload className="mx-auto h-12 w-12 text-gray-400" />
                      <div className="flex text-sm text-gray-600">
                        <label htmlFor="file-upload" className="relative cursor-pointer rounded-md bg-white font-medium text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 hover:text-indigo-500">
                          <span>Upload a file</span>
                          <input id="file-upload" name="file-upload" type="file" className="sr-only" />
                        </label>
                      </div>
                      <p className="text-xs text-gray-500">PNG, JPG, GIF up to 10MB</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700">Date of Birth</label>
                  <input type="date" name="dateOfBirth" value={formData.dateOfBirth} onChange={handleChange} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Designation*</label>
                  <select name="designation" value={formData.designation} onChange={handleChange} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" required>
                    <option value="">Select Designation</option>
                    {/* Add designation options */}
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Department*</label>
                  <select name="department" value={formData.department} onChange={handleChange} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" required>
                    <option value="">Select Department</option>
                    {/* Add department options */}
                  </select>
                </div>
              </div>
              
              {/* Add more form fields here following the same pattern */}
              
              <div className="border-t pt-4">
                <h3 className="text-lg font-semibold mb-2">Other Details</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex items-center">
                    <input type="checkbox" name="legalAdvocate" checked={formData.legalAdvocate} onChange={handleChange} className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded" />
                    <label htmlFor="legalAdvocate" className="ml-2 block text-sm text-gray-900">Legal Advocate</label>
                  </div>
                  <div className="flex items-center">
                    <input type="checkbox" name="backgroundVerification" checked={formData.backgroundVerification} onChange={handleChange} className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded" />
                    <label htmlFor="backgroundVerification" className="ml-2 block text-sm text-gray-900">Background Verification</label>
                  </div>
                </div>
              </div>
              
              <div className="flex justify-end space-x-2">
                <button type="button" onClick={onClose} className="px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                  Cancel
                </button>
                <button type="submit" className="px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                  Save
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddEmployee;
import React, { useState } from 'react';
import { protectedApiPostAdmin } from '../../apis/api';
import { toast } from 'react-toastify';

const CommissionTargetForm = () => {
  const [formData, setFormData] = useState({
    email: '',
    channelName: '',
    customTargetAmount: '',
    customCommissionRate: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async(e) => {
    e.preventDefault(); // Prevent page reload
    
    try {
        console.log("abhi")
        const resp = await protectedApiPostAdmin("admin/referral/addCustomTarget", formData);

        if (resp && resp.status === 200) {
            // Success case
            console.log(resp.data); // Display referral code
            toast.success(`${resp.data}`); // Display success message
        } else {
            // Handle non-200 status codes
            toast.error(`Error: ${resp.data}`);
        }

        // Reset form data and close the modal
        setFormData({
            email: '',
            channelName: '',
            customTargetAmount: '',
            customCommissionRate: '',
        });
       
    } catch (error) {
        // Handle any errors during the API request
        toast.error(`Error: ${error.message || 'An error occurred while generating referral code'}`);
    }
  };

  return (
    <div className="flex justify-center items-center h-full w-full mt-10">
      <form 
        onSubmit={handleSubmit} 
        className="bg-white p-8 rounded-lg shadow-md w-full h-full max-w-7xl"
      >
        <h2 className="text-3xl font-bold mb-8 text-center">New Commission Target</h2>
        
        <div className="grid grid-cols-2 gap-8">
          {/* Email Field */}
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              placeholder="Enter email"
              required
            />
          </div>
          
          {/* Channel Name Field */}
          <div>
            <label htmlFor="channelName" className="block text-sm font-medium text-gray-700">Channel Name</label>
            <input
              type="text"
              id="channelName"
              name="channelName"
              value={formData.channelName}
              onChange={handleChange}
              className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              placeholder="Enter channel name"
              required
            />
          </div>

          {/* Custom Target Amount Field */}
          <div>
            <label htmlFor="targetAmount" className="block text-sm font-medium text-gray-700">Custom Target Amount</label>
            <input
              type="number"
              id="customTargetAmount"
              name="customTargetAmount"
              value={formData.customTargetAmount}
              onChange={handleChange}
              className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              placeholder="Enter target amount"
              required
            />
          </div>

          <div>
            <label htmlFor="commissionRate" className="block text-sm font-medium text-gray-700">Custom Commission Rate</label>
            <input
              type="number"
              id="customCommissionRate"
              name="customCommissionRate"
              value={formData.customCommissionRate}
              onChange={handleChange}
              className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              placeholder="Enter commission rate"
              required
            />
          </div>
        </div>

        {/* Submit Button */}
        <div className="mt-8 flex justify-center">
          <button
            type="submit"
            className="bg-indigo-500 hover:bg-indigo-600 text-white py-3 px-8 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Add Custom Target
          </button>
        </div>
      </form>
    </div>
  );
};

export default CommissionTargetForm;

/**
 * A form component for adding or updating user details. It includes fields for user information
 * and provides functionality for form submission and user deletion.
 *
 */

import { useState } from "react";
import { usePost } from "../hooks/usePost";
import URLs from "../utils/URLs";
import { toast } from "react-toastify";
import Loader from "./Loader";
import useDelete from "../hooks/useDelete";
import PropTypes from "prop-types";

/**
 *
 * @prop {Function} onClose - Function to close the form modal.
 * @prop {Object} [userDetails] - Details of the user to be edited, if any. Includes `id`, `name`, `username`, `email`, and `phone`.
 * @prop {string} action - Action to display on the submit button and determine if the delete button should be shown ("Add" or "Update").
 * @returns {JSX.Element} The rendered form component.
 */

const Form = ({ onClose, userDetails, action }) => {
  const { deleteRequest } = useDelete(URLs.deleteUser);
  const { isLoading, postRequest, putRequest } = usePost(URLs.postUser);
  const [formData, setFormData] = useState({
    name: userDetails?.name || "",
    username: userDetails?.username || "",
    email: userDetails?.email || "",
    phone: userDetails?.phone || "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    let res, message;
    if (action === "Update") {
      res = await putRequest(formData);
      message = "User Updated Success";
    } else if (action === "Add") {
      res = await postRequest(formData);
      message = "User Created Success";
    }
    if (res.ok) {
      toast.success(message);
      onClose();
    }
  };

  const handleDelete = async (e) => {
    e.preventDefault();
    const res = await deleteRequest(userDetails?.id);
    console.log(res);
    if (res.ok) {
      toast.success("User Deleted Successfully");
      onClose();
    }
  };
  return (
    <div className="p-4 md:p-5">
      {isLoading && <Loader />}
      <form className="space-y-4" onSubmit={handleSubmit}>
        <div>
          <label
            htmlFor="name"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Your name
          </label>
          <input
            type="name"
            name="name"
            id="name"
            value={formData.name}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
            placeholder="John Doe"
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label
            htmlFor="username"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Your username
          </label>
          <input
            type="username"
            name="username"
            id="username"
            value={formData.username}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
            placeholder="John Doe"
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label
            htmlFor="email"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Your email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            value={formData.email}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
            placeholder="name@company.com"
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label
            htmlFor="phone"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Your phone
          </label>
          <input
            type="phone"
            name="phone"
            id="phone"
            value={formData.phone}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
            placeholder="+91987654321"
            onChange={handleChange}
            required
          />
        </div>
        <button
          type="submit"
          className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          {action}
        </button>
        <button
          onClick={handleDelete}
          className={`w-full text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800 ${
            action === "Add" && "hidden"
          } `}
        >
          Delete
        </button>
      </form>
    </div>
  );
};

export default Form;

Form.propTypes = {
  onClose: () => {},
  userDetails: {
    id: PropTypes.string,
    name: PropTypes.string,
    username: PropTypes.string,
    email: PropTypes.string,
    phone: PropTypes.string,
  },
  action: PropTypes.string,
};

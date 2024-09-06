/**
 * A modal component for user-related actions (e.g., adding or editing a user).
 *
 */

import Form from "./Form";
import PropTypes from "prop-types";

/**
 *
 * @prop {boolean} isOpen - If true, the modal is visible. If false, the modal is hidden.
 * @prop {Function} onClose - Function to close the modal.
 * @prop {string} action - Action to display in the modal header (e.g., "Add" or "Edit").
 * @prop {Object} [userDetails] - Details of the user to be edited or added.
 * @returns {JSX.Element} The rendered form component.
 */

const Modal = ({ isOpen, onClose, action, userDetails }) => {
  // console.log(userDetails);
  if (!isOpen) return null;
  return (
    <div
      id="authentication-modal"
      tabIndex="-1"
      aria-hidden="true"
      className={`fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full ${
        isOpen ? "flex bg-opacity-35 bg-gray-900 shadow-2xl" : "hidden"
      }`}
    >
      <div className="relative p-4 w-full max-w-md max-h-full bg-white dark:bg-gray-800 rounded-lg shadow-lg">
        <div className="flex items-center justify-between p-4 md:p-5 border-b dark:border-gray-600">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
            {`${action} User`}
          </h3>
          <button
            type="button"
            className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
            onClick={onClose}
          >
            <svg
              className="w-3 h-3"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
              />
            </svg>
            <span className="sr-only">Close modal</span>
          </button>
        </div>
        <div className="p-4 md:p-5">
          <Form onClose={onClose} userDetails={userDetails} action={action} />
        </div>
      </div>
    </div>
  );
};

Modal.propTypes = {
  onClose: () => {},
  userDetails: () => {},
  action: PropTypes.string,
  isOpen: () => {},
};

export default Modal;

/**
 * A row component displaying user information in a table. It includes an "Edit" link
 * that opens a modal for updating user details.
 *
 * @example
 * <UserRow
 *   id={1}
 *   name="John Doe"
 *   username="johndoe"
 *   email="john@example.com"
 *   phone="123-456-7890"
 * />
 *
 * @description
 * This component displays a single row in a user table, including the user's name, username,
 * email, and phone number. The row also includes an "Edit" link that triggers the modal
 * for updating user information.
 */

import Modal from "./Modal";
import { useState } from "react";
import PropTypes from "prop-types";

/**
 * @UserRow
 * @prop {string} name - The name of the user.
 * @prop {string} username - The username of the user.
 * @prop {string} email - The email address of the user.
 * @prop {string} phone - The phone number of the user.
 * @prop {number} id - The unique identifier for the user.
 *
 * @returns {JSX.Element} The rendered table row component.
 */

const UserRow = ({ name, username, email, phone, id }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);
  return (
    <>
      <Modal
        isOpen={isModalOpen}
        onClose={closeModal}
        action={"Update"}
        userDetails={{ name, username, email, phone, id }}
      />
      <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
        <th
          scope="row"
          className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
        >
          {name}
        </th>
        <td className="px-6 py-4">{username}</td>
        <td className="px-6 py-4">{email}</td>
        <td className="px-6 py-4">{phone}</td>
        <td className="px-6 py-4 text-right">
          <a
            href="#"
            onClick={openModal}
            className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
          >
            Edit
          </a>
        </td>
      </tr>
    </>
  );
};

UserRow.propTypes = {
  id: PropTypes.number,
  name: PropTypes.string,
  username: PropTypes.string,
  email: PropTypes.string,
  phone: PropTypes.string,
};

export default UserRow;

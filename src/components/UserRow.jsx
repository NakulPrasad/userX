import Modal from "./Modal";
import { useState } from "react";

const UserRow = ({ name, username, email, phone }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);
  return (
    <>
      <Modal
        isOpen={isModalOpen}
        onClose={closeModal}
        title={"Edit User"}
        userDetails={{ name, username, email, phone }}
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

export default UserRow;

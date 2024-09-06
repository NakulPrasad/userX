/**
 * The main application component for managing users.
 * It uses a modal for adding users and a table to display user data.
 *
 */

import useUser from "./hooks/useUser";
import UserRow from "./components/UserRow";
import Loader from "./components/Loader";
import Modal from "./components/Modal";
import { useState } from "react";

/**
 * @App
 * @returns {JSX.Element} The rendered component.
 *
 * Hooks:
 * - useUser: A custom hook that fetches and returns the list of users along with the loading state.
 *
 * Internal State:
 * - isModalOpen (boolean): Controls the visibility of the modal.
 *
 * Functions:
 * - openModal: Function to open the modal by setting `isModalOpen` to `true`.
 * - closeModal: Function to close the modal by setting `isModalOpen` to `false`.
 *
 * Dependencies:
 * - Modal: A reusable modal component to handle user-related actions.
 * - UserRow: A row component that renders user information inside the table.
 * - Loader: A loader component that shows while data is being fetched.
 */

const App = () => {
  const [users, loading] = useUser();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);
  return (
    <section id="home" className="h-screen grid grid-rows-6 px-4">
      <Modal isOpen={isModalOpen} onClose={closeModal} action={"Add"} />
      <div className="flex justify-center items-center">USER MANAGEMENT</div>
      {loading && <Loader />}
      <div className="row-span-5 relative overflow-x-auto shadow-md sm:rounded-lg">
        <div>
          <button className="cta-btn mb-2" onClick={openModal}>
            Add User
          </button>
        </div>
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                Name
              </th>
              <th scope="col" className="px-6 py-3">
                Username
              </th>
              <th scope="col" className="px-6 py-3">
                Email
              </th>
              <th scope="col" className="px-6 py-3">
                Phone
              </th>
              <th scope="col" className="px-6 py-3">
                <span className="sr-only">Edit</span>
              </th>
            </tr>
          </thead>
          <tbody>
            {!loading &&
              users.map((user) => (
                <UserRow
                  key={user.id}
                  id={user.id}
                  name={user.name}
                  username={user.username}
                  email={user.email}
                  phone={user.phone}
                />
              ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default App;

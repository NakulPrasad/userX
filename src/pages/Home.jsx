import { useState } from "react";
import UserRow from "../components/UserRow";
import Loader from "../components/Loader";
import Modal from "../components/Modal";

const Home = ({ users, loading }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);
  return (
    <section id="home" className="h-screen grid grid-rows-6 px-4">
      <div className="flex justify-center items-center">USER MANAGEMENT</div>
      {loading && <Loader />}
      <div className="row-span-5 relative overflow-x-auto shadow-md sm:rounded-lg">
        <div>
          <button className="cta-btn mb-2" onClick={openModal}>
            Add User
          </button>
          <Modal isOpen={isModalOpen} onClose={closeModal} title={"Add User"} />
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

export default Home;

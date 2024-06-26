import { FaMapMarkerAlt, FaEnvelope, FaPhone } from "react-icons/fa";

const Contact = () => {
  return (
    <div className="bg-gray-100 p-8 rounded-lg shadow-md ">
      <h2 className="text-xl font-bold mb-4">Hubungi Kami</h2>
      <div className="flex flex-col space-y-2">
        <div className="flex items-center">
          <FaMapMarkerAlt className="h-5 w-5 text-gray-500 mr-2" />
          <p>Jalan Dakota No. 8A Sukaraja Cicendo Kota Bandung, Indonesia</p>
        </div>
        <div className="flex items-center">
          <FaEnvelope className="h-5 w-5 text-gray-500 mr-2" />
          <p>naditia540@gmail.com</p>
        </div>
        <div className="flex items-center">
          <FaPhone className="h-5 w-5 text-gray-500 mr-2" />
          <p>088809552158</p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
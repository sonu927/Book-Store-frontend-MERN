import React, { useState } from "react";
import { Link } from "react-router-dom";
import { PiBookOpenTextLight } from "react-icons/pi";
import { BiShow, BiUserCircle } from "react-icons/bi";
import { AiOutlineEdit } from "react-icons/ai";
import { BsInfoCircle } from "react-icons/bs";
import { MdOutlineDelete } from "react-icons/md";
import BookModal from "./BookModal";

const BookSingleCard = ({ item }) => {
  const [showModal, setShowModal] = useState(false);
  return (
    <div
      key={item._id}
      className="border-2 border-gray-500 rounded-lg px-4 py-2 m-4 relative hover:shadow-xl"
    >
      <h2 className="absolute top-1 right-2 bg-red-300 rounded-lg px-4 py-1">
        {item.publishYear}
      </h2>
      <h4 className="my-2 mr-4 text-gray-400">{item._id}</h4>
      <div className="flex justify-start items-center gap-x-2">
        <PiBookOpenTextLight className="text-red-300 text-2xl" />
        <h2 className="my-1">{item.title}</h2>
      </div>
      <div className="flex justify-start items-center gap-x-2">
        <BiUserCircle className="text-red-300 text-2xl" />
        <h2 className="my-1">{item.author}</h2>
      </div>
      <div className="flex justify-between items-center gap-x-4 mt-4 p-4 ">
        <BiShow
          className="text-3xl text-blue-800 hover:text-black cursor-pointer"
          onClick={() => setShowModal(true)}
        />
        <Link to={`book/details/${item._id}`}>
          <BsInfoCircle className="text-2xl text-green-800 hover:text-black"></BsInfoCircle>
        </Link>
        <Link to={`book/edit/${item._id}`}>
          <AiOutlineEdit className="text-2xl text-yellow-600 hover:text-black"></AiOutlineEdit>
        </Link>
        <Link to={`book/delete/${item._id}`}>
          <MdOutlineDelete className="text-2xl text-red-600 hover:text-black"></MdOutlineDelete>
        </Link>
      </div>
      {showModal && (
        <BookModal book={item} onClose={() => setShowModal(false)} />
      )}
    </div>
  );
};

export default BookSingleCard;

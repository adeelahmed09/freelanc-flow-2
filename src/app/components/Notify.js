"use client"
import { toast } from 'react-toastify';

const notify = (type, message) => {
    toast[type](message, {
      position: "top-right",
      autoClose: 5000,
      theme: "colored",
    });
  };

export default notify

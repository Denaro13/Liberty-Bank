import React, { useEffect, useState } from "react";
import profileImg from "../assets/images/profileImg.svg";
import { toast } from "react-toastify";
import Image from "./Image";

const ImageUpload = () => {
  const [image, setImage] = useState(profileImg);

  useEffect(() => {
    const storedName = localStorage.getItem("image");
    if (storedName) {
      setImage(storedName);
    }
  }, []);

  const handleImageUpload = (e) => {
    const file = e.target.files?.[0];
    const fileSize = file.size / (1024 * 1024);
    if (fileSize > 5) {
      toast.warning("Image Size Must be Less Than 5MB");
      return;
    }
    if (file) {
      const reader = new FileReader();
      //   console.log(file.size);
      reader.onload = (e) => {
        localStorage.setItem("image", e.target?.result);
        setImage(e.target?.result);
      };
      reader.readAsDataURL(file);
    } else {
      setImage(null);
    }
  };

  return (
    <div className="grid  mb-12 relative w-36 h-36 text-center bg-blue-200 rounded-full">
      <Image image={image} style="w-36 h-36" />

      <label
        htmlFor="image-upload-input"
        className="absolute bottom-0 left-0 cursor-pointer text-white bg-blue-400 rounded px-1 text-sm capitalize hover:bg-blue-500 transition-all"
      >
        <input
          type="file"
          id="image-upload-input"
          accept="image/*"
          onChange={handleImageUpload}
          className="hidden"
        />
        upload image
      </label>
    </div>
  );
};

export default ImageUpload;

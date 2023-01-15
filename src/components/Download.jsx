import React from "react";
import PDF from "./assets/pdf/9_communication_Profile.pdf";
import { FaDownload } from "react-icons/fa";

const Download = () => {
  return (
    <>
      <div className="flex justify-center items-center h-[50vh]">
        <a
          href={PDF}
          download
          className="text-white bg-[#F4AD24] px-4 py-2 rounded-md flex justify-between items-center gap-2"
        >
          Download PDF Company Profile
          <FaDownload size={15} />
        </a>
      </div>
      <div className="bg-[#F4AD24] h-[2px] w-full my-4"></div>
      <button
        type="button"
        className="tracking-wider text-[#F4AD24] mb-7 font-semibold"
        data-bs-dismiss="modal"
      >
        Close{" "}
      </button>
    </>
  );
};

export default Download;

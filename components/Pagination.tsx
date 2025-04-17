"use client";
import React, { useState } from "react";
import { BiSolidLeftArrow } from "react-icons/bi";
import { BiSolidRightArrow } from "react-icons/bi";

interface PaginationProps {
  totalPages: number;
  initialPage?: number;
  onPageChange?: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({
  totalPages,
  initialPage = 1,
  onPageChange,
}) => {
  const [currentPage, setCurrentPage] = useState(initialPage);

  const handlePageChange = (page: number) => {
    // Ensure page is within valid range
    if (page < 1 || page > totalPages) return;

    setCurrentPage(page);

    // Call the callback if provided
    if (onPageChange) {
      onPageChange(page);
    }
  };

  const getPageButtons = () => {
    // For large number of pages, we'd add logic to show ellipses
    // But for this simple version, just show prev, current, next
    const buttons = [];

    // Previous button
    buttons.push(
      <button
        key="prev"
        onClick={() => handlePageChange(currentPage - 1)}
        disabled={currentPage === 1}
        aria-label="Previous page"
      >
        <BiSolidLeftArrow
          className={`w-8 h-8 flex items-center justify-center rounded-md ${
            currentPage === 1
              ? " text-gray-400 "
              : " text-gray-700 hover:bg-gray-300"
          }`}
        />
      </button>
    );

    // Current page button
    buttons.push(
      <button
        key={currentPage}
        className="w-8 h-8 flex items-center justify-center rounded-md bg-black text-white"
        aria-label={`Page ${currentPage}`}
        aria-current="page"
      >
        {currentPage}
      </button>
    );

    // Next button
    buttons.push(
      <button
        key="next"
        onClick={() => handlePageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        aria-label="Next page"
      >
        <BiSolidRightArrow
          className={`w-8 h-8 flex items-center justify-center rounded-md ${
            currentPage === 1
              ? " text-gray-400 "
              : " text-gray-700 hover:bg-gray-300"
          }`}
        />
      </button>
    );

    return buttons;
  };

  return (
    <div className="flex items-center justify-center space-x-2 my-6">
      {getPageButtons()}
    </div>
  );
};

// Example usage
const PaginationExample: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    console.log(`Page changed to ${page}`);
    // Here you would typically fetch data for the new page
  };

  return (
    <div className="flex flex-col items-center">
      <Pagination
        totalPages={10}
        initialPage={1}
        onPageChange={handlePageChange}
      />
    </div>
  );
};

export default PaginationExample;

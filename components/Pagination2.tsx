// pages/index.tsx
import { useState } from "react";
import { IoChevronBack, IoChevronForward } from "react-icons/io5";

import { BiSolidLeftArrow } from "react-icons/bi";
import { BiSolidRightArrow } from "react-icons/bi";

export default function Pagination2() {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 9;

  // Function to determine which page numbers to show
  const getPageNumbers = () => {
    const pageNumbers: (number | string)[] = [];

    if (totalPages <= 7) {
      // If we have 7 or fewer pages, show all
      for (let i = 1; i <= totalPages; i++) {
        pageNumbers.push(i);
      }
    } else {
      // Always show first page
      pageNumbers.push(1);

      // Complex logic for showing pages around the current page
      if (currentPage <= 3) {
        pageNumbers.push(2, 3, 4, "...", totalPages);
      } else if (currentPage >= totalPages - 2) {
        pageNumbers.push(
          "...",
          totalPages - 3,
          totalPages - 2,
          totalPages - 1,
          totalPages
        );
      } else {
        pageNumbers.push(
          "...",
          currentPage - 1,
          currentPage,
          currentPage + 1,
          "...",
          totalPages
        );
      }
    }

    return pageNumbers;
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    // You could also fetch data for the new page here
    console.log(`Fetching data for page ${page}`);
  };

  const pageNumbers = getPageNumbers();

  return (
    <nav
      className="flex justify-center items-center mt-6"
      aria-label="Pagination"
    >
      <ul className="flex items-center space-x-1">
        {/* Previous button */}
        <li>
          <button
            onClick={() => currentPage > 1 && handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
            className={`flex items-center justify-center w-10 h-10 rounded transition-colors ${
              currentPage === 1
                ? "text-gray-400 cursor-not-allowed"
                : "text-gray-700 hover:bg-gray-200"
            }`}
            aria-label="Previous page"
          >
            <BiSolidLeftArrow className="w-5 h-5" />
          </button>
        </li>

        {/* Page numbers */}
        {pageNumbers.map((page, index) => (
          <li key={index}>
            {page === "..." ? (
              <span className="flex items-center justify-center w-10 h-10 text-gray-500">
                ...
              </span>
            ) : (
              <button
                onClick={() =>
                  typeof page === "number" && handlePageChange(page)
                }
                className={`flex items-center justify-center w-10 h-10 rounded transition-colors ${
                  currentPage === page
                    ? "bg-gray-800 text-white font-medium"
                    : "text-gray-700 hover:bg-gray-200"
                }`}
                aria-current={currentPage === page ? "page" : undefined}
                aria-label={`Page ${page}`}
              >
                {page}
              </button>
            )}
          </li>
        ))}

        {/* Next button */}
        <li>
          <button
            onClick={() =>
              currentPage < totalPages && handlePageChange(currentPage + 1)
            }
            disabled={currentPage === totalPages}
            className={`flex items-center justify-center w-10 h-10 rounded transition-colors ${
              currentPage === totalPages
                ? "text-gray-400 cursor-not-allowed"
                : "text-gray-700 hover:bg-gray-200"
            }`}
            aria-label="Next page"
          >
            <BiSolidRightArrow className="w-5 h-5" />
          </button>
        </li>
      </ul>
    </nav>
  );
}

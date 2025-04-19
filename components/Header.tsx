"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Mask from "../public/Mask.png";

import Play from "../public/Play.png";

import { FaBookOpen } from "react-icons/fa";
import { FaPodcast } from "react-icons/fa";
import { FaBoxesStacked } from "react-icons/fa6";
import { PiMicrophoneStageFill } from "react-icons/pi";
import { RiCalendarCheckFill } from "react-icons/ri";

const Navigation: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-black text-white w-full relative py-3 z-0">
      {/* Desktop Navigation */}
      <Image
        src={Mask}
        width={1000}
        className="w-[600px] h-full absolute top-0 -z-0"
        alt=""
      />
      <div className="hidden md:flex items-center justify-between px-4 py-2">
        <div className="inline-flex items-center justify-between gap-44 z-20 ">
          <div className="flex flex-row gap-4">
            <Image src={Play} className="h-12 w-12  top-0 z-10" alt="" />
            <div>
              <p>Listen to ABR Live Radio</p>
              <p className="text-[#9ccc65] font-bold">ON AIR</p>
            </div>
          </div>
          <div className="inline-flex items-center gap-2">
            <RiCalendarCheckFill />
            View Schedules
          </div>
        </div>

        <div className="flex items-center space-x-6">
          <div className="h-5 w-0.5 bg-white" />

          <Link
            href="/schedules"
            className="flex items-center space-x-1 hover:text-gray-300"
          >
            <FaBookOpen className="h-5 w-5" />
            <span>Latest News</span>
          </Link>
          <Link
            href="/schedules"
            className="flex items-center space-x-1 hover:text-gray-300"
          >
            <PiMicrophoneStageFill className="h-5 w-5" />
            <span>New Episode</span>
          </Link>
          <Link
            href="/schedules"
            className="flex items-center space-x-1 hover:text-gray-300"
          >
            <FaBoxesStacked className="h-5 w-5" />
            <span>Our Services</span>
          </Link>
          <Link
            href="/AllPodcasts"
            className="flex items-center space-x-1 hover:text-gray-300"
          >
            <FaPodcast className="h-5 w-5" />
            <span>All Podcast</span>
          </Link>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div className="md:hidden">
        <div className="flex items-center justify-between px-4 py-3">
          <Link href="/" className="flex items-center space-x-2 text-red-500">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <span className="font-bold text-sm">Listen Live</span>
            <span className="text-gray-400 text-xs">ON AIR</span>
          </Link>

          <button
            onClick={toggleMenu}
            className="text-white focus:outline-none"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>

        {isMenuOpen && (
          <div className="px-2 pt-2 pb-4 space-y-3">
            <Link
              href="/schedules"
              className="flex items-center space-x-2 px-3 py-2 rounded hover:bg-gray-800"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>
              <span>View schedules</span>
            </Link>

            <Link
              href="/news"
              className="flex items-center space-x-2 px-3 py-2 rounded hover:bg-gray-800"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"
                />
              </svg>
              <span>Latest News</span>
            </Link>

            <Link
              href="/episodes"
              className="flex items-center space-x-2 px-3 py-2 rounded hover:bg-gray-800"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M7 4v16M17 4v16M3 8h4m10 0h4M3 12h18M3 16h4m10 0h4M4 20h16a1 1 0 001-1V5a1 1 0 00-1-1H4a1 1 0 00-1 1v14a1 1 0 001 1z"
                />
              </svg>
              <span>New Episodes</span>
            </Link>

            <Link
              href="/services"
              className="flex items-center space-x-2 px-3 py-2 rounded hover:bg-gray-800"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
              <span>Our Services</span>
            </Link>

            <Link
              href="/podcasts"
              className="flex items-center space-x-2 px-3 py-2 rounded hover:bg-gray-800"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z"
                />
              </svg>
              <span>All Podcasts</span>
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;

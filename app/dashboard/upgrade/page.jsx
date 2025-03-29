"use client";
import React from "react";
import PricingPlan from "../_components/PricingPlan";
import { useUser } from "@clerk/nextjs";

const Upgrade = () => {
  const { user } = useUser();
  return (
    <div className="p-5 bg-system text-white"> {/* Dark background */}
      <div className="mx-auto max-w-3xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
        <h1 className="text-center font-bold mb-5 text-red-600 text-3xl"> {/* Lightened red */}
          Testing Mode
        </h1>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:items-center md:gap-8">
          {PricingPlan.map((item, index) => (
            <div
              key={index}
              className="rounded-2xl border border-gray-700 bg-gray-100 dark:bg-gray-900 p-6 shadow-md hover:shadow-lg sm:px-8 lg:p-12 transition-all duration-300 ease-in-out" // Darker container with lighter border and hover effect
            >
              <div className="text-center">
                <h2 className="text-lg font-medium text-gray-600 dark:text-gray-300"> {/* Changed text to white */}
                  {item.duration}
                  <span className="sr-only">Plan</span>
                </h2>

                <p className="mt-2 sm:mt-4">
                  <strong className="text-3xl font-bold text-gray-600 dark:text-gray-300 sm:text-4xl"> {/* Text white */}
                    {" "}
                    {item.price}${" "}
                  </strong>

                  <span className="text-sm font-medium text-gray-600 dark:text-gray-300"> {/* Lighter gray for duration */}
                    / {item.duration}
                  </span>
                </p>
              </div>

              <ul className="mt-6 space-y-2">
                <li className="flex items-center gap-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="size-5 text-indigo-300" // Lighter icon color
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4.5 12.75l6 6 9-13.5"
                    />
                  </svg>

                  <span className="text-gray-600 dark:text-gray-300"> 10 users included </span> {/* Text lightened */}
                </li>

                <li className="flex items-center gap-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="size-5 text-indigo-300" // Lighter icon color
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4.5 12.75l6 6 9-13.5"
                    />
                  </svg>

                  <span className="text-gray-600 dark:text-gray-300"> 2GB of storage </span> {/* Text lightened */}
                </li>

                <li className="flex items-center gap-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="size-5 text-indigo-300" // Lighter icon color
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4.5 12.75l6 6 9-13.5"
                    />
                  </svg>

                  <span className="text-gray-600 dark:text-gray-300"> Email support </span> {/* Text lightened */}
                </li>

                <li className="flex items-center gap-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="size-5 text-indigo-300" // Lighter icon color
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4.5 12.75l6 6 9-13.5"
                    />
                  </svg>

                  <span className="text-gray-600 dark:text-gray-300"> Help center access </span> {/* Text lightened */}
                </li>
              </ul>

              <a
                href={
                  item.link +
                  "?prefilled_email=" +
                  user?.primaryEmailAddress?.emailAddress
                }
                target="_blank"
                className="mt-8 block rounded-full border border-indigo-600 bg-indigo-600 px-12 py-3 text-center text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring active:bg-indigo-500 transition-all duration-300" // Darkened button with white text and hover effect
              >
                Get Started
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Upgrade;

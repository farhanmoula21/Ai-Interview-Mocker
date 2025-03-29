import React from 'react'
import { Button } from '@/components/ui/button';
import Head from 'next/head';
import Contect from './_components/Contect';
import Link from 'next/link';
import { FaGithub } from "react-icons/fa";

const page = () => {
  return (
    <div className="dark:bg-gray-900 dark:text-white"> {/* Apply dark background and text color */}
      <Head>
        <title>AI Mock Interview</title>
        <meta name="description" content="Ace your next interview with AI-powered mock interviews" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="min-h-screen">
        {/* Header Section */}
        <header className="w-full py-8 bg-gray-100 dark:bg-gray-800 shadow-md"> {/* Dark background for header */}
          <div className="container mx-auto flex flex-col md:flex-row justify-between items-center px-6">
            <h1 className="text-3xl font-bold text-primary dark:text-white">AI Mock Interview</h1> {/* Text color in dark mode */}
            <nav className="flex flex-col sm:flex-row flex-wrap items-center justify-between mt-4 md:mt-0 space-y-4 sm:space-y-0 sm:space-x-4">
              <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0">
                <a href="#features" className="text-lg text-gray-800 dark:text-gray-200 mx-2 md:mx-4">Features</a> {/* Dark text */}
                <a href="#testimonials" className="text-lg text-gray-800 dark:text-gray-200 mx-2 md:mx-4">Testimonials</a>
                <a href="#contact" className="text-lg text-gray-800 dark:text-gray-200 mx-2 md:mx-4">Contact</a>
              </div>
            </nav>
          </div>
        </header>

        {/* Hero Section */}
        <section className="flex flex-col items-center justify-center text-center py-20 bg-gradient-to-r from-gray-900 to-gray-400 dark:from-gray-700 dark:to-gray-500 px-6 md:px-0"> {/* Update gradient for dark mode */}
          <h2 className="text-4xl md:text-5xl font-bold text-white">Ace Your Next Interview</h2>
          <p className="mt-4 text-lg md:text-xl text-white">Practice with AI-powered mock interviews and get personalized feedback</p>
          <div className="mt-6 flex flex-col md:flex-row">
            <a
              href="/dashboard"
              className="px-6 py-3 mb-4 md:mb-0 md:mr-4 text-lg font-semibold bg-white text-primary-600 rounded-lg shadow-lg hover:bg-gray-100 dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700"
            >
              Get Started
            </a>
            <a
              href="#features"
              className="px-6 py-3 text-lg font-semibold border border-white rounded-lg hover:bg-white hover:text-black-600 dark:border-gray-300 dark:hover:bg-gray-800 dark:text-white"
            >
              Learn More
            </a>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="py-16 bg-white dark:bg-gray-900 px-6 md:px-0">
          <div className="container mx-auto text-center">
            <h2 className="text-4xl font-bold text-gray-800 dark:text-white">Features</h2> {/* Adjust text for dark mode */}
            <p className="mt-4 text-lg text-gray-800 dark:text-gray-300">
              Our AI Mock Interview platform offers a range of powerful features:
            </p>
            <div className="flex flex-wrap justify-center mt-8">
              <div className="w-full md:w-1/3 px-4 py-8">
                <div className="bg-blue-100 dark:bg-gray-700 rounded-lg p-6 shadow-md">
                  <h3 className="text-2xl font-semibold text-black-600 dark:text-white">AI Mock Interviews</h3>
                  <p className="mt-2 text-gray-600 dark:text-gray-300">Experience realistic interview scenarios with our advanced AI.</p>
                </div>
              </div>
              <div className="w-full md:w-1/3 px-4 py-8">
                <div className="bg-blue-100 dark:bg-gray-700 rounded-lg p-6 shadow-md">
                  <h3 className="text-2xl font-semibold text-black-600 dark:text-white">Instant Feedback</h3>
                  <p className="mt-2 text-gray-600 dark:text-gray-300">Get instant, personalized feedback to improve your performance.</p>
                </div>
              </div>
              <div className="w-full md:w-1/3 px-4 py-8">
                <div className="bg-blue-100 dark:bg-gray-700 rounded-lg p-6 shadow-md">
                  <h3 className="text-2xl font-semibold text-black-600 dark:text-white">Comprehensive Reports</h3>
                  <p className="mt-2 text-gray-600 dark:text-gray-300">Receive detailed reports highlighting your strengths and weaknesses.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section id="testimonials" className="py-16 bg-gray-50 dark:bg-gray-800 px-6 md:px-0">
          <div className="container mx-auto text-center">
            <h2 className="text-4xl font-bold text-gray-800 dark:text-white">What Our Users Say</h2> {/* Text for dark mode */}
            <div className="flex flex-wrap justify-center mt-8">
              <div className="w-full md:w-1/2 px-4 py-8">
                <div className="bg-white dark:bg-gray-700 rounded-lg p-6 shadow-md">
                  <p className="text-gray-600 dark:text-gray-300">
                    "The AI mock interviews were incredibly helpful. I felt much more confident going into my real interview."
                  </p>
                  <h4 className="mt-4 text-lg font-semibold text-blue-600 dark:text-blue-300">- Alex Johnson</h4>
                </div>
              </div>
              <div className="w-full md:w-1/2 px-4 py-8">
                <div className="bg-white dark:bg-gray-700 rounded-lg p-6 shadow-md">
                  <p className="text-gray-600 dark:text-gray-300">
                    "The feedback was spot on and helped me improve my answers. Highly recommend this service!"
                  </p>
                  <h4 className="mt-4 text-lg font-semibold text-blue-600 dark:text-blue-300">- Sarah Williams</h4>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-16 bg-white dark:bg-gray-900 px-6 md:px-0">
          <Contect />
        </section>
      </main>

      <footer className="py-8 bg-black dark:bg-gray-800 text-white text-center">
        <p>© 2025 AI Mock Interview. All rights reserved.</p>
      </footer>
    </div>
  )
}

export default page

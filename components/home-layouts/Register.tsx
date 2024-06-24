import React, { useState } from 'react';
import { Button } from '@radix-ui/react-button';
import { SunIcon, MoonIcon } from '@heroicons/react/solid';
import { useTheme } from 'next-themes';

const backgroundImageUrl = 'https://source.unsplash.com/random/1920x1080'; // Replace with desired URL from Unsplash

const RegisterPage: React.FC = () => {
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  return (
    <div className={`min-h-screen flex flex-col items-center justify-center bg-cover ${theme === 'dark' ? 'dark' : ''}`} style={{ backgroundImage: `url(${backgroundImageUrl})` }}>
      <div className="absolute top-4 right-4">
        <Button onClick={toggleTheme} className="p-2 bg-gray-800 text-white rounded-full">
          {theme === 'dark' ? <SunIcon className="h-6 w-6" /> : <MoonIcon className="h-6 w-6" />}
        </Button>
      </div>
      <div className="bg-white dark:bg-gray-800 dark:text-white p-6 rounded-lg shadow-lg max-w-md w-full">
        <h2 className="text-2xl font-bold mb-6 text-center">Create an account</h2>
        <form>
          <div className="mb-4">
            <label className="block text-sm font-bold mb-2 text-black dark:text-white" htmlFor="email">Email</label>
            <input className="w-full p-2 border border-gray-300 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white" type="email" id="email" required />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-bold mb-2 text-black dark:text-white" htmlFor="displayName">Display Name</label>
            <input className="w-full p-2 border border-gray-300 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white" type="text" id="displayName" required />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-bold mb-2 text-black dark:text-white" htmlFor="username">Username</label>
            <input className="w-full p-2 border border-gray-300 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white" type="text" id="username" required />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-bold mb-2 text-black dark:text-white" htmlFor="password">Password</label>
            <input className="w-full p-2 border border-gray-300 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white" type="password" id="password" required />
          </div>
          <div className="flex items-center justify-between mb-6">
            <Button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" type="submit">
              Create Account
            </Button>
          </div>
        </form>
        <Button className="w-full bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded flex items-center justify-center">
          <img src="https://upload.wikimedia.org/wikipedia/commons/4/4f/Google_Logo.png" alt="Google Logo" className="w-6 h-6 mr-2" />
          Continue with Google
        </Button>
      </div>
    </div>
  );
};

export default RegisterPage;

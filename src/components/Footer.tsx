import React from "react";
import Link from "next/link";

const Footer: React.FC = () => {
  return (
    <footer className="bg-white">
      <div className="mx-auto max-w-7xl overflow-hidden px-6 py-20 sm:py-24 lg:px-8">
        <nav
          className="-mb-6 columns-2 sm:flex sm:justify-center sm:space-x-12"
          aria-label="Footer"
        >
          <div className="pb-6">
            <Link
              href="#"
              className="text-sm leading-6 text-gray-600 hover:text-gray-900"
            >
              会社概要
            </Link>
          </div>
          <div className="pb-6">
            <Link
              href="#"
              className="text-sm leading-6 text-gray-600 hover:text-gray-900"
            >
              プライバシーポリシー
            </Link>
          </div>
          <div className="pb-6">
            <Link
              href="#"
              className="text-sm leading-6 text-gray-600 hover:text-gray-900"
            >
              利用規約
            </Link>
          </div>
          <div className="pb-6">
            <Link
              href="#"
              className="text-sm leading-6 text-gray-600 hover:text-gray-900"
            >
              特定商取引法に基づく表記
            </Link>
          </div>
        </nav>
        <p className="mt-10 text-center text-xs leading-5 text-gray-500">
          &copy; 2023 Dr.Air, Inc. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;

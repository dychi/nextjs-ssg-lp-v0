import React from "react";
import Link from "next/link";
import Image from "next/image";

const navigation = [
  { name: "スバラシイとは", href: "#about" },
  { name: "特長", href: "#features" },
  { name: "使い方", href: "#usage" },
  { name: "お問い合わせ", href: "#contact" },
];

const Header: React.FC = () => {
  return (
    <header className="bg-white">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8" aria-label="Top">
        <div className="flex w-full items-center justify-between border-b border-indigo-500 py-6 lg:border-none">
          <div className="flex items-center">
            <Link href="/">
              <span className="sr-only">スバラシイ</span>
              <Image
                className="h-10 w-auto"
                src="/favicon.ico"
                alt="スバラシイ"
                width={40}
                height={40}
              />
            </Link>
          </div>
          <div className="ml-10 hidden space-x-8 lg:block">
            {navigation.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-base font-medium text-primary hover:text-secondary"
              >
                {link.name}
              </Link>
            ))}
          </div>
          <div className="ml-10 space-x-4">
            <Link
              href="#"
              className="inline-block rounded-md border border-transparent bg-accent px-4 py-2 text-base font-medium text-white hover:bg-opacity-75"
            >
              購入する
            </Link>
          </div>
        </div>
        <div className="flex flex-wrap justify-center gap-x-6 py-4 lg:hidden">
          {navigation.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-base font-medium text-primary hover:text-secondary"
            >
              {link.name}
            </Link>
          ))}
        </div>
      </nav>
    </header>
  );
};

export default Header;

import React from "react";
import NextLink from "next/link";
import { useRouter } from "next/router";

interface LinkItemProps {
  href: string;
  children: React.ReactNode;
  path: string;
}

const LinkItem = ({ href, path, children }: LinkItemProps) => {
  const currentPath = path == href;
  return (
    <NextLink href={href} passHref>
      <a
        className={`pl-4 ml-4 border-l text-md ${
          currentPath
            ? "text-rose-500 tracking-wide border-l-2 border-l-pink-500 font-medium"
            : "text-black"
        }
          hover:border-l-rose-300 hover:border-l-2
        `}
      >
        {children}
      </a>
    </NextLink>
  );
};

const Drawer = () => {
  const router = useRouter();

  return (
    <div className="flex-none w-72 pl-4 h-screen border-r border-zinc-300">
      {" "}
      <div className="flex flex-col items-start pl-4 ">
        <h1 className="text-black text-lg font-medium p-2 pl-4">
          Getting Started
        </h1>
        <LinkItem href="/" path={router.route}>
          Installation
        </LinkItem>
        <LinkItem href="/404" path={router.route}>
          Editor Setup
        </LinkItem>
        <LinkItem href="/404" path={router.route}>
          Using a preprocessor
        </LinkItem>
        <LinkItem href="/404" path={router.route}>
          Optimizing for Production
        </LinkItem>

        <h1 className="text-black text-lg font-medium p-2 pl-4">ERC20</h1>
        <LinkItem href="/token" path={router.route}>
          Definition
        </LinkItem>
        <LinkItem href="/token/contract" path={router.route}>
          Contract code
        </LinkItem>
        <LinkItem href="/token/create" path={router.route}>
          Creating your contract
        </LinkItem>
        <LinkItem href="/token/deploy" path={router.route}>
          Test the deployed contract
        </LinkItem>

        <h1 className="text-black text-lg font-medium p-2 pl-4">NFTs</h1>
        <LinkItem href="/nft" path={router.route}>
          Definition
        </LinkItem>
        <LinkItem href="/nft/contract" path={router.route}>
          Contract code
        </LinkItem>
        <LinkItem href="/nft/create" path={router.route}>
          Creating your contract
        </LinkItem>
        <LinkItem href="/nft/deploy" path={router.route}>
          Test the deployed contract
        </LinkItem>
      </div>
    </div>
  );
};

export default Drawer;

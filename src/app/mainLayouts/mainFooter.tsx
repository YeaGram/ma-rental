import Link from "next/link";

import { BsTwitter } from "react-icons/bs";
import { AiFillInstagram } from "react-icons/ai";

export default function MainFooterLayout() {
  const footerLists = [
    {
      group: "About",
      list: [
        { title: "OurStory", path: "/about#Story" },
        { title: "Mission", path: "/about#Mission" },
        { title: "Feature", path: "/about#Feature" },
      ],
    },
    {
      group: "Support",
      list: [
        { title: "FAQ", path: "/about#FAQ" },
        { title: "ContactUs", path: "/contact" },
        { title: "Policies", path: "/about#Policies" },
      ],
    },
    {
      group: "Connect",
      list: [
        { title: "Facebook", path: "https://www.facebook.com" },
        { title: "Instagram", path: "https://www.instagram.com/" },
        { title: "Twitter", path: "https://twitter.com/" },
      ],
    },
  ];
  return (
    <footer className="text-secondary-600 px-6 mx-auto max-w-7xl py-10 sm:py-14">
      <div className="grid grid-cols-2 gap-y-5 sm:grid-cols-3 mb-5 max-w-lg">
        {footerLists.map((list, i) => (
          <div key={i}>
            <span className="text-primary-500 mb-2 font-semibold block">
              {list.group}
            </span>
            <ul className="leading-7">
              {list.list.map((listItem, j) => (
                <li key={j}>
                  <Link
                    href={listItem.path}
                    className="hover:text-secondary-500"
                    target={i < 2 ? "_self" : "_blank"}
                  >
                    {listItem.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="flex sm:justify-between w-full mt-10">
        <span className="flex-1 block sm:flex-auto">
          © 2023 MaRental - All rights reserved.
        </span>
        <div className="grid grid-cols-2 gap-1 text-2xl sm:w-fit  sm:ml-auto">
          <Link href={"https://www.instagram.com"} target="_blank">
            <AiFillInstagram />
          </Link>
          <Link href={"https://twitter.com/"} target="_blank">
            <BsTwitter />
          </Link>
        </div>
      </div>
    </footer>
  );
}

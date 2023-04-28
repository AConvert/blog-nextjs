import Image from "next/image";
import Link from "next/link";
import { BellIcon } from "@heroicons/react/24/solid";

export default function Navbar() {
  return (
    <main className="nav_main">
      <section className="nav_container">
        <div className="nav_left">
          <Image
            src={"/transp_logo.png"}
            height={60}
            width={120}
            alt="nav_logo"
          />
          <div className="nav_links">
            <Link className="link" href="/about">
              ABOUT
            </Link>
            <Link className="link" href="/subscribe">
              SUBSCRIBE
            </Link>
          </div>
        </div>
        <div className="nav_right">
          {/* <BellIcon className="notify_icon" /> */}
        </div>
      </section>
    </main>
  );
}

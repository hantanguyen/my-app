import Link from 'next/link';
import Image from 'next/image';
import { BsFillMoonStarsFill } from 'react-icons/bs';
import tboyswagLogo from '../../public/tboyswag logo.png';
import Sharktboy from '../../public/Sharktoboy swag logotext.png';

export default function Home() {
  return (
    <div className="bg-gradient-to-b from-white via-blue-200 to-blue-300 min-h-screen">
      <header className="py-4 px-10 md:px-20 lg:px-40 bg-gray-100 dark:bg-gray-800 flex justify-between">
        <h1>
          <Image src={tboyswagLogo} alt="tboyswagLogo" px-2 ml-0 width={200} height={200} />
        </h1>
        <nav className="flex items-center space-x-4 ml-auto">
          <ul className="flex items-center space-x-4">
            <li className="px-6 py-2">
              <Link href="/">
                <a className="hover:text-blue-700" style={{ fontFamily: "'Play', sans-serif" }}>
                  Home
                </a>
              </Link>
            </li>
            <li className="px-6 py-2">
              <Link href="/Services">
                <a className="hover:text-blue-700" style={{ fontFamily: "'Play', sans-serif" }}>
                Services
                </a>
              </Link>
            </li>
            <li className="px-6 py-2">
              <Link href="/Grants">
                <a className="hover:text-blue-700" style={{ fontFamily: "'Play', sans-serif" }}>
                Grants
                </a>
              </Link>
            </li>
            <li className="px-6 py-2">
              <Link href="/MyBlog">
                <a className="hover:text-blue-700" style={{ fontFamily: "'Play', sans-serif" }}>
                My Blog
                </a>
              </Link>
            </li>
          </ul>
        </nav>
        <div className="flex items-center space-x-4">
          <BsFillMoonStarsFill className="cursor-pointer text-2xl py-1" />
          <a
            href="#"
            className="bg-gradient-to-r from-blue-700 text- to-blue-700 text-white px-4 py-2 border-none rounded-md ml-8"
            style={{ fontFamily: "'Play', sans-serif" }}
          >
            Email me!
          </a>
        </div>
      </header>
      <section className="flex justify-center items-center py-8">
        <Image src={Sharktboy} alt="Sharktboy" px-2 ml-0 width={700} height={700} />
      </section>
      <section className="py-8 mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
      <p className="text-lg py-2 flex justify-center items-center leading-8" style={{ fontFamily: "'Play', sans-serif" }}>
        Hi, I'm Hori and my pronouns are he/him! I'm currently pursuing my Bachelor's degree in 
        Computer Science @ California State University, Fullerton. I'm a Tboy
        who programs. My hobbies include playing video games (my absolute favorite is Devil May Cry), 
        rock climbing, and building keyboards. I'm excited to take you along my journey of
        starting hormone replacement therapy, and wanted to use this as a place to 
        document my progress. This website will serve as a "resource" hub of sorts 
        for anyone else who may be considering hormone replacement therapy or just transitioning 
        in general. Thank you for joining me :3
      </p>
      </section>
    </div>
  );
}

import Link from 'next/link';
import Image from 'next/image';
import { BsFillMoonStarsFill } from 'react-icons/bs';
import POP from '../../public/PointOfPride.png'; // Import your image
import genderBands from '../../public/genderbandspng.png'; // Import your image
import tboyswagLogo from "../../public/tboyswag logo.png";
import './GoogleFonts.css';
import ContactForm from '../components/ContactForm'; 


export default function Grants() {
  return (
    <div className="bg-gradient-to-b from-white via-blue-200 to-blue-300 min-h-screen">
      <header className="py-4 px-10 md:px-20 lg:px-40 bg-gray-100 dark:bg-gray-800 flex justify-between">
        {/* Navigation bar */}
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
      <section className="py-8 mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        {/* Exploring grants */}
        <div className="py-8 mx-auto max-w-5xl px-4 sm:px-6 lg:px-8" style={{ fontFamily: "'Play', sans-serif" }}>
          <h3 className="text-5xl py-1 text-blue-700">Financial Aid and Grants for HRT</h3>
          <p className="text-lg py-2 leading-8">
            Hormone Replacement Therapy can be expensive. There are organizations that provide 
            financial assistance to trans folx that cannot afford it. Note: There may be requirements 
            that need to be met, such as identifying as transgender (FTM, MTF, non-binary, genderqueer, gender non-conforming, 
            and all other non-cis identities.), that you have financial need that prevents you from affording hormone replacement therapy,
            you are 18 years old or older at the time you apply, and lastly, you meet all of the eligibility requirements of your chosen 
            telehealth provider.  I am not a medical professional and not endorsed by any of these companies.
          </p>
        </div>

        {/* Point Of Pride's HRT Access Fund */}
        <div className="bg-white text-center shadow-lg p-10 rounded-xl my-10 mx-auto max-w-5xl dark:bg-white" style={{ fontFamily: "'Play', sans-serif" }}>
          <div className="flex justify-center">
            <Image src={POP} alt="POP" width={300} height={300} />
          </div>
          <h3 className="text-2xl pb-2 text-center">
            <a
              href="https://www.pointofpride.org/hrt-access-fund"
              className="hover:text-blue-700 underline"
              target="_blank"
            >
              Point Of Pride's HRT Access Fund
            </a>
          </h3>
          <p className="text-lg py-2 text-left">
            Point of Pride’s HRT Access Fund is a scholarship-like program that provides direct
            financial assistance to trans folks who cannot afford their gender-affirming hormone
            replacement therapy (also known as "HRT.") Point of Pride has partnered with Plume, 
            Folx, QueerMed, and QueerDoc to fund recipients with 12 months of medical care, lab work 
            24/7 access to a care team, potential medical letters to aid you in your transition, and prescription 
            cost coverage for a year.
          </p>
          <h4 className="text-lg py-4 text-blue-700"><strong>Services Offered</strong></h4>
          <p className="text-gray-800 py-1">Hormone Replacement Therapy Grant</p>
          <p className="text-gray-800 py-1">Free Binders for Trans Folx</p>
          <p className="text-gray-800 py-1">Free Femme Shapewear for Trans Folx</p>
        </div>

        {/* Genderband's Transition Grants */}
        <div className="bg-white text-center shadow-lg p-10 rounded-xl my-10 mx-auto max-w-5xl dark:bg-white" style={{ fontFamily: "'Play', sans-serif" }}>
          <div className="flex justify-center">
            <Image src={genderBands} alt="genderBands" width={200} height={200} />
          </div>
          <h3 className="text-2xl pb-2 text-center">
            <a
              href="https://www.genderbands.org/grants"
              className="hover:text-blue-700 underline"
              target="_blank"
            >
              Genderband's Transition Grants 
            </a>
          </h3>
          <p className="text-lg py-2 text-left">
            Genderbands provides grants to support individuals on the transgender/non-binary spectrum with various transition-related procedures. 
            Grants cover a range of transition needs, but are non-transferable and disbursed randomly.
            Applications are accepted annually from October 1 to November 30, with grants awarded the following year. 
          </p>
          <h4 className="text-lg py-4 text-blue-700"><strong>Services Offered</strong></h4>
          <p className="text-gray-800 py-1">Hormone Replacement Therapy Grant</p>
        </div>
      </section>
      <section className="bg-white text-center shadow-lg p-10 rounded-xl my-10 mx-auto max-w-5xl dark:bg-white" style={{ fontFamily: "'Play', sans-serif" }}>
        {/* Contact form section */}
        <ContactForm />
      </section>
    </div>
  );
}

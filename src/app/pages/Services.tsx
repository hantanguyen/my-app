import Link from 'next/link';
import Image from 'next/image';
import { BsFillMoonStarsFill } from 'react-icons/bs';
import ppLogo from '../../public/pp_Logo.png'; // Import your image
import folxLogo from '../../public/folx_logo.png'; // Import your image
import plumeLogo from '../../public/plume_logo.png'; // Import your image
import trueuLogo from '../../public/true-u.png'; // Import your image
import tboyswagLogo from "../../public/tboyswag logo.png";
import './GoogleFonts.css';
import ContactForm from '../components/ContactForm';

export default function Services() {
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
        {/* Exploring different options */}
        <div className="py-8 mx-auto max-w-5xl px-4 sm:px-6 lg:px-8" style={{ fontFamily: "'Play', sans-serif" }}>
          <h3 className="text-5xl py-1 text-blue-700">Exploring different options to ensure that you can access HRT</h3>
          <p className="text-lg py-2 leading-8">
            Navigating access to hormone replacement therapy can sometimes be
            difficult. Unsure of how to start or where you can go? Allow me to
            guide you through a range of options! Note: Most if not all services 
            require you to be 18+ and older. I am not a medical professional and 
            not endorsed by any of these companies.
          </p>
        </div>

        {/* Planned Parenthood */}
        <div className="bg-white text-center shadow-lg p-10 rounded-xl my-10 mx-auto max-w-5xl dark:bg-white" style={{ fontFamily: "'Play', sans-serif" }}>
          <div className="flex justify-center">
            <Image src={ppLogo} alt="pp_Logo" width={200} height={200} />
          </div>
          <h3 className="text-2xl pb-2 text-center">
            <a
              href="https://www.plannedparenthood.org/planned-parenthood-pasadena-san-gabriel-valley"
              className="hover:text-blue-700 underline"
              target="_blank"
            >
              Planned Parenthood
            </a>
          </h3>
          <p className="text-lg py-2 text-left">
            Planned Parenthood Pasadena and San Gabriel Valley offers hormone
            replacement therapy. Planned Parenthood provides their service even if you
            are not insured. They also take insurance, cash (sliding scale), credit
            cards and Flex Spending Accounts.
          </p>
          <h4 className="text-lg py-4 text-blue-700"><strong>Services Offered</strong></h4>
          <p className="text-gray-800 py-1">Hormone Replacement Therapy(Testosterone, Estrogen, and Anti-Androgens) </p>
          <p className="text-gray-800 py-1">Transgender Healthcare Resources</p>
          <p className="text-gray-800 py-1">Primary Care</p>
          <p className="text-gray-800 py-1">STI Testing & Treatment </p>
          <p className="text-gray-800 py-1">Abortion, Birth Control, and Emergency Contraception Pill </p>
        </div>

        {/* FOLX Health */}
        <div className="bg-white text-center shadow-lg p-10 rounded-xl my-10 mx-auto max-w-5xl dark:bg-white" style={{ fontFamily: "'Play', sans-serif" }}>
          <div className="flex justify-center py-4">
            <Image src={folxLogo} alt="folx_logo" width={200} height={200} />
          </div>
          <h3 className="text-2xl pb-2 text-center">
            <a
              href="https://www.folxhealth.com/"
              className="hover:text-blue-500 underline"
              target="_blank"
            >
              FOLX Health
            </a>
          </h3>
          <p className="text-lg py-2 text-left">
            FOLX Health stands as a trailblazing digital healthcare service uniquely designed to cater to the medical needs of the LGBTQIA+ community. 
            This innovative startup offers virtual care and prescriptions, specializing in hormone replacement therapy and sexual health, all presented 
            through a subscription-based model. By doing so, FOLX Health markedly improves accessibility to vital healthcare services, while also working
            to dismantle the societal stigma surrounding transgender and queer healthcare.
          </p>
          <h4 className="text-lg py-4 text-blue-700"><strong>Services Offered</strong></h4>
          <p className="text-gray-800 py-1">Gender Affirming Care</p>
          <p className="text-gray-800 py-1">Primary Care</p>
          <p className="text-gray-800 py-1">Sexual and Reproductive Health</p>
          <p className="text-gray-800 py-1">Preventive Care</p>
          <p className="text-gray-800 py-1">Mental Health Care</p>
          <p className="text-gray-800 py-1">Fertility and Family Building</p>
        </div>

        {/* Plume */}
        <div className="bg-white text-center shadow-lg p-10 rounded-xl my-10 mx-auto max-w-5xl dark:bg-white" style={{ fontFamily: "'Play', sans-serif" }}>
          <div className="flex justify-center py-4">
            <Image src={plumeLogo} alt="plume_logo" width={200} height={200} />
          </div>
          <h3 className="text-2xl pb-2 text-center">
            <a
              href="https://getplume.co/"
              className="hover:text-blue-700 underline"
              target="_blank"
            >
              Plume
            </a>
          </h3>
          <p className="text-lg py-2 text-left">
            Plume is a telehealth platform that focuses on providing gender-affirming hormone replacement therapy (HRT) via smartphones. 
            It offers convenient access to care for transgender and non-binary individuals seeking to align their physical characteristics
            with their gender identity.
          </p>
          <h4 className="text-lg py-4 text-blue-700"><strong>Services Offered</strong></h4>
          <p className="text-gray-800 py-1">Estrogen or Testosterone Membership</p>
          <p className="text-gray-800 py-1">Letter Of Support</p>
        </div>

        {/* True U Clinic */}
        <div className="bg-white text-center shadow-lg p-10 rounded-xl my-10 mx-auto max-w-5xl dark:bg-white" style={{ fontFamily: "'Play', sans-serif" }}>
          <div className="flex justify-center">
            <Image src={trueuLogo} alt="true-u" width={300} height={300} />
          </div>
          <h3 className="text-2xl pb-2 text-center">
            <a
              href="https://trueuclinic.com/"
              className="hover:text-blue-700 underline"
              target="_blank"
            >
              True U Clinic
            </a>
          </h3>
          <p className="text-lg py-2 text-left">
            True U Clinic offers gender-affirming hormone replacement therapy (HRT) and other healthcare services for transgender and non-binary individuals.
            True U is an online hormone therapy clinic that provides safe and medically supervised hormone therapy, while providing a supportive and 
            inclusive environment for your healthcare needs.  
          </p>
          <h4 className="text-lg py-4 text-blue-700"><strong>Services Offered</strong></h4>
          <p className="text-gray-800 py-1">Hormone Replacement Therapy</p>
          <p className="text-gray-800 py-1">PrEP and STI Testing</p>
        </div>
      </section>
      <section className="bg-white text-center shadow-lg p-10 rounded-xl my-10 mx-auto max-w-5xl dark:bg-white" style={{ fontFamily: "'Play', sans-serif" }}>
        {/* Contact form section */}
        <ContactForm />
      </section>
    </div>
  );
}

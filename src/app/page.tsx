"use client";
import Head from "next/head";
import Link from 'next/link';
import React from "react";
import { BsFillMoonStarsFill } from "react-icons/bs";
import Image from "next/image";
import myImage from "../../public/hori-pic.png";
import ppLogo from "../../public/pp_Logo.png";
import folxLogo from "../../public/folx_logo.png";
import plumeLogo from "../../public/plume_logo.png";
import trueuLogo from "../../public/true-u.png";
import tboyswagLogo from "../../public/tboyswag logo.png";
import Sharktboy from "../../public/Sharktoboy swag logotext.png";
import POP from  "../../public/PointOfPride.png";
import genderBands from  "../../public/genderbandspng.png";

import './GoogleFonts.css';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

import ContactForm from "./components/ContactForm";

export default function Home() {
  const [someState, setSomeState] = useState(false);
  const router = useRouter();
  return (
    <div className="bg-gradient-to-b from-white via-blue-200 to-blue-300 min-h-screen">
      <header className="py-4 px-10 md:px-20 lg:px-40 bg-gray-100 dark:bg-gray-800 flex justify-between">
        <h1>
        <Image src={tboyswagLogo} alt="tboyswagLogo" px-2 ml-0 width={200} height={200}/>
        </h1>
        <nav className="flex items-center space-x-4 ml-auto">
          <ul className="flex items-center space-x-4">
            <li className="px-6 py-2">
              <a href="/" className="hover:text-blue-700" style={{ fontFamily: "'Play', sans-serif" }}>
                Home
              </a>
            </li>
            <li className="px-6 py-2">
              <a className="hover:text-blue-700" style={{ fontFamily: "'Play', sans-serif" }}>Services</a>
            </li>
            <li className="px-6 py-2">
              <a className="hover:text-blue-700" style={{ fontFamily: "'Play', sans-serif" }}>Grants</a>
            </li>
            <li className="px-6 py-2">
            <a className="hover:text-blue-700" style={{ fontFamily: "'Play', sans-serif" }}>My Blog</a>
            </li>
          </ul>
        </nav>
        <div className="flex items-center space-x-4">
          <BsFillMoonStarsFill className="cursor-pointer text-2xl py-1" />
          <a
            href="#"
            className="bg-gradient-to-r from-blue-700 text- to-blue-700 text-white px-4 py-2 border-none rounded-md ml-8" style={{ fontFamily: "'Play', sans-serif" }}
          >
            Email me!
          </a>
        </div>
      </header>
      <section className="flex justify-center items-center py-8">
      <Image src={Sharktboy} alt="Sharktboy" px-2 ml-0 width={700} height={700}/>
      </section>
      <section className="py-8 mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
  <div className="flex justify-center items-center">
    <div>
      <h2 className="text-5xl py-2 text-blue-700" style={{ fontFamily: "'Play', sans-serif" }}>
        About Me
      </h2>
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
    </div>
    <div className="flex justify-center items-center py-8 px-4">
      <div
        style={{
          width: '200px',
          height: '200px', // Make sure width and height are the same for a perfect circle
          borderRadius: '50%', // Make the image circular
          overflow: 'hidden', // Clip the image within the circle
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          position: 'relative', // Add this for absolute positioning
        }}
      >
        <div
          style={{
            position: 'absolute',
            width: '100%',
            height: '100%',
          }}
        >
          <Image
            src={myImage}
            alt="My Image"
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
            }}
          />
        </div>
      </div>
    </div>
  </div>
</section>

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
        <p className="text-gray-800 py-1 ">Hormone Replacement Therapy(Testosterone, Estrogen, and Anti-Androgens) </p>
        <p className="text-gray-800 py-1 ">Transgender Healthcare Resources</p>
        <p className="text-gray-800 py-1 ">Primary Care</p>
        <p className="text-gray-800 py-1 ">STI Testing & Treatment </p>
        <p className="text-gray-800 py-1 ">Abortion, Birth Control, and Emergency Contraception Pill </p>
      </div>
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
      <div className="py-8 mx-auto max-w-5xl px-4 sm:px-6 lg:px-8" style={{ fontFamily: "'Play', sans-serif" }}>
        <h3 className="text-5xl py-1 text-blue-700">Financial Aid and Grants for HRT</h3>
        <p className="text-lg py-2 leading-8">
          Hormone Replacement Therapy can be expensive. There are organizations that provides 
          financial assistance to trans folx that cannot afford it. Note: There may be requirements 
          that need to be met, such as identifying as transgender (FTM, MTF, non-binary, genderqueer, gender non-conforming, 
          and all other non-cis identities.), that you have financial need that prevents you from affording hormone replacement therapy,
          you are 18 years old or older at the time you apply, and lastly, you meet all of the eligibility requirements of your chosen 
          telehealth provider.  I am not a medical professional and not endorsed by any of these companies.
        </p>
      </div>

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
        Grants cover a range of transition needs, but are non-transferableand disbursed randomly.
        Applications are accepted annually from October 1 to November 30, with grants awarded the following year. 
        </p>
        <h4 className="text-lg py-4 text-blue-700"><strong>Services Offered</strong></h4>
        <p className="text-gray-800 py-1">Hormone Replacement Therapy Grant</p>
      </div>

      <section className="bg-white text-center shadow-lg p-10 rounded-xl my-10 mx-auto max-w-5xl dark:bg-white" style={{ fontFamily: "'Play', sans-serif" }}>
          <ContactForm/>
        </section>
    </div>
  );
}
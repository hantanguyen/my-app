"use client";
import Head from "next/head";
import Link from 'next/link';
import React from "react";

// importing images from the public page 
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

// implementing smooth scrolling in react: https://www.digitalocean.com/community/tutorials/how-to-implement-smooth-scrolling-in-react
import { Link as ScrollLink, animateScroll as scroll } from 'react-scroll';

// importing fonts from google fonts "play"
import './GoogleFonts.css';

// for navigating between different pages 
import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function Home() {
  const [someState, setSomeState] = useState(false);
  const router = useRouter();
  return (
    // background for the page, a gradient from white to light blue 
    <div className="bg-gradient-to-b from-white via-blue-200 to-blue-300 min-h-screen">
      <Head> {/* This imports our icon */}
        <link rel="icon" href="/hangy.ico" type="image/x-icon" />
        <link rel="shortcut icon" href="/hangy.ico" type="image/x-icon" />
      </Head>
      <header className="py-4 px-10 md:px-20 lg:px-40 bg-gray-100 dark:bg-gray-800 flex justify-between"> {/* Making the header section */}
        <h1>
        <Image src={tboyswagLogo} alt="tboyswagLogo" px-2 ml-0 width={200} height={200}/> {/* This importing the logo of our website */}
        </h1>
        {/* Creating a "smooth scroll" effect with the nav bar*/}
        <nav className="flex items-center space-x-4 ml-auto"> {/* Flexible and responsive layout, creating spacing and adding a margin to the left*/}
        <ul className="flex items-center space-x-4">
          <li className="px-6 py-2">         {/* padding on the top and bottom and the left and right */}
            <ScrollLink
              to="home-section" // Replace with the corresponding section ID, home, service, grants, my-blog, email me
              spy={true}
              smooth={true}
              offset={-600} // Adjust the offset as needed
              duration={500} // Adjust the scroll duration as needed
              className="hover:text-blue-700"
              style={{ fontFamily: "'Play', sans-serif" }}
            >
              Home
            </ScrollLink>
          </li>

          <li className="px-6 py-2">
            <ScrollLink
              to="services-section"
              spy={true}
              smooth={true}
              offset={-300} 
              duration={500}
              className="hover:text-blue-700"
              style={{ fontFamily: "'Play', sans-serif" }}
            >
              Services
            </ScrollLink>
          </li>

          <li className="px-6 py-2">
            <ScrollLink
              to="grants-section" 
              spy={true}
              smooth={true}
              offset={-70} 
              duration={500} 
              className="hover:text-blue-700"
              style={{ fontFamily: "'Play', sans-serif" }}
            >
              Grants
            </ScrollLink>
          </li>

          <li className="px-6 py-2">
            <ScrollLink
              to="myBlog-section"
              spy={true}
              smooth={true}
              offset={-70} 
              duration={500} 
              className="hover:text-blue-700"
              style={{ fontFamily: "'Play', sans-serif" }}
            >
              My Blog
            </ScrollLink>
          </li>
          <li className="px-6 py-2">
          <div className="bg-gradient-to-r from-blue-700 to-blue-700 text-white px-4 py-2 border-none rounded-md ml-8" style={{ fontFamily: "'Play', sans-serif" }}>
            <ScrollLink
              to="email-section"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className="hover:text-blue-700"
              style={{ fontFamily: "'Play', sans-serif" }}
            >
              Email Me!
            </ScrollLink>
          </div>
        </li>
        </ul>
      </nav>
      </header>
      {/* End of Nav bar and routing*/}

      <section className="flex justify-center items-center py-8"> {/* Creating a "smooth scroll" effect with the nav bar*/}
      <Image src={Sharktboy} alt="Sharktboy" px-2 ml-0 width={700} height={700}/>  {/* This imports our image */}
      </section>
      <section className="py-8 mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center items-center">
            <div id="home-section"> {/* Where the homepage is */}
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

           {/* https://www.webfx.com/blog/web-design/circular-images-css/*/} 
            <div className="flex justify-center items-center py-8 px-4">
              <div
                style={{
                  width: '200px', // width and height are the same for a perfect circle
                  height: '200px', // width and height are the same for a perfect circle
                  borderRadius: '50%', // making the image circular
                  overflow: 'hidden', // clip the image within the circle
                  display: 'flex', // used to arrange layout of image 
                  justifyContent: 'center', // middle of the image
                  alignItems: 'center', // positioning to the center of the image 
                  position: 'relative', // add this for absolute positioning
                }}
              >
                <div
                  style={{
                    position: 'absolute', // positioned relative to the nearest positioned ancestor 
                    width: '100%', // sets the element to be 100% of the width from parent 
                    height: '100%',// sets the element to be 100% of the height from parent
                  }}
                >
                  <Image
                    src={myImage} // importing the image of me 
                    alt="My Image"
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',// how the img should be refit to its container
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

      {/* Continuing the home section */}
      <div className="py-8 mx-auto max-w-5xl px-4" style={{ fontFamily: "'Play', sans-serif" }}> {/* padding on top and bottom, centering the element, setting a max width, horixontal padding  */}
      <div id="home-section"> {/* id for this section */}
        <h3 className="text-5xl py-1 text-blue-700">Exploring different options to ensure that you can access HRT</h3>{/* text size of 5XL, padding top and bottom*/}
        <p className="text-lg py-2 leading-8"> {/* adjusting height of the line */}
          Navigating access to hormone replacement therapy can sometimes be
          difficult. Unsure of how to start or where you can go? Allow me to
          guide you through a range of options! Note: Most if not all services 
          require you to be 18+ and older. I am not a medical professional and 
          not endorsed by any of these companies.
        </p>
      </div>
      <div id = "services-section"> {/*id is now services*/}
      <div className="bg-white text-center shadow-lg p-10 rounded-xl my-10 mx-auto max-w-5xl dark:bg-white" style={{ fontFamily: "'Play', sans-serif" }}> {/* creating each "card" element */}
        <div className="flex justify-center"> {/* centering the card */}
          <Image src={ppLogo} alt="pp_Logo" width={200} height={200} /> {/* inserting the image and how big it will be */}
        </div>
        <h3 className="text-2xl pb-2 text-center"> {/* padding on the bottom, centering the text */}
          <a
            href="https://www.plannedparenthood.org/planned-parenthood-pasadena-san-gabriel-valley"
            className="hover:text-blue-700 underline"
            target="_blank"
          >
            Planned Parenthood
          </a>
        </h3>
        {/* Linking the website, adding the "hover" element when the mouse is over it */}
        <p className="text-lg py-2 text-left">
          Planned Parenthood Pasadena and San Gabriel Valley offers hormone
          replacement therapy. Planned Parenthood provides their service even if you
          are not insured. They also take insurance, cash (sliding scale), credit
          cards and Flex Spending Accounts.
        </p>
        {/* Bolding the text for services offered */}
        <h4 className="text-lg py-4 text-blue-700"><strong>Services Offered</strong></h4>
        <p className="text-gray-800 py-1 ">Hormone Replacement Therapy(Testosterone, Estrogen, and Anti-Androgens) </p>
        <p className="text-gray-800 py-1 ">Transgender Healthcare Resources</p>
        <p className="text-gray-800 py-1 ">Primary Care</p>
        <p className="text-gray-800 py-1 ">STI Testing & Treatment </p>
        <p className="text-gray-800 py-1 ">Abortion, Birth Control, and Emergency Contraception Pill </p>
      </div>
      {/* same process for the rest of the cards */}
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

      {/* same process for the rest of the cards */}
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
      {/* same process for the rest of the cards */}
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
      </div>
      </div>
      {/* same process for the rest of the cards, except that this time this is for the grants */}
      <div id = "grants-section">
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
        <p className="text-gray-800 py-1">Social Transitioning Grant</p>
        <p className="text-gray-800 py-1">Hormone Replacement Therapy Grant</p>
        <p className="text-gray-800 py-1">Gender Affirming Healthcare Travel Grant</p>
      </div>
      </div>
      <div id="myBlog-section">

      <div className="bg-white text-center shadow-lg p-10 rounded-xl my-10 mx-auto max-w-5xl dark:bg-white" style={{ fontFamily: "'Play', sans-serif" }}>
      <h2 className="text-5xl py-2 text-blue-700" style={{ fontFamily: "'Play', sans-serif" }}>
        Tboy Blogs!
      </h2>
        <p className="text-lg py-2 text-left">
        Hi, stay tuned for my upcoming blog when I start HRT in October! Here I will document my progress, highs and lows included. 
        </p>
        </div>
        <div id="email-section">
        <div className="py-4 px-10 md:px-20 lg:px-40 bg-gray-100 dark:bg-gray-800 flex justify-between" style={{ fontFamily: "'Play', sans-serif" }}>    
        <div className="position: absolute; bottom: 5px; ">
        Email me: hantanguyen@gmail.com &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; © 2023 Hori Nguyen All Rights Reserved.
        </div>
        </div>
        </div>
      </div> 
      </div> 
  );
}
{/* THINGS YOU SHOULD ADD */}
{/* Adding a "Scroll to Top" button*/}
{/* Implementing a dark mode*/}
{/* Make an actual email contact form with Email.js*/}
export const NAVBARITEMS = [
  {
    label: "Home",
    to: "/",
  },
  {
    label: "Find a Lawyer",
    to: "/findLawyer",
  },
  // {
  //   label: "Services",
  //   to: "/services",
  // },
  // {
  //   label: "About Us",
  //   to: "/aboutus",
  // },
  {
    label: "Contact us",
    to: "/contactus",
  },
  {
    label: "Lawyer's Login",
    to: "/signin",
  },
];

export const NAVBARLAWYERITEMS = [
  {
    label: "Appointments",
    to: "/appointments",
  },
  {
    label: "Schedules",
    to: "/schedules",
  },
];

export const HOME_HERO_SECTION = {
  newUpdate: "Get the latest update of Coronavirus (Covid-19)",
  headline: "Book an appointment with a lawyer near you!",
  subText:
    "Choose your lawyer and a convenient time slot based on your availability.",
};

import SearchLawyer from "@assets/images/searchlawyer.jpg";
import Appointment from "@assets/images/sheduleAppointment.svg";
import Support from "@assets/images/support.svg";

export const HOME_SERVICE_SECTION = {
  subTitle: "Services",
  title: "3 Easy Steps to Get Legal Assistance",
  description:
    "All SMART CARE legal services are available on web and mobile platforms, offering quick responses and support from experienced lawyers and legal experts across India.",
  services: [
    {
      id: 1,
      title: "Search Lawyer",
      image: SearchLawyer,
      link: "/findLawyer",
    },
    {
      id: 2,
      title: "Schedule Appointment",
      image: Appointment,
    },
    {
      id: 3,
      title: "24/7 Support",
      image: Support,
    },
  ],
};

import IconMail from "@assets/icons/icon-mail.svg";
import IconCall from "@assets/icons/icon-call.svg";
import IconWebsite from "@assets/icons/icon-website.png";
import IconWhatsapp from "@assets/icons/icon-whatsapp.svg";
import IconLocation from "@assets/icons/icon-location.svg";

export const CONTACT_US_DATA = {
  title: "Contact Us",
  subTitle:
    "We welcome your inquiries and are here to assist you. Please use the following details to get in touch with us.",
  website: {
    icon: IconWebsite,
    website: "https://karmatimefoundation.org",
    text: "Visit our official website or follow us on social media for the latest updates and initiatives:",
    title: "Connect With Us",
  },
  whatsapp: {
    icon: IconWhatsapp,
    website: "https://karmatimefoundation.org",
  },
  contactForm: {
    title: "We look forward to hearing from you!",
    text: "",
  },
  Contacts: [
    {
      icon: IconMail,
      data: ["mylegalhelp.app@gmail.com"],
    },
    {
      icon: IconLocation,
      data: ["Bangalore"],
    },
    {
      icon: IconCall,
      data: ["+91 77956 09690"],
    },
  ],
};

export const APP_DATA = {
  title: "Download app and  make appointment with your lawyer.",
  playStoreLink:
    "https://play.google.com/store/apps/details?id=com.mylegalhelp.mylegalhelp",
  appleStoreLink: "https://apps.apple.com/in/app/my-legal-help/id6747984007",
};

export const generatePasswordFromUser = (formData) => {
  const { firstName, lastName, phone } = formData;

  const phoneStr = phone.toString();
  const last4 = phoneStr.slice(-4);

  let namePart = firstName;
  if (firstName.length < 2) {
    namePart = firstName + lastName;
  }

  return `${namePart}$$${last4}`;
};

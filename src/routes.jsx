import { lazy } from "react";

const Home = lazy(() => import("@pages/Home/Home"));
const AboutUs = lazy(() => import("@pages/AboutUs/AboutUs"));
const FindLawyer = lazy(() => import("@pages/FindLawyer/FindLawyer"));
const ContactUs = lazy(() => import("@pages/ContactUs/ContactUs"));
const DeleteAccount = lazy(() => import("@pages/DeleteAccount/DeleteAccount"));
const SignIn = lazy(() => import("@pages/SignIn/SignIn"));
const SignUp = lazy(() => import("@pages/SignUp/SignUp"));
const Appointments = lazy(() => import("@pages/Appointments/Appointments"));
const Schedules = lazy(() => import("@pages/Schedules/Schedules"));
const MyProfile = lazy(() => import("@pages/MyProfile/MyProfile"));
const Requests = lazy(() => import("@pages/Requests/Requests"));
const UploadDocuments = lazy(() =>
  import("@pages/UploadDocuments/UploadDocuments")
);
const UnderVerification = lazy(() =>
  import("@pages/UnderVerification/UnderVerification")
);

export const MyLegalHelpPublicRoutes = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/findLawyer",
    element: <FindLawyer />,
  },
  {
    path: "/services",
    element: <Home />,
  },
  {
    path: "/aboutus",
    element: <AboutUs />,
  },
  {
    path: "/contactus",
    element: <ContactUs />,
  },
  ,
  {
    path: "/delete",
    element: <DeleteAccount />,
  },
  {
    path: "/signin",
    element: <SignIn />,
  },
  {
    path: "/signup",
    element: <SignUp />,
  },
  {
    path: "/appointments",
    element: <Appointments />,
  },
  {
    path: "/schedules",
    element: <Schedules />,
  },
  {
    path: "/profile",
    element: <MyProfile />,
  },
  {
    path: "/requests",
    element: <Requests />,
  },
  {
    path: "/upload-documents",
    element: <UploadDocuments />,
  },
  {
    path: "/underVerification",
    element: <UnderVerification />,
  },
];

export const MyLegalHelpPrivateRoutes = [];

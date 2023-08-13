import { useEffect, useState } from "react";
// for work_images
import work1 from "../assets/images/myAssets/Matiz-2.png";
import work2 from "../assets/images/myAssets/discord-study-big.png";
import work3 from "../assets/images/myAssets/study-app-big.png";
import work4 from "../assets/images/myAssets/chess-big.png";
import work5 from "../assets/images/myAssets/copadata.png";
import work6 from "../assets/images/myAssets/immo-big.png";
import work7 from "../assets/images/myAssets/todo-tailwind.png";
import work8 from "../assets/images/myAssets/portfolio-old.png";
// works small images

import workSmall1 from "../assets/images/myAssets/Matiz-2.png";
import workSmall2 from "../assets/images/myAssets/discord-3.png";
import workSmall3 from "../assets/images/myAssets/student-app.png";
import workSmall4 from "../assets/images/myAssets/chess.png";
import workSmall5 from "../assets/images/myAssets/copadata.png";
import workSmall6 from "../assets/images/myAssets/real-estate.png";
import workSmall7 from "../assets/images/myAssets/todo-tailwind.png";
import workSmall8 from "../assets/images/myAssets/portfolio-old.png";
// blog post images
// blog image small

//  icon use as img here
import icon from "../assets/images/icons/icon-1.svg";
import icon1 from "../assets/images/icons/icon-2.svg";
// import icon2 from "../assets/images/icons/icon-3.svg";
// import icon3 from "../assets/images/icons/icon-4.svg";
import icon4 from "../assets/images/icons/icon-5.svg";
import icon6 from "../assets/images/icons/icon-6.svg";
// contact image
import iconPhone from "../assets/images/contact/phone-call 1.png";
import iconEmail from "../assets/images/contact/email 1.png";
import iconMap from "../assets/images/contact/map 1.png";
import { CgNotes } from "react-icons/cg";
import { FaRegUser } from "react-icons/fa";
import { AiOutlineHome } from "react-icons/ai";
import { FiCodesandbox } from "react-icons/fi";
import { RiContactsBookLine } from "react-icons/ri";
import { Link, useLocation } from "react-router-dom";

const AllData = () => {
  const [check, setCheck] = useState(false);
  const [local, setLocal] = useState(localStorage.getItem("theme"));
  const [singleData, setSingleData] = useState({});
  const [isOpen, setIsOpen] = useState(false);

  // dark and light theme controls
  useEffect(() => {
    const themeValue = localStorage?.getItem("theme");

    if (!themeValue) {
      setCheck(false);
      localStorage.setItem("theme", "light");
    } else {
      themeValue === "dark" && setCheck(true);
      themeValue === "light" && setCheck(false);
    }

    localStorage?.getItem("theme") === "dark"
      ? document.documentElement.classList.add("dark")
      : document.documentElement.classList.remove("dark");
  }, []);

  // Create and light theme function
  const handleTheme = (value) => {
    if (value === "light") {
      setCheck(false);
      localStorage.setItem("theme", "light");
      setLocal("light");
    } else {
      setCheck(true);
      localStorage.setItem("theme", "dark");
      setLocal("dark");
    }
    localStorage?.getItem("theme") === "dark"
      ? document.documentElement.classList.add("dark")
      : document.documentElement.classList.remove("dark");
  };

  // fillter portfilo data
  const handleData = (text) => {
    if (text === "All") {
      setData(workItems);
    } else {
      const findData = workItems.filter((item) => item.tag === text);
      setData(findData);
    }
  };

  // find items for portfilo  modal open
  const handleModelData = (id) => {
    const find = workItems.find((item) => item?.id === id);
    setSingleData(find);
    setIsOpen(true);
  };

  // find items for Blogs  modal open

  // Active navlinks function
  function NavLink({
    to,
    className,
    activeClassName,
    inactiveClassName,
    ...rest
  }) {
    let location = useLocation();
    let isActive = location.pathname === to;
    let allClassNames =
      className + (isActive ? `${activeClassName}` : `${inactiveClassName}`);
    return <Link className={allClassNames} to={to} {...rest} />;
  }

  // Elements for protfilo section
  const workItems = [
    {
      id: "4",
      tag: "Code",
      title: "Binary Search Tree Chess",
      img: work4,
      imgSmall: workSmall4,
      bg: "#FFF3FC",
      client: "Themeforest",
      langages: "HTML, CSS, Javascript",
      link: "https://lustrous-gumdrop-40ef5d.netlify.app/",
      linkText: "visit the Website",
      description:
        "I built a chess simulation to practice the binary search tree algorithm, where a knight calculates and executes the shortest path to a king. It's an engaging way to illustrate the power of this algorithm in a familiar context.",
    },

    {
      id: "7",
      tag: "Code",
      title: "Minimalist Todo",
      img: work7,
      imgSmall: workSmall7,
      bg: "#FFF3FC",
      client: "Themeforest",
      langages: "HTML, CSS, Javascript, React",
      link: "https://quiet-youtiao-e3b233.netlify.app/",
      linkText: "visit the website",
      description:
        "I created a To-Do app using ReactJS and TailwindCSS with an emphasis on clean and minimalist design. Focusing on aesthetics and minimalism, this app embodies the design philosophy that less can often be more.",
    },

    {
      id: "7",
      tag: "Code",
      title: "outdated portfolio",
      img: work8,
      imgSmall: workSmall8,
      bg: "#FFF3FC",
      client: "Themeforest",
      langages: "HTML, CSS, Javascript, React",
      link: "https://superb-cupcake-78dbe9.netlify.app/",
      linkText: "visit the website",
      description:
        "What was meant to become my old portfolio. A practice project of mine",
    },
    // real estate  TODO:  link
    {
      id: "6",
      tag: "Code",
      title: "Real Estate Explorer",
      img: work6,
      imgSmall: workSmall6,
      bg: "#FFF3FC",
      client: "Themeforest",
      langages: "HTML, CSS, Javascript, React",
      link: "https://wonderful-taffy-bf1c5a.netlify.app/",
      linkText: "visit the Website",
      description:
        "I crafted a real estate app using React, experimenting with unconventional designs and scroll motions. This project was an exciting opportunity to push creative boundaries and enhance my skills in animation and user experience.",
    },

    // Study app master thesis TODO: link
    {
      id: "3",
      tag: "UX/UI",
      title: "Carpe Diem",
      img: work3,
      imgSmall: workSmall3,
      bg: "#FFF3FC",
      client: "Themeforest",
      langages: "UX Research, Figma",
      link: "in progress",
      linkText: "in Progress",
      description:
        "I Designed a productivity app aimed at combating procrastination, employing a user-centered approach to design. Through interviews and iterative designing, I identified key features such as habit tracking and social accountability. The final design, built with a harmonious color scheme of teal, warm gray, and rose, integrates engaging game elements and prioritizes flexibility, motivation, and mental well-being.",
    },

    {
      id: "1",
      tag: "UI/UX",
      title: "Matiz",
      img: work1,
      imgSmall: workSmall1,
      bg: "#FFF0F0",
      client: "Envato",
      langages: "UX, Figma",
      link: "https://valeriachavezklier8.wixsite.com/matiz",
      linkText: "Matiz",
      description:
        "My classmates and I explored the potential of tangible user interfaces to enhance the yoga experience, conducting interviews and utilizing an affinity diagram to guide our insights. We translated these findings into a video prototype using After Effects, showcasing an innovative yoga mat designed to merge physical practice with digital feedback.",
    },
    // The spqr bot TODO: Set as public
    {
      id: "2",
      tag: "Code",
      title: "ScholarLegion",
      img: work2,
      imgSmall: workSmall2,
      bg: "#FFF3FC",
      client: "Themeforest",
      langages: "Python, Django",
      link: "https://github.com/simonlearnscoding/STUDY_BOT",
      linkText: "themeforest.net",
      description:
        "I created an app using Python, Django, and MySQL that tracks time spent in Discord study voice channels, offering rewards as incentives. The development process allowed me to explore various software design patterns, including the PubSub Event Manager and Factory Singleton pattern, enhancing my understanding of shared state management in Python. With around 20 active users over the last year, this project not only taught me about maintaining and evolving a product but also demonstrated the real-world impact of thoughtful design and execution.",
    },

    // Zenon TODO: link
    {
      id: "5",
      tag: "UX/UI",
      title: "Zenon Onboarding flow",
      img: work5,
      imgSmall: workSmall5,
      bg: "#FFF3FC",
      client: "Themeforest",
      langages: "UX Research, Adobe XD",
      link: "in progress",
      linkText: "in progress..",
      description:
        "In collaboration with Copadata, I conducted user research for their SaaS Zenon, identifying pain points in the onboarding flow. I proposed minimizing text content and presented an alternative approach with a mid-fidelity prototype, targeting the most common user challenges.",
    },
  ];
  const [data, setData] = useState(workItems);

  // Elements for Blogs section

  // Menu items for Homepage One
  const menuItem = [
    {
      id: "01",
      name: "Home",
      link: "/home/homePage",
      icon: <AiOutlineHome />,
    },
    {
      id: "02",
      name: "About",
      link: "/home/about",
      icon: <FaRegUser />,
    },
    {
      id: "06",
      name: "Resume",
      link: "/home/resume",
      icon: <CgNotes />,
    },
    {
      id: "03",
      name: "Works",
      link: "/home/works",
      icon: <FiCodesandbox />,
    },
    // {
    //   id: "04",
    //   name: "Blogs",
    //   link: "/home/blogs",
    //   icon: <FaBlogger />,
    // },
    {
      id: "05",
      name: "Contact",
      link: "/home/contact",
      icon: <RiContactsBookLine />,
    },
  ];

  // Menu items for Homepage Two
  const menuItemTwo = [
    {
      id: "01",
      name: "About",
      link: "/about",
      icon: <FaRegUser />,
    },
    {
      id: "02",
      name: "Resume",
      link: "/resume",
      icon: <CgNotes />,
    },
    {
      id: "03",
      name: "Works",
      link: "/works",
      icon: <FiCodesandbox />,
    },
    // {
    //   id: "04",
    //   name: "Blogs",
    //   link: "/homeTwo/blogs",
    //   icon: <FaBlogger />,
    // },
    {
      id: "05",
      name: "Contact",
      link: "/contact",
      icon: <RiContactsBookLine />,
    },
  ];

  // Slider image for Clients
  const sliderImg = [];
  //   img1,
  //   img2,
  //   img3,
  //   img4,
  //   img5,
  //   img1,
  //   img2,
  //   img3,
  //   img4,
  //   img5,
  // ];

  // serviceArray items for about page
  const serviceArray = [
    {
      id: "1",
      icon: icon6,
      title: "Web Development",
      des: "I develop responsive and visually appealing websites with HTML, CSS, JS and React",
      color: "#269FFF",
      bg: "#F3FAFF",
    },
    {
      id: "2",
      icon: icon,
      title: "Ui/Ux Design",
      des: " I craft user-centered designs for intuitive and engaging experiences",
      color: "#D566FF",
      bg: "#FCF4FF",
    },
    {
      id: "3",
      icon: icon1,
      title: "Sound Design",
      des: "I use Sound to evoke emotions and complement visual environments",
      color: "#DDA10C",
      bg: "#FEFAF0",
    },
    {
      id: "4",
      icon: icon4,
      title: "IT",
      des: "I optimize home technology through system configuration, using Linux and Python.",
      color: "#DDA10C",
      bg: "#FEFAF0",
    },
  ];

  // educationArray items for Resume page
  const educationArray = [
    {
      id: 1,
      date: "2020-2023",
      title: "Master of science in Human Computer Interaction (UX/UI)",
      place: "Fachhochschule Salzburg",
      bg: "#FFF4F4",
    },

    {
      id: 2,
      date: "2016 - 2020",
      title: "Bachelor of Arts in Multimedia Arts",
      place: "Fachhoschule Salzburg",
      bg: "#FFF1FB",
    },

    {
      id: 3,
      date: "2011 - 2016",
      title: "High School Diploma",
      place: "Christian Doppler evening Gymnasium",
      bg: "#FFF4F4",
    },
  ];
  // experiencesArray items for Resume page
  const experiencesArray = [
    {
      id: 1,
      date: "2021 - 2023",
      title: "Fullstack Web development",
      place: "The Odin Project",
      bg: "#EEF5FA",
    },

    {
      id: 2,
      date: "2020-2021",
      title: "Foundations of Computer Science",
      place: "Harvards CS50 online course",
      bg: "#F2F4FF",
    },
  ];
  // awardsArray items for Resume page
  const awardsArray = [
    {
      id: 1,
      date: "2015-2017",
      title: "  Graphic Designer",
      place: "Web Graphy, Los Angeles, CA",
      bg: "#FCF4FF",
    },

    {
      id: 2,
      date: "2014 - 2015",
      title: "Jr. Web Developer",
      place: "Creative Gigs.",
      bg: "#FCF9F2",
    },

    {
      id: 3,
      date: "2015-2017",
      title: "Best Freelancer",
      place: "Fiver & Upwork Level 2 & Top Rated",
      bg: "#FCF4FF",
    },
  ];

  // Working Skills items for Resume page
  const lineArray = [
    {
      id: "01",
      color: "#FF6464",
      name: "UX/UI",
      number: "80",
    },
    {
      id: "02",
      color: "#9272D4",
      name: "Frontend Development",
      number: "70",
    },
    {
      id: "03",
      color: "#5185D4",
      name: "Backend Development",
      number: "40",
    },
    {
      id: "03",
      color: "#CA56F2",
      name: "Languages",
      number: "80",
    },
  ];

  // Personal information for contact pages
  const contactArray = [
    {
      id: "01",
      icon: iconPhone,
      title: "Phone ",
      item1: " +43 660 215 40 31 ",
      item2: " +43 660 215 40 31 ",
      bg: "#FCF4FF",
    },
    {
      id: "02",
      icon: iconEmail,
      title: "Email ",
      item1: "simon.muscas@gmail.com",
      item2: "simon.muscas@gmail.com",
      bg: "#EEFBFF",
    },
    {
      id: "03",
      icon: iconMap,
      title: "Address ",
      item1: "via Serafino Balestra 9b",
      item2: "Locarno, Ticino, Switzerland",
      bg: "#F2F4FF",
    },
  ];

  return {
    handleTheme,
    check,
    local,
    handleData,
    data,
    singleData,
    handleModelData,
    isOpen,
    setIsOpen,
    menuItem,
    NavLink,
    menuItemTwo,
    serviceArray,
    sliderImg,
    educationArray,
    experiencesArray,
    awardsArray,
    lineArray,
    contactArray,
  };
};

export default AllData;

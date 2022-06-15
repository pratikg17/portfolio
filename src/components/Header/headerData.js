import { ReactComponent as GithubIcon } from "../../assets/userIcons/github.svg";
import { ReactComponent as LinkedinIcon } from "../../assets/userIcons/linkedin.svg";
import { ReactComponent as EmailIcon } from "../../assets/userIcons/email.svg";
import { ReactComponent as BlogIcon } from "../../assets/userIcons/blog.svg";

export const socialIconsData = [
  {
    component: <GithubIcon className="socialIcon" />,
    url: "https://github.com/pratikg17",
  },
  {
    component: <LinkedinIcon className="socialIcon" />,
    url: "https://www.linkedin.com/in/pratikg17/",
  },
  {
    component: <EmailIcon className="socialIcon" />,
    url: "mailto:pjgawand@gmail.com",
  },
];

export const sectionMenuLinks = [
  {
    name: "About me",
    href: "#about-me",
  },
  {
    name: "Skills",
    href: "#skills",
  },
  {
    name: "Projects",
    href: "#projects",
  },
];

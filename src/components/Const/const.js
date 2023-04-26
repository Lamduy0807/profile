export const INFOR = [
  { title: "First Name", infor: "Duy" },
  { title: "Last Name", infor: "Lâm" },
  { title: "Age", infor: 22 },
  { title: "Nationality", infor: "Vietnamese" },
  { title: "Phone", infor: "(+84) 901091872" },
  { title: "Email", infor: "angelnho36@gmail.com" },
  { title: "Address", infor: "HCMC" },
  { title: "Languages", infor: "English, Vietnamese" },
];
export const SKILLS = [
  { percent: 90, content: "HTML" },
  { percent: 90, content: "CSS" },
  { percent: 90, content: "Javascripts" },
  { percent: 90, content: "React" },
  { percent: 60, content: "Java" },
  { percent: 70, content: "C#" },
  { percent: 50, content: "C++" },
  { percent: 30, content: "Python" },
];

export const TIMELINES = [
  {
    time: "2017 - 2023",
    title: "Software Engineering diploma",
    location: "UIT",
    para: "Software Engineering degree with GPA 8.49/10",
  },
  {
    time: "Jul 2022 - Sep 2022",
    title: "Front end developer",
    location: "Vitalify Asia Co. Ltd,",
    para: "Intern Frontend developer for 2 months",
  },
  {
    time: "2017 - 2019",
    title: "High school diploma",
    location: "Tran Van On High school",
    para: "High school diploma",
  },
];

export const Add = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="33"
      height="33"
      viewBox="0 0 24 24"
    >
      <path
        fill="#da9900"
        d="M5 21q-.825 0-1.413-.588T3 19V9q0-.825.588-1.413T5 7h4V5.825q0-.2.038-.388t.112-.362q.075-.175.175-.338t.25-.312L11.3 2.7q.3-.3.7-.3t.7.3l1.725 1.725q.275.275.425.637t.15.763V11h4q.825 0 1.413.588T21 13v6q0 .825-.588 1.413T19 21H5Zm0-2h2v-2H5v2Zm0-4h2v-2H5v2Zm0-4h2V9H5v2Zm6 8h2v-2h-2v2Zm0-4h2v-2h-2v2Zm0-4h2V9h-2v2Zm0-4h2V5h-2v2Zm6 12h2v-2h-2v2Zm0-4h2v-2h-2v2Z"
      />
    </svg>
  );
};
export const Mail = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="33"
      height="33"
      viewBox="0 0 24 24"
    >
      <path
        fill="#da9900"
        d="M4 20q-.825 0-1.413-.588T2 18V6q0-.825.588-1.413T4 4h16q.825 0 1.413.588T22 6v12q0 .825-.588 1.413T20 20H4Zm8-7.175q.125 0 .263-.038t.262-.112L19.6 8.25q.2-.125.3-.313t.1-.412q0-.5-.425-.75T18.7 6.8L12 11L5.3 6.8q-.45-.275-.875-.012T4 7.525q0 .25.1.438t.3.287l7.075 4.425q.125.075.263.113t.262.037Z"
      />
    </svg>
  );
};
export const Phone = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="33"
      height="33"
      viewBox="0 0 24 24"
    >
      <path
        fill="#da9900"
        d="M2 21q-.825 0-1.413-.588T0 19V5q0-.825.588-1.413T2 3h20q.825 0 1.413.588T24 5v14q0 .825-.588 1.413T22 21H2Zm7-7q1.25 0 2.125-.875T12 11q0-1.25-.875-2.125T9 8q-1.25 0-2.125.875T6 11q0 1.25.875 2.125T9 14Zm9.275 3.375q.275.275.7.25t.7-.3l.7-.7q.275-.275.3-.65t-.2-.675l-.675-.9q-.125-.2-.338-.3T19 14h-1.15q-.15-.45-.25-.963T17.5 12q0-.525.1-1.013t.25-.987H19q.25 0 .463-.1t.337-.3l.675-.9q.225-.3.2-.675t-.3-.65l-.7-.7q-.275-.275-.7-.3t-.7.25q-1.05 1.05-1.663 2.462T16 12q0 1.5.613 2.913t1.662 2.462ZM2.1 19h13.8q-1.05-1.875-2.9-2.938T9 15q-2.15 0-4 1.063T2.1 19Z"
      />
    </svg>
  );
};

export const CONTACT = [
  {
    svg: <Add />,
    title: "Address point",
    content: "Dormitory A - VNU, Linh Trung ward, Thu Duc city, HCMC",
  },
  {
    svg: <Mail />,
    title: "Email me",
    content: "angelnho36@gmail.com",
  },
  {
    svg: <Phone />,
    title: "Phone me",
    content: "(+84) 901091872",
  },
];

export const LINK = [
  {
    icon: "gg:facebook",
    href: "https://www.facebook.com/duy.lam.52438174",
  },
  {
    icon: "akar-icons:linkedin-v2-fill",
    href: "https://www.linkedin.com/in/duy-l%C3%A2m-418713218/",
  },
  {
    icon: "simple-icons:zalo",
    href: "https://zalo.me/0901091872",
  },
  {
    icon: "akar-icons:github-fill",
    href: "https://github.com/Lamduy0807",
  },
];

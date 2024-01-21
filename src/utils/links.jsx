import { ImProfile } from "react-icons/im";
import { GrTransaction } from "react-icons/gr";
import { FaPiggyBank } from "react-icons/fa";
import { MdDashboard } from "react-icons/md";
import { getUserFromLocalStorage } from "./userLocalStorage";
// import { UseSelector } from "react-redux";

// const user = getUserFromLocalStorage() || "james brown";
// const name = user?.name.split(" ")[0].toLowerCase() || "james";
const name = "james";

const links = [
  {
    id: 1,
    text: "dashboard",
    path: `/user`,
    icon: <MdDashboard />,
  },
  {
    id: 2,
    text: "accounts",
    path: `/user/accounts`,
    icon: <FaPiggyBank />,
  },
  {
    id: 3,
    text: "profile",
    path: `/user/profile`,
    icon: <ImProfile />,
  },
  {
    id: 4,
    text: "transact",
    path: `/user/transact`,
    icon: <GrTransaction />,
  },
];
export default links;

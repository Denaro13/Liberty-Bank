import { ImProfile } from "react-icons/im";
import { GrTransaction } from "react-icons/gr";
import { FaPiggyBank } from "react-icons/fa";
import { MdDashboard } from "react-icons/md";

const user = "james";

const links = [
  {
    id: 1,
    text: "dashboard",
    path: `/user/${user}`,
    icon: <MdDashboard />,
  },
  {
    id: 2,
    text: "accounts",
    path: `/user/${user}/accounts`,
    icon: <FaPiggyBank />,
  },
  {
    id: 3,
    text: "profile",
    path: `/user/${user}/profile`,
    icon: <ImProfile />,
  },
  {
    id: 4,
    text: "transact",
    path: `/user/${user}/transact`,
    icon: <GrTransaction />,
  },
];
export default links;

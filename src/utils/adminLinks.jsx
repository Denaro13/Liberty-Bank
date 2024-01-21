import { ImProfile } from "react-icons/im";
import { GrTransaction } from "react-icons/gr";
import { FaPiggyBank } from "react-icons/fa";
import { MdDashboard } from "react-icons/md";

const links = [
  {
    id: 1,
    text: "dashboard",
    path: `/admin`,
    icon: <MdDashboard />,
  },
  {
    id: 2,
    text: "profile",
    path: `/admin/profile`,
    icon: <ImProfile />,
  },
];
export default links;

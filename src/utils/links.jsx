import { IoBarChartSharp } from "react-icons/io5";
import { MdQueryStats } from "react-icons/md";
import { FaWpforms } from "react-icons/fa";
import { ImProfile } from "react-icons/im";

const user = "james";

const links = [
  {
    id: 1,
    text: "dashboard",
    path: `/user/${user}`,
    icon: <IoBarChartSharp />,
  },
  {
    id: 2,
    text: "accounts",
    path: `/user/${user}/accounts`,
    icon: <MdQueryStats />,
  },
  {
    id: 3,
    text: "profile",
    path: `/user/${user}/profile`,
    icon: <FaWpforms />,
  },
  {
    id: 4,
    text: "transact",
    path: `/user/${user}/transact`,
    icon: <ImProfile />,
  },
];
export default links;

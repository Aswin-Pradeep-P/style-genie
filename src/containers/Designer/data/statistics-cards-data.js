import {
  UserIcon,
  ChartBarIcon,
} from "@heroicons/react/24/solid";

export const statisticsCardsData = [
  {
    color: "pink",
    icon: UserIcon,
    title: "Today's Orders",
    value: "20",
    footer: {
      color: "text-green-500",
      value: "+3%",
      label: "than last month",
    },
  },
  {
    color: "orange",
    icon: ChartBarIcon,
    title: "Sales",
    value: "₹30,000",
    footer: {
      color: "text-green-500",
      value: "+5%",
      label: "than yesterday",
    },
  },
];

export default statisticsCardsData;

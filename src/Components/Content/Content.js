import React from "react";
import NameCard from "./NameCard";
import Graph from "./Graph";
import AddComponent from "./AddComponent";
import TopCountries from "./TopCountries";
import Segmentation from "./Segmentation";
import Satisfication from "./Satisfiction";
import Icon from "../DashboardComponents/Icon";
import IconButton from "../DashboardComponents/IconButton";
const employeeData = [
  {
    id: 1,
    name: "Facebook",
    position: "Performance of Facebook",
    transactions: 3490,
    rise: true,
    tasksCompleted: 3,
    imgId: "fab fa-facebook-f",
  },

  {
    id: 2,
    name: "Twitter",
    position: "Performance of Twitter",
    transactions: 590,
    rise: false,
    tasksCompleted: 5,
    imgId: "fab fa-twitter",
  },

  {
    id: 3,
    name: "LinkedIn",
    position: "Performance of LinkedIn",
    transactions: 2600,
    rise: true,
    tasksCompleted: 1,
    imgId: "fab fa-linkedin-in",
  },
];

function Content({ onSidebarHide }) {
  return (
    <div className="flex w-full">
      <div className="w-full h-screen hidden sm:block sm:w-20 xl:w-60 flex-shrink-0">
        .
      </div>
      <div className=" h-screen flex-grow overflow-x-hidden overflow-auto flex flex-wrap content-start p-2">
        <div className="w-full sm:flex p-2 items-end">
          <div className="sm:flex-grow flex justify-between">
            <div className="">
              <div className="flex items-center">
                <div className="text-3xl font-bold text-[#5a3bf9]">
                  Hello Aditya
                </div>
                <div className="flex items-center p-2 bg-card ml-2 rounded-xl">
                  <Icon path="star" className="text-premium-yellow" />

                  <div className="ml-2 font-bold text-premium-yellow">
                    PREMIUM
                  </div>
                </div>
              </div>
              <div className="flex items-center">
                <div className="ml-2">September 18</div>
              </div>
            </div>
            <IconButton
              icon="align-right"
              className="block sm:hidden text-[#5a3bf9]"
              onClick={onSidebarHide}
            />
          </div>
          <div className="w-full sm:w-56 mt-4 sm:mt-0 relative">
            <Icon
              path="search"
              className="w-5 h-5 search-icon left-3 absolute"
            />
            <form action="#" method="POST">
              <input
                type="text"
                name="company_website"
                id="company_website"
                className="pl-12 py-2 pr-2 block w-full rounded-lg border-gray-300 bg-card"
                placeholder="search"
              />
            </form>
          </div>
        </div>
        {employeeData.map(
          ({
            id,
            name,
            position,
            transactions,
            rise,
            tasksCompleted,
            imgId,
          }) => (
            <NameCard
              key={id}
              id={id}
              name={name}
              position={position}
              transactionAmount={transactions}
              rise={rise}
              tasksCompleted={tasksCompleted}
              imgId={imgId}
            />
          )
        )}

        <div className="w-full p-2 lg:w-2/3">
          <div className="rounded-lg bg-card lg:h-80 p-5">
            <Graph />
          </div>
        </div>
        <div className="w-full p-2 lg:w-1/3">
          <div className="rounded-lg bg-card h-80">
            <TopCountries />
          </div>
        </div>

        <div className="w-full p-2 lg:w-1/3">
          <div className="rounded-lg bg-card h-80">
            <Segmentation />
          </div>
        </div>
        <div className="w-full p-2 lg:w-1/3">
          <div className="rounded-lg bg-card h-80">
            <Satisfication />
          </div>
        </div>
        <div className="w-full p-2 lg:w-1/3">
          <div className="rounded-lg bg-card overflow-hidden h-80">
            <AddComponent />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Content;

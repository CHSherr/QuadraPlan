import Image from "next/image";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Card from "./components/Card";

export default function Home() {
  return (
    <div className="flex flex-col h-[100vh]">
      <Navbar />
      <div className="grid grid-cols-8 grow">
        <Sidebar />
        <div className="col-start-2 flex flex-col pt-[50px]">
          <h2 className="pb-[-10px] text-center text-white ">URGENT</h2>
          <div className="grow">
            <div className="h-[42%] flex flex-row tems-end">
              <h2 className="writing-mode-vertical-rl ml-[50%] text-center ">
                IMPORTANT
              </h2>
            </div>
            <div className="h-[42%] flex flex-row tems-end mt-[40px]">
              <h2 className="writing-mode-vertical-rl ml-[50%] text-center ">
                NOT IMPORTANT
              </h2>
            </div>
          </div>
        </div>
        <div className="col-start-3 flex flex-col pt-[50px] ">
          <h2 className="pb-[-10px] w-[275%] text-center ">URGENT</h2>
          <div className="overflow-visible flex flex-col  gap-[40px] grow">
            <Card title="DO" tasks={["Task 1", "Task 2", "Task 3"]} />
            <Card title="PLAN" tasks={["Plan Task 1", "Plan Task 2"]} />
          </div>
        </div>
        <div className="col-start-6 flex flex-col pt-[50px]">
          <h2 className="pb-[-10px] w-[275%] text-center ">NOT URGENT</h2>
          <div className="overflow-visible flex flex-col  gap-[40px]  grow">
            <Card
              title="DELEGATE"
              tasks={["Delegate Task 1", "Delegate Task 2"]}
            />
            <Card title="DISCARD" tasks={["Eliminate Task 1"]} />
          </div>
        </div>
      </div>
    </div>
  );
}

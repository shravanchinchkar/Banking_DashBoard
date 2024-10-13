import { useState } from "react";
import "./App.css";

function App() {
  const [currentbalance, setcurrentbalance] = useState(1000);
  const [amount, setamount] = useState("");

  const handelAmount = (e) => {
    setamount(e.target.value);
  };

  const addAmount = () => {
    if (amount === "") {
      alert("Please enter the amount");
    } else {
      let depositamount = parseInt(amount);
      let currentamount = currentbalance + depositamount;
      setcurrentbalance(currentamount);
      setamount("");
    }
  };

  const removeAmount = () => {
    if (amount === "") {
      alert("Please enter the amount");
    } else {
      let removeAmount = parseInt(amount);
      if (currentbalance === 0) {
        alert("Don't have sufficient amount");
        setamount("");
      } else {
        let currentamount = currentbalance - removeAmount;
        setcurrentbalance(currentamount);
        setamount("");
      }
    }
  };
  return (
    <>
      <div className="maincontainer w-[100vw] h-[100vh]">
        <div className="relative bg-orange-500 sm:w-[100%] sm:h-[40vh] lg:h-[50vh] xl:h-[40vh] new-mobile:h-[30vh]">
          {/* Child One  */}
          <div className="bg-white new-mobile:w-[280px] new-mobile:h-[100px] sm:w-[280px] sm:h-[120px] new-sm:w-[350px] lg:w-[400px] lg:h-[150px] rounded-bl-lg rounded-br-lg m-auto new-mobile:mt-[0.2rem]  sm:mt-[0.5rem]">
            <img
              src="./assets/BankOfBarodaLogo.png"
              alt="logo"
              className="w-[100%] h-[100%]"
            />
          </div>
        </div>

        <div className="absolute z-10 sm:left-[20%] sm:top-[150px] new-sm:left-[25%] new-md:left-[27%] new-md-2:left-[29%] lg:left-[29%] lg:top-[210px]  new-lg-2:left-[30%] xl:left-[35%] xl:top-[185px] new-mobile:top-[120px] new-mobile:left-[60px] new-mobile-2:left-[90px]"
        >
          <div className="displayBox  new-mobile:w-[280px] new-mobile:h-[100px] sm:w-[400px] sm:h-[200px] xl:w-[450px] xl:h-[200px]   ml-auto mr-auto text-orange-600 mt-[1rem] bg-white 
          new-mobile:p-[10px] sm:p-[2rem] rounded-lg">

            <div
              className="title flex justify-center items-center text-center new-mobile:text-[21px] sm:text-3xl uppercase font-bold
            sm:w-[350px] sm:h-[50px] m-auto"
            >
              Banking DashBoard
            </div>
            <div className="text-center mt-[1rem] m-auto new-mobile:text-[17px]  sm:text-2xl font-bold text-orange-600">
              Current Balance:
              <span className="font-bold">
                ${currentbalance === 1000 ? "1000" : currentbalance}
              </span>
            </div>

          </div>

          <div className="inputBox new-mobile:w-[280px] sm:w-[420px] lg:w-[450px] m-auto mt-[1rem] mb-[1rem] sm:p-[2rem] new-mobile:p-[1rem] bg-orange-500 rounded-lg">
            <div className="flex flex-col gap-[1rem]">
              <input
                type="text"
                placeholder="Enter Amount"
                className="p-[0.5rem] outline-none border-none rounded-lg"
                value={amount}
                onChange={handelAmount}
              />
              <button className="button-54 uppercase new-mobile:w-[100%] new-mobile:h-[40px] new-mobile:text-sm" onClick={addAmount}>
                Deposit Amount
              </button>
              <button className="button-54 mb-[1rem] new-mobile:w-[100%] new-mobile:h-[40px] new-mobile:text-sm" onClick={removeAmount}>
                Withdraw Amount
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default App;

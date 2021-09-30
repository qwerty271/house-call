import "./App.css";
import Form from "../Form/Form";

function App() {
  function daysInMonth(month, year) {
    let monthNum = new Date(Date.parse(month + " 1," + year)).getMonth() + 1;
    return new Date(year, monthNum, 0).getDate();
  }
  console.log(
    new Date(
      new Date().getFullYear(),
      new Date().getMonth(),
      new Date().getDay()
    ).getTime()
  );
  const reverseDate1 = "30.09.2021".split(".").reverse();
  const reverseDateMs1 = new Date(
    reverseDate1[0],
    reverseDate1[1],
    reverseDate1[2]
  ).getTime();
  const reverseDate2 = "10.10.2021".split(".").reverse();
  const reverseDateMs2 = new Date(
    reverseDate2[0],
    reverseDate2[1],
    reverseDate2[2]
  ).getTime();
  // console.log(reverseDateMs1);
  // console.log(reverseDateMs2);
  // console.log(reverseDateMs2 - reverseDateMs1);
  // console.log(
  //   new Date(
  //     new Date().getFullYear(),
  //     new Date().getMonth(),
  //     new Date().getDay()
  //   )
  // );
  // console.log(new Date().getMonth());
  // console.log(daysInMonth(8, 2025));
  return (
    <div className="page">
      <Form />
    </div>
  );
}

export default App;

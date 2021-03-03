// import logo from './logo.svg';
import './App.css';

function App() {
  // const City = ["Karachi", "Lahore", "Islamabad", "Multan", "Headraabad", "Rawalpindi"]
  const City1 = [{
    CityName: "Karachi",
    Temprature: "30c",
    Percepsation: "10%"

  },
  {
    CityName: "Lahore",
    Temprature: "10c",
    Percepsation: "8%"
  },
  {
    CityName: "Islamadab",
    Temprature: "25c",
    Percepsation: "15%"
  },
  {
    CityName: "Multan",
    Temprature: "40c",
    Percepsation: "20%"

  },
  {
    CityName: "Hyderabad",
    Temprature: "38c",
    Percepsation: "18%"
  },
  {
    CityName: "Rawalpindi",
    Temprature: "45c",
    Percepsation: "15%"
  }
  ]
  return (
    <>
      <div className="Header"><h1>Hello Header</h1></div>
      
      {City1.map((value, i) => {
        return (
          <div className="Border">
            <h1>CItyName :{value.CityName}</h1>
            <h2>Temprature :{value.Temprature}</h2>
            <h3>Percepsation :{value.Percepsation}</h3>
          </div>
        )
      })}

      {/* {City.map((CityNmae) => {
        return (
          <div><h2>{CityNmae}</h2></div>
        )
      })} */}

      // {/* {[<h1>Karachi</h1>,<h2>Lahore</h2>, <h3>Islamabad</h3>,<h4>Multan</h4>,<h5>Headraabad</h5>,<h6>Rawalpindi</h6>]} */}
      <div className="Footer" > <h1>Hello Footer</h1></div>
    </>
  );
}

export default App;

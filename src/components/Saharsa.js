// https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/calendarByDistrict?district_id=71&date=09-05-2021
import { Component,useState,useEffect} from 'react';
import DatePicker from "react-datepicker";
import "../App.css"
import moment from 'moment';
import "react-datepicker/dist/react-datepicker.css";




function Saharsa() {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState();
    const [startDate, setStartDate] = useState(new Date());
    var date = new Date(startDate);
    const fDate = date.getDate() + '/' + Number(date.getMonth() + 1) + '/' + date.getFullYear()


    useEffect(() => {
      setLoading(true);
      fetch(`https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/calendarByDistrict?district_id=71&date=${fDate}`)
        .then((res) => res.json())
        .then((res) => {
          setData(res.centers);
        })
        .catch((err) => {
          setError(err);
        })
        .finally(() => {
          setLoading(false);
        });
    }, [fDate]);
   

    if (loading) {
      return <p>Data is loading...</p>;
    }
  
    if (error || !Array.isArray(data)) {
      return <p>There was an error loading your data!</p>;
    }
   
     
    return (
        <div className="container">
         Select Date : 
            <div className="date">  
                <DatePicker selected={startDate} onChange={date => setStartDate(date)} dateFormat="Pp" autoFocus={true} minDate={moment().toDate()}/>
            </div>
           
        <table className="table">
            <thead>
            <tr>
                {
                    data && (<>
                        <th style={{textAlign:"left"}}>Location Name</th>
                <th style={{borderRight:"2px solid red"}}>Age</th>
                <th style={{marginLeft:"38px"}}>Availability</th> </>
                    )
                }
            </tr>
            </thead>
            <tbody >
        {data.map((item) => {
              return item.sessions.map((unit, unitIndex) => {
                  if(unit.min_age_limit === 18){
                    return (
                        <tr style={{marginBottom:"10px"}} key={unitIndex+1}>
                        <td style={{textAlign:"left",borderBottom:"1px solid brown"}}>{item.name}</td>     
                        <td style={{borderBottom:"1px solid brown"}}>{unit.min_age_limit}</td>
                        <td style={{color:unit.available_capacity === 0 ? "red" : "green",marginLeft:"38px",textAlign:"right",borderBottom:"1px solid brown"}}  >{unit.available_capacity}</td>  
                        </tr>
                      )
                  }
              }
        );
        }
        )}
        </tbody>
            </table>
            <a target="_blank" href="https://www.cowin.gov.in/">Powerd by Cowin</a> <br/>
        </div>
    );
  }


export default Saharsa;
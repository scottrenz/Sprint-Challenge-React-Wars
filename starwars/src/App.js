import React, { useEffect, useState } from "react"
import axios from 'axios'
import './App.css';
import Cards from './cards'
import {H1Style,H2Style} from './cards'
const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.
  const [imgData1, setData1] = useState('')
  const [imgData2, setData2] = useState('')
  const [imgData3, setData3] = useState('')
  const [imgData4, setData4] = useState('')
  const [imgData5, setData5] = useState('')
  const [imgData6, setData6] = useState('')
  const [imgData7, setData7] = useState('')
  const [imgData8, setData8] = useState('')
  const [imgData9, setData9] = useState('')

  // Fetch characters from the star wars api in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.
  
  function g(page) {
    return axios.get('https://swapi.co/api/people/?page=' + page)
  }
  
  useEffect(() => {
    axios.all([g(1), g(2), g(3), g(4), g(5), g(6), g(7), g(8), g(9)])
      .then(axios.spread(function (data1,data2,data3,data4,data5,data6,data7,data8,data9)
      {
        setData1(data1.data.results) 
        setData2(data2.data.results) 
        setData3(data3.data.results) 
        setData4(data4.data.results) 
        setData5(data5.data.results) 
        setData6(data6.data.results) 
        setData7(data7.data.results) 
        setData8(data8.data.results) 
        setData9(data9.data.results) 
     }
  ))
    .catch (data => { 
      console.log('data error 1',data)
            }
             )
            }, []);
let darr = [imgData1,imgData2,imgData3,imgData4,imgData5,imgData6,imgData7,imgData8,imgData9]
            let data=[];
            let n=0
for (let j=0;j<darr.length;j++)            
{
  for (let i=0;i<darr[j].length;i++)
{
  data[n] = ((n + 3) / 3 ) + ' ' + darr[j][i].name;
  n=n+1
  data[n] = darr[j][i].birth_year;
  n=n+1
  data[n] = darr[j][i].url;
  n=n+1
}
}
  return (
    
    <div className="App">
<H1Style className="Header">React Wars</H1Style>
      <H2Style className="Header">War Particpants</H2Style>
      <H2Style className="Header">Name: Birth Year: Profile Link:</H2Style>
<Cards data={data} ></Cards>
    </div>
  );
}

export default App;

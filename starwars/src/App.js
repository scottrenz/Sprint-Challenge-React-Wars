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

  useEffect(() => {
    axios.get('https://swapi.co/api/people/?page=1')
    .then (data =>   
      {
        // console.log(data.data.results)
        setData1(data.data.results) 
     }
  )
    .catch (data => { 
      // console.log('data 1 error',data)
            }
             )
            }, []);

            useEffect(() => {
              axios.get('https://swapi.co/api/people/?page=2')
              .then (data =>   
                {
                  // console.log(data.data.results)
                  setData2(data.data.results) 
               }
            )
              .catch (data => { 
                // console.log('data 2 error',data)
                      }
                       )
                      }, []);

                      useEffect(() => {
                        axios.get('https://swapi.co/api/people/?page=3')
                        .then (data =>   
                          {
                            // console.log(data.data.results)
                            setData3(data.data.results) 
                         }
                      )
                        .catch (data => { 
                          // console.log('data 3 error',data)
                                }
                                 )
                                }, []);

                                useEffect(() => {
                                  axios.get('https://swapi.co/api/people/?page=4')
                                  .then (data =>   
                                    {
                                      // console.log(data.data.results)
                                      setData4(data.data.results) 
                                   }
                                )
                                  .catch (data => { 
                                    // console.log('data 4 error',data)
                                          }
                                           )
                                          }, []);

                                          useEffect(() => {
                                            axios.get('https://swapi.co/api/people/?page=5')
                                            .then (data =>   
                                              {
                                                // console.log(data.data.results)
                                                setData5(data.data.results) 
                                             }
                                          )
                                            .catch (data => { 
                                              // console.log('data 5 error',data)
                                                    }
                                                     )
                                                    }, []);

                                                    useEffect(() => {
                                                      axios.get('https://swapi.co/api/people/?page=6')
                                                      .then (data =>   
                                                        {
                                                          // console.log(data.data.results)
                                                          setData6(data.data.results) 
                                                       }
                                                    )
                                                      .catch (data => { 
                                                        // console.log('data 6 error',data)
                                                              }
                                                               )
                                                              }, []);

                                                              useEffect(() => {
                                                                axios.get('https://swapi.co/api/people/?page=7')
                                                                .then (data =>   
                                                                  {
                                                                    // console.log(data.data.results)
                                                                    setData7(data.data.results) 
                                                                 }
                                                              )
                                                                .catch (data => { 
                                                                  // console.log('data 7 error',data)
                                                                        }
                                                                         )
                                                                        }, []);

                                                                        useEffect(() => {
                                                                          axios.get('https://swapi.co/api/people/?page=8')
                                                                          .then (data =>   
                                                                            {
                                                                              // console.log(data.data.results)
                                                                              setData8(data.data.results) 
                                                                           }
                                                                        )
                                                                          .catch (data => { 
                                                                            // console.log('data 8 error',data)
                                                                                  }
                                                                                   )
                                                                                  }, []);

                                                                                  useEffect(() => {
                                                                                    axios.get('https://swapi.co/api/people/?page=9')
                                                                                    .then (data =>   
                                                                                      {
                                                                                        // console.log(data.data.results)
                                                                                        setData9(data.data.results) 
                                                                                     }
                                                                                  )
                                                                                    .catch (data => { 
                                                                                      // console.log('data 9 error',data)
                                                                                            }
                                                                                             )
                                                                                            }, []);

            let data=[];
            // console.log('count =',imgData1.length)                                                                                                                                                                                                                                                                                                                                        
for (let i=0;i<imgData1.length;i++)
{
  // console.log('for loop:',imgData1[i].name,imgData1[i].url,imgData1[i].birth_year)
  data[(3*i)] = imgData1[i].name;
  data[(3*i)+1] = imgData1[i].birth_year;
  data[(3*i)+2] = imgData1[i].url;
}
for (let i=0;i<imgData2.length;i++)
{
  // console.log('for loop:',imgData2[i].name,imgData2[i].url,imgData2[i].birth_year)
  data[(3*i)+30] = imgData2[i].name;
  data[(3*i)+31] = imgData2[i].birth_year;
  data[(3*i)+32] = imgData2[i].url;
}
for (let i=0;i<imgData3.length;i++)
{
  // console.log('for loop:',imgData3[i].name,imgData3[i].url,imgData3[i].birth_year)
  data[(3*i)+60] = imgData3[i].name;
  data[(3*i)+61] = imgData3[i].birth_year;
  data[(3*i)+62] = imgData3[i].url;
}
for (let i=0;i<imgData4.length;i++)
{
  // console.log('for loop:',imgData4[i].name,imgData4[i].url,imgData4[i].birth_year)
  data[(3*i)+90] = imgData4[i].name;
  data[(3*i)+91] = imgData4[i].birth_year;
  data[(3*i)+92] = imgData4[i].url;
}
for (let i=0;i<imgData5.length;i++)
{
  // console.log('for loop:',imgData5[i].name,imgData5[i].url,imgData5[i].birth_year)
  data[(3*i)+120] = imgData5[i].name;
  data[(3*i)+121] = imgData5[i].birth_year;
  data[(3*i)+122] = imgData5[i].url;
}
for (let i=0;i<imgData6.length;i++)
{
  // console.log('for loop:',imgData6[i].name,imgData6[i].url,imgData6[i].birth_year)
  data[(3*i)+150] = imgData6[i].name;
  data[(3*i)+151] = imgData6[i].birth_year;
  data[(3*i)+152] = imgData6[i].url;
}
for (let i=0;i<imgData7.length;i++)
{
  // console.log('for loop:',imgData7[i].name,imgData7[i].url,imgData7[i].birth_year)
  data[(3*i)+180] = imgData7[i].name;
  data[(3*i)+181] = imgData7[i].birth_year;
  data[(3*i)+182] = imgData7[i].url;
}
for (let i=0;i<imgData8.length;i++)
{
  // console.log('for loop:',imgData8[i].name,imgData8[i].url,imgData8[i].birth_year)
  data[(3*i)+210] = imgData8[i].name;
  data[(3*i)+211] = imgData8[i].birth_year;
  data[(3*i)+212] = imgData8[i].url;
}
for (let i=0;i<imgData9.length;i++)
{
  // console.log('for loop:',imgData9[i].name,imgData9[i].url,imgData9[i].birth_year)
  data[(3*i)+240] = imgData9[i].name;
  data[(3*i)+241] = imgData9[i].birth_year;
  data[(3*i)+242] = imgData9[i].url;
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

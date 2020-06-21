import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import Recu from './Components/recu'
import wilayas from './Components/Wilayas'
//import { Page, Text, View, Document, StyleSheet } from '@react-pdf/renderer';
//import ReactPDF from '@react-pdf/renderer';
import Header from './Components/header/Header'
import Footer from './Components/footer/Footer'
import { PDFDownloadLink, Document, Page, Text } from '@react-pdf/renderer'


const obj=[];

const App = () => {
  // state values
  const items=[]
  const [sellerNum, setSellerNum] = useState('');
 /* const [clientNum, setClientNum] = useState('');
  const [clientName, setClientName] = useState('');
  const [clientAddress, setClientAddress] = useState('');
  const [productCode, setProductCode] = useState('');
  const [productName, setProductName] = useState('');
  const [productPrice, setProductPrice] = useState('');*/
  const [clientCity, setClientCity] = useState('');
  const [cityCode, setCityCode] = useState(0);
  const [filestatus, setFilestatus] = useState('none');

  // every time the selected city changes , the correct zip code will be a
  useEffect(()=>{
       let i=0;

       for(i=1; i < 48; i++){
        if(wilayas[i] == clientCity){
         var city =  (((i+1)/10) >= 1) ? i+1 : `0${i}`;
          setCityCode(city)
          pushIntoObj(obj, 'cityCode', city)
        }
       }

        if(!sellerNum){
          pushIntoObj(obj, 'sellerNum', '0541095169')
        }

  },[clientCity, cityCode, sellerNum]);

  // push data into an object that will be passed into the pdf document
  const pushIntoObj= (obj, key, value)=>{
    obj[key]= value;
  //  console.log(obj[key])
  }

  const mySubmitHandler= (e)=>{
    // push all states into an object
    e.preventDefault();
    var count = 0;
   // var data = document.getElementsByClassName("input-value");
   const data = document.getElementsByTagName("input");
   
      while(count < data.length-1){
        pushIntoObj(obj, data[count].name, data[count].value)
        count++;
      }
    
    // selecting from dropdown list didn't trigger an event 
    // so i had to include it here
    let selectedCity = document.getElementById('wilayas').value;
    setClientCity(selectedCity);
    pushIntoObj(obj, 'clientCity', selectedCity)
    
    setFilestatus('flex');
  }

  return(
    <div className="app" id="app">
      <Header />
      <div className="app-body" id="app-body">
          <form id="form" className="formStyle" onSubmit={(e)=>mySubmitHandler(e)}>
              
              <div id="input-container seller-part">
                <label>Enter seller number:</label>
                <input
                  className="input-value"
                  type='text'
                  name='sellerNum'
                //  onChange={(e)=>myChangeHandler(e)}
                  placeholder='e.g : 0545....'
                />
              </div>
              <div id="input-container">
                <label>Enter client name (full name):</label>
                <input
                  className="input-value"
                  type='text'
                  name='clientName'
                //  onChange={(e)=>myChangeHandler(e)}
                  placeholder='e.g : hamouda'
                />              
              </div>
              <div className="input-container">
                <label>Enter client number:</label>
                <input
                  type='text'
                  name='clientNum'
                //  onChange={(e)=>myChangeHandler(e)}
                  placeholder='e.g : 0545....'
                />              
              </div>
              <div className="input-container">
                <label>Enter client address:</label>
                <input
                  type='text'
                  name='clientAddr'
                //  onChange={(e)=>myChangeHandler(e)}
                  placeholder='e.g : sba ville'
                />              
              </div>
              <div className="input-container">
                  <label htmlFor="clientCity">Enter client's City:</label>
                  <select name="clientCity" id="wilayas">
                      {
                        // generate drop down list elements 
                          wilayas.forEach(city=>{
                            items.push(<option 
                    //        onChange={(e)=>myChangeHandler(e)}
                            value={city} > {city} </option>) 
                          })
                      }
                      {items}
                  </select>            
              </div>

              <div className="input-container">
                <label>Enter product's code:</label>
                <input
                  type='text'
                  name='productCode'
                //  onChange={(e)=>myChangeHandler(e)}
                  placeholder='e.g : #5246'
                />              
              </div>
              <div className="input-container">
                <label>Enter product's name:</label>
                <input
                  type='text'
                  name='productName'
                //  onChange={(e)=>myChangeHandler(e)}
                  placeholder='e.g : Tondeuse....'
                />              
              </div>
              <div className="input-container">
                <label>Enter product's price(dont add the "DA" !):</label>
                <input
                  type='text'
                  name='productPrice'
                //  onChange={(e)=>myChangeHandler(e)}
                  placeholder='e.g : 4000'
                />              
              </div>
              <br/>
              <br/>
              <div className="submit-container">
                <input type='submit' />
              </div>
              
          </form>
          <div className="pdf-loader-container" style={{display : `${filestatus}`}}>
            <h1 id="arrow">&#8620;</h1>
            <div className="download-pdf" style={{display: `block`}}>
            <PDFDownloadLink document={<Recu {...obj}/>} fileName={`${obj.clientName}.pdf`}>
              {(loading) => 
                <a>click to download!</a>             
              }
            </PDFDownloadLink>
            </div>
            <h1 id="arrow2">&#8619;</h1>
          </div>
          <div className="page-reloader-button"
               onClick={()=> window.location.reload()}
               style={{display : `${filestatus}`}}>
            <p>create another shipping label</p>
          </div>
      </div>
      <Footer />
    </div>
  );
}



export default App;

import React from 'react';
import { Page, Text,Image, View, Document, StyleSheet, Font } from '@react-pdf/renderer';
//import ReactPDF from '@react-pdf/renderer';
import { PDFViewer } from '@react-pdf/renderer';
import logo from './logo/logo.png';
import fragile from './logo/fragile.png';
import styled from '@react-pdf/styled-components';
import codebar from './logo/codebar.png';
import font from '../FredokaOne-Regular.ttf';
import robotofont from '../RobotoSlab-Regular.ttf';

const styles = StyleSheet.create({
    //this is the highest level container
    // the pdf file itself
    page: {
      padding: '2%',
      fontFamily: 'roboto',
      
    },
        phone: {
          width: '25pt',
         // height: '20pt',
          display: 'inline-block',
          padding: 0,
          paddingRight: '2pt',
          margin: 0,
          height: '100%',
          color : 'green',
        },
    // the label container
    label_container: {
      flexDirection: 'row',
      backgroundColor: 'whitesmoke',
      width: '100%',
      height: '100%',
      border: '2pt solid #484848',
      borderRadius: '3pt',
    //  borderRadius: '3pt',
      
    },
    // the e commerce sign container
    side_bar_e_commerce:{
      width: '13%',
      position: 'relative',
      backgroundColor: '#6B8E23',
      borderRight: '1pt solid #484848',
    },
    ecommerce_sign: {
      margin: 0,
      padding: 0,
      color: 'whitesmoke',
        transform: `rotate(${270}deg)`,
        transformOrigin: 'topLeft',
        fontSize: '65pt',
       width: '500pt',   
       letterSpacing: '5pt',
        position: 'absolute',
        bottom: '10%',
        fontFamily: 'Fredoka'
      },
  
      //client info container sibling of e commerce container
      info_container:{
        width: '87%',
      },
          // it's first child the log and address holder
          first_sub_container:{
            alignSelf: 'center',
            flexDirection: 'row',
            height: '25%',
            width: '95%',
            justifyContent: 'center',
            borderBottom: '2pt solid #484848',
            margin: '30pt',
            marginTop: '15pt',
            
          },
              // the logo and section grandchilds
              section_logo:{
                margin: '10pt',
                marginTop: 0,
                padding: '10pt',
               
                paddingBottom: 0,
                width: '38%',
                borderRight: "2pt solid #484848",
                marginBottom: 0,
                marginRight: 0,
              },
                  //logo styling
                  logo: {
                    position: 'absolute',
                    width: '180%',
                    height: '100%',
                    left: -55,
                    
                  },
              section: {
                margin: '10pt',
                padding: '10pt',
                paddingBottom: 0,
                width: '65%',
                marginBottom: 0,
                justifyContent: 'center',
                alignItems: 'flex-start',
                marginLeft: 0,
              },
                  //boutique name style
                  boutique_name: {
                    color: '#6B8E23',
                    fontWeight: 'bold',
                  },
          // client info and fragile logo div
          client_fragile_logo: {
            height: '30%',
            width: '95%',
            alignSelf: 'center',
            display: 'flex',
            flexDirection: 'row',
          },
              //fragile logo container
              fragile_logo_container:{
                width : '35%',
                padding: '10pt',
               
                justifyContent: 'center',
                alignItems: 'center',
                marginBottom: '20pt',
                paddingTop: 0,
                paddingBottom: 0,
              },
                  // fragile log
                  fragile_logo:{
                      display: 'table',                   
                      width: "100%",
                      height: '80%',
                      padding: '5pt',
                      //paddingTop: 0,
                      border: '3pt solid #484848',                    
                      borderTopLeftRadius: '3pt',
                      borderTopRightRadius: '3pt',
  
                  },
                  fragiletext:{
                    width: '100%',
                    textAlign: 'center',
                    border: '3pt solid #484848',
                    borderTopWidth: 0,
                  },
              client_info:{
                width: '65%',
                padding: 20,
                justifyContent: 'flex-start',
                alignItems: 'flex-start',
                paddingTop: '0pt',
                paddingBottom: '0pt',
              },
          produit_container:{
            width: '100%',
            flexDirection:'row',
            alignSelf: 'center',
           // justifyContent: 'center',
           alignItems: 'center',
            borderBottom: '2pt solid #484848',
            borderTop: '2pt solid #484848',
            textAlign: 'center',
          },
              product_code:{
                padding: '5pt',
                width: '50%',
               // height: '100%',
               // borderRight: '2pt solid #484848',
                borderLeftWidth: 0, 
                borderTopWidth: 0 
                
              },
              product_name:{
                padding: '5pt',
                width: '50%',
                borderLeft: '2pt solid #484848',
              },
          price_container:{
            display: 'flex',
            width: '95%',
            alignSelf: 'center',
            justifyContent: 'center',
            alignItems: 'center',
            paddingTop: '20pt',
            marginBottom : '20pt',
          },
              price: {
                display: 'inline-block',
                padding: '14pt',
                paddingBottom: '2pt',
                paddingTop: '4pt',
                border: '2pt solid #484848',
                borderRadius: '10pt',
                backgroundColor: '#6B8E23',
                color: 'whitesmoke',
              },
          delivery_info_container:{
            width: '95%',
            height: '25%',
            flexDirection: 'row',
            alignSelf: 'center',
            padding: '10pt',
            paddingTop: 0,
            borderTop: '2pt solid #484848',
          },
            tentative_container:{
              padding: '10pt',
              paddingTop: 0,
              width: '50%',
              height: '100%',
              justifyContent: 'center',
              alignItems: 'center',
            },
             table:{
              display: "table",
              textAlign: 'center',
              padding : '20pt',
              
              width: '100%',
             },
                row:{
                  margin: "auto", 
                  width: '100%',
                  flexDirection: "row" ,
                  borderStyle: "solid", 
                  borderWidth: 1, 
                  borderColor: '#484848',
                  height: '35pt',
                  //justifyContent: 'center', 
                  alignItems: 'center',
                },
                numbrRow:{ 
                  display: 'flex',
                  height: '45pt',
                  flexDirection: "row" ,
                },
                    numbr:{
                      flexGrow: 1,
                     
                      borderStyle: "solid", 
                      borderWidth: 1, 
                      borderColor: '#484848',
                    },
            codebar_container:{
                padding: '10pt',
                position: 'relative',
                width: '50%',
                height: '80%',
               
                alignSelf: 'center',
            },
                codebar: {
                  width: '100%',
                  height: '100%',
                 
                },
                villeMatricule:{
                  position: 'absolute',
                  top: '12%',
                  left:'25%',
                  right: '25%',
                  fontFamily: 'Fredoka',
                  color: '#fff',
                  padding: '1pt',
                  fontSize: 100,
                  fontWeight: 'bold',
                  //backgroundColor: 'whitesmoke',
                  borderRadius: '20pt',
                }
  

  });

  export default styles;
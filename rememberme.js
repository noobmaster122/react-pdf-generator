import React from 'react';
import { Page, Text,Image, View, Document, StyleSheet } from '@react-pdf/renderer';
//import ReactPDF from '@react-pdf/renderer';
import { PDFViewer } from '@react-pdf/renderer';
import logo from './logo/logo.png';

//onst rotate = rotate(90deg);
// Create styles
const debuggMode = false;
const styles = StyleSheet.create({
  //this is the highest level container
  // the pdf file itself
  page: {
    padding: '2%',
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
    flexGrow: 1,
    position: 'relative',
    backgroundColor: '#6B8E23',
  },
  ecommerce_sign: {
    margin: 0,
    padding: 0,
    color: 'whitesmoke',
      //marginTop: '50%',
     // display: 'block',
     //writingMode: 'vertical-rl',
      transform: `rotate(${270}deg)`,
      transformOrigin: 'topLeft',
      fontSize: '65pt',
      //marginTop: '200pt',
      //marginLeft: '20pt',
     // height: '10em',
     width: '500pt',
    
     letterSpacing: '5pt',
      position: 'absolute',
      //height: '100%',
     // width: '100%',
      //top: '500pt',
      
      bottom: '10%',
      
     // bottom: '25%',
      //bottom: '40%',
     /* right: '0',
      left: '0',*/
    },

    //client info container sibling of e commerce container
    info_container:{
      flexGrow: 3,
    //  paddingLeft: '8pt',
    },
        // it's first child the log and address holder
        first_sub_container:{
          alignSelf: 'center',
          //border: "2mm solid black",
          //backgroundColor: 'red',
          marginRight: '4pt',
          flexDirection: 'row',
          height: '15%',
          width: '95%',
          justifyContent: 'center',
          borderBottom: '2pt solid #484848',
          
        },
            // the logo and section grandchilds
            section_logo:{
              margin: 10,
              padding: 10,
              flexGrow: 1,
              borderRight: "2pt solid #484848",
              marginBottom: 0,
            },
                //logo styling
                logo: {
                  width: '80%',
                  height: '100%',
                  margin: 'auto',
                },
            section: {
              margin: 10,
              padding: 10,
              flexGrow: 3,
              marginBottom: 0,
              justifyContent: 'center',
              alignItems: 'center',
              // border: "1mm solid black",
            },
                //boutique name style
                boutique_name: {
                  color: '#6B8E23',
                  fontWeight: 'bold',
                }




  
  

});

// Create Document Component
const Recu = (props) => (
<PDFViewer style={{width: '100vw', height: '100vh'}}>
  <Document style={styles.Document_container}>
    <Page  debug={false} verticalRulerSteps={50} horizontalRulerSteps="10%" style={styles.page} >
      <View style={styles.label_container}>
        <View debug={true} style={styles.side_bar_e_commerce}>
          <Text debug={debuggMode} style={styles.ecommerce_sign} >E-COMMERCE</Text>
        </View>
        <View debug={true} style={styles.info_container}>
          <View debug={true} style={styles.first_sub_container} >
            <View  debug={true} style={styles.section_logo}>
              <Image debug={false} style={styles.logo} src={logo} />
            </View>
            <View debug={true} style={styles.section}>
              <Text>Boutique: <Text style={styles.boutique_name}>Gharb Maghreb</Text></Text>
              <Text>06 rue Abbane Ramdan</Text>
              <Text>Sidi Bel Abbes / N° 0558410045</Text>
            </View>
          </View>         
        </View>
      </View>
    </Page>
  </Document>
</PDFViewer>
);


export default Recu;






#################""

import React from 'react';
import { Page, Text,Image, View, Document, StyleSheet } from '@react-pdf/renderer';
//import ReactPDF from '@react-pdf/renderer';
import { PDFViewer } from '@react-pdf/renderer';
import logo from './logo/logo.png';

//onst rotate = rotate(90deg);
// Create styles
const debuggMode = false;
const styles = StyleSheet.create({
  //this is the highest level container
  // the pdf file itself
  page: {
    padding: '2%',
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
    flexGrow: 1,
    position: 'relative',
    backgroundColor: '#6B8E23',
  },
  ecommerce_sign: {
    margin: 0,
    padding: 0,
    color: 'whitesmoke',
      //marginTop: '50%',
     // display: 'block',
     //writingMode: 'vertical-rl',
      transform: `rotate(${270}deg)`,
      transformOrigin: 'topLeft',
      fontSize: '65pt',
      //marginTop: '200pt',
      //marginLeft: '20pt',
     // height: '10em',
     width: '500pt',
    
     letterSpacing: '5pt',
      position: 'absolute',
      //height: '100%',
     // width: '100%',
      //top: '500pt',
      
      bottom: '10%',
      
     // bottom: '25%',
      //bottom: '40%',
     /* right: '0',
      left: '0',*/
    },

    //client info container sibling of e commerce container
    info_container:{
      flexGrow: 3,
    //  paddingLeft: '8pt',
    },
        // it's first child the log and address holder
        first_sub_container:{
          alignSelf: 'center',
          //border: "2mm solid black",
          //backgroundColor: 'red',
          marginRight: '4pt',
          flexDirection: 'row',
          height: '100pt',
          width: '95%',
          justifyContent: 'center',
          borderBottom: '2pt solid #484848',
          
        },
            // the logo and section grandchilds
            section_logo:{
              margin: 10,
              padding: 10,
              flexGrow: 1,
              borderRight: "2pt solid #484848",
              marginBottom: 0,
            },
                //logo styling
                logo: {
                  width: '80%',
                  height: '100%',
                },
            section: {
              margin: 10,
              padding: 10,
              flexGrow: 3,
              marginBottom: 0,
              // border: "1mm solid black",
            },




  
  

});

// Create Document Component
const Recu = (props) => (
<PDFViewer style={{width: '100vw', height: '100vh'}}>
  <Document style={styles.Document_container}>
    <Page  debug={false} verticalRulerSteps={50} horizontalRulerSteps="10%" style={styles.page} >
      <View style={styles.label_container}>
        <View debug={debuggMode} style={styles.side_bar_e_commerce}>
          <Text debug={debuggMode} style={styles.ecommerce_sign} >E-COMMERCE</Text>
        </View>
        <View debug={debuggMode} style={styles.info_container}>
          <View debug={true} style={styles.first_sub_container} >
            <View  debug={true} style={styles.section_logo}>
              <Image debug={true} style={styles.logo} src={logo} />
            </View>
            <View debug={true} style={styles.section}>
              <Text>{props.testname}gdfgdfgdfgdfg</Text>
            </View>
          </View>         
        </View>
      </View>
    </Page>
  </Document>
</PDFViewer>
);


export default Recu;





///////////////////////////

<View style={styles.table}>
<View style={styles.tableRow}>
 <View style={styles.tableCol}> 
   <Text style={styles.tableCell}>Réservé au client</Text> 
 </View>
</View>
<View style={styles.tableRow}>
 <View style={styles.tableCol}> 
   <Text style={styles.tableCell}>tentative</Text> 
 </View>
</View>
<View style={[styles.tableRowNum, { }]}>
<View style={[styles.tableColNum, {}]}> 
  <Text style={styles.tableCell}>1</Text> 
</View>
<View style={styles.tableColNum}> 
  <Text style={styles.tableCell}>2</Text> 
</View>
<View style={[styles.tableColNum, {/*borderBottomRightRadius: '5pt'*/}]}> 
  <Text style={styles.tableCell}>3</Text> 
</View>
</View>
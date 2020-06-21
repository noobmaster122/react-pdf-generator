import React from 'react';
import { Page, Text,Image, View, Document, StyleSheet, Font } from '@react-pdf/renderer';
//import ReactPDF from '@react-pdf/renderer';
import { PDFViewer } from '@react-pdf/renderer';
import logo from './logo/logo.png';
import fragile from './logo/fragile.png';
import phone from './logo/phoneicon.png';
import styled from '@react-pdf/styled-components';
import codebar from './logo/codebar.png';
import font from '../FredokaOne-Regular.ttf';
import robotofont from '../RobotoSlab-Regular.ttf';
import styles from './style';


Font.register({ family: 'Fredoka', src: font });
Font.register({ family: 'roboto', src: robotofont });

//onst rotate = rotate(90deg);
// Create styles
const debuggMode = false;
// Create Document Component
const Recu = (props) => (

  <Document style={styles.Document_container}>
    <Page debug={false} verticalRulerSteps={50} horizontalRulerSteps="5%" style={styles.page} >
      <View style={styles.label_container}>
        <View style={styles.side_bar_e_commerce}>
          <Text debug={debuggMode} style={styles.ecommerce_sign} >E-COMMERCE</Text>
        </View>
        <View  style={styles.info_container}>
          <View   style={styles.first_sub_container} >
            <View    style={styles.section_logo}>
              <Image  style={styles.logo} src={logo} />
            </View>
            <View style={styles.section}>
              <Text>Boutique: <Text style={styles.boutique_name}>Gharb Market</Text></Text>
              <Text>villa 06 rue Emir St hubert, Oran   </Text>
    
              <View style={{display: 'flex',
                            flexDirection: 'row',}}>
                <Image  style={styles.phone} src={phone} /> 
                <Text> : {`${props.sellerNum}`} </Text>
              </View>
            </View>
          </View> 
          <View style={styles.client_fragile_logo}>
            <View style={styles.fragile_logo_container}>
              <Image  style={styles.fragile_logo} src={fragile} />
              <Text  style={styles.fragiletext}>Fragile</Text>
            </View>
            <View style={styles.client_info}>
              <Text  style={{ marginBottom: '35pt', marginTop: '40pt',
              paddingBottom: '5pt', borderBottom: '2pt solid #484848'}}>Informations client:</Text>
              <View style={{display: 'flex',
                            flexDirection: 'row',}}>
                <Text >{`${props.clientName}`} , </Text>
                <Image  style={styles.phone} src={phone} /> 
                <Text> : {`${props.clientNum}`} </Text>               
              </View>
              
              <Text>{`${props.clientAddr}`}, {`${props.clientCity}`}</Text>
            </View>  
          </View> 
          <View  style={styles.produit_container}> 
              <Text style={styles.product_code}>{props.productCode}</Text>
              <Text  style={styles.product_name}>{props.productName}</Text>
          </View>  
          <View  style={styles.price_container}>
            <Text  style={styles.price}> {`${props.productPrice}`} DA</Text>
          </View>
          <View   style={styles.delivery_info_container}>
            <View  style={[styles.tentative_container, {}]}>
                 <View style={styles.table}>
                   <View style={[styles.row, {borderTopRightRadius: '5pt',
                                              borderTopLeftRadius:'5pt',}]}>
                     <Text style={styles.tcell}>Réservé au livreur</Text>
                   </View>
                   <View style={[styles.row, {borderTopWidth:0,
                                              borderBottomWidth:0,}]}>
                     <Text style={styles.tcell}>Tentative</Text>
                   </View>
                   <View  style={styles.numbrRow}>
                     <Text  style={[styles.numbr, { borderBottomLeftRadius:'5pt',}]}></Text>
                     <Text  style={[styles.numbr, {borderRightWidth:0,
                                                  borderLeftWidth:0,
                                                  }]}></Text>
                     <Text  style={[styles.numbr, { borderBottomRightRadius: '5pt'}]}></Text>
                   </View>
               </View>
            </View>
            <View  style={styles.codebar_container}>
              <Image  className="imgStyle" style={[styles.codebar, {opacity: '0.85'}]} src={codebar} />
              <Text style={[styles.villeMatricule, {textStroke: '1pt red',}]}>
               {`${props.cityCode}`}
              </Text>
            </View>
          </View> 
        </View>
      </View>
    </Page>
  </Document>

);


export default Recu;
//import liraries
import React, { Component, useState } from 'react';
import { ScrollView } from 'react-native';
import { View, Text, StyleSheet,TextInput,SafeAreaView} from 'react-native';
import Textt from '../Components/Textt';
import BackArrow from '../Components/BackArrow';

// create a component
const SubmitAnOffer = (props) => {
    const [custom_offer,setcustom_offer]=useState(0);
    const [loan,setloan]=useState(0);
    const [DownPayment,setDownPayment]=useState(0);
    const [EarnestMoney,setEarnestMoney]=useState(0);
    const [ClosingDate,setClosingDate]=useState(0);
    const [Financing,setFinancing]=useState(0);
    const [Appraisal,setAppraisal]=useState(0);
    const [HomeSale,setHomeSale]=useState(0);
    const [Inspection,setInspection]=useState(0);
    const [HomeWarranty,setHomeWarranty]=useState(0);
    const [EscrowFree,setEscrowFree]=useState(0);
    const [SepticInspection,setSepticInspection]=useState(0);
    const [SwellInspection,setSwellInspection]=useState(0);
    const [BoundarySurvey,setBoundarySurvey]=useState(0);
    const [PrimaryResidence,setPrimaryResidence]=useState(0);
    const [TitleCompany,setTitleCompany]=useState(0);
    const [IncludedItems,setIncludedItems]=useState(0);
    const [Excludeditems,setExcludeditems]=useState(0);
    const [OtherTerms,setOtherTerms]=useState(0);
    const [FirstName,setFirstName]=useState(0);
    const [MiddleName,setMiddleName]=useState(0);
    const [LastName,setLastName]=useState(0);
    const [Email,setEmail]=useState(0);
    const [Phone,setPhone]=useState(0);

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView>
            <View
          style={{
            flexDirection: 'row',
          }}>
          <BackArrow onPressBack={() => props.navigation.goBack()} />
          <Text style={styles.SubmitProperty}>Submit Property</Text>
        </View>
            <Textt
          title="Custom Offer"
          styling={{marginLeft: '6%', opacity: 0.5, marginTop: '2%'}}
        />
        <View style={styles.InputV1}>
          <TextInput
            style={styles.Input1}
            keyboardType='url'
            placeholder="$230"
            placeholderTextColor="#A1A1A1"
            onChangeText={setcustom_offer}
            value={custom_offer}
          />
        </View>
        <Textt
          title="loan"
          styling={{marginLeft: '6%', opacity: 0.5, marginTop: '2%'}}
        />
        <View style={styles.InputV1}>
          <TextInput
            style={styles.Input1}
            keyboardType='url'
            placeholder="$230"
            placeholderTextColor="#A1A1A1"
            onChangeText={setloan}
            value={loan}
          />
        </View>
        <Textt
          title="Down Payment"
          styling={{marginLeft: '6%', opacity: 0.5, marginTop: '2%'}}
        />
        <View style={styles.InputV1}>
          <TextInput
            style={styles.Input1}
            keyboardType='url'
            placeholder="$230"
            placeholderTextColor="#A1A1A1"
            onChangeText={setDownPayment}
            value={DownPayment}
          />
        </View>
        <Textt
          title="Earnest Money"
          styling={{marginLeft: '6%', opacity: 0.5, marginTop: '2%'}}
        />
        <View style={styles.InputV1}>
          <TextInput
            style={styles.Input1}
            keyboardType='url'
            placeholder="$230"
            placeholderTextColor="#A1A1A1"
            onChangeText={setEarnestMoney}
            value={EarnestMoney}
          />
        </View>
        <Textt
          title="Closing Date"
          styling={{marginLeft: '6%', opacity: 0.5, marginTop: '2%'}}
        />
        <View style={styles.InputV1}>
          <TextInput
            style={styles.Input1}
            keyboardType='url'
            placeholder="$230"
            placeholderTextColor="#A1A1A1"
            onChangeText={setClosingDate}
            value={ClosingDate}
          />
        </View>
        <Textt
          title="Financing"
          styling={{marginLeft: '6%', opacity: 0.5, marginTop: '2%'}}
        />
        <View style={styles.InputV1}>
          <TextInput
            style={styles.Input1}
            keyboardType='url'
            placeholder="$230"
            placeholderTextColor="#A1A1A1"
            onChangeText={setFinancing}
            value={Financing}
          />
        </View>
        <Textt
          title="Appraisal"
          styling={{marginLeft: '6%', opacity: 0.5, marginTop: '2%'}}
        />
        <View style={styles.InputV1}>
          <TextInput
            style={styles.Input1}
            keyboardType='url'
            placeholder="$230"
            placeholderTextColor="#A1A1A1"
            onChangeText={setAppraisal}
            value={Appraisal}
          />
        </View>
        <Textt
          title="Home Sale"
          styling={{marginLeft: '6%', opacity: 0.5, marginTop: '2%'}}
        />
        <View style={styles.InputV1}>
          <TextInput
            style={styles.Input1}
            keyboardType='url'
            placeholder="$230"
            placeholderTextColor="#A1A1A1"
            onChangeText={setHomeSale}
            value={HomeSale}
          />
        </View>
        <Textt
          title="Inspection"
          styling={{marginLeft: '6%', opacity: 0.5, marginTop: '2%'}}
        />
        <View style={styles.InputV1}>
          <TextInput
            style={styles.Input1}
            keyboardType='url'
            placeholder="$230"
            placeholderTextColor="#A1A1A1"
            onChangeText={setInspection}
            value={Inspection}
          />
        </View>
        <Textt
          title="Home Warranty"
          styling={{marginLeft: '6%', opacity: 0.5, marginTop: '2%'}}
        />
        <View style={styles.InputV1}>
          <TextInput
            style={styles.Input1}
            keyboardType='url'
            placeholder="$230"
            placeholderTextColor="#A1A1A1"
            onChangeText={setHomeWarranty}
            value={HomeWarranty}
          />
        </View>
        <Textt
          title="Escrow Free"
          styling={{marginLeft: '6%', opacity: 0.5, marginTop: '2%'}}
        />
        <View style={styles.InputV1}>
          <TextInput
            style={styles.Input1}
            keyboardType='url'
            placeholder="$230"
            placeholderTextColor="#A1A1A1"
            onChangeText={setEscrowFree}
            value={EscrowFree}
          />
        </View>
        <Textt
          title="Septic Inspection"
          styling={{marginLeft: '6%', opacity: 0.5, marginTop: '2%'}}
        />
        <View style={styles.InputV1}>
          <TextInput
            style={styles.Input1}
            keyboardType='url'
            placeholder="$230"
            placeholderTextColor="#A1A1A1"
            onChangeText={setSepticInspection}
            value={SepticInspection}
          />
        </View>
        <Textt
          title="Swell Inspection"
          styling={{marginLeft: '6%', opacity: 0.5, marginTop: '2%'}}
        />
        <View style={styles.InputV1}>
          <TextInput
            style={styles.Input1}
            keyboardType='url'
            placeholder="$230"
            placeholderTextColor="#A1A1A1"
            onChangeText={setSwellInspection}
            value={SwellInspection}
          />
        </View>
        <Textt
          title="Boundary Survey"
          styling={{marginLeft: '6%', opacity: 0.5, marginTop: '2%'}}
        />
        <View style={styles.InputV1}>
          <TextInput
            style={styles.Input1}
            keyboardType='url'
            placeholder="$230"
            placeholderTextColor="#A1A1A1"
            onChangeText={setBoundarySurvey}
            value={BoundarySurvey}
          />
        </View>
        <Textt
          title="Primary Residence"
          styling={{marginLeft: '6%', opacity: 0.5, marginTop: '2%'}}
        />
        <View style={styles.InputV1}>
          <TextInput
            style={styles.Input1}
            keyboardType='url'
            placeholder="$230"
            placeholderTextColor="#A1A1A1"
            onChangeText={setPrimaryResidence}
            value={PrimaryResidence}
          />
        </View>
        <Textt
          title="Title Company"
          styling={{marginLeft: '6%', opacity: 0.5, marginTop: '2%'}}
        />
        <View style={styles.InputV1}>
          <TextInput
            style={styles.Input1}
            keyboardType='url'
            placeholder="$230"
            placeholderTextColor="#A1A1A1"
            onChangeText={setTitleCompany}
            value={TitleCompany}
          />
        </View>
        <Textt
          title="Included Items"
          styling={{marginLeft: '6%', opacity: 0.5, marginTop: '2%'}}
        />
        <View style={styles.InputV1}>
          <TextInput
            style={styles.Input1}
            keyboardType='url'
            placeholder="$230"
            placeholderTextColor="#A1A1A1"
            onChangeText={setIncludedItems}
            value={IncludedItems}
          />
        </View>
        <Textt
          title="Excluded items"
          styling={{marginLeft: '6%', opacity: 0.5, marginTop: '2%'}}
        />
        <View style={styles.InputV1}>
          <TextInput
            style={styles.Input1}
            keyboardType='url'
            placeholder="$230"
            placeholderTextColor="#A1A1A1"
            onChangeText={setExcludeditems}
            value={Excludeditems}
          />
        </View>
        <Textt
          title="Other Terms"
          styling={{marginLeft: '6%', opacity: 0.5, marginTop: '2%'}}
        />
        <View style={styles.InputV1}>
          <TextInput
            style={styles.Input1}
            keyboardType='url'
            placeholder="$230"
            placeholderTextColor="#A1A1A1"
            onChangeText={setOtherTerms}
            value={OtherTerms}
          />
        </View>
        <Textt
          title="First Name"
          styling={{marginLeft: '6%', opacity: 0.5, marginTop: '2%'}}
        />
        <View style={styles.InputV1}>
          <TextInput
            style={styles.Input1}
            keyboardType='url'
            placeholder="$230"
            placeholderTextColor="#A1A1A1"
            onChangeText={setFirstName}
            value={FirstName}
          />
        </View>
        <Textt
          title="Middle Name"
          styling={{marginLeft: '6%', opacity: 0.5, marginTop: '2%'}}
        />
        <View style={styles.InputV1}>
          <TextInput
            style={styles.Input1}
            keyboardType='url'
            placeholder="$230"
            placeholderTextColor="#A1A1A1"
            onChangeText={setMiddleName}
            value={MiddleName}
          />
        </View>
        <Textt
          title="Last Name"
          styling={{marginLeft: '6%', opacity: 0.5, marginTop: '2%'}}
        />
        <View style={styles.InputV1}>
          <TextInput
            style={styles.Input1}
            keyboardType='url'
            placeholder="$230"
            placeholderTextColor="#A1A1A1"
            onChangeText={setLastName}
            value={LastName}
          />
        </View>
        <Textt
          title="Email"
          styling={{marginLeft: '6%', opacity: 0.5, marginTop: '2%'}}
        />
        <View style={styles.InputV1}>
          <TextInput
            style={styles.Input1}
            keyboardType='url'
            placeholder="$230"
            placeholderTextColor="#A1A1A1"
            onChangeText={setEmail}
            value={Email}
          />
        </View>
        <Textt
          title="Phone"
          styling={{marginLeft: '6%', opacity: 0.5, marginTop: '2%'}}
        />
        <View style={styles.InputV1}>
          <TextInput
            style={styles.Input1}
            keyboardType='url'
            placeholder="$230"
            placeholderTextColor="#A1A1A1"
            onChangeText={setPhone}
            value={Phone}
          />
        </View>
        </ScrollView>
        </SafeAreaView>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    Input1: {
        height: 55,
        width: '90%',
        backgroundColor: '#E4E4E4',
        opacity: 0.4,
        borderWidth: 1,
        borderColor: '#B0B0B0',
        paddingHorizontal: 10,
        borderRadius: 5,
        alignSelf:'center'
      },
      SubmitProperty: {
        fontSize: 20,
        marginTop: '4%',
        marginLeft: '25%',
        fontWeight: 'bold',
      }
});

//make this component available to the app
export default SubmitAnOffer;

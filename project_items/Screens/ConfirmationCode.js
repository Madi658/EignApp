import React, {useState} from 'react';
import {SafeAreaView, Text, StyleSheet, View, Button} from 'react-native';
import BackArrow from '../Components/BackArrow';
import Information from '../Components/Information';
import {useDispatch, useSelector} from 'react-redux';
import {
  CodeField,
  Cursor,
  useBlurOnFulfill,
  useClearByFocusCell,
} from 'react-native-confirmation-code-field';
import { GetOtp } from '../../redux/actions/Rejister_action';



const CELL_COUNT = 6;

const ConfirmationCode = (props) => {
  const dispatch=useDispatch();
  const email=props?.route?.params?.email;
  const [value, setValue] = useState('');
  const ref = useBlurOnFulfill({value, cellCount: CELL_COUNT});
  const [prop, getCellOnLayoutHandler] = useClearByFocusCell({
    value,
    setValue,
  });
const ConformCode=()=>{
  let fd=new FormData();
  fd.append('otp',value);
  fd.append('email',email)
  const cbSuccess=(res)=>{
    if(res.token != undefined)
    {
      props.navigation.navigate('Map');
    }
  }
  dispatch(GetOtp(fd,cbSuccess))
}
  return (
    <SafeAreaView style={styles.root}>
      <BackArrow onPressBack={() => props.navigation.goBack()} />
      <View
        style={{
          marginTop: '20%',
          marginLeft: '5%',
        }}>
        <Information
          firstText="What’s the code?"
          secondText="Enter the code sent to your phone number"
        />
      </View>
      {/* <Text style={styles.title}>Verification</Text> */}
      <View style={{width:'100%',alignItems:'center'}}>
      <CodeField
        ref={ref}
        {...prop}
        value={value}
        onChangeText={setValue}
        cellCount={CELL_COUNT}
        rootStyle={styles.codeFieldRoot}
        keyboardType="number-pad"
        textContentType="oneTimeCode"
        renderCell={({index, symbol, isFocused}) => (
          <View
            // Make sure that you pass onLayout={getCellOnLayoutHandler(index)} prop to root component of "Cell"
            onLayout={getCellOnLayoutHandler(index)}
            key={index}
            style={[styles.cellRoot, isFocused && styles.focusCell]}>
            <Text style={styles.cellText}>
              {symbol || (isFocused ? <Cursor /> : null)}
            </Text>
          </View>
        )}
      />
      </View>
      <View style={{flexDirection: 'row', top: 50, left: 8}}>
        <Text>Didn't received any code?</Text>
        <Text style={{left: 5, color: '#0042CC', fontWeight: 'bold'}}>
          Resend Code
        </Text>
      </View>
      <View
        style={{
          width: '90%',
          height: 100,
          alignSelf: 'center',
          marginTop: '20%',
          marginRight: '5%',
        }}>
        <Button title="Next" onPress={() => ConformCode()} />
      </View>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  root: {padding: 20, minHeight: 300},
  title: {textAlign: 'center', fontSize: 30},
  codeFieldRoot: {
    marginTop: 20,
    width: 320,
  },
  cellRoot: {
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomColor: 'black',
    borderBottomWidth: 2,
    top: 5,
  },
  cellText: {
    color: '#000',
    fontSize: 36,
    textAlign: 'center',
    top: -5,
  },
  focusCell: {
    borderBottomColor: '#007AFF',
    borderBottomWidth: 2,
  },
});
export default ConfirmationCode;
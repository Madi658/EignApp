import React, {Component} from 'react';
import {TextInput} from 'react-native-paper';
import {View} from 'react-native';
export default class Input extends Component {
  handleValidation(value) {
    const {pattern} = this.props;
    if (!pattern) return true;
    // string pattern, one validation rule
    if (typeof pattern === 'string') {
      const condition = new RegExp(pattern, 'g');
      return condition.test(value);
    }
    // array patterns, multiple validation rules
    if (typeof pattern === 'object') {
      const conditions = pattern.map(rule => new RegExp(rule, 'g'));
      return conditions.map(condition => condition.test(value));
    }
  }
  onChange(value) {
    const {onChangeText, onValidation} = this.props;
    const isValid = this.handleValidation(value);
    onValidation && onValidation(isValid);
    onChangeText && onChangeText(value);
  }
  render() {
    const {pattern, onChangeText, children, style, ...props} = this.props;
    return (
      <View
        style={{
          width: '100%',
          alignSelf: 'center',
          marginTop: '3%',
          marginRight: '5%',
        }}>
        <TextInput
          secureTextEntry={true}
          selectionColor="blue"
          style={{
            width: '90%',
            alignSelf: 'center',
            height: 43,
          }}
          mode={'outlined'}
          onChangeText={value => this.onChange(value)}
          {...props}>
          {children}
        </TextInput>
      </View>
    );
  }
}

{
  /* <Input
                    label="Password"
                    placeholder="Enter your Password"
                    pattern={[
                      '^.{8,}$', // min 8 chars
                      '(?=.*\\d)', // number required
                      '(?=.*[A-Z])', // uppercase letter
                    ]}
                    onValidation={isValid => this.setState({isValid})}
                  />
                  <View style={{flexDirection: 'row'}}>
                    <Text
                      style={{
                        color: isValid && isValid[0] ? 'green' : 'red',
                        left: 15,
                        fontSize: 10,
                        top: 5,
                      }}>
                      min 8 chars,
                    </Text>
                    <Text
                      style={{
                        color: isValid && isValid[1] ? 'green' : 'red',
                        left: 15,
                        fontSize: 10,
                        top: 5,
                      }}>
                      number required,
                    </Text>
                    <Text
                      style={{
                        color: isValid && isValid[2] ? 'green' : 'red',
                        left: 15,
                        fontSize: 10,
                        top: 5,
                      }}>
                      uppercase letter
                    </Text>
                  </View>
                  <Input
                    label="Repeat Password"
                    placeholder="Confirm Password"
                    // style={styles.input}
                    pattern={[
                      '^.{8,}$', // min 8 chars
                      '(?=.*\\d)', // number required
                      '(?=.*[A-Z])', // uppercase letter
                    ]}
                    onValidation={isValid => this.setState({isValid})}
                  /> */
}

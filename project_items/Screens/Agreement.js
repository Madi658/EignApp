import React, {useState} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import BackArrow from '../Components/BackArrow';
import Textt from '../Components/Textt';
import Points from '../Components/Points';
const Agreement = props => {
  return (
    <>
      <SafeAreaView
        style={{backgroundColor: '#fff', justifyContent: 'center'}}
      />
      <SafeAreaView
        style={{
          flex: 1,
          backgroundColor: '#fff',
          justifyContent: 'center',
        }}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={{flexDirection: 'row'}}>
            <BackArrow onPressBack={() => props.navigation.goBack()} />
            <Text
              style={{
                fontSize: 20,
                marginTop: '4%',
                marginLeft: '18%',
                fontWeight: 'bold',
              }}>
              Agreement of purchase
            </Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              marginTop: '5%',
              flexWrap: 'wrap',
            }}>
            <Text
              style={{
                color: '#767676',
                fontSize: 15,
                fontWeight: '500',
                paddingHorizontal: 25,
              }}>
              This agreement date
            </Text>
            <Text
              style={{
                left: -15,
              }}>
              .........
            </Text>
            <Text
              style={{
                color: '#767676',
                fontSize: 15,
                fontWeight: '500',
                paddingHorizontal: 1,
                left: -5,
              }}>
              day of
            </Text>
            <Text
              numberOfLines={2}
              style={{
                left: 5,
              }}>
              ...............................
            </Text>
            <View
              style={{
                flexDirection: 'row',
                marginTop: '5%',
                flexWrap: 'wrap',
              }}>
              <Text
                style={{
                  color: '#767676',
                  fontSize: 15,
                  fontWeight: '500',
                  paddingHorizontal: 25,
                }}>
                .........................
              </Text>
              <Text
                style={{
                  left: -15,
                  fontWeight: 'bold',
                  fontSize: 18,
                }}>
                Buyer
              </Text>
              <Text
                style={{
                  color: '#767676',
                  fontSize: 15,
                  fontWeight: '500',
                  paddingHorizontal: 1,
                  left: -5,
                }}>
                ..............................................
              </Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                marginTop: '5%',
                flexWrap: 'wrap',
              }}>
              <Text
                style={{
                  color: '#767676',
                  fontSize: 15,
                  fontWeight: '500',
                  paddingHorizontal: 25,
                }}>
                agrees to purchase from
              </Text>
              <Text
                style={{
                  left: -15,
                  fontWeight: 'bold',
                  fontSize: 18,
                }}>
                Seller
              </Text>
              <Text
                style={{
                  color: '#767676',
                  fontSize: 15,
                  fontWeight: '500',
                  paddingHorizontal: 1,
                  left: -5,
                }}>
                ................................
              </Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                marginTop: '5%',
                flexWrap: 'wrap',
              }}>
              <Text
                style={{
                  color: '#767676',
                  fontSize: 15,
                  fontWeight: '500',
                  paddingHorizontal: 25,
                }}>
                ..............................
              </Text>
              <Text
                style={{
                  left: -15,

                  fontSize: 15,
                  color: '#767676',
                }}>
                the following
              </Text>
            </View>
          </View>
          <Textt
            title="Real Property:"
            styling={{
              marginLeft: '6%',
              marginTop: '10%',
              fontWeight: 'bold',
            }}
          />
          <View
            style={{
              flexDirection: 'row',
              marginTop: '5%',
              flexWrap: 'wrap',
            }}>
            <Text
              style={{
                color: '#767676',
                fontSize: 15,
                fontWeight: '500',
                paddingHorizontal: 25,
              }}>
              Address
            </Text>
            <Text
              style={{
                left: -15,
                color: '#767676',
                fontSize: 15,
                fontWeight: '500',
              }}>
              .....................................................................
            </Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              marginTop: '5%',
              flexWrap: 'wrap',
            }}>
            <Text
              style={{
                color: '#767676',
                fontSize: 15,
                fontWeight: '500',
                paddingHorizontal: 25,
              }}>
              fronting on the
            </Text>
            <Text
              style={{
                left: -15,
                fontSize: 15,
                color: '#767676',
              }}>
              ................................
            </Text>
            <Text
              style={{
                color: '#767676',
                fontSize: 15,
                fontWeight: '500',
                paddingHorizontal: 1,
                left: -5,
              }}>
              side of in
            </Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              marginTop: '5%',
              flexWrap: 'wrap',
            }}>
            <Text
              style={{
                color: '#767676',
                fontSize: 15,
                fontWeight: '500',
                paddingHorizontal: 25,
              }}>
              the
            </Text>
            <Text
              style={{
                left: -15,
                fontSize: 15,
                color: '#767676',
              }}>
              ................................
            </Text>
            <Text
              style={{
                color: '#767676',
                fontSize: 15,
                fontWeight: '500',
                paddingHorizontal: 1,
                left: -5,
              }}>
              and having a frontage of
            </Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              marginTop: '5%',
              flexWrap: 'wrap',
            }}>
            <Text
              style={{
                color: '#767676',
                fontSize: 15,
                fontWeight: '500',
                paddingHorizontal: 25,
              }}>
              .....................................
            </Text>
            <Text
              style={{
                left: -15,
                fontSize: 15,
                color: '#767676',
              }}>
              more or less by a depth of
            </Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              marginTop: '5%',
              flexWrap: 'wrap',
            }}>
            <Text
              style={{
                color: '#767676',
                fontSize: 15,
                fontWeight: '500',
                paddingHorizontal: 25,
              }}>
              .........................................
            </Text>
            <Text
              style={{
                left: -15,
                fontSize: 15,
                color: '#767676',
              }}>
              more or less and legally
            </Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              marginTop: '5%',
              flexWrap: 'wrap',
            }}>
            <Text
              style={{
                color: '#767676',
                fontSize: 15,
                fontWeight: '500',
                paddingHorizontal: 25,
              }}>
              described as
            </Text>
            <Text
              style={{
                left: -15,
                fontSize: 15,
                color: '#767676',
              }}>
              ..........................................................
            </Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              marginTop: '5%',
              flexWrap: 'wrap',
            }}>
            <Text
              style={{
                color: '#767676',
                fontSize: 15,
                fontWeight: '500',
                paddingHorizontal: 25,
              }}>
              .................................................................................
            </Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              marginTop: '5%',
              flexWrap: 'wrap',
            }}>
            <Text
              style={{
                color: '#767676',
                fontSize: 15,
                fontWeight: '500',
                paddingHorizontal: 25,
              }}>
              .................................................................................
            </Text>
          </View>
          <Textt
            title="Offer Price:"
            styling={{
              marginLeft: '6%',
              marginTop: '10%',
              fontWeight: 'bold',
            }}
          />
          <View
            style={{
              flexDirection: 'row',
              marginTop: '5%',
              flexWrap: 'wrap',
            }}>
            <Text
              style={{
                color: '#767676',
                fontSize: 15,
                fontWeight: '500',
                paddingHorizontal: 25,
              }}>
              .................................................................................
            </Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              marginTop: '5%',
              flexWrap: 'wrap',
              margin: '2%',
            }}>
            <Text
              style={{
                color: '#767676',
                fontSize: 15,
                fontWeight: '500',
                paddingHorizontal: 25,
              }}>
              .....................................................................
              Dollar
            </Text>
          </View>
          <Textt
            title="The offer is conditional upon:"
            styling={{
              marginLeft: '6%',
              marginTop: '10%',
              fontWeight: 'bold',
            }}
          />
          <Points title="Non sapien mauris et ac dignissim. Netus viverra ut iaculis" />
          <Points title="Justo, arcu amet, morbi fringilla tristique. Est arcu pellentesque turpis mattis mauris. Est arcu pellentesque." />
          <Points title="pellentesque turpis mattis mauris" />
          <Points title="Justo, arcu amet, morbi fringilla tristique. Est arcu pellentesque turpis mattis mauris. Est arcu pellentesque." />
          <Points title="Non sapien mauris et ac dignissim. Netus viverra ut iaculis" />
          <Points title="Justo, arcu amet, morbi fringilla tristique. Est arcu pellentesque turpis mattis mauris. Est arcu pellentesque." />
          <Points title="Non sapien mauris et ac dignissim. Netus viverra ut iaculis" />
          <Points title="Justo, arcu amet, morbi fringilla tristique. Est arcu pellentesque turpis mattis mauris. Est arcu pellentesque." />
          <Textt
            title="Acknowledgment"
            styling={{
              marginLeft: '6%',
              marginTop: '10%',
              fontWeight: 'bold',
            }}
          />
          <Text
            style={{
              color: '#767676',
              fontSize: 15,
              fontWeight: '500',
              paddingHorizontal: 25,
              top: 10,
              margin: '3%',
            }}>
            I have received, read and understand the above information
          </Text>
          <View
            style={{
              flexDirection: 'row',
              marginTop: '5%',
              flexWrap: 'wrap',
            }}>
            <Text
              style={{
                color: '#767676',
                fontSize: 15,
                fontWeight: '500',
                paddingHorizontal: 25,
              }}>
              ..........................................
            </Text>
            <Text
              style={{
                color: '#767676',
                fontSize: 15,
                fontWeight: '500',
                paddingHorizontal: 5,
              }}>
              ................................
            </Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              marginTop: '5%',
              flexWrap: 'wrap',
            }}>
            <Text
              style={{
                color: '#767676',
                fontSize: 15,
                fontWeight: '500',
                paddingHorizontal: 25,
              }}>
              Signature of Buyer
            </Text>
            <Text
              style={{
                color: '#767676',
                fontSize: 15,
                fontWeight: '500',
                left: 50,
              }}>
              Date
            </Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              marginTop: '5%',
              flexWrap: 'wrap',
            }}>
            <Text
              style={{
                color: '#767676',
                fontSize: 15,
                fontWeight: '500',
                paddingHorizontal: 25,
              }}>
              ..........................................
            </Text>
            <Text
              style={{
                color: '#767676',
                fontSize: 15,
                fontWeight: '500',
                paddingHorizontal: 5,
              }}>
              ................................
            </Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              marginTop: '5%',
              flexWrap: 'wrap',
            }}>
            <Text
              style={{
                color: '#767676',
                fontSize: 15,
                fontWeight: '500',
                paddingHorizontal: 25,
              }}>
              Signature of Seller
            </Text>
            <Text
              style={{
                color: '#767676',
                fontSize: 15,
                fontWeight: '500',
                left: 50,
                //   paddingHorizontal: 103,
              }}>
              Date
            </Text>
          </View>
          <TouchableOpacity
            style={{
              height: 50,
              width: '90%',
              backgroundColor: '#0042CC',
              justifyContent: 'center',
              alignItems: 'center',
              alignSelf: 'center',
              marginTop: '5%',
              marginBottom: '3%',
              borderRadius: 5,
              borderWidth: 1,
            }}>
            <View style={{flexDirection: 'row'}}>
              <Text style={{fontSize: 20, left: 10, color: '#fff'}}>Send</Text>
            </View>
          </TouchableOpacity>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};
export default Agreement;

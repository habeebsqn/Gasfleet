import React from 'react';
import {View, StyleSheet, Text, Image, TouchableOpacity} from 'react-native';

type Props = {
  navigation?: any;
};
const SignIn = ({navigation}: Props) => {
  return (
    <View style={styles.container}>
      <View style={styles.signature}>
        <Image
          source={require('../assets/images/logo1.png')}
          style={styles.image}
          alt={'logo1'}
        />
      </View>
      <View style={styles.headerContainer}>
        <Text style={styles.header}>Lorem ipsum dolor sit amet </Text>
        <Text style={styles.subTitle}>
          Lorem ipsum dolor sit amet consectetur. Volutpat id eu{' '}
        </Text>
      </View>
      <View style={styles.logoContainer}>
        <Image
          source={require('../assets/images/logo2.png')}
          style={styles.logo}
          alt={'logo2'}
        />
      </View>
      <View style={styles.btnGroup}>
        <TouchableOpacity
          style={styles.instantBuyBtn}
          onPress={() => navigation.navigate('InstantBuy')}>
          <Text style={styles.instantBuy}>Buy Instant</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.signInBtn}>
          <Text style={styles.signIn}>Sign In</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#EAF3F0',
  },
  signature: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },
  image: {
    resizeMode: 'contain',
    width: 111,
    height: 52,
  },
  headerContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    gap: 5,
    marginVertical: 20,
  },
  header: {
    fontSize: 24,
    lineHeight: 33,
    fontFamily: 'Fjalla One',
    textAlign: 'center',
    fontWeight: '800',
    width: 296,
  },
  subTitle: {
    fontSize: 14,
    lineHeight: 16,
    fontFamily: 'lora',
    textAlign: 'center',
    width: 266,
  },
  logoContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: 'auto',
    marginVertical: 30,
  },
  logo: {
    resizeMode: 'cover',
    width: 186,
    height: 240,
  },
  btnGroup: {
    flexDirection: 'row',
    gap: 30,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 20,
    width: 'auto',
  },
  instantBuyBtn: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 123,
    height: 37,
    borderWidth: 1,
    borderRadius: 6,
    borderColor: '#C25D41',
  },
  instantBuy: {
    fontSize: 14,
    lineHeight: 16,
    fontFamily: 'lora',
    textAlign: 'center',
    fontWeight: '700',
    color: '#C25D41',
  },
  signInBtn: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 123,
    height: 37,
    borderWidth: 1,
    borderRadius: 6,
    borderColor: '#5BCCF7',
    backgroundColor: '#5BCCF7',
  },
  signIn: {
    fontSize: 14,
    lineHeight: 16,
    fontFamily: 'lora',
    textAlign: 'center',
    fontWeight: '700',
    color: 'white',
  },
});
export default SignIn;

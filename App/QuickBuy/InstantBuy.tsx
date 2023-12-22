import React, {useState} from 'react';
import {
  View,
  StyleSheet,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
  FlatList,
} from 'react-native';
import * as Yup from 'yup';
import {useDispatch, useSelector} from 'react-redux';
import {CircleFade} from 'react-native-animated-spinkit';

import AppForm from '../components/form/AppForm';
import AppFormFields from '../components/form/AppFormFields';
import AppFormSubmitButton from '../components/form/AppFormSubmitButton';
import AppPicker from '../components/AppPicker';
import AppStepper from '../components/AppStepper';
import useRequestOrder from '../custom-hooks/http-service/use-POST/useRequestOrder';
import AppPopUpModal from '../components/AppPopUpModal';
import {uiSliceAction} from '../store/uiSlice';
import {stepperAction} from '../store/stepperSlice';

type stateProps = {
  state: any;
  stepper: any;
  ui: any;
};

const InstantBuy = () => {
  const dispatch = useDispatch();
  const orders = useSelector((state: stateProps) => state.stepper.orders);
  const isModalEnabled = useSelector(
    (state: stateProps) => state.ui.isModalEnabled,
  );
  const [data, setData] = useState();

  const {mutateAsync, error, isError, isPending, mutate} = useRequestOrder();
  //dataSet for dropDown
  const cylinderSizes = [
    {
      gas_cylinder_size: '12kg',
      gas_cylinder_id: '707f34a1-d310-4730-b3fa-618f0147f01c',
    },
    {
      gas_cylinder_size: '20kg',
      gas_cylinder_id: '1d121911-a920-4dba-95d4-788ade6fbef0',
    },
  ];

  //initials values for the registration form
  const initialValues = {
    firstName: '',
    lastName: '',
    phoneNumber: '',
    email: '',
    address: '',
  };

  //Yup library used to handle form validation requirements
  const schema = Yup.object({
    firstName: Yup.string().required('Required').label('First Name'),
    lastName: Yup.string().required('Required').label('Last Name'),
    email: Yup.string()
      .email('Invalid email address')
      .required('Required')
      .label('Email'),
    phoneNumber: Yup.string()
      .max(11, 'Enter Valid Phone Number')
      .matches(/^0[789][01]\d{8}$/, 'Enter Valid Phone Number')
      .required('Required')
      .label('Phone Number'),
    address: Yup.string().notRequired().label('Description'),
  });

  const handleRequestOrder = () => {
    const isAnyOrderIncomplete = orders.some(
      (order: {gas_cylinder_id: string}) => !order.gas_cylinder_id,
    );

    if (isAnyOrderIncomplete) {
      console.log('Please fill in all gas cylinder selections');
      return;
    }

    console.log(orders);
    const ordersData = {order: orders};
    mutate(ordersData, {
      onSuccess: data => {
        const {message, status} = data.data;
        console.log(message, status);

        if (status === 'success') {
          // setData(data);
          dispatch(uiSliceAction.handleOpenModal());
        } else return;
      },
      onError: error => {
        console.log(error);
      },
    });
  };

  const handleAddOrder = () => {
    dispatch(stepperAction.handleIncreament());
  };

  const handleRemoveOrder = () => {
    dispatch(stepperAction.handleDecreament());
  };

  return (
    <KeyboardAvoidingView
      behavior="position"
      enabled
      style={styles.keyContainer}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={styles.scrollContainer}>
        <View style={styles.container}>
          <View style={styles.headerContainer}>
            <Text style={styles.title}>Instant Buy</Text>
            <Text style={styles.subTitle}>
              Lorem ipsum dolor sit amet consectetur. Volutpat id eu
            </Text>
          </View>

          <View style={styles.formContainer}>
            <AppForm
              initialValues={initialValues}
              validateSchema={schema}
              onSubmit={handleRequestOrder}>
              <AppFormFields>
                <AppFormFields.Label>First Name</AppFormFields.Label>
                <AppFormFields.Input
                  name="firstName"
                  style={styles.input}
                  autoCapitalize="none"
                  autoCorrect={false}
                  placeholder="First Name"
                />
                <AppFormFields.ErrorMessage
                  name={'firstName'}
                  style={styles.error}
                />
              </AppFormFields>

              <AppFormFields>
                <AppFormFields.Label>Last Name</AppFormFields.Label>
                <AppFormFields.Input
                  name="lastName"
                  autoCapitalize="none"
                  autoCorrect={false}
                  placeholder="Last Name"
                  style={styles.input}
                />
                <AppFormFields.ErrorMessage
                  name={'lastName'}
                  style={styles.error}
                />
              </AppFormFields>

              <AppFormFields>
                <AppFormFields.Label>Email</AppFormFields.Label>
                <AppFormFields.Input
                  name="email"
                  autoCapitalize="none"
                  autoCorrect={false}
                  placeholder="Valid email"
                  style={styles.input}
                />
                <AppFormFields.ErrorMessage
                  name={'email'}
                  style={styles.error}
                />
              </AppFormFields>

              <AppFormFields>
                <AppFormFields.Label>Phone Number</AppFormFields.Label>
                <AppFormFields.Input
                  name="phoneNumber"
                  autoCapitalize="none"
                  autoCorrect={false}
                  placeholder="Phone number"
                  style={styles.input}
                />
                <AppFormFields.ErrorMessage
                  name={'phoneNumber'}
                  style={styles.error}
                />
              </AppFormFields>

              <AppFormFields>
                <FlatList
                  data={orders}
                  keyExtractor={(item, index) => index.toString()}
                  style={styles.FlatList}
                  horizontal={false}
                  renderItem={({item, index}) => (
                    <View style={styles.orderContainer}>
                      <View style={{width: '75%', marginVertical: 5}}>
                        <AppPicker
                          dataSet={cylinderSizes}
                          dropdownStyle={styles.dropdownStyle}
                          buttonStyle={styles.buttonStyle}
                          buttonTextStyle={styles.buttonTextStyle}
                          orderIndex={index}
                        />
                      </View>
                      <View style={{width: '25%'}}>
                        <AppStepper
                          orderIndex={index}
                          quantity={item.quantity}
                        />
                      </View>
                    </View>
                  )}
                />
              </AppFormFields>
              <AppFormFields>
                <View
                  style={{
                    width: '100%',
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    paddingHorizontal: 10,
                  }}>
                  <TouchableOpacity onPress={handleAddOrder}>
                    <Text>Add More</Text>
                  </TouchableOpacity>
                  {orders.length > 1 ? (
                    <TouchableOpacity onPress={handleRemoveOrder}>
                      <Text>Remove</Text>
                    </TouchableOpacity>
                  ) : null}
                </View>
              </AppFormFields>
              <AppFormFields>
                <AppFormFields.Label>Delivery Address</AppFormFields.Label>
                <AppFormFields.Input
                  name="address"
                  autoCapitalize="none"
                  autoCorrect={false}
                  placeholder="Enter here "
                  style={styles.Addressinput}
                />
                <AppFormFields.ErrorMessage
                  name={'address'}
                  style={styles.error}
                />
              </AppFormFields>

              <AppFormFields>
                <AppFormSubmitButton
                  title={'Next'}
                  style={styles.btn}
                  titleStyle={styles.btnText}
                  onPress={handleRequestOrder}
                  loader={<CircleFade size={30} color={'black'} />}
                  isDisabled={isPending ? true : false}
                />
              </AppFormFields>
            </AppForm>
          </View>

          {isModalEnabled && <AppPopUpModal data={data} />}
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#EAF3F0',
  },
  keyContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  scrollContainer: {
    marginVertical: 20,
  },
  headerContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    gap: 15,
    width: '100%',
  },
  FlatList: {
    width: '100%',
  },
  title: {
    fontSize: 24,
    lineHeight: 33,
    fontFamily: 'Fjalla One',
    textAlign: 'center',
    fontWeight: '800',
    width: 296,
    color: '#C25D41',
  },
  subTitle: {
    fontSize: 14,
    lineHeight: 16,
    fontFamily: 'lora',
    textAlign: 'center',
    width: 293,
  },
  formContainer: {
    width: '100%',
    marginVertical: 15,
    paddingHorizontal: 15,
    height: 'auto',
  },
  error: {},
  input: {
    height: 42,
    backgroundColor: 'white',
    borderRadius: 8,
    fontSize: 9,
    lineHeight: 11,
  },
  Addressinput: {
    height: 42,
    backgroundColor: 'white',
    borderRadius: 8,
    fontSize: 9,
    lineHeight: 11,
    minHeight: 116,
    paddingHorizontal: 15,
    paddingVertical: 0,
  },
  dropdownContainer: {
    width: '100%',
  },
  dropdownStyle: {
    width: '90%',
  },
  buttonStyle: {
    width: '100%',
    backgroundColor: 'white',
    borderRadius: 8,
    height: 42,
  },
  buttonTextStyle: {
    fontSize: 9,
    lineHeight: 11,
    textAlign: 'left',
  },
  orderContainer: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    width: '100%',
    gap: 4,
  },
  btn: {
    height: 50,
    borderRadius: 8,
    backgroundColor: '#5BCCF7',
    top: 50,
  },
  btnText: {
    fontSize: 14,
    lineHeight: 17,
    color: '#FCFCFC',
  },
});
export default InstantBuy;

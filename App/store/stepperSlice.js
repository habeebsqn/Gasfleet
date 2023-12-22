import {createSlice} from '@reduxjs/toolkit';

const stepperSlice = createSlice({
  name: 'stepper',
  initialState: {
    counter: 1,
    orders: [{}],
  },

  reducers: {
    handleIncreament: currentState => {
      if (currentState.counter < 5) {
        currentState.counter = currentState.counter + 1;
        currentState.orders.push({});
      } else return;
    },
    handleDecreament: currentState => {
      if (currentState.counter > 1) {
        currentState.counter = currentState.counter - 1;
        currentState.orders.pop({});
      } else return;
    },
    handleAddQuantity: (currentState, action) => {
      const {orderIndex} = action.payload;
      const order = currentState.orders[orderIndex];

      if (order && order.gas_cylinder_id) {
        if (order.quantity < 5) {
          order.quantity += 1;
        }
      } else return;
    },
    handleSubtractQuantity: (currentState, action) => {
      const {orderIndex} = action.payload;
      const order = currentState.orders[orderIndex];

      if (order && order.gas_cylinder_id) {
        if (order.quantity > 1) {
          order.quantity -= 1;
        }
      } else return;
    },
    handleSelectCylinder: (currentState, action) => {
      const {orderIndex, selectedItem} = action.payload;

      // Creating a copy of the orders array
      const updatedOrders = [...currentState.orders];

      // getting the order object at the specified index
      const order = updatedOrders[orderIndex];

      if (order && order.gas_cylinder_id) {
        // If gas_cylinder_id attribute is present
        updatedOrders[orderIndex] = {
          ...order,
          gas_cylinder_id: selectedItem.gas_cylinder_id, // since the gas_cylinder_id attribute exist we update it based on the selected cylinder id
        };
      } else {
        // If gas_cylinder_id attribute is not present in the order object
        updatedOrders[orderIndex] = {
          gas_cylinder_id: selectedItem.gas_cylinder_id,
          quantity: 1, // if gas_cylinder_id does not exist the quantity won't so we create a quanity attribute and assign an initial value of 1
        };
      }

      // Update the state with the new copy of the orders array
      return {
        ...currentState,
        orders: updatedOrders,
      };
    },
  },
});

export const stepperAction = stepperSlice.actions;

export default stepperSlice;

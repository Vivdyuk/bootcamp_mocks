const obj = {
  newObj: {
    innerObj: {
      elements: {
        email: {
          value: '',
          name: '',
          cost: 0,
        }
      }
    }
  },
  secondObj: {}
};

const {value, name, cost} = obj.newObj.innerObj.elements.email;

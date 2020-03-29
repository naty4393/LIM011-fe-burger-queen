import { getOrder } from '@/firebase/function-firestore.js'

export const actionGetList = (getData) => {
  getOrder().orderBy('date', 'asc').onSnapshot((querySnapshot) => {
    const orderForOrder = [];
    querySnapshot.forEach((doc) => {
      console.log('doc', doc.data());
      const objectOFOrder = {
        id: doc.id,
        name: doc.data().nameClient,
        waitress: doc.data().waitress,
        date: doc.data().date,
        productList: doc.data().listOrder,
        totalCount: doc.data().sumtotal,
      };
      orderForOrder.push(objectOFOrder);
    });
    console.log('orderForOrder', orderForOrder);
    getData(orderForOrder.flat());
  });
};

/* export const actionGetList = () => 
  getOrder().orderBy('date', 'desc').onSnapshot((querySnapshot) => {
    querySnapshot.forEach((doc) => { this.$store.dispatch('saveListOfOrders', doc.data()) });
  }); */

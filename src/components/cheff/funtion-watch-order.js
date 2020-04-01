import { getOrder, getReadyOrder } from '@/firebase/function-firestore.js'

export const actionGetList = (getData) => {
  getOrder().orderBy('hour', 'asc').onSnapshot((querySnapshot) => {
    const orderForOrder = [];
    querySnapshot.forEach((doc) => {
      console.log('doc', doc.data());
      const objectOFOrder = {
        id: doc.id,
        name: doc.data().nameClient,
        waitress: doc.data().waitress,
        day: doc.data().day,
        hour: doc.data().hour,
        productList: doc.data().listOrder,
        totalCount: doc.data().sumtotal,
      };
      orderForOrder.push(objectOFOrder);
    });
    console.log('orderForOrder', orderForOrder);
    getData(orderForOrder.flat());
  });
};

export const actionGetReadyList = (getData) => {
  getReadyOrder().orderBy('hour', 'desc').onSnapshot((querySnapshot) => {
    const ReadyList = [];
    querySnapshot.forEach((doc) => {
      console.log('doc', doc.data());
      ReadyList.push(doc.data());
    });
    console.log('ReadyList', ReadyList);
    getData(ReadyList.flat());
  });
};


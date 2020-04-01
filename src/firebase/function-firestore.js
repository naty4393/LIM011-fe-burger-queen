import {db} from '@/firebase/init'
import 'firebase'

export const getUsers = ()=> db.collection('user').get();

export const addOrder = (nameClient, listOrder, sumtotal, waitress, day, hour) => db.collection('pedidos').add({
    waitress,
    nameClient,
    listOrder,
    sumtotal,
    day,
    hour,
})

export const chooseProduct = (option) => db.collection(option).get();

export const getOrder = () => db.collection('pedidos');

export const saveReadyList = (id, num, day, hour, cheff, waitress, name, productList, total) => db.collection('pedidosListos').doc(id).set({
    id,
    num,
    day,
    hour,
    cheff,
    waitress,
    name,
    productList,
    total,
});

export const deleteOrder = (id) => db.collection('pedidos').doc(id).delete();

export const getReadyOrder = () => db.collection('pedidosListos');
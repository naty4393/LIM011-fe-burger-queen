import {db} from '@/firebase/init'
import 'firebase'

export const getUsers = ()=> db.collection('user').get();

export const addOrder = (nameClient, listOrder, sumtotal, waitress, date) => db.collection('pedidos').add({
    waitress,
    nameClient,
    listOrder,
    sumtotal,
    date,
})

export const chooseProduct = (option) => db.collection(option).get();

export const getOrder = () => db.collection('pedidos');
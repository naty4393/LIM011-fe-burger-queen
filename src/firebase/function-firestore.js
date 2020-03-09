import {db} from '@/firebase/init'
import 'firebase'

export const getUsers = ()=> db.collection('user').get();
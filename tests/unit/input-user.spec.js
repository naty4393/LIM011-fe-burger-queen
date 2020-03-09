import MockFirebase from 'mock-cloud-firestore';
import inputUser from '@/components/input-user.vue'
const fixtureData = {
    __collection__: {
      user: {
        __doc__: {
          mesero1: {
            usuario: 72154488,
            contraseña: 5362450,
          },
        }
      }
    }
  }

  global.firebase = new MockFirebase(fixtureData, { isNaiveSnapshotListenerEnabled: true });


describe('inputUser', () => {
    it('deberia encontrar al usuario', (done) => {
      return inputUser.methods.confirmUser().then((result)=>{
        console.log(result.data());
        expect(result.data().usuario).toBe('72154488');
        done();
      })
    })
  }) 
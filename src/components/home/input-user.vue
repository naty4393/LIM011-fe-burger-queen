<template>
    <div class="div-user">
        <section class="input-user-text">
            <div><label for="text">Usuario</label></div>
            <input @click="flag=true" type="text" name="text" id="text" v-model="user"><br>
            <div><label for="password">Contraseña</label></div>
            <input @click="flag=false" type="password" name="password" id="password" v-model="password">
        </section>
        <section class="section-center container-numbers-input">
            <div class="container">
                <div class="row row-cols-3">
                    <div class="col-3">
                        <button class="btn btn-primary btn-num btn-1" @click="writeNumber('1')">1</button>
                        <button class="btn btn-primary btn-num" @click="writeNumber('4')">4</button>
                        <button class="btn btn-primary btn-num btn-7" @click="writeNumber('7')">7</button>
                        <button class="btn btn-danger btn-num btn-0">clear</button>
                    </div>
                    <div class="col-3">
                        <button class="btn btn-primary btn-num" @click="writeNumber('2')">2</button>
                        <button class="btn btn-primary btn-num" @click="writeNumber('5')">5</button>
                        <button class="btn btn-primary btn-num" @click="writeNumber('8')">8</button>
                        <button class="btn btn-primary btn-num btn-0" @click="writeNumber('0')">0</button>
                    </div>
                    <div class="col-3">
                        <button class="btn btn-primary btn-num btn-3" @click="writeNumber('3')">3</button>
                        <button class="btn btn-primary btn-num" @click="writeNumber('6')">6</button>
                        <button class="btn btn-primary btn-num btn-9" @click="writeNumber('9')">9</button>
                        <button class="btn btn-success btn-num btn-enviar" @click="confirmUser()">enviar</button>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script>
import { getUsers } from '@/firebase/function-firestore.js'

export default {
  name: 'input-user',
  data(){
    return {
        number:'',
        user:'',
        password:'',
        flag: true,
    }
  },
  components: {
  },
  methods: {
    writeNumber(num){
      if(this.flag){
        this.user=`${this.user}${num}`;
        console.log(this.user);
        
      }
      else{
        this.password=`${this.password}${num}`;
        console.log(this.password);
        
      }
    },
    confirmUser(){
      getUsers()
        .then((querySnapshot)=>{
          querySnapshot.forEach(doc => {
            if (doc.data().usuario == this.user && doc.data().contraseña==this.password ) {
              this.$store.dispatch('addwaitress', this.user)
              if (doc.data().personal == 'mesero') {
                this.$router.push('choose-table');
              }else if (doc.data().personal == 'cheff') {
                this.$router.push('watch-order');
              }
            }
          })
        })
      
    }
  }
}
</script>

<style>
    .input-user-text{
        padding-left: 150px;
    }
    .input-user-text>input{
        border-radius: 8px;
    }
    input{
        margin: 5px;
    }
    .btn-1{
        border-top-left-radius: 20px;
    }
    .btn-3{
        border-top-right-radius: 20px;
    }
    .btn-7{
        border-bottom-left-radius: 20px;
    }
    .btn-9{
        border-bottom-right-radius: 20px;
    }
    .btn-0{
        border-radius: 20px
    }
    .btn-enviar{
        border-radius: 20px;
        padding: 5px;
    }
    .container-numbers-input{
        margin-left: 90px;
    }
    .btn-num{
      width: 60px;
      height: 60px;
      margin: 6px;
    }
</style>
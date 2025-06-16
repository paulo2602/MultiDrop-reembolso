<template>

  <body>
    <div class="container">

      <header>
        <h1> Solicitar reembolso </h1>
        <p>Você pode solicitar um reembolso dentro do prazo estipulado pelo produtor.</p>
      </header>


      <div class="caixa-input">
        <div class="div-button">
          <button class="button-exite" @click="sair()"> &#10005;</button>
        </div>

        <h3> Verify your email</h3>
        <span>Para confirmar esta operação, digite o código que enviamos para o seu e-mail: john@liberttar.com</span>
        <br>

        <input type="number"><br>
        <Button class="button-verificacao" @click="verificacao()" label="Submit"> Continue &#8702; </button>
      </div>

    </div>

  </body>

</template>


<script>
export default {
  created() {
    console.log(this.$router);

  }, //funcao declarada dentro de Methods
  methods: {
    verificacao() {   //funcao declarada 
      this.$router.push('about')
      console.log('Ainda não consegui fazer una modal');
    },
    sair() {
      this.$router.push('/')

    }
  }
}


</script>


<style>

.container {
  max-height: 270px;
  margin-top: 200px;
}

header {
  text-align: center;
}

.caixa-input {
  background: #FFFFFF;
  border: solid 2px #0000001A;
  border-radius: 15px;
}

span {
  color: #171717;
  font-size: 14px;
  line-height: 150%;
  text-align: center;

}
h3{
  font-size: 23px;
  line-height: 100%;
  padding: 10px;
}

input {
  width: 390px;
  height: 48px;
  padding: 8px 12px 8px 12px;
  border-radius: 8px;
  border: solid 2px #C4C7CA;
}

.button-verificacao {
  padding: 15px;
  margin: 10px;
  border: none;
  border-radius: 6px;
  background: #10B981;
  color: #FFFFFF;
  font-size: 15.75px;
  width: 218px;
}

.div-button{
  width: 430px;
  height: 30px;
  position: relative;
}

.button-exite{
  position: absolute;
  right: 0;
  border: none;
  
}

</style>
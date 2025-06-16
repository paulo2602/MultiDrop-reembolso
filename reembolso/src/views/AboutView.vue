<template>

  <div class="geral">

    <button class="button-voltar" @click="sair()"> &larr; Voltar </button>




    <div class="container">

      <h1>Suas Compras </h1>
      <p id="log">Você está logado(a) como: john@liberttar.com. <a class="logout" href="http://localhost:5173/"> Log Out
        </a> </p>

    </div>

    <div class="alert-products">
      <p id="alerta"> Ao solicitar um reembolso, a sua compra será cancelada e você não terá mais acesso ao produto.
      </p>

      <div class="products">
        <img src="../assets/img/fons.jpg" alt="">
        <div>
          <h3>Wireless Noise-Canceling Headphones</h3>
          <p>Valor da compra: € 324.00</p>
          <p>Data da compra: 22/05/2025 </p>
          <p>Data limite para solicitar reembolso: 29/05/2025</p>
        </div>
        <!-- botao criado com Primevue -->
        <Button class="button-reembolso" @click="solicitar()" label="Submit"> Solicitar reembolso</button>
      </div>



      <div class="products">
        <img src="../assets/img/fons.jpg" alt="">
        <div>
          <h3>Wireless Noise-Canceling Headphones</h3>
          <p>Valor da compra: € 324.00</p>
          <p>Data da compra: 22/05/2025 </p>
          <p>Data limite para solicitar reembolso: 29/05/2025</p>
        </div>
      </div>


      <div class="products">
        <img src="../assets/img/fons.jpg" alt="">
        <div class="text">
          <h3>Wireless Noise-Canceling Headphones</h3>
          <p>Valor da compra: € 324.00</p>
          <p>Data da compra: 22/05/2025 </p>
          <p>Data limite para solicitar reembolso: 29/05/2025</p>
        </div>
        <Button class="reembolsado" @click="solicitar()" label="Submit"> Solicitar reembolso</button>

      </div>

    </div>

  </div>


</template>

<script>
export default {
  created() {
  },
  methods: {
    solicitar() {
      this.$router.push('/solicitar')
      console.log('Menu Reembolso ');

    }
  }
}

</script>




<style>


.alert-products {
  position: absolute;
  top: 40%;
  left: 200px;
  right: 10px;
  max-width: 160vh;
  height: 50vw;
}

.container {
  display: flex;
  justify-content: center;
  gap: 400px;
  position: relative;
  right: 250px;
  bottom: 60px;
}


.logout {
  text-decoration: none;
  color: black;
  font-weight: 600;
  font-size: 15px;
}


img {
  width: 200px;
  height: 180px;
}

.products {
  padding: 10px;
  margin: 5px;
  display: flex;
  align-items: center;
  text-align: left;
  border: solid 2px #0000001A;

}

.text {
  padding: 5px;

}

.button-reembolso {

  padding: 10px 10.5px 10px 10.5px;
  border: solid 1px #D4D4D4;
  border-radius: 6px;
  background-color: #E5E5E5;
  color: #404040;
  position: absolute;
  right: 160px;
  font-size: 14px;
}

.button-voltar {
  background-color: #FFFFFF;
  position: absolute;
  top: 250px;
  left: 230px;
  border: none;
  color: #404040;
  font-size: 16px;
  font-weight: 600;
}

#log {
  color: #737373;
  line-height: 150%;
  
}

#alerta {
  text-align: center;
  font-size: 15px;
  line-height: 100%;
  color: #2563EB;

}

.reembolsado {
  padding: 4px 10px 4px 10px;
  border: solid 1px #D4D4D4;
  border-radius: 140px;
  background-color: #22C55E;
  color: #FFFFFF;
  position: absolute;
  right: 160px;
  font-size: 14px;
}
</style>

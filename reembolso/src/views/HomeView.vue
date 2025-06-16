<template>
    <div class="container">
        <h1>Solicitar reembolso </h1>
        <p>Você pode solicitar um reembolso dentro do prazo estipulado pelo produtor.</p>

        <div class="caixa-input">
            <label for="email">E-mail usado na compra</label><br>
            <input type="email" placeholder="Didite seu E-mail...">
            <br>

            <!-- botao criado com Primevue -->
            <Button class="button-email" @click="login()" label="Submit"> Encontrar sua compra </button>
        </div>

    </div>
    <br>
    <br><br>



</template>


<script>

export default {
    created() {
        console.log(this.$router);

    }, //funcao declarada dentro de Methods
    methods: {
        login() {   //funcao declarada 
            this.$router.push('/servicos')
            console.log('Bora chamar a suposta modal');

        }
    }
}
</script>



<style>
* {
    font-family: "Inter", sans-serif;
    margin: 0;
    padding: 0;
    box-sizing: border-box;

}

.container {
    place-items: center;
    margin: 35vh;

}

p {
    padding: 10px;
    font-size: 14px;
    color: #171717;
}

.caixa-input {
    border: solid 1px #0000001A;
    padding: 40px;
    margin: 30px;
    display: flex;
    flex-direction: column;
    align-items: center;

}

label {
    color: #1D1F20;

}

input {
    width: 390px;
    height: 48px;
    padding: 8px 12px 8px 12px;
    border-radius: 8px;
    border: solid 1px #C4C7CA;
}

.button-email {
    padding: 15px;
    margin: 10px;
    border: none;
    border-radius: 6px;
    background: #10B981;
    color: #FFFFFF;
    font-size: 15.75px;
    width: 390px;
}
</style>
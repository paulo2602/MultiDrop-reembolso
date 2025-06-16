<template>


    <button class="button-voltar" @click="sair()"> &larr; Voltar </button>

        <div class="container1">
            <h1>Suas Compras </h1>
            <p id="log">Você está logado(a) como: john@liberttar.com. <a class="logout" href="http://localhost:5173/">
                    Log
                    Out
                </a> </p>
        </div>

    <div class="body">
        <div class="informs">
            <h3> Detalhes do produto</h3>

            <div class="dados-reembolso">
                <h4>Nome do produto </h4>
                <p>Wireless Noise-Canceling Headphones</p>

                <h4>Valor </h4>
                <p>1x € 324.00</p>

                <h4>Data Limite para solicitar reembolso </h4>
                <p>29/05/2025</p>

                <h4>Método de pagamento </h4>
                <p>Mastercard 9915</p>

                <h4>E-mail de suporte do vendedor</h4>
                <p>suporte@multidrop.com</p>
            </div>




            <div class="informs">
                <h3>Motivo do reembolso</h3>

                <section class="motivos">
                    <h4>Selecione o motivo do reembolso <span>Obrigatório</span> <br> </h4>

                    <form>
                        <input type="radio" value="opcao1" id="opcao1">
                        <label for="opcao1"> Eu ainda não consegui acessar o produto, mas gostaria de
                            acessar</label><br>

                        <input type="radio" value="opcao2" id="opcao2">
                        <label for="opcao2"> Preciso do dinheiro para outras coisas</label><br>

                        <input type="radio" value="opcao3" id="opcao3">
                        <label for="opcao3"> Recebi o acesso, mas as páginas ou arquivos não abrem</label><br>

                        <input type="radio" value="opcao4" id="opcao4">
                        <label for="opcao4"> A qualidade do produto não atingiu as minhas expectativas</label><br>

                        <input type="radio" value="opcao5" id="opcao5">
                        <label for="opcao5">O produto está incompleto </label><br>

                        <input type="radio" value="opcao6" id="opcao6">
                        <label for="opcao6">Compra duplicada </label><br>

                    </form>

                    <section>
                        <h4>Você gostaria de informar mais algo?</h4>
                        <textarea name="comentarios" placeholder="Opcional" rows="5" cols="80"></textarea>
                    </section>

                    <div>
                        <Button class="button-final" @click="verificacao()" label="Submit">Solicitar Reembolso </button>

                    </div>



                </section>
            </div>
        </div>
    </div>
</template>

<script>


</script>


<style>


.container1 {
    display: flex;
    justify-content: center;
    gap: 400px;
    position: relative;
    right: 250px;
    top: 280px;
}

.body{
  position: absolute;
  top: 40%;
  left: 200px;
  right: 10px;
  max-width: 160vh;
  height: 50vw;
  

}

.dados-reembolso{

    border: solid 2px #0000001A;

}





input {
    width: 30px;
    height: 20px;
}


.button-final {
    padding: 15px;
    margin: 10px;
    border: none;
    border-radius: 6px;
    background: #10B981;
    color: #FFFFFF;
    font-size: 15.75px;
    width: 218px;
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
</style>
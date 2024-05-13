<script>
import axios from 'axios'
export default {
    name: "ValidaCep",
    data: () => ({
        loaded: false,
        loading: false,
        cepDigitado: '78550258',
    }),

    methods: {
        onClick() {
            this.loading = true
            const cep = this.cepDigitado.replace(/\D/g, '')
            //faz uma requisição para a API do viacep
            axios.get('https://viacep.com.br/ws/' + cep + '/json/')
                .then(response => {
                    console.log(response.data)
                    //aqui é feito a atribuição do resultado da requisição
                    this.loaded = response.data

                    this.loading = false
                })
                .catch(error => {
                    console.log(error)
                    //caso ocorra um erro, o loading é desativado e a mensagem de erro é exibida
                    this.loaded = { erro: true }
                    this.loading = false
                })
        },
    },
}
</script>

<template>
    <v-container class>
        <v-row>
            <v-text-field class="input-cep pt-0 pb-0" v-model="cepDigitado" label="Digite o CEP" outlined dense
                @keyup.enter="onClick"></v-text-field>
            <v-btn @click="onClick" color="purple" dark outilined elevation="4" class="btn-buscar pt-0 pb-0">Buscar <v-icon right dark>
                    mdi-cloud-download
                </v-icon></v-btn>
        </v-row>
    </v-container>

</template>

<style scoped>
.btn-buscar {
    border-radius: 0 0.35rem 0.35rem 0 !important;
    height: 2.5rem !important;
    width: 50%;
}
.input-cep {
    border-radius: 0.35rem 0 0 0.35rem !important;
    height: 2.5rem !important;
    width: 50%;
}
</style>
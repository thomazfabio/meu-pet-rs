<template>
  <v-form>
    <v-container>
      <v-row>
        <v-col cols="12" md="5" class="pb-0 pt-0">
            <ValidaCep></ValidaCep>
        </v-col>
     
        <v-col cols="12" md="5" class="pb-0 pt-0">
          <v-text-field label="Logradouro" outlined dense></v-text-field>
        </v-col>
        <v-col cols="12" md="2" class="pb-0 pt-0">
          <v-text-field label="Numero" outlined dense></v-text-field>
        </v-col>
        <v-col cols="12" md="3" class="pb-0 pt-0">
          <v-text-field label="Complemento" outlined dense></v-text-field>
        </v-col>
        <v-col cols="12" md="3"class="pb-0 pt-0">
          <v-text-field label="Bairro" outlined dense></v-text-field>
        </v-col>
        <v-col cols="12" md="3"class="pb-0 pt-0">
          <v-text-field label="Cidade" outlined dense></v-text-field>
        </v-col>
        <v-col cols="12" md="3"class="pb-0 pt-0">
          <v-text-field label="Estado" outlined dense></v-text-field>
        </v-col>
      </v-row>
    </v-container>
  </v-form>
</template>

<script>
import ValidaCep from './ValidaCep.vue';
export default {
  components: {
    ValidaCep
  },
  name: "FormEndereco",
  data: () => ({

  }),
}
</script>
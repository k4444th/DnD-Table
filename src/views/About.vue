<template>
  <div>
    <Hero/>
    <br>
    <v-container>
      <h1>Who are We?</h1>
      <hr>
      <h4>Tobias Herbitschek - Livia Löw - Katharina Weinberger</h4>
      <br>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio fugiat nemo quas nobis odit, consequatur doloribus expedita, iure ab blanditiis earum asperiores non libero nam reprehenderit quaerat neque odio officiis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad, suscipit id iusto aliquid delectus voluptate eveniet fugiat libero temporibus velit atque quisquam dolorum vitae doloribus dolores eius asperiores placeat saepe.</p>
      <br>

      <v-row>
        <v-col class="col-12 col-md-4">
          <v-card class="mx-auto" outlined>
            <v-list-item three-line>
              <v-list-item-content>
                <div class="text-overline mb-4">
                  Backend Developer
                </div>
                <v-list-item-title class="text-h5 mb-1">
                  Tobias Herbitschek
                </v-list-item-title>
                <v-list-item-subtitle>What are you doing?</v-list-item-subtitle>
              </v-list-item-content>

              <v-list-item-avatar tile size="80" color="grey"></v-list-item-avatar>
            </v-list-item>

            <v-card-actions>
              <v-btn outlined rounded text>Contact</v-btn>
            </v-card-actions>
          </v-card>
        </v-col>

        <v-col class="col-12 col-md-4">
          <v-card class="mx-auto" outlined>
            <v-list-item three-line>
              <v-list-item-content>
                <div class="text-overline mb-4">
                  Hardware Developer
                </div>
                <v-list-item-title class="text-h5 mb-1">
                  Livie Löw
                </v-list-item-title>
                <v-list-item-subtitle>What are you doing?</v-list-item-subtitle>
              </v-list-item-content>

              <v-list-item-avatar tile size="80" color="grey"></v-list-item-avatar>
            </v-list-item>

            <v-card-actions>
              <v-btn outlined rounded text>Contact</v-btn>
            </v-card-actions>
          </v-card>
        </v-col>


        <v-col class="col-12 col-md-4">
          <v-card class="mx-auto" outlined>
            <v-list-item three-line>
              <v-list-item-content>
                <div class="text-overline mb-4">
                  Frontend Developer
                </div>
                <v-list-item-title class="text-h5 mb-1">
                  Katharina Weinberger
                </v-list-item-title>
                <v-list-item-subtitle>What are you doing?</v-list-item-subtitle>
              </v-list-item-content>

              <v-list-item-avatar tile size="80" color="grey"></v-list-item-avatar>
            </v-list-item>

            <v-card-actions>
              <v-btn outlined rounded text>Contact</v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
      <br>
    </v-container>
  </div>
</template>

<script>
// @ is an alias to /src
import Hero from "@/components/Hero.vue";

export default {
  name: "About",
  components: {
    Hero,
  }
};
</script>

<style scoped>
h1, h4{
  font-weight: 300;
}
</style>
<template>
  <div>
    <PreviewHero/>
    <br>
    <v-container>
      <h1>Why us?</h1><br>
      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequuntur, quasi ad veniam numquam harum iure autem amet aspernatur incidunt neque omnis quos eum. Quisquam, expedita veritatis sint corrupti quibusdam consequatur?</p>
      <br><br>
      <h1>What do we offer?</h1><br>
      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequuntur, quasi ad veniam numquam harum iure autem amet aspernatur incidunt neque omnis quos eum. Quisquam, expedita veritatis sint corrupti quibusdam consequatur?</p>
      <br>
        <v-row>
          <v-col class="col-12 col-md-4" v-for="feature in features" :key="feature.title">
            <v-card>
              <v-list-item >
                <v-list-item-content>
                  <v-list-item-title>{{ feature.title }}</v-list-item-title>
                  <v-list-item-subtitle>{{ feature.subtitle }}</v-list-item-subtitle>
                  <br>
                  {{ feature.text }}
                </v-list-item-content>
              </v-list-item>
            </v-card>
          </v-col>
        </v-row>
    </v-container>
    <br>
  </div>
</template>

<script>
// @ is an alias to /src
import PreviewHero from "@/components/PreviewHero.vue";

export default {
  name: "Home",
  components: {
    PreviewHero,
  },
  data() {
    return {
      features: [
        {
          title: "Hello 1",
          subtitle: "Blabla 1",
          text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequuntur, quasi ad veniam numquam harum iure autem amet aspernatur incidunt neque omnis quos eum. Quisquam, expedita veritatis sint corrupti quibusdam consequatur?"
        },
        {
          title: "Hello 2",
          subtitle: "Blabla 2",
          text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequuntur, quasi ad veniam numquam harum iure autem amet aspernatur incidunt neque omnis quos eum. Quisquam, expedita veritatis sint corrupti quibusdam consequatur?"
        },
        {
          title: "Hello 3",
          subtitle: "Blabla 3",
          text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequuntur, quasi ad veniam numquam harum iure autem amet aspernatur incidunt neque omnis quos eum. Quisquam, expedita veritatis sint corrupti quibusdam consequatur?"
        }
      ]
    }
  }
};
</script>

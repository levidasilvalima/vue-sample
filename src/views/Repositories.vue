<template>

    <v-container  fluid grid-list-xl>
     <p> {{ repos }} </p> 
     <v-layout column>
        <v-flex>
            <v-layout>
                <v-flex d-flex xs12 sm12 md12>

                  <v-data-table :headers="mainHeaders"
                                :items="repos"
                                item-key="name"
                                hide-actions
                                class="elevation-1">

                    <template slot="items" slot-scope="props">
                      <tr>
                        <td>
                          <v-list-tile-avatar>
                            <img :src="props.item.owner.avatar_url">
                            <!-- <img v-bind:src= "props.item.owner.avatar_url">  -->
                          </v-list-tile-avatar>
                        </td>
                        <td class="text-xs">{{ props.item.full_name }}</td>
                        <td class="text-xs">{{ props.item.stargazers_count }}</td>
                        <td class="text-xs">{{ props.item.forks_count }}</td>
                      </tr>
                    </template>

                  </v-data-table>
                </v-flex>
            </v-layout>
        </v-flex>
      </v-layout>
    </v-container>

</template>

<script>

export default {
    name: 'repositorios',
    table: true,
    data () {
        return {
            mainHeaders: [
                { text: 'Avatar', value: 'avatar' },
                { text: 'Name', value: 'name' },
                { text: 'Star', value: 'star' },
                { text: 'Forks', value: 'forks' }
            ],
            mainItems: [
              { name: 'Vue 1', star: '30', forks:'2', avatar: 'https://vuejs.org/images/logo.png' },
              { name: 'Vue 2', star: '31', forks:'2', avatar: 'https://vuejs.org/images/logo.png' },
              { name: 'Vue 3', star: '45', forks:'2', avatar: 'https://vuejs.org/images/logo.png' },
              { name: 'Vue 4', star: '23', forks:'2', avatar: 'https://vuejs.org/images/logo.png' },
              { name: 'Vue 5', star: '29', forks:'2', avatar: 'https://vuejs.org/images/logo.png' },
              { name: 'Vue 6', star: '28',forks:'2', avatar: 'https://vuejs.org/images/logo.png' },
              { name: 'Vue 7', star: '15',forks:'2', avatar: 'https://vuejs.org/images/logo.png' },
              { name: 'Vue 8', star: '17',forks:'2', avatar: 'https://vuejs.org/images/logo.png' },
              { name: 'Vue 9', star: '23',forks:'2', avatar: 'https://vuejs.org/images/logo.png' },
              { name: 'Vue  10', star: '28', forks:'2',avatar: 'https://vuejs.org/images/logo.png' }
            ],
            repos: []
        }
    },
    computed: {
        isAuthenticated() {
            return this.$store.getters.isAuthenticated;
        }
    },
    mounted() {
        this.$store.getters.getRepos.then(response => { this.repos = response.data});
    }
};
</script>

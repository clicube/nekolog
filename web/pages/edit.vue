<template>
  <v-app class="container">
    <v-toolbar dark color="primary">
      <v-toolbar-side-icon>
        <v-icon>calendar_today</v-icon>
      </v-toolbar-side-icon>
      <v-toolbar-side-icon>
        <v-icon>navigate_before</v-icon>
      </v-toolbar-side-icon>

      <v-toolbar-title>2018/8/29 (Wed)</v-toolbar-title>

      <v-spacer></v-spacer>
      <v-toolbar-side-icon>
        <v-icon>navigate_next</v-icon>
      </v-toolbar-side-icon>
    </v-toolbar>
    <v-container pa-3>

      <v-layout row wrap>

        <v-flex xs12 pa-2>
          <v-card dark color="secondary" v-ripple>
            <v-layout>
              <v-flex xs9>
                <v-card-title class="headline" primary-title>おしっこ</v-card-title>
                <v-card-text>4分前</v-card-text>
              </v-flex>
              <v-flex xs3>
                <v-layout fill-height align-center justify-center>
                  <v-icon d-flex>edit</v-icon>
                </v-layout>
              </v-flex>
            </v-layout>
          </v-card>
        </v-flex>

        <v-flex xs12 pa-2 text-xs-center>
          <v-btn flat color="secondary">
            <v-icon>add_circle_outline</v-icon>
            おしっこ を追加
          </v-btn>
        </v-flex>


        <v-flex xs12 pa-2>
          <v-card color="white" v-ripple>
            <v-layout>
              <v-flex xs9>
                <v-card-title class="headline" primary-title>うんち</v-card-title>
                <v-card-text>前回のイベント：26時間前</v-card-text>
              </v-flex>
              <v-flex xs3 justify-center>
                <v-layout fill-height align-center justify-center>
                  <v-icon d-flex>add_circle_outline</v-icon>
                </v-layout>
              </v-flex>
            </v-layout>
          </v-card>
        </v-flex>

        <v-flex xs12 pa-2>
          <v-card color="white" v-ripple>
            <v-layout>
              <v-flex xs9>
                <v-card-title class="headline" primary-title>水交換</v-card-title>
                <v-card-text>前回のイベント：11時間前</v-card-text>
              </v-flex>
              <v-flex xs3 justify-center>
                <v-layout fill-height align-center justify-center>
                  <v-icon d-flex>add_circle_outline</v-icon>
                </v-layout>
              </v-flex>
            </v-layout>
          </v-card>
        </v-flex>

        <v-flex xs12 pa-2>
          <v-card color="white" v-ripple>
            <v-layout>
              <v-flex xs9>
                <v-card-title class="headline" primary-title>ブラッシング</v-card-title>
                <v-card-text>前回のイベント：13時間前</v-card-text>
              </v-flex>
              <v-flex xs3 justify-center>
                <v-layout fill-height align-center justify-center>
                  <v-icon d-flex>add_circle_outline</v-icon>
                </v-layout>
              </v-flex>
            </v-layout>
          </v-card>
        </v-flex>

      </v-layout>

    </v-container>
  </v-app>
</template>

<script>

</script>

<style>
  .container {
    padding: 0;
  }
</style>


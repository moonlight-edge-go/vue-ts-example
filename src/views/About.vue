<template>
  <div class="container">
    <Header class="header">header</Header>
    <Main class="main">main</Main>
    <Aside class="aside">aside</Aside>
    <Nav class="nav">nav</Nav>
    <Footer class="footer">footer</Footer>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Header from '@/components/organisms/header/index.vue';
import Main from '@/components/organisms/main/index.vue';
import Aside from '@/components/organisms/aside/index.vue';
import Nav from '@/components/organisms/nav/index.vue';
import Footer from '@/components/organisms/footer/index.vue';

@Component({
  components: {
    Header,
    Main,
    Aside,
    Nav,
    Footer,
  },
})
export default class About extends Vue {
}
</script>

<style>
.container {
  display: grid;
  grid-template-columns: 180px 1fr 160px;
  grid-template-rows: 60px 1fr 90px;
}

.header {
  grid-column: 1 / 4;
  grid-row: 1 / 2;
}

.main {
  grid-column: 2 / 3;
  grid-row: 2 / 3;
}

.aside {
  grid-column: 1 / 2;
  grid-row: 2 / 3;
}

.nav {
  grid-column: 3 / 4;
  grid-row: 2 / 3;
}

.footer {
  grid-column: 1 / 4;
  grid-row: 3 / 4;
}


</style>

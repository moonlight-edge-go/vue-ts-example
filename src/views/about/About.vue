<template>
  <div class="container">
    <Header class="header">header</Header>
    <Main class="main">main</Main>
    <Aside class="aside">aside</Aside>
    <Nav class="nav">nav</Nav>
    <Footer class="footer">footer</Footer>
  </div>
</template>

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

<script lang="ts" src="./container.ts"></script>

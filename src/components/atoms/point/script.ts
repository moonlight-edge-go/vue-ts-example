import Vue from 'vue';
import { Component, Prop } from 'vue-property-decorator';

@Component
export default class Point extends Vue {

  @Prop()
  isBom!: boolean;

  clicked: boolean = false;

  onClick() {
    if (this.isBom) {
      console.log('game over');
    }
    this.clicked = true;
  }
}

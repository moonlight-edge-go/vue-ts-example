import Vue from 'vue';
import { Component } from 'vue-property-decorator';

@Component
export default class Header extends Vue {
  title: string = 'MainSweeper';
}

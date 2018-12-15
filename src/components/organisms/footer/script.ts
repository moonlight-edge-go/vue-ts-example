import Vue from 'vue';
import { Component } from 'vue-property-decorator';
import Point from '@/components/atoms/point/index.vue';



@Component({
  components: {
    Point,
  },
})

export default class Footer extends Vue {

  message: string = 'hoge';

  seen: boolean = true;


  onClick() {
    this.seen = !this.seen;
  }

  get map() {
    return 'map';
  }

  get isBom(): boolean {
    return false;
  }

  get points(): boolean[] {
    return [
      true,
      false,
    ];
  }
}

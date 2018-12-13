import Vue from 'vue';
import { Component } from 'vue-property-decorator';
import { Getter } from 'vuex-class';
import * as app from '@/store/modules/views/counter';

@Component({
  methods: {
    ...app.mapActions(['incrementAction']),
  },
})
export default class Main extends Vue{
  @Getter('app/counter')
  counter!: number;

  incrementAction!: (payload: {}) => void;

  increment(): void {
    this.incrementAction({});
  }
}

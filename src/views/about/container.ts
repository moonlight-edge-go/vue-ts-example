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

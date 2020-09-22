import Vue from 'vue';
import Component from 'vue-class-component';
import Footer from 'vue-shared-components/src/components/footer/Footer.vue';
import Header from 'vue-shared-components/src/components/header/Header.vue';
import ProgressBar from '../../common/components/ProgressBar.vue';
import stepRoutes from '../step-routes';

// The @Component decorator indicates the class is a Vue component
@Component({
  // All component options are allowed in here
  template: `<main>
              <Header name="Enrolment" :history="history" />
              <ProgressBar :routes='stepRoutes' :currentPath='$route.path' />
              <div class="container py-5">
                <router-view></router-view>
              </div>
              <Footer />
            </main>`
})
export default class Enrolment extends Vue {
  // Initial data can be declared as instance properties
  message: string = 'Hello!'

  // Component methods can be declared as instance methods
  onClick (): void {
    window.alert(this.message)
  }
}
import Vue from 'vue'
import App from './App.vue'
import router from './router'

// Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app2')

let instance = null;
function render(props = {}) {
  console.log('====props:', props)
  instance = new Vue({
    router,
    render: h => h(App)
  }).$mount('#app2')
}
if (window.__POWERED_BY_QIANKUN__) {
  __webpack_public_path__ = window.__INJECTED_PUBLIC_PATH_BY_QIANKUN__;
}

if (!window.__POWERED_BY_QIANKUN__) {
  render();
}

export async function bootstrap() {
  console.log("%c ", "color: green;", "vue3.0 app bootstraped");
}

export async function mount(props) {
  render(props);
}

export async function unmount() {
  instance.$destroy();
  // instance._container.innerHTML = "";
  // instance = null;
}

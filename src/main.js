import 'es6-promise/auto';
import Vue from 'vue';
import App from './components/App.vue';

/**
 * Media Manager
 */
export class MM {

    static install (vue, options) {
        vue.component('vue-media-manager', App)
    }

    constructor(opts) {
        this.options = opts;
        this.init();
    }

    init() {
        /*
         * Init Vue
         */
        this.vm = new Vue({
            el: this.options.el,
            render: h => h(App, {
                props: {
                    opts: this.options
                }
            })
        });
    }

    destroy() {
        this.vm.$destroy();
        this.vm.$el.innerHTML = '';
    }
}

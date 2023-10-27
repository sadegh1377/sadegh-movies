import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';

Vue.use(Vuetify);

export default new Vuetify({
    theme: {
        dark: true,
        themes: {
            dark: {
                primary: '#000000',
                secondary: '#141414',
                third: '#f1f1f1',
            }
        },
    },
});

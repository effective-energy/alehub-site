import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

// import NavbarModule from './modules/Navbar';
// import NotificationsModule from './modules/Notifications';
// import SettingsModule from './modules/Settings';
// import TransactionsModule from './modules/Transactions';
// import UsersModule from './modules/Users';
// import UserModule from './modules/User';
// import WalletsModule from './modules/Wallets';
// import OffersModule from './modules/Offers';
// import ThemesModule from './modules/Themes';

import MainModule from './modules/Main';
import BlogModule from './modules/Blog';



export const store = new Vuex.Store({
    modules: {
        Main: MainModule,
        Blog: BlogModule,
        // Navbar: NavbarModule,
        // Notifications: NotificationsModule,
        // Settings: SettingsModule,
        // Transactions: TransactionsModule,
        // Users: UsersModule,
        // User: UserModule,
        // Wallets: WalletsModule,
        // Offers: OffersModule,
        // Themes: ThemesModule
    },
    strict: false
});

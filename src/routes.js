import Sections from './components/Sections.vue';
import About from './components/About.vue';
import Characters from './components/covers/characters/Characters.vue';
import Cartoons from './components/covers/cartoons/Cartoons.vue';

export const routes = [
 { path: '/', component: Sections, name: 'home' },
 { path: '/about', component: About, name: 'about' },
 { path: '/characters', component: Characters, name: 'characters' },
 { path: '/cartoons', component: Cartoons, name: 'cartoons' }
];
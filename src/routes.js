import Home from './routes/Home.svelte';
import Portfolio from './routes/Portfolio.svelte';
import Locked from './routes/Locked.svelte';
import NotFound from './routes/NotFound.svelte';

export default {
    '/': Home,
    '/portfolio': Portfolio,
    '/locked': Locked,
    '*': NotFound,
}
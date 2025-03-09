import Home from './routes/Home.svelte';
import Portfolio from './routes/Portfolio.svelte';
import NotFound from './routes/NotFound.svelte';
import Arkham from './routes/Arkham.svelte';

export default {
    '/': Home,
    '/portfolio': Portfolio,
    '/arkham': Arkham,
    '*': NotFound,
}
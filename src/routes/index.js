// Layouts
import { HeaderOnly } from '~/components/Layout';

import Home from '~/pages/Home';
import Following from '~/pages/Following';
import Profile from '~/pages/Profile';
import Upload from '~/pages/Upload';
import Search from '~/pages/Search';

// login not required
const publicRoutes = [
  { path: '/', component: Home },
  { path: '/following', component: Following },
  { path: '/:nickname', component: Profile },
  { path: '/upload', component: Upload, layout: HeaderOnly },
  { path: '/search', component: Search, layout: null },
];

// login required to appear
const privateRoutes = [];

export { publicRoutes, privateRoutes };

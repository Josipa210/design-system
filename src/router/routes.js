const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [{ path: '', component: () => import('pages/IndexPage.vue') }],
  },
 {
  path: '/docs',
  component: () => import('layouts/MainLayout.vue'),
  children: [
    {
      path: '',
      component: () => import('pages/Docs/DocsIndex.vue'), // wrapper with tabs
      children: [
        { path: '', redirect: 'buttons' }, // default tab
        { path: 'buttons', name: 'docs-buttons', component: () => import('pages/Docs/ButtonsPage.vue') },
        { path: 'cards', name: 'docs-cards', component: () => import('pages/Docs/CardsPage.vue') },
        { path: 'inputs', name: 'docs-inputs', component: () => import('pages/Docs/InputsPage.vue') },
        { path: 'badges', name: 'docs-badges', component: () => import('pages/Docs/BadgesPage.vue') },
        { path: 'typography', name: 'docs-typography', component: () => import('pages/Docs/TypographyPage.vue') },
        { path: 'colors', name: 'docs-colors', component: () => import('pages/Docs/ColorsPage.vue') },
        { path: 'spacing', name: 'docs-spacing', component: () => import('pages/Docs/SpacingPage.vue') }
      ]
    }
  ]
},

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue'),
  },
]

export default routes

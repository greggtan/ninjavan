
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: 'home', component: () => import('src/pages/HomePage.vue') },
      { path: 'delivery', component: () => import('src/pages/DeliveryPage.vue') },
      { path: 'deliveryFinish', component: () => import('src/pages/DeliveryFinishPage.vue') },
      { path: 'map', component: () => import('src/pages/MapPage.vue') },
      { path: 'deliveryDetails', component: () => import('src/pages/DeliveryDetailsPage.vue') },
      { path: 'deliverySettings', component: () => import('src/pages/DeliverySettingsPage.vue') },
      { path: 'receiptPage', component: () => import('src/pages/ReceiptPage.vue') },
      { path: 'help', component: () => import('src/pages/HelpPage.vue') },
      { path: 'loading', component: () => import('src/pages/LoadingPage.vue') },
      { path: 'login', component: () => import('src/pages/LoginPage.vue') },
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes

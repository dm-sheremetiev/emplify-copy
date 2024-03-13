module.exports = {
  async redirects() {
    return [
      ...require('./german-pages-redirects'),
      ...require('./french-pages-redirects'),
      {
        source: '/blog/:slug*',
        destination: '/resources/blog/:slug*',
        permanent: true
      },
      {
        source: '/careers/open-positions/detail',
        destination: '/careers/open-positions',
        permanent: true
      },
      {
        source: '/security',
        destination: 'https://www.socialbakers.com/security',
        permanent: true
      },
      {
        source: '/summit',
        destination: 'https://go.emplifi.io/emplifi-summit-21-registration.html',
        permanent: false
      },
      {
        source: '/laautoshow',
        destination: 'https://go.emplifi.io/11-22-la-auto-show',
        permanent: false
      },
      {
        source: '/trial',
        destination: '/trial/full',
        permanent: false
      },
      {
        source: '/fr/trial',
        destination: '/fr/trial/full',
        permanent: false
      },
      {
        source: '/de/trial',
        destination: '/de/trial/full',
        permanent: false
      },
      {
        source: '/es/trial',
        destination: '/es/trial/full',
        permanent: false
      },
      {
        source: '/full/trial',
        destination: '/trial/full',
        permanent: false
      },
      {
        source: '/fr/full/trial',
        destination: '/fr/trial/full',
        permanent: false
      },
      {
        source: '/de/full/trial',
        destination: '/de/trial/full',
        permanent: false
      },
      {
        source: '/es/full/trial',
        destination: '/es/trial/full',
        permanent: false
      },
      {
        source: '/es/customers/grupo-petersen-caso-de-exito',
        destination: '/es/clientes/grupo-petersen-caso-de-exito',
        permanent: false,
        locale: false
      },
      {
        source: '/es/customers/banco-del-pacifico-caso-de-exito',
        destination: '/es/clientes/banco-del-pacifico-caso-de-exito',
        permanent: false,
        locale: false
      },
      {
        source: '/de/careers/:path*',
        destination: '/careers/:path*',
        permanent: true,
        locale: false
      },
      {
        source: '/summit',
        destination: 'https://go.emplifi.io/emplifi-summit-21-registration.html',
        permanent: false
      },
      {
        source: '/de/events/2021-06-24-emplifi-launch-party',
        destination: '/events/2021-06-24-emplifi-launch-party',
        permanent: true,
        locale: false
      },
      {
        source: '/fr/events/2021-06-24-emplifi-launch-party',
        destination: '/events/2021-06-24-emplifi-launch-party',
        permanent: true,
        locale: false
      },
      {
        source: '/de/events/2021-06-24-sgt-emplifi-launch-party',
        destination: '/events/2021-06-24-sgt-emplifi-launch-party',
        permanent: true,
        locale: false
      },
      {
        source: '/fr/events/2021-06-24-sgt-emplifi-launch-party',
        destination: '/events/2021-06-24-sgt-emplifi-launch-party',
        permanent: true,
        locale: false
      },
      {
        source: '/de/events/2021-06-24-cet-emplifi-launch-party',
        destination: '/events/2021-06-24-cet-emplifi-launch-party',
        permanent: true,
        locale: false
      },
      {
        source: '/fr/events/2021-06-24-cet-emplifi-launch-party',
        destination: '/events/2021-06-24-cet-emplifi-launch-party',
        permanent: true,
        locale: false
      },
      {
        source: '/de/events/2021-06-24-edt-emplifi-launch-party',
        destination: '/events/2021-06-24-edt-emplifi-launch-party',
        permanent: true,
        locale: false
      },
      {
        source: '/fr/events/2021-06-24-edt-emplifi-launch-party',
        destination: '/events/2021-06-24-edt-emplifi-launch-party',
        permanent: true,
        locale: false
      },
      {
        source: '/de/events/2021-06-24-pdt-emplifi-launch-party',
        destination: '/events/2021-06-24-pdt-emplifi-launch-party',
        permanent: true,
        locale: false
      },
      {
        source: '/fr/events/2021-06-24-pdt-emplifi-launch-party',
        destination: '/events/2021-06-24-pdt-emplifi-launch-party',
        permanent: true,
        locale: false
      },
      {
        source: '/fr/products/customer-care/engagement',
        destination: '/fr/produits/customer-care/engagement',
        permanent: true,
        locale: false
      },
      {
        source: '/fr/products/customer-care/self-service-chatbots',
        destination: '/fr/produits/customer-care/self-service-chatbots',
        permanent: true,
        locale: false
      },
      {
        source: '/fr/products/customer-care/agent-knowledge-management',
        destination: '/fr/produits/customer-care/agent-knowledge-management',
        permanent: true,
        locale: false
      },
      {
        source: '/fr/products/customer-care/email-automation',
        destination: '/fr/produits/customer-care/email-automation',
        permanent: true,
        locale: false
      },
      {
        source: '/fr/products/customer-care/voice-of-customer-analytics',
        destination: '/fr/produits/customer-care/voice-of-customer-analytics',
        permanent: true,
        locale: false
      },
      {
        source: '/fr/products/customer-care/insights',
        destination: '/fr/produits/customer-care/insights',
        permanent: true,
        locale: false
      },
      {
        source: '/home',
        destination: '/',
        permanent: true
      },
      {
        source: '/press/emplifi-acquires-livestream-video-platform-go-instore',
        destination: '/press/emplifi-acquires-live-commerce-software-provider-go-instore',
        permanent: true
      },
      {
        source: '/products/customer-care/voice-of-customer-analytics',
        destination: '/products/customer-care/voice-of-customer-tools',
        permanent: true
      },
      {
        source: '/products/social-media-marketing/features/facebook-advertising-benchmarks',
        destination: '/products/social-media-marketing/analytics',
        permanent: true
      },
      {
        source: '/customers/the-body-shop-success',
        destination: '/customers',
        permanent: true
      },
      {
        source: '/customers/major-league-soccer-success',
        destination: '/customers',
        permanent: true
      },
      {
        source: '/fr/clients/major-league-soccer-succes',
        destination: '/fr/clients',
        permanent: true,
        locale: false
      },
      {
        source: '/de/customers/major-league-soccer-success',
        destination: '/customers',
        permanent: true,
        locale: false
      },
      {
        source: '/customers/avon-success',
        destination: '/customers',
        permanent: true
      },
      {
        source: '/fr/clients/avon-succes',
        destination: '/fr/clients',
        permanent: true,
        locale: false
      },
      {
        source: '/de/customers/avon-success',
        destination: '/customers',
        permanent: true,
        locale: false
      },
      {
        source: '/pt/clientes/avon-case-de-sucesso',
        destination: '/customers',
        permanent: true,
        locale: false
      },
      {
        source: '/customers/taskforce-success',
        destination: '/customers',
        permanent: true
      },
      {
        source: '/customers/ferrara-success',
        destination: '/customers',
        permanent: true
      },
      {
        source: '/fr/clients/ferrara-succes',
        destination: '/fr/clients',
        permanent: true,
        locale: false
      },
      {
        source: '/de/customers/ferrara-success',
        destination: '/de/customers',
        permanent: true,
        locale: false
      },
      {
        source: '/customers/daily-burn-success',
        destination: '/customers',
        permanent: true
      },
      {
        source: '/fr/clients/daily-burn-succes',
        destination: '/fr/clients',
        permanent: true,
        locale: false
      },
      {
        source: '/de/customers/get-fit-have-fun-and-experience-social-with-daily-burn',
        destination: '/customers',
        permanent: true,
        locale: false
      },
      {
        source: '/customers/vmly-r-success',
        destination: '/customers',
        permanent: true
      },
      {
        source: '/de/press/emplifi-uebernimmt-livestream-videoplattform-go-instore',
        destination: '/de/press/emplifi-uebernimmt-anbieter-von-live-handelssoftware-go-instore',
        permanent: true,
        locale: false
      },
      {
        source: '/fr/products/:slug*',
        destination: '/fr/produits/:slug*',
        permanent: true,
        locale: false
      },
      {
        source: '/de/products/:slug*',
        destination: '/de/produkte/:slug*',
        permanent: true,
        locale: false
      },
      {
        source: '/fr/produits/customer-care/voice-of-customer-analytics',
        destination: '/fr/produits/customer-care/voice-of-customer-tools',
        permanent: true,
        locale: false
      },
      {
        source: '/de/produkte/customer-care/voice-of-customer-analytics',
        destination: '/de/produkte/customer-care/voice-of-customer-tools',
        permanent: true,
        locale: false
      },
      {
        source: '/resources/blog/social-customer-care',
        destination: '/resources/blog/social-customer-care-in-social-commerce',
        permanent: true
      },
      {
        source: '/products/social-commerce/social-media-care',
        destination: '/products/social-customer-care',
        permanent: true
      },
      {
        source: '/products/social-commerce/live-shopping',
        destination: '/products/social-commerce/live-commerce',
        permanent: true
      },
      {
        source: '/legal/terms-conditions',
        destination: '/legal/website-terms-of-use',
        permanent: true
      },
      {
        source: '/legal/social-marketing-cloud/privacy-policy-oct-21',
        destination: '/legal/product-privacy-policy',
        permanent: true
      },
      {
        source: '/fr/produits/social-commerce/social-media-care',
        destination: '/fr/produits/social-customer-care',
        permanent: true,
        locale: false
      },
      {
        source: '/fr/produits/social-media-marketing/public',
        destination: '/fr/produits/social-media-marketing/analytics',
        permanent: true,
        locale: false
      },
      {
        source: '/de/produkte/social-media-marketing/zielgruppe',
        destination: '/de/produkte/social-media-marketing/analytik',
        permanent: true,
        locale: false
      },
      {
        source: '/de/produkte/social-commerce/social-media-care',
        destination: '/de/produkte/social-customer-care',
        permanent: true,
        locale: false
      },
      {
        source: '/products/social-media-marketing/audience',
        destination: '/products/social-media-marketing/analytics',
        permanent: true
      },
      {
        source: '/products/astute-agent',
        destination: '/products/customer-care/engagement',
        permanent: true
      },
      {
        source: '/resources/blog',
        destination: '/resources',
        permanent: true
      },
      {
        source: '/careers/open-positions/detail/5403143003',
        destination: '/careers/open-positions',
        permanent: true
      },
      {
        source: '/brand-hub',
        destination: 'https://sites.google.com/emplifi.io/designstudio',
        permanent: true
      },
      {
        source: '/products/social-commerce/live-commerce/shopstream',
        destination: '/products/social-commerce/live-commerce/live-stream',
        permanent: true
      },
      {
        source: '/demo-shopstream',
        destination: '/demo-live-stream',
        permanent: true
      },
      {
        source: '/fr/produits/social-commerce/achat-en-direct/shopstream',
        destination: '/fr/produits/social-commerce/achat-en-direct/live-stream',
        permanent: true,
        locale: false
      },
      {
        source: '/de/produkte/social-commerce/live-commerce/shopstream',
        destination: '/de/produkte/social-commerce/live-commerce/live-stream',
        permanent: true,
        locale: false
      },
      {
        source: '/es/productos/social-commerce/live-commerce/shopstream',
        destination: '/es/productos/social-commerce/live-commerce/live-stream',
        permanent: true,
        locale: false
      },
      {
        source: '/resources/blog/7-ways-to-build-buzz-on-social-media-for-your-new-product-before-launch',
        destination: '/resources/blog/how-to-build-buzz-on-social-media-for-your-new-product-before-launch',
        permanent: true
      },
      {
        source: '/resources/blog/top-10-things-you-should-never-do-on-twitter',
        destination: '/resources/blog/things-you-should-never-do-on-twitter',
        permanent: true
      },
      {
        source: '/resources/blog/the-20-most-interesting-social-networks',
        destination: '/resources/blog/which-social-media-channels-your-brand-needs-to-know',
        permanent: true
      },
      {
        source: '/resources/blog/5-biggest-customer-expectations-from-those-seeking-social-customer-care',
        destination: '/resources/blog/customer-expectations-for-social-customer-care',
        permanent: true
      },
      {
        source: '/customers/marks-and-spencer-success',
        destination: '/customers',
        permanent: true
      },
      {
        source: '/customers/bays-english-muffin-success',
        destination: '/customers',
        permanent: true
      },
      {
        source: '/customers/blue-diamond-success',
        destination: '/customers',
        permanent: true
      },
      {
        source: '/customers/gamestop-success',
        destination: '/customers',
        permanent: true
      },
      {
        source: '/customers/knight-frank-success',
        destination: '/customers',
        permanent: true
      },
      {
        source: '/customers/mpm-group-success',
        destination: '/customers',
        permanent: true
      },
      {
        source: '/customers/sofology-success',
        destination: '/customers',
        permanent: true
      },
      {
        source: '/customers/vinedos-la-redonda-success',
        destination: '/customers',
        permanent: true
      },
      {
        source: '/es/clientes/blue-diamond-success',
        destination: '/es/clientes',
        permanent: true,
        locale: false
      },
      {
        source: '/es/clientes/gamestop-success',
        destination: '/es/clientes',
        permanent: true,
        locale: false
      },
      {
        source: '/es/clientes/vinedos-la-redonda-caso-de-exito',
        destination: '/es/clientes',
        permanent: true,
        locale: false
      },
      {
        source: '/fr/clients/blue-diamond-success',
        destination: '/fr/clients',
        permanent: true,
        locale: false
      },
      {
        source: '/fr/clients/gamestop-success',
        destination: '/fr/clients',
        permanent: true,
        locale: false
      },
      {
        source: '/fr/clients/knight-frank-success',
        destination: '/fr/clients',
        permanent: true,
        locale: false
      },
      {
        source: '/resources/blog/social-media-customer-care-response-time',
        destination: '/resources/blog/customer-expectations-for-social-customer-care',
        permanent: true,
        locale: false
      },
      {
        source: '/customers/hp-success',
        destination: '/customers',
        permanent: true
      },
      {
        source: '/fr/clients/hp-success',
        destination: '/fr/clients',
        permanent: true,
        locale: false
      },
      {
        source: '/es/clientes/hp-success',
        destination: '/es/clientes',
        permanent: true,
        locale: false
      },
      {
        source: '/customers/ideoworks-success',
        destination: '/customers',
        permanent: true
      },
      {
        source: '/fr/clients/ideoworks-succes',
        destination: '/fr/clients',
        permanent: true,
        locale: false
      },
      {
        source: '/es/clientes/ideoworks-success',
        destination: '/es/clientes',
        permanent: true,
        locale: false
      },
      {
        source: '/de/customers/ideoworks-success',
        destination: '/customers',
        permanent: true,
        locale: false
      },
      {
        source: '/pt/customers/ideoworks-success',
        destination: '/customers',
        permanent: true,
        locale: false
      },
      {
        source: '/customers/trupanion-success',
        destination: '/customers',
        permanent: true
      },
      {
        source: '/fr/clients/trupanion-success',
        destination: '/fr/clients',
        permanent: true,
        locale: false
      },
      {
        source: '/es/clientes/trupanion-success',
        destination: '/es/clientes',
        permanent: true,
        locale: false
      },
      {
        source: '/de/customers/trupanion-success',
        destination: '/customers',
        permanent: true,
        locale: false
      },
      {
        source: '/pt/customers/trupanion-success',
        destination: '/customers',
        permanent: true,
        locale: false
      },
      {
        source: '/customers/sportsmans-guide-success',
        destination: '/customers',
        permanent: true
      },
      {
        source: '/fr/clients/sportsmans-guide-success',
        destination: '/fr/clients',
        permanent: true,
        locale: false
      },
      {
        source: '/es/clientes/sportsmans-guide-success',
        destination: '/es/clientes',
        permanent: true,
        locale: false
      },
      {
        source: '/de/customers/sportsmans-guide-success',
        destination: '/customers',
        permanent: true,
        locale: false
      },
      {
        source: '/pt/customers/sportsmans-guide-success',
        destination: '/customers',
        permanent: true,
        locale: false
      },
      {
        source: '/pt/customers',
        destination: '/customers',
        permanent: true,
        locale: false
      },
      // SEMrush report redirects
      {
        source: '/es/recursos/blog/emplifi-summit-21-recap-day-1',
        destination: '/resources/blog/emplifi-summit-21-recap',
        permanent: true,
        locale: false
      },
      {
        source: '/es/recursos/blog/emplifi-summit-21-recap-day-2',
        destination: '/resources/blog/emplifi-summit-21-recap',
        permanent: true,
        locale: false
      },
      {
        source: '/es/recursos/blog/www.emplifi.io/resources/blog/brands-helping-out-during-coronavirus-crisis',
        destination: '/es/recursos/blog/brands-helping-out-during-coronavirus-crisis',
        permanent: true,
        locale: false
      },
      {
        source: '/es/recursos/blog/www.emplifi.io/resources/blog/how-does-social-media-affect-teenagers',
        destination: '/es/recursos/blog/how-does-social-media-affect-teenagers',
        permanent: true,
        locale: false
      },
      {
        source: '/es/recursos/blog/www.emplifi.io/resources/blog/tiktok-facts-you-need-to-know',
        destination: '/es/recursos/blog/tiktok-facts-you-need-to-know',
        permanent: true,
        locale: false
      },
      {
        source: '/fr/products/social-media-marketing/features/ai-chatbot-software',
        destination: '/products/social-media-marketing/features/ai-chatbot-software',
        permanent: true,
        locale: false
      },
      {
        source: '/fr/products/social-media-marketing/features/content-scheduling-and-publishing',
        destination: '/products/social-media-marketing/features/content-scheduling-and-publishing',
        permanent: true,
        locale: false
      },
      {
        source: '/fr/products/social-media-marketing/features/facebook-ads-dashboard',
        destination: '/products/social-media-marketing/features/facebook-ads-dashboard',
        permanent: true,
        locale: false
      },
      {
        source: '/fr/products/social-media-marketing/features/fake-influencers-detection',
        destination: '/products/social-media-marketing/features/fake-influencers-detection',
        permanent: true,
        locale: false
      },
      {
        source: '/fr/products/social-media-marketing/features/find-youtube-influencers',
        destination: '/products/social-media-marketing/features/find-youtube-influencers',
        permanent: true,
        locale: false
      },
      {
        source: '/fr/products/social-media-marketing/features/instagram-analytics',
        destination: '/products/social-media-marketing/features/instagram-analytics',
        permanent: true,
        locale: false
      },
      {
        source: '/fr/products/social-media-marketing/features/paid-social-media-marketing',
        destination: '/products/social-media-marketing/features/paid-social-media-marketing',
        permanent: true,
        locale: false
      },
      {
        source: '/fr/products/social-media-marketing/features/schedule-instagram-stories',
        destination: '/products/social-media-marketing/features/schedule-instagram-stories',
        permanent: true,
        locale: false
      },
      {
        source: '/fr/products/social-media-marketing/features/social-media-analytics',
        destination: '/products/social-media-marketing/features/social-media-analytics',
        permanent: true,
        locale: false
      },
      {
        source: '/fr/products/social-media-marketing/features/social-media-benchmarks-tool',
        destination: '/products/social-media-marketing/features/social-media-benchmarks-tool',
        permanent: true,
        locale: false
      },
      {
        source: '/fr/products/social-media-marketing/features/social-media-collaboration',
        destination: '/products/social-media-marketing/features/social-media-collaboration',
        permanent: true,
        locale: false
      },
      {
        source: '/fr/products/social-media-marketing/features/social-media-content-planning-tool',
        destination: '/products/social-media-marketing/features/social-media-content-planning-tool',
        permanent: true,
        locale: false
      },
      {
        source: '/fr/products/social-media-marketing/features/twitter-analytics',
        destination: '/products/social-media-marketing/features/twitter-analytics',
        permanent: true,
        locale: false
      },
      {
        source: '/fr/products/social-media-marketing/influencers',
        destination: '/fr/produits/social-media-marketing/influenceurs',
        permanent: true,
        locale: false
      },
      {
        source: '/fr/produits/social-media-marketing/features/ai-chatbot-software',
        destination: '/products/social-media-marketing/features/ai-chatbot-software',
        permanent: true,
        locale: false
      },
      {
        source: '/fr/produits/social-media-marketing/features/content-scheduling-and-publishing',
        destination: '/products/social-media-marketing/features/content-scheduling-and-publishing',
        permanent: true,
        locale: false
      },
      {
        source: '/fr/produits/social-media-marketing/features/facebook-ads-dashboard',
        destination: '/products/social-media-marketing/features/facebook-ads-dashboard',
        permanent: true,
        locale: false
      },
      {
        source: '/fr/produits/social-media-marketing/features/fake-influencers-detection',
        destination: '/products/social-media-marketing/features/fake-influencers-detection',
        permanent: true,
        locale: false
      },
      {
        source: '/fr/produits/social-media-marketing/features/find-youtube-influencers',
        destination: '/products/social-media-marketing/features/find-youtube-influencers',
        permanent: true,
        locale: false
      },
      {
        source: '/fr/produits/social-media-marketing/features/instagram-analytics',
        destination: '/products/social-media-marketing/features/instagram-analytics',
        permanent: true,
        locale: false
      },
      {
        source: '/fr/produits/social-media-marketing/features/paid-social-media-marketing',
        destination: '/products/social-media-marketing/features/paid-social-media-marketing',
        permanent: true,
        locale: false
      },
      {
        source: '/fr/produits/social-media-marketing/features/schedule-instagram-stories',
        destination: '/products/social-media-marketing/features/schedule-instagram-stories',
        permanent: true,
        locale: false
      },
      {
        source: '/fr/produits/social-media-marketing/features/social-media-analytics',
        destination: '/products/social-media-marketing/features/social-media-analytics',
        permanent: true,
        locale: false
      },
      {
        source: '/fr/produits/social-media-marketing/features/social-media-benchmarks-tool',
        destination: '/products/social-media-marketing/features/social-media-benchmarks-tool',
        permanent: true,
        locale: false
      },
      {
        source: '/fr/produits/social-media-marketing/features/social-media-collaboration',
        destination: '/products/social-media-marketing/features/social-media-collaboration',
        permanent: true,
        locale: false
      },
      {
        source: '/fr/produits/social-media-marketing/features/social-media-content-planning-tool',
        destination: '/products/social-media-marketing/features/social-media-content-planning-tool',
        permanent: true,
        locale: false
      },
      {
        source: '/fr/produits/social-media-marketing/features/twitter-analytics',
        destination: '/products/social-media-marketing/features/twitter-analytics',
        permanent: true,
        locale: false
      },
      {
        source: '/fr/produits/social-media-marketing/influencers',
        destination: '/fr/produits/social-media-marketing/influenceurs',
        permanent: true,
        locale: false
      },
      {
        source: '/fr/ressources/blog/emplifi-summit-21-recap-day-1',
        destination: '/resources/blog/emplifi-summit-21-recap',
        permanent: true,
        locale: false
      },
      {
        source: '/fr/ressources/blog/emplifi-summit-21-recap-day-2',
        destination: '/resources/blog/emplifi-summit-21-recap',
        permanent: true,
        locale: false
      },
      {
        source: '/fr/ressources/blog/www.emplifi.io/resources/blog/brands-helping-out-during-coronavirus-crisis',
        destination: '/fr/ressources/blog/brands-helping-out-during-coronavirus-crisis',
        permanent: true,
        locale: false
      },
      {
        source: '/fr/ressources/blog/www.emplifi.io/resources/blog/how-does-social-media-affect-teenagers',
        destination: '/fr/ressources/blog/how-does-social-media-affect-teenagers',
        permanent: true,
        locale: false
      },
      {
        source: '/fr/ressources/blog/www.emplifi.io/resources/blog/tiktok-facts-you-need-to-know',
        destination: '/fr/ressources/blog/tiktok-facts-you-need-to-know',
        permanent: true,
        locale: false
      },
      {
        source: '/products/social-media-marketing/social-media-analytics',
        destination: '/products/social-media-marketing/analytics',
        permanent: true
      },
      {
        source: '/resources/blog/emplifi-summit-21-recap-day-1',
        destination: '/resources/blog/emplifi-summit-21-recap',
        permanent: true
      },
      {
        source: '/resources/blog/emplifi-summit-21-recap-day-2',
        destination: '/resources/blog/emplifi-summit-21-recap',
        permanent: true
      },
      {
        source: '/resources/blog/www.emplifi.io/resources/blog/brands-helping-out-during-coronavirus-crisis',
        destination: '/resources/blog/brands-helping-out-during-coronavirus-crisis',
        permanent: true
      },
      {
        source: '/resources/blog/www.emplifi.io/resources/blog/how-does-social-media-affect-teenagers',
        destination: '/es/recursos/blog/how-does-social-media-affect-teenagers',
        permanent: true
      },
      {
        source: '/resources/blog/www.emplifi.io/resources/blog/how-does-social-media-affect-teenagers',
        destination: '/es/recursos/blog/how-does-social-media-affect-teenagers',
        permanent: true
      },
      {
        source: '/resources/blog/www.emplifi.io/resources/blog/tiktok-facts-you-need-to-know',
        destination: '/resources/blog/tiktok-facts-you-need-to-know',
        permanent: true
      }
    ]
  }
}

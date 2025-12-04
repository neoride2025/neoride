export class Config {
  headerMenuOptions: any = [
    // {
    //   name: 'About Us',
    //   path: 'about-us',
    //   active: false
    // },
    // {
    //   name: 'Blogs',
    //   path: 'blogs',
    //   active: false
    // },
    {
      name: 'Contact Us',
      path: 'contact-us',
      active: false
    }
  ];
  changeHeaderBackgroundAt = 10;
  providers: any[] = [
    {
      // name: 'Rapido',
      // img: 'assets/images/rapido.svg',
      // alt: 'Rapido'
    },
    {
      // name: 'Uber',
      // img: 'assets/images/uber.svg',
      // alt: 'Uber'
    },
    {
    //   name: 'Ola',
    //   img: 'assets/images/ola.svg',
    //   alt: 'Ola'
    },
    {
      // name: 'Namma Yatri',
      // img: 'assets/images/nammayatri.svg',
      // alt: 'Namma Yatri'
    }
  ]
  footerMenuOptions: any = [
    {
      title: 'Quick Links',
      links: [
        // {
        //   name: 'About Us',
        //   path: 'about-us',
        //   active: false
        // },
        // {
        //   name: 'Blogs',
        //   path: 'blogs',
        //   active: false
        // },
        {
          name: 'Contact Us',
          path: 'contact-us',
          active: false
        }
      ]
    },
    {
      title: 'Legal',
      links: [
        {
          name: 'Privacy Policy',
          path: 'privacy-policy',
          active: false
        },
        {
          name: 'Terms of Service',
          path: 'terms-service',
          active: false
        }
      ]
    }
  ];
  footerSocialLinks: any = [
    {
      name: 'Facebook',
      path: 'https://www.facebook.com/',
      icon: 'assets/icons/facebook.png'
    },
    {
      name: 'Twitter',
      path: 'https://www.twitter.com/',
      icon: 'assets/icons/twitter.png'
    },
    {
      name: 'Instagram',
      path: 'https://www.instagram.com/',
      icon: 'assets/icons/instagram.png'
    },
    {
      name: 'LinkedIn',
      path: 'https://www.linkedin.com/',
      icon: 'assets/icons/linkedin.png'
    }
  ];
}

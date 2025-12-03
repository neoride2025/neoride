export class Config {
  headerMenuOptions: any = [
    {
      name: 'About Us',
      path: 'about-us',
      active: false
    },
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
  privacyPolicySections: any = [
    { name: 'Introduction', sectionId: 'introduction' },
    { name: 'What we collect', sectionId: 'what-we-collect' },
    { name: 'How we use', sectionId: 'how-we-use' },
    { name: 'Cookies', sectionId: 'cookies' },
    { name: 'Data retention', sectionId: 'data-retention' },
    { name: 'Your rights', sectionId: 'your-rights' },
    { name: 'Security', sectionId: 'security' },
    { name: 'Children', sectionId: 'children' },
    { name: 'Contact', sectionId: 'contact' }
  ]
  footerMenuOptions: any = [
    {
      title: 'Quick Links',
      links: [
        {
          name: 'About Us',
          path: 'about-us',
          active: false
        },
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

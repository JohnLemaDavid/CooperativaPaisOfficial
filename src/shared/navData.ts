export type NavLink = {
  label: string;
  href: string;
  active?: boolean;
};

export type NavItem = {
  label: string;
  href?: string;
  active?: boolean;
  children?: NavLink[];
  megaMenu?: {
    ctaLabel: string;
    description: string;
    items: NavLink[];
  };
};

export type NotificationItem = {
  user: string;
  text: string;
  time: string;
  avatar: string;
};

export type NotificationGroup = {
  title: string;
  items: NotificationItem[];
};

const navData = {
  logo: {
    desktop: { src: "/assets/imgs/template/logo.png", alt: "Ecom" },
    mobile: { src: "/assets/imgs/template/logo.svg", alt: "Coop Pais" },
  },
  cta: { label: "Contáctanos", href: "register.html" },
  mainMenu: [
    {
      label: "Nosotros",
      active: true,
      megaMenu: {
        ctaLabel: "",
        description:
        "Descubre quiénes somos, nuestra historia, valores y el impacto que generamos a través del trabajo solidario y financiero de la Cooperativa País.",
        items: [
          { label: "Quienes Somos", href: "nosotros.html" },
          // { label: "Homepage - 2", href: "index-2.html" },
          // { label: "Homepage - 3", href: "index-3.html" },
          // { label: "Homepage - 4", href: "index-4.html" },
          // { label: "Homepage - 5", href: "index-5.html" },
          // { label: "Homepage - 6", href: "index-6.html" },
          // { label: "Homepage - 7", href: "index-7.html" },
          // { label: "Homepage - 8", href: "index-8.html" },
          // { label: "Homepage - 9", href: "index-9.html" },
          // { label: "Homepage - 10", href: "index-10.html" },
          // { label: "Homepage - 11", href: "index-11.html" },
          // { label: "Homepage - 12", href: "index-12.html" },
        ],
      },
    },
    {
      label: "Productos",
      children: [
        { label: "Ahorros", href: "about.html" },
        { label: "Inversiones", href: "service.html" },
        { label: "Créditos", href: "pricing.html" },
        // { label: "Meet Our Team", href: "team.html" },
        // { label: "Help Center", href: "help.html" },
        // { label: "Term and Conditions", href: "term-conditions.html" },
      ],
    },
    {
      label: "Servicios",
      children: [
        // { label: "Jobs Listing", href: "career.html" },
        // { label: "Job Details", href: "job-detail.html" },
      ],
    },
    {
      label: "Transparencia",
      children: [
        // { label: "Blog Listing 1", href: "blog.html" },
        // { label: "Blog Listing 2", href: "blog-2.html" },
        // { label: "Blog Details", href: "blog-detail.html" },
      ],
    },
    {
      label: "Proyectos Sociales",
      children: [
        // { label: "Products Listing 1", href: "shop-grid.html" },
        // { label: "Products Listing 2", href: "shop-list.html" },
        // { label: "Product Details", href: "product-detail.html" },
      ],
    },
    {
      label: "Multimedia",
      children: [
        // { label: "Register", href: "register.html" },
        // { label: "Login", href: "login.html" },
        // { label: "Coming soon", href: "coming-soon.html" },
        // { label: "Error 404", href: "404.html" },
      ],
    },
    // { label: "Contact", href: "contact.html" },
  ] as NavItem[],
  mobileAccount: [
    { label: "My Profile", href: "login.html", active: true },
    { label: "Work Preferences", href: "#" },
    { label: "My Boosted Shots", href: "#" },
    { label: "My Collections", href: "#" },
    { label: "Account Settings", href: "#" },
    { label: "Go Pro", href: "#" },
    { label: "Sign Out", href: "register.html" },
  ] as NavLink[],
  mobileNotifications: [
    {
      title: "Today",
      items: [
        {
          user: "Steven Job",
          text: "like started a poll in your post “How to be a good trader in 2025”",
          time: "Just now",
          avatar: "/assets/imgs/template/user1.png",
        },
        {
          user: "Steven Job",
          text: "like started a poll in your post “How to be a good trader in 2025”",
          time: "Just now",
          avatar: "/assets/imgs/template/user2.png",
        },
      ],
    },
    {
      title: "Yesterday",
      items: [
        {
          user: "Steven Job",
          text: "like started a poll in your post “How to be a good trader in 2025”",
          time: "Just now",
          avatar: "/assets/imgs/template/user3.png",
        },
        {
          user: "Steven Job",
          text: "like started a poll in your post “How to be a good trader in 2025”",
          time: "Just now",
          avatar: "/assets/imgs/template/user4.png",
        },
        {
          user: "Steven Job",
          text: "like started a poll in your post “How to be a good trader in 2025”",
          time: "Just now",
          avatar: "/assets/imgs/template/user5.png",
        },
      ],
    },
  ] as NotificationGroup[],
};

export default navData;

const faviconMeta = [{
    name: "msapplication-TileColor",
    content: "#da532c"
  },
  {
    name: "theme-color",
    content: "#ffffff"
  }
];

const favicon = [{
    rel: "apple-touch-icon",
    sizes: "180x180",
    href: "/favicon/apple-touch-icon.png"
  },
  {
    rel: "icon",
    type: "image/png",
    sizes: "32x32",
    href: "/favicon/favicon-32x32.png"
  },
  {
    rel: "icon",
    type: "image/png",
    sizes: "16x16",
    href: "/favicon/favicon-16x16.png"
  },
  {
    rel: "manifest",
    href: "/favicon/site.webmanifest"
  },
  {
    rel: "mask-icon",
    href: "/favicon/safari-pinned-tab.svg",
    color: "#5bbad5"
  }
];

export const meta = faviconMeta;

export const link = favicon;

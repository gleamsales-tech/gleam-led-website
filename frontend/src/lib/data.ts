// Product data - can be fetched from WordPress or kept static
export interface ProductSpec {
  feature: string;
  [key: string]: string;
}

export interface ProductSeries {
  id: string;
  name: string;
  tagline: string;
  description: string;
  image: string;
  features: string[];
  specs: {
    models: string[];
    data: ProductSpec[];
  };
  applications: string[];
}

export interface ProductCategory {
  id: string;
  name: string;
  description: string;
  image: string;
  series: ProductSeries[];
}

export interface UseCase {
  id: string;
  title: string;
  description: string;
  image: string;
  benefits: string[];
  recommended: string[];
}

// Static product data (can be replaced with WordPress custom post types)
export const PRODUCTS: Record<string, ProductCategory> = {
  transparent: {
    id: 'transparent',
    name: 'Transparent LED Displays',
    description: 'See-through displays for glass facades and storefronts',
    image: 'https://images.unsplash.com/photo-1677930075348-5933c68cd46d?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA1ODR8MHwxfHNlYXJjaHwzfHx0cmFuc3BhcmVudCUyMGxlZCUyMHNjcmVlbiUyMGdsYXNzJTIwZmFjYWRlfGVufDB8fHx8MTc3MzM3NjgwM3ww&ixlib=rb-4.1.0&q=85',
    series: [
      {
        id: 'lucid',
        name: 'LUCID Series',
        tagline: 'The perfect solution for glass wall LED screen',
        description: 'Premium indoor solution designed to transform standard windows into high-impact digital displays without sacrificing natural light.',
        image: 'https://images.unsplash.com/photo-1704392354269-42ad41f15398?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA1ODR8MHwxfHNlYXJjaHwxfHx0cmFuc3BhcmVudCUyMGxlZCUyMHNjcmVlbiUyMGdsYXNzJTIwZmFjYWRlfGVufDB8fHx8MTc3MzM3NjgwM3ww&ixlib=rb-4.1.0&q=85',
        features: ['High Transparency', 'Light Weight', 'Fast Installation', 'Easy Maintenance', 'Cost Effective'],
        specs: {
          models: ['L3', 'L3-Pro'],
          data: [
            { feature: 'Pixel Pitch', 'L3': '3.91/7.8mm', 'L3-Pro': '3.91/7.8mm' },
            { feature: 'Pixel Density/㎡', 'L3': '32,768', 'L3-Pro': '32,768' },
            { feature: 'LED Configuration', 'L3': 'SMD2121', 'L3-Pro': 'SMD1921' },
            { feature: 'Brightness', 'L3': '800nits', 'L3-Pro': '4,200nits' },
            { feature: 'Transparency Rate', 'L3': '60%', 'L3-Pro': '60%' },
            { feature: 'Panel Dimension', 'L3': '1000mm x 1000mm', 'L3-Pro': '1000mm x 1000mm' },
            { feature: 'Refresh Rate', 'L3': '3,840Hz', 'L3-Pro': '3,840Hz' },
            { feature: 'Viewing Angle', 'L3': '160°/160°', 'L3-Pro': '160°/160°' },
            { feature: 'IP Rate', 'L3': 'IP31', 'L3-Pro': 'IP43' },
            { feature: 'Lifespan', 'L3': '>100,000 hrs', 'L3-Pro': '>100,000 hrs' },
            { feature: 'Warranty', 'L3': '2 Years', 'L3-Pro': '2 Years' },
          ],
        },
        applications: ['Retail Storefronts', 'Showrooms', 'Shopping Malls', 'Corporate Lobbies', 'Airports'],
      },
      {
        id: 'inv',
        name: 'INV Series',
        tagline: 'The Pinnacle of Invisible Display Technology',
        description: 'Ultra-transparency with lightweight, smart, and ultra-thin design. Specifically engineered for modern architecture with flexible panels.',
        image: 'https://images.unsplash.com/photo-1770902971692-e4b9e3cf3933?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2Nzh8MHwxfHNlYXJjaHw0fHxtb2Rlcm4lMjByZXRhaWwlMjBzdG9yZSUyMHdpbmRvdyUyMGRpc3BsYXl8ZW58MHx8fHwxNzczMzc2ODA0fDA&ixlib=rb-4.1.0&q=85',
        features: ['80-90% Transparency', 'Flexible Panels', 'High Contrast', 'Seamless Screen', 'Custom Sizes'],
        specs: {
          models: ['I3M', 'I6M', 'I3H'],
          data: [
            { feature: 'Installation Method', 'I3M': 'Glass Mounting', 'I6M': 'Glass Mounting', 'I3H': 'Hanging' },
            { feature: 'Pixel Pitch', 'I3M': '3.91mm', 'I6M': '6.25mm', 'I3H': '3.91mm' },
            { feature: 'Brightness', 'I3M': '3,500nits', 'I6M': '4,500nits', 'I3H': '3,500nits' },
            { feature: 'Transparency Rate', 'I3M': '80%', 'I6M': '90%', 'I3H': '80%' },
            { feature: 'Weight/㎡', 'I3M': '6kg', 'I6M': '5kg', 'I3H': '38kg' },
            { feature: 'IP Rate', 'I3M': 'IP31', 'I6M': 'IP31', 'I3H': 'IP31' },
            { feature: 'Lifespan', 'I3M': '>100,000 hrs', 'I6M': '>100,000 hrs', 'I3H': '>100,000 hrs' },
            { feature: 'Warranty', 'I3M': '2 Years', 'I6M': '2 Years', 'I3H': '2 Years' },
          ],
        },
        applications: ['Curved Glass Facades', 'Luxury Retail', 'Exhibitions', 'Brand Zones', 'Museums'],
      },
    ],
  },
  indoor: {
    id: 'indoor',
    name: 'Indoor LED Displays',
    description: 'High-resolution video walls for showrooms, offices, and events',
    image: 'https://images.unsplash.com/photo-1749310726959-d8fccfef7ee4?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjAzNTl8MHwxfHNlYXJjaHwxfHxpbmRvb3IlMjBsZWQlMjB2aWRlbyUyMHNjcmVlbiUyMGNvcnBvcmF0ZSUyMGxvYmJ5fGVufDB8fHx8MTc3MzM3NjgxN3ww&ixlib=rb-4.1.0&q=85',
    series: [
      {
        id: 'wp',
        name: 'WP Series',
        tagline: 'Professional Indoor Video Wall Solution',
        description: 'High-performance indoor LED panels perfect for corporate environments, retail spaces, and control rooms.',
        image: 'https://images.unsplash.com/photo-1758448721149-aa0ce8e1b2c9?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjAzNTl8MHwxfHNlYXJjaHwyfHxpbmRvb3IlMjBsZWQlMjB2aWRlbyUyMHdhbGwlMjBjb3Jwb3JhdGUlMjBsb2JieXxlbnwwfHx8fDE3NzMzNzY4MTd8MA&ixlib=rb-4.1.0&q=85',
        features: ['High Resolution', 'Seamless Design', 'Easy Maintenance', 'Wide Viewing Angle', 'Energy Efficient'],
        specs: {
          models: ['WP1.9', 'WP2.5', 'WP3.9'],
          data: [
            { feature: 'Pixel Pitch', 'WP1.9': '1.9mm', 'WP2.5': '2.5mm', 'WP3.9': '3.9mm' },
            { feature: 'Brightness', 'WP1.9': '600nits', 'WP2.5': '800nits', 'WP3.9': '1000nits' },
            { feature: 'Refresh Rate', 'WP1.9': '3,840Hz', 'WP2.5': '3,840Hz', 'WP3.9': '3,840Hz' },
            { feature: 'Panel Size', 'WP1.9': '500x500mm', 'WP2.5': '500x500mm', 'WP3.9': '500x500mm' },
            { feature: 'IP Rate', 'WP1.9': 'IP40', 'WP2.5': 'IP40', 'WP3.9': 'IP40' },
            { feature: 'Lifespan', 'WP1.9': '>100,000 hrs', 'WP2.5': '>100,000 hrs', 'WP3.9': '>100,000 hrs' },
            { feature: 'Warranty', 'WP1.9': '2 Years', 'WP2.5': '2 Years', 'WP3.9': '2 Years' },
          ],
        },
        applications: ['Corporate Offices', 'Control Rooms', 'Retail Showrooms', 'Event Venues', 'Experience Centers'],
      },
    ],
  },
  outdoor: {
    id: 'outdoor',
    name: 'Outdoor LED Displays',
    description: 'Weatherproof high-brightness displays for billboards and facades',
    image: 'https://images.unsplash.com/photo-1772147743462-8f3258dc3198?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjAxODF8MHwxfHNlYXJjaHw0fHxvdXRkb29yJTIwbGVkJTIwYmlsbGJvYXJkJTIwYnVpbGRpbmclMjBmYWNhZGV8ZW58MHx8fHwxNzczMzc2ODE4fDA&ixlib=rb-4.1.0&q=85',
    series: [
      {
        id: 'ap',
        name: 'AP Series',
        tagline: 'All-Weather Outdoor Display',
        description: 'Robust outdoor LED display designed for billboards, building facades, and large-scale outdoor advertising.',
        image: 'https://images.unsplash.com/photo-1772147743462-8f3258dc3198?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjAxODF8MHwxfHNlYXJjaHw0fHxvdXRkb29yJTIwbGVkJTIwYmlsbGJvYXJkJTIwYnVpbGRpbmclMjBmYWNhZGV8ZW58MHx8fHwxNzczMzc2ODE4fDA&ixlib=rb-4.1.0&q=85',
        features: ['IP65 Waterproof', 'High Brightness', 'Wide Temperature Range', 'Anti-Corrosion', 'Energy Saving'],
        specs: {
          models: ['AP6', 'AP8', 'AP10'],
          data: [
            { feature: 'Pixel Pitch', 'AP6': '6mm', 'AP8': '8mm', 'AP10': '10mm' },
            { feature: 'Brightness', 'AP6': '6,500nits', 'AP8': '7,000nits', 'AP10': '8,000nits' },
            { feature: 'Refresh Rate', 'AP6': '3,840Hz', 'AP8': '3,840Hz', 'AP10': '3,840Hz' },
            { feature: 'Panel Size', 'AP6': '960x960mm', 'AP8': '960x960mm', 'AP10': '960x960mm' },
            { feature: 'IP Rate', 'AP6': 'IP65', 'AP8': 'IP65', 'AP10': 'IP65' },
            { feature: 'Operating Temp', 'AP6': '-20° to 60°C', 'AP8': '-20° to 60°C', 'AP10': '-20° to 60°C' },
            { feature: 'Lifespan', 'AP6': '>100,000 hrs', 'AP8': '>100,000 hrs', 'AP10': '>100,000 hrs' },
            { feature: 'Warranty', 'AP6': '2 Years', 'AP8': '2 Years', 'AP10': '2 Years' },
          ],
        },
        applications: ['Highway Billboards', 'Building Facades', 'Sports Stadiums', 'Shopping Malls', 'Transit Hubs'],
      },
    ],
  },
};

export const USE_CASES: UseCase[] = [
  {
    id: 'storefront',
    title: 'Storefront Glass',
    description: 'Transform your retail storefront into a dynamic digital billboard without blocking the view inside.',
    image: 'https://images.unsplash.com/photo-1767334010488-83cdb8539273?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2Nzh8MHwxfHNlYXJjaHwyfHxtb2Rlcm4lMjByZXRhaWwlMjBzdG9yZSUyMHdpbmRvdyUyMGRpc3BsYXl8ZW58MHx8fHwxNzczMzc2ODA0fDA&ixlib=rb-4.1.0&q=85',
    benefits: ['24/7 advertising without staff', 'Preserve natural light', 'Dynamic content updates', 'Attract foot traffic'],
    recommended: ['LUCID Series', 'INV Series'],
  },
  {
    id: 'mall',
    title: 'Mall Atriums',
    description: 'Create stunning visual experiences in shopping mall atriums with large-scale transparent displays.',
    image: 'https://images.unsplash.com/photo-1758448721149-aa0ce8e1b2c9?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjAzNTl8MHwxfHNlYXJjaHwyfHxpbmRvb3IlMjBsZWQlMjB2aWRlbyUyMHdhbGwlMjBjb3Jwb3JhdGUlMjBsb2JieXxlbnwwfHx8fDE3NzMzNzY4MTd8MA&ixlib=rb-4.1.0&q=85',
    benefits: ['Maximize advertising revenue', 'Create immersive experiences', 'Wayfinding integration', 'Event promotions'],
    recommended: ['LUCID Series', 'WP Series'],
  },
  {
    id: 'showroom',
    title: 'Showrooms',
    description: 'Elevate your showroom presentation with premium LED displays that showcase products beautifully.',
    image: 'https://images.unsplash.com/photo-1770902971692-e4b9e3cf3933?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2Nzh8MHwxfHNlYXJjaHw0fHxtb2Rlcm4lMjByZXRhaWwlMjBzdG9yZSUyMHdpbmRvdyUyMGRpc3BsYXl8ZW58MHx8fHwxNzczMzc2ODA0fDA&ixlib=rb-4.1.0&q=85',
    benefits: ['Premium brand image', 'Interactive product demos', 'Custom content scheduling', 'Modern aesthetic'],
    recommended: ['INV Series', 'WP Series'],
  },
  {
    id: 'corporate',
    title: 'Corporate Lobbies',
    description: 'Make a lasting first impression with sophisticated LED displays in your corporate lobby.',
    image: 'https://images.unsplash.com/photo-1771911646904-61f0fc9033e2?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjAzNTl8MHwxfHNlYXJjaHwzfHxpbmRvb3IlMjBsZWQlMjB2aWRlbyUyMHdhbGwlMjBjb3Jwb3JhdGUlMjBsb2JieXxlbnwwfHx8fDE3NzMzNzY4MTd8MA&ixlib=rb-4.1.0&q=85',
    benefits: ['Brand reinforcement', 'Visitor engagement', 'Corporate communications', 'Modern workspace image'],
    recommended: ['WP Series', 'IEC Series'],
  },
];

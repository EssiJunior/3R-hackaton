
import { yourLogo, yourLogoDark } from '@/public/assets';
import { IconBrandDiscord, IconBrandFacebook, IconBrandInstagram, IconBrandLinkedin, IconBrandTelegram, IconBrandTwitter } from '@tabler/icons-react';
import { BellDot, BookMarked, Database, ListTodo, Map, MapPin, Trash } from 'lucide-react';
export const navigation = [
    {
        id: "0",
        title: "About",
        url: "/about",
    },
    {
        id: "1",
        title: "Information",
        url: "/info",
    },
    {
        id: "2",
        title: "Pricing",
        url: "/pricing",
    },
    {
        id: "3",
        title: "Client",
        url: "/client",
    },
    {
        id: "4",
        title: "Market",
        url: "/market",
    },
];


export const pricing = [
    {
        id: "0",
        title: "Basic",
        description: "AI chatbot, personalized recommendations",
        price: "0",
        features: [
            "An AI chatbot that can understand your queries",
            "Personalized recommendations based on your preferences",
            "Ability to explore the app and its features without any cost",
        ],
    },
    {
        id: "1",
        title: "Premium",
        description: "Advanced AI chatbot, priority support, analytics dashboard",
        price: "20,000",
        features: [
            "An advanced AI chatbot that can understand complex queries",
            "An analytics dashboard to track your conversations",
            "Priority support to solve issues quickly",
        ],
    },
    {
        id: "2",
        title: "Advanced",
        description: "Custom AI chatbot, advanced analytics, dedicated account",
        price: "50.000",
        features: [
            "An AI chatbot that can understand your queries",
            "Personalized recommendations based on your preferences",
            "Ability to explore the app and its features without any cost",
        ],
    },
];

export const services = [
    {
        id: "1",
        title: "Waste Reduction Tips",
        text: "Provide personalized tips and guides on reducing waste in everyday life, such as meal planning, bulk buying, and choosing sustainable products.",
        iconUrl: <Trash />,
        imageUrl: "/assets/images/services/waste-1.jpeg",
        light: true,
    },
    {
        id: "2",
        title: "Educational Resources",
        text: "Provide verified articles, videos, e-books and infographics on topics related to waste management, environmental impact, and sustainable living.",
        iconUrl: <BookMarked />,
        imageUrl: "/assets/images/services/waste-2.jpeg",
        light: true,
    },
    {
        id: "3",
        title: "Control over your data",
        text: "A wide control on your data, global view on the work done from your date of suscription",
        iconUrl: <Database />,
        imageUrl: "/assets/images/services/data.jpeg",
        light: true,
    },
    {
        id: "4",
        title: "On map tracking of daily waste collection",
        text: "For enterprises, on map tracking for better geographic view, better control on the work done by your agents.",
        imageUrl: "/assets/images/services/map.jpeg",
        iconUrl: <MapPin />,
    },
    {
        id: "5",
        title: "On map visualisation of closest waste collection enterprises",
        text: "For citizens, on map visualisation on the closest recycling company, thereby permetting youu to make a better decision.",
        imageUrl: "/assets/images/services/map.jpeg",
        iconUrl: <Map />,
    },
    {
        id: "6",
        title: "Push Notifications and Reminderss",
        text: "Send reminders for recycling days, community events, or tips on seasonal waste reduction (e.g., holiday waste).",
        imageUrl: "/assets/images/services/notification.jpeg",
        iconUrl: <BellDot />,
    },
    {
        id: "7",
        title: "Impact tracking",
        text: "Allow users to track their waste reduction efforts and see their environmental impact, such as how much waste they've diverted from landfills.",
        imageUrl: "/assets/images/services/impact.jpeg",
        iconUrl: <ListTodo />,
    },
];

export const sponsors = [yourLogo, yourLogo, yourLogo, yourLogo, yourLogo];
export const sponsorsDark = [yourLogoDark, yourLogoDark, yourLogoDark, yourLogoDark, yourLogoDark];
export const socials = [
    {
        id: "0",
        title: "Discord",
        icon: <IconBrandDiscord className='text-black dark:text-white' />,
        url: "#",
    },
    {
        id: "1",
        title: "X",
        icon: <IconBrandTwitter className='text-black dark:text-white' />,
        url: "#",
    },
    {
        id: "2",
        title: "LinkedIn",
        icon: <IconBrandLinkedin className='text-black dark:text-white' />,
        url: "#",
    },
    {
        id: "3",
        title: "Instagram",
        icon: <IconBrandInstagram className='text-black dark:text-white' />,
        url: "#",
    },
    {
        id: "4",
        title: "Telegram",
        icon: <IconBrandTelegram className='text-black dark:text-white' />,
        url: "#",
    },
    {
        id: "5",
        title: "Facebook",
        icon: <IconBrandFacebook className='text-black dark:text-white' />,
        url: "#",
    },
];



export const products = [
    {
        name: "Chaussures de Sport",
        prix: '5000 XAF',
        image: "https://img.freepik.com/free-photo/pair-sport-shoes_144627-3794.jpg",
        description: "Chaussures de sport légères et confortables, parfaites pour la course et les activités en plein air."
    },
    {
        name: "T-shirt Basique",
        prix: '5000 XAF',
        image: "https://img.freepik.com/free-photo/front-view-man-wearing-t-shirt_23-2149438286.jpg",
        description: "T-shirt en coton doux, disponible en plusieurs couleurs."
    },
    {
        name: "Sweat à Capuche",
        prix: '5000 XAF',
        image: "https://img.freepik.com/free-photo/front-view-man-wearing-hoodie_23-2149438258.jpg",
        description: "Sweat à capuche confortable avec une poche avant, idéal pour les journées fraîches."
    },
    {
        name: "Casquette Classique",
        prix: '5000 XAF',
        image: "https://img.freepik.com/free-photo/classic-baseball-cap-white_53876-102672.jpg",
        description: "Casquette classique en coton avec un ajustement confortable."
    },
    {
        name: "Montre en Acier",
        prix: '5000 XAF',
        image: "https://img.freepik.com/free-photo/close-up-luxury-wrist-watch_144627-32654.jpg",
        description: "Montre élégante en acier inoxydable avec un bracelet réglable."
    },
    {
        name: "Jeans Décontracté",
        prix: '5000 XAF',
        image: "https://img.freepik.com/free-photo/jeans-isolated-white-background_144627-3840.jpg",
        description: "Jean décontracté, confortable et résistant, parfait pour un usage quotidien."
    },
    {
        name: "Lunettes de Soleil",
        prix: '5000 XAF',
        image: "https://img.freepik.com/free-photo/modern-sunglasses-isolated-white-background_53876-102635.jpg",
        description: "Lunettes de soleil stylées avec protection UV400."
    },
    {
        name: "Sac à Dos Urbain",
        prix: '5000 XAF',
        image: "https://img.freepik.com/free-photo/modern-backpack-isolated-white-background_53876-102634.jpg",
        description: "Sac à dos urbain avec plusieurs compartiments, idéal pour le quotidien."
    },
    {
        name: "Chaussettes de Sport",
        prix: '5000 XAF',
        image: "https://img.freepik.com/free-photo/pair-black-socks_53876-102708.jpg",
        description: "Chaussettes de sport confortables, parfaites pour l'entraînement."
    },
    {
        name: "Veste en Cuir",
        prix: '5000 XAF',
        image: "https://img.freepik.com/free-photo/man-wearing-black-leather-jacket_23-2149354636.jpg",
        description: "Veste en cuir véritable, élégante et durable."
    },
    {
        name: "Baskets Décontractées",
        prix: '5000 XAF',
        image: "https://img.freepik.com/free-photo/modern-sneakers-isolated-white-background_53876-102641.jpg",
        description: "Baskets décontractées et stylées pour un look urbain."
    },
    {
        name: "Chemise à Carreaux",
        prix: '5000 XAF',
        image: "https://img.freepik.com/free-photo/red-plaid-shirt-isolated-white_53876-102670.jpg",
        description: "Chemise à carreaux classique, parfaite pour un look décontracté."
    }
];

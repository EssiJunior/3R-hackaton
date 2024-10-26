
import { yourLogo, yourLogoDark } from '@/public/assets';
import { IconBrandDiscord, IconBrandFacebook, IconBrandInstagram, IconBrandLinkedin, IconBrandTelegram, IconBrandTwitter, IconX } from '@tabler/icons-react';
import { BellDot, BookMarked, Database, ListTodo, Map, MapPin, Trash, X } from 'lucide-react';
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
        title: "Contact",
        url: "#contact",
        onlyMobile: true,
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
        icon: <IconBrandDiscord className='text-black dark:text-white'/>,
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
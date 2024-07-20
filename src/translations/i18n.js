import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';

i18n.use(LanguageDetector).use(initReactI18next).init({
    debug: true,
    fallbackLng: "en",
    returnObjects: true,
    resources: {
        en: {
            translation: {
                // Nav bar
                logo: "Brito",
                home: "Home",
                services: "Our Services",
                about: "About",
                solutions: "Solutions",
                project: "Projects",
                contact: "Contact",
                // Logo
                headerH1: "Developing Solutions with Custom Web Applications",
                headerP: "We are a web development company that focuses on creating innovative digital experiences.",
                btExplore: "Explore",
                btContact: "Contact Us",
                // Services
                sTitle: "Our Services",
                sSubTitle: "Personalized web solutions to meet your individual needs.",
                s1Title: "Web Development",
                s2Title: "App Development",
                s3Title: "24/7 Support",
                s1Description: "We offer top web development services tailored to your business needs. We create custom solutions that enhance your online presence and drive growth. From sleek designs to robust applications, we turn your vision into reality.",
                s2Description: "We specialize in creating innovative app development solutions. Our skilled team designs user-friendly applications that engage and retain customers. From concept to launch, we’re dedicated to bringing your app vision to life.",
                s3Description: "At Brito, we are here for you. We are available 24/7 to assist with any questions or issues, ensuring you have continuous support whenever you need it. We prioritize your needs to provide prompt solutions, so you can focus on what matters most.",
                // About
                aTitle: "About Us",
                aSubTitle: "Personalized web solutions to meet your individual needs.",
                a1Title: "Application Development",
                a2Title: "Who are we?",
                a3Title: "Mission and Vision",
                a4Title: "Mission:",
                a5Title: "Vision:",
                a1Description: "We provide professional development applications that are tailored to meet the needs of modern businesses. Our web applications are designed with a focus on usability, performance, and security, ensuring a seamless experience for users. Whether you're looking for a custom CRM, e-commerce platform, project management tool, or any other web-based solution, our team of skilled developers is equipped to deliver high-quality applications that drive efficiency and growth.",
                a2Description: "Passionate about creating exceptional web applications tailored to the needs of modern businesses. With a strong focus on usability, performance, and security, we deliver custom solutions that enhance efficiency and drive growth. Whether you need a CRM, e-commerce platform, project management tool, or any other web-based solution, we are equipped to bring your vision to life with professionalism and expertise.",
                a3Description: "Our mission is to deliver innovative, high-quality web applications that empower businesses to achieve their goals. We focus on usability, performance, and security to provide custom solutions that enhance efficiency and drive growth.",
                a4Description: "To be the leading provider of innovative and high-quality web applications that empower businesses to achieve their full potential, driving efficiency, growth, and success through exceptional usability, performance, and security.",
                // Solutions
                soTitle: "Our Solutions",
                soSubTitle: "Personalized web solutions to meet your individual needs.",
                so1Title: "Business Websites:",
                so2Title: "Portfolio Websites:",
                so3Title: "E-commerce Platforms:",
                so4Title: "Web-based Applications:",
                soText: "With a focus on usability, performance, and security, We create applications that enhance business efficiency and drive growth.",
                so1Description: "Professional and responsive websites to establish an online presence and attract customers.",
                so2Description: "Visually appealing and functional portfolio websites to showcase your clients' work and achievements.",
                so3Description: "Robust and scalable e-commerce solutions that offer a seamless shopping experience, including payment gateways, inventory management, and order processing.",
                so4Description: "Custom web applications designed to meet specific business needs, from productivity tools to customer portals.",
            }
        },
        fr: {
            translation: {
                // Nav bar
                logo: "Brito",
                home: "Accueil",
                services: "Nos Services",
                about: "À Propos",
                solutions: "Solutions",
                project: "Projets",
                contact: "Contact",
                // Logo
                headerH1: "Développer des solutions avec des applications web personnalisées",
                headerP: "Nous sommes une société de développement web qui se concentre sur la création d'expériences numériques innovantes.",
                btExplore: "Explorer",
                btContact: "Nous Contacter",
                // Services
                sTitle: "Nos Services",
                sSubTitle: "Solutions web personnalisées pour répondre à vos besoins individuels.",
                s1Title: "Développement Web",
                s2Title: "Développement d'Applications",
                s3Title: "Support 24/7",
                s1Description: "Nous offrons des services de développement web de premier plan adaptés à vos besoins commerciaux. Nous créons des solutions personnalisées qui améliorent votre présence en ligne et stimulent la croissance. Des designs élégants aux applications robustes, nous concrétisons votre vision.",
                s2Description: "Nous sommes spécialisés dans la création de solutions innovantes de développement d'applications. Notre équipe qualifiée conçoit des applications conviviales qui captivent et fidélisent les clients. De la conception au lancement, nous nous engageons à donner vie à votre vision d'application.",
                s3Description: "Chez Brito, nous sommes là pour vous. Nous sommes disponibles 24h/24 et 7j/7 pour vous aider avec toutes vos questions ou problèmes, vous assurant un support continu lorsque vous en avez besoin. Nous priorisons vos besoins pour fournir des solutions rapides, vous permettant de vous concentrer sur ce qui compte le plus.",
                // About
                aTitle: "À Propos de Nous",
                aSubTitle: "Solutions web personnalisées pour répondre à vos besoins individuels.",
                a1Title: "Développement d'Applications",
                a2Title: "Qui sommes-nous ?",
                a3Title: "Mission et Vision",
                a4Title: "Mission :",
                a5Title: "Vision :",
                a1Description: "Nous proposons des applications de développement professionnel adaptées aux besoins des entreprises modernes. Nos applications web sont conçues en mettant l'accent sur l'ergonomie, la performance et la sécurité, garantissant une expérience utilisateur fluide. Que vous recherchiez un CRM personnalisé, une plateforme de commerce électronique, un outil de gestion de projet ou toute autre solution web, notre équipe de développeurs qualifiés est équipée pour fournir des applications de haute qualité qui stimulent l'efficacité et la croissance.",
                a2Description: "Passionnés par la création d'applications web exceptionnelles adaptées aux besoins des entreprises modernes. Avec un fort accent sur l'ergonomie, la performance et la sécurité, nous proposons des solutions personnalisées qui améliorent l'efficacité et stimulent la croissance. Que vous ayez besoin d'un CRM, d'une plateforme de commerce électronique, d'un outil de gestion de projet ou de toute autre solution web, nous sommes équipés pour concrétiser votre vision avec professionnalisme et expertise.",
                a3Description: "Notre mission est de fournir des applications web innovantes et de haute qualité qui permettent aux entreprises d'atteindre leurs objectifs. Nous mettons l'accent sur l'ergonomie, la performance et la sécurité pour offrir des solutions personnalisées qui améliorent l'efficacité et stimulent la croissance.",
                a4Description: "Être le principal fournisseur d'applications web innovantes et de haute qualité qui permettent aux entreprises d'atteindre leur plein potentiel, en stimulant l'efficacité, la croissance et le succès grâce à une ergonomie, une performance et une sécurité exceptionnelles.",
                // Solutions
                soTitle: "Nos Solutions",
                soSubTitle: "Solutions web personnalisées pour répondre à vos besoins individuels.",
                so1Title: "Sites Web Professionnels:",
                so2Title: "Portefeuilles en Ligne:",
                so3Title: "Plateformes de Commerce Électronique:",
                so4Title: "Applications Web:",
                soText: "Avec un accent sur l'ergonomie, la performance et la sécurité, nous créons des applications qui améliorent l'efficacité des entreprises et favorisent la croissance.",
                so1Description: "Sites Web professionnels et réactifs pour établir une présence en ligne et attirer des clients.",
                so2Description: "Portefeuilles visuellement attrayants et fonctionnels pour présenter le travail et les réalisations de vos clients.",
                so3Description: "Solutions de commerce électronique robustes et évolutives offrant une expérience d'achat fluide, y compris les passerelles de paiement, la gestion des stocks et le traitement des commandes.",
                so4Description: "Applications web personnalisées conçues pour répondre aux besoins spécifiques des entreprises, des outils de productivité aux portails clients.",
            }
        },
        'pt-BR': {
            translation: {
                // Nav bar
                logo: "Brito",
                home: "Início",
                services: "Serviços",
                about: "Sobre",
                solutions: "Soluções",
                project: "Projetos",
                contact: "Contato",
                // Logo
                headerH1: "Desenvolvendo soluções com aplicações web personalizadas",
                headerP: "Somos uma empresa de desenvolvimento web focada na criação de experiências digitais inovadoras.",
                btExplore: "Explorar",
                btContact: "Contato",
                // Services
                sTitle: "Nossos Serviços",
                sSubTitle: "Soluções web personalizadas para atender às suas necessidades individuais.",
                s1Title: "Desenvolvimento Web",
                s2Title: "Desenvolvimento de Aplicativos",
                s3Title: "Suporte 24/7",
                s1Description: "Oferecemos os melhores serviços de desenvolvimento web adaptados às necessidades do seu negócio. Criamos soluções personalizadas que melhoram sua presença online e impulsionam o crescimento. De designs elegantes a aplicações robustas, transformamos sua visão em realidade.",
                s2Description: "Somos especializados na criação de soluções inovadoras de desenvolvimento de aplicativos. Nossa equipe qualificada projeta aplicativos amigáveis que envolvem e retêm clientes. Do conceito ao lançamento, estamos dedicados a transformar sua visão de aplicativo em realidade.",
                s3Description: "Na Brito, estamos aqui para você. Estamos disponíveis 24 horas por dia, 7 dias por semana para ajudar com quaisquer dúvidas ou problemas, garantindo suporte contínuo sempre que você precisar. Priorizamos suas necessidades para fornecer soluções rápidas, para que você possa se concentrar no que mais importa.",
                // About
                aTitle: "Sobre Nós",
                aSubTitle: "Soluções web personalizadas para atender às suas necessidades individuais.",
                a1Title: "Desenvolvimento de Aplicativos",
                a2Title: "Quem Somos?",
                a3Title: "Missão e Visão",
                a4Title: "Missão:",
                a5Title: "Visão:",
                a1Description: "Oferecemos aplicações de desenvolvimento profissional adaptadas às necessidades das empresas modernas. Nossas aplicações web são projetadas com foco em usabilidade, desempenho e segurança, garantindo uma experiência perfeita para o usuário. Seja um CRM personalizado, uma plataforma de e-commerce, uma ferramenta de gestão de projetos ou qualquer outra solução web, nossa equipe de desenvolvedores qualificados está preparada para oferecer aplicações de alta qualidade que impulsionam eficiência e crescimento.",
                a2Description: "Apaixonados por criar aplicações web excepcionais que atendem às necessidades das empresas modernas. Com um forte foco em usabilidade, desempenho e segurança, oferecemos soluções personalizadas que melhoram a eficiência e impulsionam o crescimento. Se você precisa de um CRM, plataforma de comércio eletrônico, ferramenta de gestão de projetos ou qualquer outra solução web, estamos prontos para transformar sua visão em realidade com profissionalismo e experiência.",
                a3Description: "Nossa missão é oferecer aplicações web inovadoras e de alta qualidade que capacitam as empresas a alcançar seus objetivos. Priorizamos usabilidade, desempenho e segurança para fornecer soluções personalizadas que melhoram a eficiência e impulsionam o crescimento.",
                a4Description: "Ser o principal fornecedor de aplicações web inovadoras e de alta qualidade que capacitam as empresas a alcançar seu pleno potencial, impulsionando eficiência, crescimento e sucesso através de usabilidade, desempenho e segurança excepcionais.",
                // Solutions
                soTitle: "Nossas Soluções",
                soSubTitle: "Soluções web personalizadas para atender às suas necessidades individuais.",
                so1Title: "Websites Corporativos:",
                so2Title: "Portfólios Online:",
                so3Title: "Plataformas de E-commerce:",
                so4Title: "Aplicações Web:",
                soText: "Com foco em usabilidade, desempenho e segurança, criamos aplicações que melhoram a eficiência dos negócios e impulsionam o crescimento.",
                so1Description: "Websites profissionais e responsivos para estabelecer uma presença online e atrair clientes.",
                so2Description: "Portfólios visualmente atraentes e funcionais para mostrar o trabalho e as realizações de seus clientes.",
                so3Description: "Soluções de e-commerce robustas e escaláveis que oferecem uma experiência de compra sem interrupções, incluindo gateways de pagamento, gerenciamento de estoque e processamento de pedidos.",
                so4Description: "Aplicações web personalizadas projetadas para atender às necessidades específicas de negócios, de ferramentas de produtividade a portais de clientes.",
            }
        }
    }
});

export default i18n;

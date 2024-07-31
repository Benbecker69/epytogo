import React from "react";
import Dropdown from "../Dropdown/Dropdown";
import BannerAbout from "../../components/AboutPage/BannerAboutPage/BannerAboutPage";

const dropdownTexts = [
    {
        title: "Qui sommes-nous ?",
        content:
            "Epytogo se distingue comme la plateforme incontournable pour explorer les merveilles de l'Égypte. Nous nous dévouons à offrir aux voyageurs une expérience inoubliable, alliant découverte, enrichissement et sécurité, tout en assurant un service de qualité supérieure. Notre objectif est également de fournir des informations détaillées et fiables sur les attractions touristiques, les restaurants, ainsi que des conseils précieux sur la vie locale. Nous nous engageons fermement à vous offrir des données précises et à jour pour enrichir votre voyage.",
    },
    {
        title: "Fiabilité",
        content:
            "Chez Epytogo, nous garantissons la fiabilité totale de toutes les informations et annonces publiées sur notre plateforme. Chaque photo et description des destinations sont minutieusement vérifiées par nos équipes pour assurer qu'elles reflètent fidèlement les sites que vous allez visiter. Nous nous engageons à mettre à jour régulièrement nos données afin de vous offrir des informations précises et à jour.",
    },
    {
        title: "Respect de la Culture Locale",
        content:
            "Nous valorisons et respectons profondément la culture égyptienne et nous nous engageons à promouvoir un tourisme responsable. Nous vous encourageons à respecter les traditions locales et à se comporter de manière respectueuse envers les communautés locales. Nous fournissons des conseils et des recommandations pour aider nos visiteurs à s'intégrer harmonieusement dans leur environnement.",
    },
    {
        title: "Sécurité",
        content:
            "La sécurité est une priorité absolue chez Epytogo. Tous les sites recommandés sont conformes aux normes de sécurité les plus strictes. Nous nous assurons que chaque destination respecte les critères de sécurité établis. Nous encourageons également les visiteurs à laisser des avis sur leur expérience pour aider à maintenir des standards élevés.",
    },
    {
        title: "Engagement Environnemental",
        content:
            "Nous sommes conscients de l'impact environnemental du tourisme et nous nous efforçons de promouvoir des pratiques durables. Nous encourageons nos visiteurs à adopter des comportements respectueux de l'environnement, comme minimiser les déchets, respecter les espaces naturels et soutenir les initiatives locales de conservation.",
    },
];

const About = () => {
    return (
        <div>
            <BannerAbout/>
            {dropdownTexts.map((item, index) => (
                <Dropdown key={index} title={item.title} content={item.content}/>
            ))}
        </div>
    );
};

export default About;

import React from 'react';
import "./ourpublisherscomponent.css";

const authors = [
    {
        id: 1,
        name: 'Donald Ennis',
        title: 'Author of',
        book: 'HOT NIGHTS COLD DAYS',
        image: './images/ob7.jpg',
        link: 'https://www.amazon.com/s?i=digital-text&rh=p_27%3ADonald%2BEnnis&s=relevancerank&text=Donald+Ennis&ref=dp_byline_sr_ebooks_1', // Add actual links here
    },
    {
        id: 2,
        name: 'Lisa Stalvey Coady',
        title: 'Author of',
        book: 'The Thoughtful Chef : How the Connection of Spirituality, Great Energy and Good Clean Organic Food Become One',
        image: './images/author.jpg',
        link: 'https://www.amazon.com/stores/author/B00S56USIU/allbooks?ingress=0&visitId=090288c8-a4cc-4cf8-bdc4-67dd3bdcce0a&ref_=ap_rdr', // Add actual links here
    },
    {
        id: 3,
        name: 'Beth Gardner',
        title: 'Author of',
        book: 'One Rowing Stroke at a Time - Surviving Stage 3 Breast Cancer for 20-Years',
        image: './images/Beth-Gardner.jpg',
        link: 'https://www.amazon.com/stores/Beth-Gardner/author/B09ZPYCGZC?ref=ap_rdr&isDramIntegrated=true&shoppingPortalEnabled=true', // Add actual links here
    },
    {
        id: 4,
        name: 'Elizabeth Dooley',
        title: 'Author of',
        book: 'Fern Valley Ventures: Volume 1',
        image: './images/elizabeth-dooley.jpg',
        link: 'https://www.amazon.com/stores/Mrs-Elizabeth-Amanda-Dooley/author/B0BG3J9R66?ref=ap_rdr&isDramIntegrated=true&shoppingPortalEnabled=true', // Add actual links here
    },
    {
        id: 5,
        name: 'Kenneth G Allen Jr.',
        title: 'Author of',
        book: 'Singing the Winn/Dixie Blues and other Short Stories',
        image: './images/author.jpg',
        link: 'https://www.amazon.com/stores/Kenneth-G-Allen-Jr./author/B0B6QD6TZG?ref=ap_rdr&isDramIntegrated=true&shoppingPortalEnabled=true', // Add actual links here
    },
    {
        id: 6,
        name: 'Ana Jorda',
        title: 'Author of',
        book: 'Language of a Silence',
        image: './images/ana-jorda.jpg',
        link: 'https://www.amazon.com/stores/Ana-Jorda/author/B00NRG4K6O?ref=ap_rdr&isDramIntegrated=true&shoppingPortalEnabled=true', // Add actual links here
    },
];

const AuthorCard = ({ name, title, book, image, link }) => (
    <div className="author-card">
        <img src={image} alt={name} className="author-image" />
        <h3 className="author-name">{name}</h3>
        <p className="author-title">{title}</p>
        <p className="author-book">{book}</p>
        <a href={link} className="view-more-button" target="_blank" rel="noopener noreferrer">
            View More
        </a>
    </div>
);

export default function Ourpublisherscomponent() {
    return (
        <div className="author-card-grid container">
            {authors.map((author) => (
                <AuthorCard key={author.id} {...author} />
            ))}
        </div>
    );
}

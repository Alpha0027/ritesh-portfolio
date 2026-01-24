import React from 'react';
import Section from '../layout/Section';
import './Hobbies.css';

const hikes = [
    {
        title: 'South Lynn Peak lookout',
        src: 'https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=1200&q=80',
        alt: 'Forest-framed view toward the summit from South Lynn Peak lookout'
    },
    {
        title: 'Pump Peak sunset hike',
        src: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=80',
        alt: 'Golden-hour light over layered coastal mountains from Pump Peak'
    },
    {
        title: 'Lynn Canyon suspension bridge',
        src: 'https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=1200&q=80&sat=-10',
        alt: 'Suspension bridge spanning Lynn Canyon above emerald water and cedars'
    }
];

const Hobbies = () => {
    return (
        <Section id="hobbies" background="var(--color-white)">
            <div className="hobbies-grid">
                <div className="hobbies-copy">
                    <h2>Beyond Work</h2>
                    <p>
                        Badminton and table tennis keep me sharp on teamwork, split-second agility, and match strategy—habits that transfer to pairing with engineers and making fast product calls. Hiking gives me a steady practice of setting objectives, pacing through tough climbs, and staying curious about the terrain ahead, which mirrors how I tackle long-running data projects.
                    </p>
                    <p className="hobbies-links">
                        Time in the woods clears the mental noise; pushing through steep sections on a long hike is my reset button and keeps me curious about what's around the next bend.
                    </p>
                </div>
                <div className="hobbies-gallery">
                    {hikes.map((hike, idx) => (
                        <figure className="hobby-card" key={idx}>
                            <img src={hike.src} alt={hike.alt} loading="lazy" />
                            <figcaption>{hike.title}</figcaption>
                        </figure>
                    ))}
                </div>
            </div>
        </Section>
    );
};

export default Hobbies;




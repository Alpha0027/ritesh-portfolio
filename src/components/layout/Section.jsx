import React from 'react';

const Section = ({ id, children, className = '', background = 'transparent' }) => {
    const style = background !== 'transparent' ? { backgroundColor: background } : {};

    return (
        <section id={id} className={`section-padding ${className}`} style={style}>
            <div className="container">
                {children}
            </div>
        </section>
    );
};

export default Section;

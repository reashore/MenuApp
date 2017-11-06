
import React from 'react';

const Instructions = ({ title, steps }) =>
    <section>
        <h4>{title}</h4>
        {steps.map((step, i) => <p key={i}>{step}</p>)}
    </section>;

export default Instructions;


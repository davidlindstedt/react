import React, { useEffect, useState } from 'react';
import Quotes from '../assets/images/quotes.svg';
import Rating4 from '../assets/images/rating4.svg';
import Rating5 from '../assets/images/rating5.svg';

const Clients = () => {
  const [testimonials, setTestimonials] = useState([]);

  useEffect(() => {

    fetch('https://win24-assignment.azurewebsites.net/api/testimonials')
      .then(response => response.json())
      .then(data => setTestimonials(data))
      .catch(error => console.error('Error fetching testimonials:', error));
  }, []);

  return (
    <section>
      <div className="bg-colorp5">
        <div className="container" id="page5">
          <div id="citat1">
            <img src={Quotes} alt="Quotes" />
          </div>

          <div id="citat2">
            <img src={Quotes} alt="Quotes" />
          </div>

          <div className="clients">
            <h4>Clients are Loving Our App</h4>
          </div>

          <div className="ratings">
            {testimonials.map((testimonial) => (
              <div className="rating-12" key={testimonial.id}>
                <div className="rating-subtitle">
                  <div className="rating-stars">
                    <img src={testimonial.starRating === 4 ? Rating4 : Rating5} alt="Rating" />
                  </div>
                  <p>{testimonial.comment}</p>
                </div>
                {/* Flex-container för att visa bilden och texten bredvid varandra */}
                <div className="client-info" style={{ display: 'flex', alignItems: 'center', paddingTop: '1rem' }}>
                  <img src={testimonial.avatarUrl} alt={testimonial.author} style={{ borderRadius: '50%', width: '50px', height: '50px' }} />
                  <div className="names-jobs">
                    <h2 className="names">{testimonial.author}</h2>
                    <p className="work">{testimonial.jobRole}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Clients;

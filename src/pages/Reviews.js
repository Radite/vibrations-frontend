import React, { useEffect } from 'react';
import './Reviews.css';
import './global-hero.css'; // Import global hero CSS

const Reviews = () => {
  useEffect(() => {
    document.title = "Festival Reviews - Vibrations Poetry Festival";
  }, []);

  const reviews2025 = [
    {
      quote: "It was an amazing experience. Fun-filled and exciting diverse group of artists. Excellent pieces.",
      author: "Martin Thames"
    },
    {
      quote: "The experience is unforgettable. Food for the soul, voice for the voiceless, life for the soulless.",
      author: "Keya"
    },
    {
      quote: "What an amazing display of the talent of poetry in our Jamaican people!",
      author: "Jacqueline Downie",
      title: "Resident Nurse"
    },
    {
      quote: "I am incredibly grateful to have experienced this event. I am absolutely stunned!",
      author: "Alyssa Reynolds",
      title: "Big sister of performer Abigail Reynolds"
    },
    {
      quote: "The festival was amazing! Each poem shared touched my soul.",
      author: "Arlene Reynolds"
    },
    {
      quote: "Beautiful collection of talent.",
      author: "Hugh Williams"
    },
    {
      quote: "Hope this can become a community event. Want to discuss bringing this to Claremont Heights in Old Harbour.",
      author: "Patricia Henry"
    },
    {
      quote: "My experience was eclectic! The poems were fantastic and engaging.",
      author: "Britton Wright",
      title: "2025 CariCon Poetry Slam Champion"
    },
    {
      quote: "It was great! I have been inspired.",
      author: "J. Hemmings"
    },
    {
      quote: "A fantastic start to what will be an amazing journey. All the best.",
      author: "Stacie Ann Taylor"
    },
    {
      quote: "A wonderful show of poetic excellence. Excellently done!",
      author: "Natasha Peterkin"
    },
    {
      quote: "Most enjoyable! Happy to see young people participating.",
      author: "Carol Samuel-Johnson"
    },
    {
      quote: "An enjoyable experience!",
      author: "Pete Taylor"
    },
    {
      quote: "I enjoyed myself. A marvelous start to a new era of the written and spoken word! Congratulations!",
      author: "Eunice"
    },
    {
      quote: "It was an amazing experience. I truly enjoyed myself, hearing and seeing everyone pour out their hearts in their pieces. It was truly inspiring and engaging.",
      author: "Neferton Hibbert"
    },
    {
      quote: "Thanks for bringing respect and awareness of the inherent healing value of poetry. Maybe I'll be your next fave!",
      author: "Kindred"
    },
    {
      quote: "Loved that the event started on time! The cocktails provided, upon arrival was a most welcoming mix-and-mingle session for those who arrived on-time for the event.",
      author: "Michca Satchell"
    },
    {
      quote: "Happy to watch this showcase!",
      author: "Gabrielle Burgess",
      title: "SugaLifestyle"
    }
  ];

  return (
    <div className="reviews-page">
      {/* Hero Section */}
      <section className="site-hero">
        <div className="site-hero-content">
          <h1>Festival Reviews</h1>
          <p>What our community is saying about the Vibrations Poetry Festival experience</p>
        </div>
      </section>

      {/* Festival Year Header */}
      <section className="festival-year-header">
        <div className="year-header-content">
          <h2>Vibrations Poetry Festival 2025</h2>
          <p className="event-details">August 9, 2025 • Edna Manley College of the Visual & Performing Arts • Kingston, Jamaica</p>
          <p className="intro-text">
            Our inaugural festival brought together poets, artists, and literary enthusiasts for an unforgettable evening 
            of spoken word, music, and cultural celebration. Here's what our attendees had to say about their experience.
          </p>
        </div>
      </section>

      {/* Reviews Grid */}
      <section className="reviews-container">
        {reviews2025.map((review, index) => (
          <div key={index} className="review">
            <span className="quotation-mark">"</span>
            <p>{review.quote}</p>
            <div className="author">
              <strong>{review.author}</strong>
              {review.title && <span className="author-title">, {review.title}</span>}
            </div>
          </div>
        ))}
      </section>

      {/* Community Impact Section */}
      <section className="community-impact">
        <div className="impact-content">
          <h3>Building Our Poetry Community</h3>
          <p>
            The overwhelming response to our inaugural festival demonstrates the hunger for authentic poetic expression 
            in Jamaica. From seasoned poetry lovers to first-time attendees, the Vibrations Poetry Festival created 
            connections, inspired creativity, and celebrated the power of the spoken word.
          </p>
          <div className="impact-stats">
            <div className="stat-item">
              <span className="stat-number">150+</span>
              <span className="stat-label">Attendees</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">11</span>
              <span className="stat-label">Featured Poets</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">18</span>
              <span className="stat-label">Guestbook Reviews</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">100%</span>
              <span className="stat-label">Memorable Evening</span>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="cta-section">
        <h3>Join Us for Future Events</h3>
        <p>Be part of our growing community of poetry enthusiasts and cultural advocates.</p>
        <a href="/contact" className="btn">Get Involved</a>
      </section>
    </div>
  );
};

export default Reviews;
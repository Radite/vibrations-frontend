import React from 'react';
import './About.css';
import './global-hero.css';
import canuteImage from '../assets/Canute.png';
import margueriteImage from '../assets/Marguerite.jpg';
import foundersVideo from '../assets/founders-intro.mp4';

const AboutPage = () => {
  return (
    <div className="about-container">
      {/* Hero Section */}
      <section className="site-hero">
        <div className="site-hero-content">
          <h1>Our Story</h1>
          <p>
            Celebrating the vibrant rhythms of poetry, cultural expression, and Caribbean literary excellence.
          </p>
        </div>
      </section>

      <section className="about-page-content">
        {/* Festival Introduction */}
        <div className="about-text-full">
          <h2>
            <i className="fa-solid fa-microphone-alt"></i> About the Festival
          </h2>
          <p>
            Welcome to Vibrations Poetry Festival (VPF), a dynamic and exciting new literary celebration dedicated to nurturing the art of poetry in Jamaica. Our inaugural festival, scheduled for August 9, 2025 at Edna Manley College of the Visual & Performing Arts, promises to be a landmark event that showcases the creativity, resilience, and vibrancy of emerging and established Jamaican poets.
          </p>
          <p>
            At the heart of Vibrations Poetry Festival is our unwavering dedication to creating an inclusive space for aspiring poets to learn, grow, and express themselves. We believe that poetry has the power to uplift, challenge, and inspire, and through our festival, we seek to highlight the ways in which the art form can impact not only individual lives but society as a whole.
          </p>
        </div>

        {/* Visionaries Section with Video */}
        <div className="about-text-full">
          <h2>
            <i className="fa-solid fa-user-tie"></i> Our Visionaries
          </h2>
          
          {/* Video Introduction */}
          <div className="founders-video-container">
            <h3>Meet Our Founders</h3>
            <p>Get to know the passionate minds behind Vibrations Poetry Festival.</p>
            <div className="video-wrapper">
              <video controls className="founders-video">
                <source src={foundersVideo} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
          
          <div className="founders-container">
            <div className="founder">
              <img src={canuteImage} alt="Canute Lawrence" />
              <div className="founder-info">
                <h3>Canute Lawrence</h3>
                <p>
                  Canute Lawrence is an award-winning poet, educator, and author whose work captures the complexity of human experiences in the face of societal challenges. His book <em>Pathology of a Pandemic</em>, published in 2021, explores a range of voices and perspectives during the COVID-19 pandemic. With over three decades as a language and literature teacher in Jamaica, the United States, and Canada, Canute continues to inspire young minds as a full-time teacher with the Toronto District School Board.
                </p>
              </div>
            </div>

            <div className="founder">
              <img src={margueriteImage} alt="Marguerite Anderson" />
              <div className="founder-info">
                <h3>Marguerite C. Anderson</h3>
                <p>
                  Marguerite C. Anderson is an internationally acclaimed poet, educator, actress, and advocate for the arts. Born in Kingston, she has spent over three decades teaching in Jamaica and the Turks &amp; Caicos Islands, and has authored several poetry collections including <em>Echoes From The Naked Soul</em> (2020), <em>I Exist On This Page</em> (2024), and <em>Proclamations</em> (2025). Her poignant ballad <em>In Memory's Absence</em> gained global recognition after winning 1st-Place prize on Poetry.com.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="about-section">
          {/* Vision & Mission Section */}
          <div className="about-text">
            <h2>
              <i className="fa-solid fa-lightbulb"></i> Our Vision & Purpose
            </h2>
            <p>
              <strong>Vision:</strong> VPF is dedicated to fostering a passion for poetry writing and creating an inclusive space for aspiring and emerging Jamaican poets to showcase and hone their poetry writing and performance skills.
            </p>
            <p>
              <strong>Mission:</strong> VPF's mission is to educate and sensitize both Jamaican society and the world-at-large to the transformative power of poetry. We believe in poetry's ability to create positive change by addressing issues that range from local concerns to global challenges.
            </p>
          </div>
        </div>
        
        {/* Our Journey Section */}
        <div className="our-journey">
          <h2>
            <i className="fa-solid fa-road"></i> Our Journey
          </h2>
          <p>
            From humble beginnings in the heart of Kingston to a vibrant international celebration of the spoken word, our journey has been woven through countless verses, heartfelt performances, and a community united by passion and creativity.
          </p>
          <div className="festival-info">
            <h3>Inaugural Festival</h3>
            <p>
              <strong>Date:</strong> August 9, 2025
            </p>
            <p>
              <strong>Location:</strong> Edna Manley College of the Visual &amp; Performing Arts, Kingston, Jamaica
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;

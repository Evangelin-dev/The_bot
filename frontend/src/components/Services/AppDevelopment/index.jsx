'use client'
import { useEffect } from "react";
import CustomImage from "@/components/custom/Image";
import styles from "./styles.module.css";

const MvpLandingPageContent = () => {
  useEffect(() => {

    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = '1';
          entry.target.style.transform = 'translateY(0)';
        }
      });
    }, observerOptions);

    const sections = document.querySelectorAll(`.${styles.introSection}, .${styles.tagsSection}, .${styles.whyUsSection}, .${styles.finalCtaSection}`);
    sections.forEach(section => observer.observe(section));

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div className={styles.mvpBgWrapper}>
      <section className={styles.heroSection}>
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>
            <span>App in 15 days</span>
          </h1>
          <p className={styles.heroSubtitle}>
            Build, test, and launch a production‑ready MVP. We deliver apps, automations, and migrations—fast, business‑focused, and ready for customers.
          </p>
          <a href="http://thebotapp.com/" target="_blank" rel="noopener noreferrer" className={styles.ctaButton}>
            Get Started
          </a>
        </div>
      </section>

      <div className={styles.container}>
        <section className={styles.introSection}>
          <h2 className={styles.sectionTitle}>Why Wait Months? Launch in 15 Days.</h2>
          <p className={styles.sectionSubtitle}>
            In today's business world, speed is everything. The faster you launch, the faster you learn, adapt, and grow. We help you build a complete business ecosystem where your clients and your team can track progress, get services online, and work seamlessly.
          </p>
        </section>
        <section className={styles.featuresGrid}>          <div className={styles.featureCard}>
          <div className={styles.cardNumber}>1</div>
          <h3 className={styles.cardTitle}>Build & Launch Your Ideas</h3>
          <p className={styles.cardText}>Turn your concept into a working MVP that's ready for testing, client onboarding, and early revenue.</p>
          <a href="http://thebotapp.com/" target="_blank" rel="noopener noreferrer" className={styles.cardButton}>
            Get Started
          </a>
        </div>
          <div className={styles.featureCard}>
            <div className={styles.cardNumber}>2</div>
            <h3 className={styles.cardTitle}>Automate Work Processes</h3>
            <p className={styles.cardText}>Streamline operations with smart workflows so your team spends less time on repetitive tasks and more on growth.</p>
            <a href="http://thebotapp.com/" target="_blank" rel="noopener noreferrer" className={styles.cardButton}>
              Get Started
            </a>
          </div>
          <div className={styles.featureCard}>
            <div className={styles.cardNumber}>3</div>
            <h3 className={styles.cardTitle}>Migrate Your Tech Stack</h3>
            <p className={styles.cardText}>Upgrade outdated systems to modern, scalable platforms without disrupting your ongoing operations.</p>
            <a href="http://thebotapp.com/" target="_blank" rel="noopener noreferrer" className={styles.cardButton}>
              Get Started
            </a>
          </div>
        </section>
        <section className={styles.tagsSection}>
          <h3 className={styles.tagsTitle}>Industries We've Served</h3>
          <div className={styles.tagsContainer}>
            <span className={styles.techTag}>Real Estate</span>
            <span className={styles.techTag}>Retail</span>
            <span className={styles.techTag}>Food & Beverages</span>
            <span className={styles.techTag}>Fintech</span>
            <span className={styles.techTag}>Job Portals</span>
          </div>
          <hr className={styles.divider} />
          <h3 className={styles.tagsTitle}>Processes We've Built</h3>
          <div className={styles.tagsContainer}>
            <span className={styles.techTag}>Task Management Systems</span>
            <span className={styles.techTag}>Email Dashboards</span>
            <span className={styles.techTag}>Client Relation Management</span>
          </div>
        </section>
        <section className={styles.whyUsSection}>
          <div className={styles.whyUsImage}>
            <CustomImage src="/bot-logo-white.png" alt="Why choose us" />
          </div>
          <div className={styles.whyUsContent}>
            <h2 className={styles.sectionTitle}>Why Businesses Choose Us</h2>
            <ul className={styles.whyUsList}>
              <li><i className="fa fa-check-circle"></i> Proven track record delivering MVPs across industries</li>
              <li><i className="fa fa-check-circle"></i> Integrated approach — from tech to operations</li>
              <li><i className="fa fa-check-circle"></i> Focus on business outcomes, not just code</li>
              <li><i className="fa fa-check-circle"></i> Transparent progress tracking for you and your clients</li>
            </ul>
          </div>
        </section>
        <section className={styles.finalCtaSection}>
          <h2 className={styles.sectionTitle}>Ready to Launch Your MVP?</h2>
          <p className={styles.sectionSubtitle}>
            Don't lose another month waiting. Let's get your business ecosystem live in just 15 days.
          </p>
          <a href="http://thebotapp.com/" target="_blank" rel="noopener noreferrer" className={styles.ctaButton}>
            Get Started Now
          </a>
        </section>
      </div>
    </div>
  );
};

export default MvpLandingPageContent;
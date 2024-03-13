import React from 'react';
import styles from './footer-simplified.module.scss';
import socialLinks from './social-links.module.scss';

const getYear = new Date().getFullYear();

const FooterSimplified = () => {
  return (
    <>
      <div className={styles.footerThreeColumn}>
        <div className={styles.container}>
          <div className={styles.footerImageContainer}>
            <div className={styles.logoHolder}>
              <img src="/images/emplifi-logo-wht.svg" alt="Emplifi logo" loading="lazy" />
            </div>
            <img className={styles.footerImage} src="/images/footer-clouds.svg" alt="Clouds" loading="lazy" />
          </div>
          <div>
            <div className={styles.footerContentContainer}>
              <div className={styles.socialCollectionHolder}>
                <ul className={socialLinks.socialLinks}>
                  <li>
                    <a href="https://www.facebook.com/Emplifi" target="_blank" rel="noopener noreferrer">
                      <img src="/images/social/facebook-icon.svg" alt="facebook" width={30} height={30} />
                    </a>
                  </li>
                  <li>
                    <a href="https://twitter.com/emplifi_io" target="_blank" rel="noopener noreferrer">
                      <img src="/images/social/twitter-icon.svg" alt="twitter" width={30} height={30} />
                    </a>
                  </li>
                  <li>
                    <a href="https://www.linkedin.com/company/emplifi" target="_blank" rel="noopener noreferrer">
                      <img src="/images/social/linkedin-icon.svg" alt="linkedin" width={30} height={30} />
                    </a>
                  </li>
                  <li>
                    <a href="https://www.instagram.com/emplifi" target="_blank" rel="noopener noreferrer">
                      <img src="/images/social/instagram-icon.svg" alt="instagram" width={34} height={34} />
                    </a>
                  </li>
                  <li>
                    <a href="https://www.tiktok.com/@emplifi" target="_blank" rel="noopener noreferrer">
                      <img src="/images/social/tiktok-icon.svg" alt="tiktok" width={30} height={30} />
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <ul className={styles.linksContainer}>
                  <li>
                    <a href="/legal/privacy-policy" className={styles.footerLink}>
                      Privacy Statement
                    </a>
                  </li>
                  <li>
                    <a href="/legal/website-terms-of-use" className={styles.footerLink}>
                      Terms & Conditions
                    </a>
                  </li>
                </ul>
                <div className={styles.copyright}>
                  <p className="font-w-300 f-11">
                    © 2020-{getYear} Emplifi Inc. All rights reserved. Emplifi™ and Empathy, amplified.™ are trademarks of Astute, Inc. All product
                    names and logos are trademarks or registered trademarks of their respective owners.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FooterSimplified;

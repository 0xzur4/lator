import React, { useEffect } from 'react';
import { 
  Main,
  FeaturedBox,
  FeaturedText,
  FeaturedName,
  Paragraf,
  SocialIcons,
  Icon,
  FeaturedImage,
  Image,
  Name, 
  Gmb 
} from '../style/List.styled';
import Typed from 'typed.js';
import { Link } from 'react-router-dom';
import Avatar from '../assets/oyen.png';
import { motion } from 'framer-motion';



const BodyHome = () => {

  useEffect(() => {
    const typedEffect = new Typed('.typedText', {
      strings: ['Developer', 'Freelancer', 'Trader', 'Airdrop Hunter'],
      backDelay: 2000,
      typeSpeed: 100,
      backSpeed: 50,
      loop: true,
    });
    const typedCss = document.querySelector('.typedText');
    if (typedCss) {
      typedCss.style.cssText =
        'text-transform: capitalize;color: #F3F3F5;';
    }
    return () => {
      typedEffect.destroy();
    };
  }, []);

  return (
    <Main>
      <FeaturedBox>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <FeaturedText>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              <div className="featured-name">
                <Name>Your Name</Name>
                <FeaturedName><span className="typedText"></span></FeaturedName>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
            >
              <Paragraf className="featured-text-info">
                <p>
                  I'm a freelance web developer based in Indonesia. I have a serious
                  passion for UI effects, animations, and creating intuitive,
                  dynamic user experiences.
                </p>
              </Paragraf>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              <SocialIcons className="social_icons">
                <Icon className="icon">
                  <Link to="https://www.instagram.com/yourname/" target="_blank">
                    <i className="uil uil-instagram"></i>
                  </Link>
                </Icon>
                <Icon className="icon">
                  <Link
                    to="https://www.linkedin.com/in/yourname/"
                    target="_blank">
                    <i className="uil uil-linkedin-alt"></i>
                  </Link>
                </Icon>
                <Icon className="icon">
                  <Link to="https://github.com/#blank" target="_blank">
                    <i className="uil uil-github-alt"></i>
                  </Link>
                </Icon>
              </SocialIcons>
            </motion.div>
          </FeaturedText>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
        >
          <FeaturedImage className="featured-image">
            <Image className="image">
              <Gmb src={Avatar} alt="avatar" />
            </Image>
          </FeaturedImage>
        </motion.div>
      </FeaturedBox>
    </Main>
  );
};

export default BodyHome;

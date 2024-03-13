import React from 'react';
import { withKnobs, text} from '@storybook/addon-knobs';
import ProductHeader, { ProductHeaderMenu, ProductHeaderMenuItem } from '../ProductHeader/ProductHeader';
import LogoProduct from '../../assets/images/logos/emplifi-logo-tagline.png';

export default {
  title: 'Header/Product Header',
  component: ProductHeader,
  decorators: [withKnobs],
};

export const Playground = () => {
  return (
    <ProductHeader 
      imgSrc={
        <a href="https://emplifi-ui.netlify.app/" target="_self">
          <img className="emplifi-product-header__logo" src={LogoProduct} alt="Emplifi" title="Emplifi" width="135px" height="28px"  />
        </a>
      }
    >
      <ProductHeaderMenu>
        <ProductHeaderMenuItem 
          text={text('Link One', 'Link One')} 
          href={text('Href One', 'https://emplifi-ui.netlify.app/')} 
          target={text('Target One', 'Link One')} 
        />
        <ProductHeaderMenuItem 
          text={text('Link Two', 'Link Two')} 
          href={text('Href Two', 'https://emplifi-ui.netlify.app/')} 
          target={text('Target Two', 'Target Two')} 
        />
        <ProductHeaderMenuItem 
          text={text('Link Three', 'Link Three')} 
          href={text('Href Three', 'https://emplifi-ui.netlify.app/')} 
          target={text('Target Three', 'Target Three')} 
        />
        <ProductHeaderMenuItem 
          text={text('Link Four', 'Link Four')} 
          href={text('Href Four', 'https://emplifi-ui.netlify.app/')} 
          target={text('Target Four', 'Target Four')}  
        />
      </ProductHeaderMenu>
    </ProductHeader>
  )
};

export const OpenMenuOnMobile = () => {
  return (
    <ProductHeader 
      imgSrc={
        <a href="https://emplifi-ui.netlify.app/" target="_self">
          <img className="emplifi-product-header__logo" src={LogoProduct} alt="Emplifi" title="Emplifi" width="135px" height="28px" />
        </a>
      }
      isMenuOpen={true}
    >
      <ProductHeaderMenu>
        <ProductHeaderMenuItem text="Link One" href="" target="" />
        <ProductHeaderMenuItem text="Link Two" href="" target="" />
        <ProductHeaderMenuItem text="Link Three" href="" target="" />
        <ProductHeaderMenuItem text="Link Four" href="" target="" />
      </ProductHeaderMenu>
    </ProductHeader>
  )
};

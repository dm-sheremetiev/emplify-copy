import React from "react";
import './IconLinks.scss'
import Icon from "../Icon/Icon";
import {IconsType} from "../../assets/icons";

export type IconLinksProps = {
  id?: string;
  title: string;
  type?: string;
  links: {
    name: IconsType,
    title: string,
    href: string,
    target: string
  }[]
};

const IconLinks = (props: IconLinksProps) => {

  const classes = [
    'emplifi-icon-links',
    props.type ? `emplifi-icon-links--${props.type}` : null
  ];
  const classesString = classes.filter(i => i !== null).join(' ');

  return (
    <div
      id={props.id}
      className={classesString}
    >
      <div className='emplifi-icon-links__content'>

        <h3 className='emplifi-icon-links__title'>{props.title}</h3>

        <ul className='emplifi-icon-links__list'>

          { props.links && props.links.map( (link, index) => (
            <li
              key={`${props.id}__link--${link.name}`}
              className={`emplifi-icon-links__item ${link.name}`}
            >
              <a
                href={link.href}
                className={`emplifi-icon-links__link ${link.name}`}
                title={link.title}
                target={link.target ? link.target : undefined}
                rel={link.target === '_blank' ? 'noopener noreferrer' : undefined}
              >
                <Icon
                  className={`emplifi-icon-links__icon ${link.name}`}
                  name={link.name}
                  width={'100%'}
                  color='inherit'
                />
              </a>
            </li>
            ))
          }
        </ul>
      </div>

    </div>
  );
}

export default IconLinks;

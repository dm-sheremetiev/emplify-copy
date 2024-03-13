import React from "react";
import ArticleEditorialFooter, {ArticleEditorialSocialIcon} from './ArticleEditorialFooter';

export default {
  title: "Article/Article Editorial Footer",
  component: ArticleEditorialFooter
};

export const Playground = () =>
  <ArticleEditorialFooter
    byText="By:"
    by="Test 1"
    articlePublishedText="Article Published:"
    articlePublished="june 12, 2021"
    socialChildren={
      <>
        <ArticleEditorialSocialIcon
          iconName="twitter"
          iconSize={20}
          iconColour="#003A5D"
          href="#"
          target=""
          anchor={true}
        />
        <ArticleEditorialSocialIcon
          iconName="facebook"
          iconSize={20}
          iconColour="#003A5D"
        />
        <ArticleEditorialSocialIcon
          iconName="linkedin"
          iconSize={20}
          iconColour="#003A5D"
        />
        <ArticleEditorialSocialIcon
          iconName="envelope"
          iconSize={20}
          iconColour="#003A5D"
        />
      </>
    }
  />
;

import SEO from './SEO';

const PageWrapper = ({ Component, seo }) => {
  return (
    <>
      <SEO {...seo} />
      <Component />
    </>
  );
};

export default PageWrapper;
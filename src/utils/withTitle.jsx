import { useShowProduct } from "hooks/reactQuery/useProductsApi";
import { t } from "i18next";
import { Helmet } from "react-helmet";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";

const withTitle = (Component, title) => {
  const PageTitle = props => {
    const { slug } = useParams();
    const { data: product = {} } = useShowProduct(slug);

    if (slug) title = product.name;

    const pageTitle = title ? t("pageTitle", { title }) : t("title");

    return (
      <>
        <Helmet>
          <title>{pageTitle}</title>
        </Helmet>
        <Component {...props} />
      </>
    );
  };

  return PageTitle;
};

export default withTitle;

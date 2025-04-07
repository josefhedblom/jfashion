import useReactRouterBreadcrumbs from 'use-react-router-breadcrumbs';
import styles from '../css/Breadcrumbs.module.css'
import { Link } from 'react-router-dom';

const routes = [
    {path: '/', breadcrumb: 'Home'},
    {path: '/shop', breadcrumb: 'Shop'},
    {path: '/shop/:category', breadcrumb: ({ match }) => {
        const category = match.params.category;
        return category.charAt(0).toUpperCase() + category.slice(1);
      }},
    {path: '/shop/:category/:productId', breadcrumb: 'Details'}
];

function Breadcrumbs() {
    const breadcrumbs = useReactRouterBreadcrumbs(routes);

  return (
    <nav>
      {breadcrumbs.map(({ match, breadcrumb }, index) => (
        <span key={match.pathname} className={styles.breadcrumbs}>
          {index > 0 && ' / '}
          <Link to={match.pathname}>{breadcrumb}</Link>
        </span>
      ))}
    </nav>
  );
}

export default Breadcrumbs;
import { Link } from 'react-router-dom';
const Product = (props) => {
  return (
    <section>
      <h1>The Product page</h1>
      <ul>
        <li>
          <Link to="/products/p1">A Book</Link>
        </li>
        <li>
          <Link to="/products/p2">An Apple</Link>
        </li>
        <li>
          <Link to="/products/p3">An online course</Link>
        </li>
      </ul>
    </section>
  );
};

export default Product;

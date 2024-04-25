import { Link } from "react-router-dom";
const DefaultLink = ({ ancher, children, classnames }) => {
  return ancher ? (
    <Link>{children}</Link>
  ) : (
    <button className={`${classnames}`}>{children}</button>
  );
};
export default DefaultLink;

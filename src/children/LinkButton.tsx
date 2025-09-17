import { Link } from 'react-router-dom';

type LinkButtonProps = {
  text: string;
  link: string;
};

export const LinkButton = (props: LinkButtonProps) => {
  return (
    <Link to={props.link}>
      <button className="LinkButton">
        {props.text}
      </button>
    </Link>
  );
};
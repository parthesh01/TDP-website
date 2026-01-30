import { Link } from "wouter";

const Logo: React.FC = () => {
  return (
    <Link href="/">
      <a className="flex items-center">
        <img
          src="/tdp-logo%20(2).png"
          alt="The Digital Pillar"
          className="w-auto h-20"
        />
      </a>
    </Link>
  );
};

export default Logo;

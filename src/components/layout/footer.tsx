import { Link } from "react-router-dom";
import Logo from "../icons/logo";

const Footer = () => {
  return (
    <footer className="mt-8 border-t pt-4 page-root bg-secondary">
      <div className="flex flex-col sm:flex-row justify-between items-center gap-10 text-sm ">
        <div className="flex flex-col gap-10 text-muted-foreground">
          <Logo data-testid="logo" height={26 * 1.5} width={87 * 1.5} />
          <div>
            <p>© 2024 OSSVerse.</p>
            <p>Connecting Innovators with Security Experts.</p>
            <p>All rights reserved.</p>
          </div>
        </div>
        <div className="flex flex-wrap w-1/2 justify-between gap-10">
          <div className="flex flex-col gap-4">
            <Link to="/dashboard/my-projects" className="hover:underline">
              Solutions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

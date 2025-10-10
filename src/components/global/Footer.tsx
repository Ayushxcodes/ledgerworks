import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { LinkedinIcon, GithubIcon, MailIcon, TwitterIcon } from "lucide-react";
import Link from "next/link";

const footerSections = [
  {
    title: "Services",
    links: [
      { title: "Tax Strategy", href: "/tax" },
      { title: "Cloud Accounting", href: "/cloud" },
    ],
  },
  {
    title: "Company",
    links: [
      { title: "About Us", href: "/team" },
      { title: "Contact", href: "/contact" },
      
    ],
  },
  {
    title: "Resources",
    links: [
      { title: "FAQs", href: "/company" },
      { title: "Support", href: "/contact" },
    ],
  },
];

const FooterLedgerWorks = () => {
  return (
    <div className="flex flex-col">
      <footer className="border-t bg-background">
        <div className="max-w-7xl mx-auto">
          <div className="py-5 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-7 gap-x-8 gap-y-10 px-6 xl:px-0">
            {/* Logo + Mission */}
            <div className="col-span-full xl:col-span-2">
              <h2 className="text-2xl font-bold">LedgerWorks Accounting Inc.</h2>
              <p className="mt-4 text-muted-foreground">
                Empowering businesses with accurate books, timely compliance,
                and clear financial insights for confident growth.
              </p>
            </div>

            {/* Footer sections */}
            {footerSections.map(({ title, links }) => (
              <div key={title}>
                <h6 className="font-medium">{title}</h6>
                <ul className="mt-6 space-y-4">
                  {links.map(({ title, href }) => (
                    <li key={title}>
                      <Link
                        href={href}
                        className="text-muted-foreground hover:text-foreground"
                      >
                        {title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}

            {/* Newsletter */}
            <div className="col-span-2">
              <h6 className="font-medium">Stay Updated</h6>
              <form className="mt-6 flex items-center gap-2">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  className="grow max-w-64"
                />
                <Button>Contact us</Button>
              </form>
              <p className="text-xs text-muted-foreground mt-2">
                Get the latest accounting insights, compliance updates, and
                tax-saving strategies.
              </p>
            </div>
          </div>
          <Separator />
          <div className="py-8 flex flex-col-reverse sm:flex-row items-center justify-between gap-x-2 gap-y-5 px-6 xl:px-0">
            {/* Copyright */}
            <span className="text-muted-foreground">
              &copy; {new Date().getFullYear()} LedgerWorks Inc.@All rights
              reserved.
            </span>

            {/* Social Links */}
            <div className="flex items-center gap-5 text-muted-foreground">
              <Link href="https://twitter.com" target="_blank">
                <TwitterIcon className="h-5 w-5" />
              </Link>
              <Link href="https://linkedin.com" target="_blank">
                <LinkedinIcon className="h-5 w-5" />
              </Link>
              <Link href="mailto:hello@ledgerworks.com" target="_blank">
                <MailIcon className="h-5 w-5" />
              </Link>
              <Link href="https://github.com" target="_blank">
                <GithubIcon className="h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default FooterLedgerWorks;

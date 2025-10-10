import { Button } from "@/components/ui/button";
import { DribbbleIcon, TwitchIcon, TwitterIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

const teamMembers = [
  {
    name: "Shourya Yadav (CA)",
    title: "Chartered Accountant",
    bio: "A highly accomplished Chartered Accountant with over a decade of international experience, Shourya bridges global financial standards with strategic business insights.",
    details: [
      {
        heading: "Experience",
        text: "Shourya has worked across Deloitte USA & Ireland, PwC London, and KPMG India, delivering high-impact solutions to startups, SMEs, and SEC-listed corporations, ensuring compliance and optimizing financial performance.",
      },
      {
        heading: "Leadership",
        text: "Served as Finance Lead at a U.S. startup, spearheading cross-functional teams and implementing scalable processes that improved reporting accuracy and operational efficiency.",
      },
      {
        heading: "Expertise",
        text: "Specializes in audit, taxation, and financial advisory for international businesses, providing actionable insights to support sustainable growth and informed decision-making.",
      },
      {
        heading: "Approach",
        text: "Combines technical proficiency with a client-focused mindset, translating complex financial concepts into practical strategies that empower business leaders.",
      },
    ],
    imageUrl: "/image1.jpg",
  },
  {
    name: "Nishant Khemani",
    title: "Chartered Accountant",
    bio: "Nishant brings deep expertise in cross-border taxation and corporate restructuring, helping clients navigate complex U.S. tax regulations with confidence.",
    details: [
      {
        heading: "Experience",
        text: "Formerly at KPMG’s International Taxation division, Nishant advised multinational corporations on restructuring, compliance, and international tax optimization strategies.",
      },
      {
        heading: "Leadership",
        text: "Led teams managing U.S. tax compliance projects for high-profile clients, ensuring timely filings and adherence to regulatory frameworks.",
      },
      {
        heading: "Expertise",
        text: "Specializes in US GAAP, international tax treaties, and strategic tax advisory, enabling businesses to minimize risks while maximizing compliance and efficiency.",
      },
      {
        heading: "Approach",
        text: "Known for a client-first methodology, Nishant combines analytical precision with practical solutions to simplify complex tax challenges.",
      },
    ],
    imageUrl: "/nishant.png",
  },
  {
    name: "Pooja Bansal",
    title: "Chartered Accountant",
    bio: "Pooja is a specialist in India–U.S. tax matters, offering extensive international taxation expertise to optimize client outcomes across jurisdictions.",
    details: [
      {
        heading: "Experience",
        text: "Advised multinational clients on complex India–U.S. tax structures, transfer pricing, and corporate taxation, ensuring compliance and strategic advantage.",
      },
      {
        heading: "Leadership",
        text: "Managed cross-border tax advisory engagements, guiding clients through DTAA-related matters and corporate tax strategy implementation.",
      },
      {
        heading: "Expertise",
        text: "Focuses on international tax law, DTAA interpretation, GILTI regulations, and U.S. corporate and individual taxation, providing precise and actionable insights.",
      },
      {
        heading: "Approach",
        text: "Blends analytical rigor with a solutions-oriented mindset, helping clients mitigate risks while achieving tax efficiency across multiple jurisdictions.",
      },
    ],
    imageUrl: "/pooja.png",
  },
  {
    name: "Aman Agarwal",
    title: "Chartered Accountant, MBA (Finance)",
    bio: "Aman brings over 10 years of consulting expertise in U.S. tax laws, combining strategic finance knowledge with hands-on advisory for high-net-worth individuals and corporations.",
    details: [
      {
        heading: "Experience",
        text: "Provided end-to-end U.S. tax solutions, including planning, compliance, and advisory, to corporations and individuals, ensuring accurate filings and optimal tax outcomes.",
      },
      {
        heading: "Leadership",
        text: "Led teams delivering consulting services across diverse industries, mentoring junior staff and streamlining processes for consistent excellence in client delivery.",
      },
      {
        heading: "Expertise",
        text: "Specializes in complex U.S. tax matters, IRS compliance, federal and state filings, and financial advisory for business growth and regulatory adherence.",
      },
      {
        heading: "Approach",
        text: "Integrates CA and MBA expertise to provide comprehensive financial strategies, emphasizing practical solutions that align with business objectives and compliance requirements.",
      },
    ],
    imageUrl: "/aman.png",
  },
];




const Team04Page = () => {
  return (
    <div className="flex flex-col justify-center py-15 sm:py-16 px-6 lg:px-8 max-w-(--breakpoint-xl) mx-auto gap-16">
      {/* Header */}
      <div className="text-center max-w-2xl mx-auto">
        <h2 className="mt-3 text-4xl sm:text-5xl font-semibold tracking-tighter">
          Meet Our Team
        </h2>
        <p className="mt-6 text-base sm:text-lg text-muted-foreground">
          Our philosophy is simple — hire a team of diverse, passionate people
          and foster a culture that empowers you to do your best work.
        </p>
        <div className="mt-8 flex flex-col sm:flex-row-reverse sm:justify-center gap-3">
          <Link href="/contact">
            <Button size="lg">Contact Us</Button>
          </Link>
          <Link href="/company">
            <Button size="lg" variant="outline">
              About Us
            </Button>
          </Link>
        </div>
      </div>

      {/* Team Grid */}
      <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-10 gap-y-12">
        {teamMembers.map((member) => (
          <Dialog key={member.name}>
            <DialogTrigger asChild>
              <div className="cursor-pointer flex flex-col items-center text-center bg-accent py-8 px-6 rounded-lg hover:shadow-lg transition">
                <Image
                  src={member.imageUrl}
                  alt={member.name}
                  className="shrink-0 h-16 w-16 sm:h-20 sm:w-20 rounded-full object-cover bg-accent"
                  width={120}
                  height={120}
                />
                <h3 className="mt-5 text-lg font-semibold">{member.name}</h3>
                <p className="text-muted-foreground text-sm">{member.title}</p>
                <p className="mt-2 mb-6 text-pretty">{member.bio}</p>
                <div className="mt-auto flex items-center gap-4">
                  <Link href="#" target="_blank">
                    <TwitterIcon className="stroke-muted-foreground h-5 w-5" />
                  </Link>
                  <Link href="#" target="_blank">
                    <DribbbleIcon className="stroke-muted-foreground h-5 w-5" />
                  </Link>
                  <Link href="#" target="_blank">
                    <TwitchIcon className="stroke-muted-foreground h-5 w-5" />
                  </Link>
                </div>
              </div>
            </DialogTrigger>

            {/* Modal */}
            <DialogContent className="sm:max-w-lg">
              <DialogHeader>
                <div className="flex items-center gap-4">
                  <Image
                    src={member.imageUrl}
                    alt={member.name}
                    width={80}
                    height={80}
                    className="rounded-full object-cover"
                  />
                  <div>
                    <DialogTitle className="text-xl font-semibold">
                      {member.name}
                    </DialogTitle>
                    <p className="text-muted-foreground">{member.title}</p>
                  </div>
                </div>
              </DialogHeader>

              {/* Auto-rendered details */}
              <div className="mt-6 space-y-4 text-sm leading-relaxed text-muted-foreground">
                {member.details?.map((section, index) => (
                  <section key={index}>
                    {section.heading && (
                      <h4 className="text-base font-semibold text-foreground mb-1">
                        {section.heading}
                      </h4>
                    )}
                    <p>{section.text}</p>
                  </section>
                ))}
              </div>

              {/* Social Links */}
              <div className="mt-6 flex gap-3">
                <Link href="#" target="_blank">
                  <TwitterIcon className="stroke-muted-foreground h-5 w-5" />
                </Link>
                <Link href="#" target="_blank">
                  <DribbbleIcon className="stroke-muted-foreground h-5 w-5" />
                </Link>
                <Link href="#" target="_blank">
                  <TwitchIcon className="stroke-muted-foreground h-5 w-5" />
                </Link>
              </div>
            </DialogContent>
          </Dialog>
        ))}
      </div>
    </div>
  );
};

export default Team04Page;

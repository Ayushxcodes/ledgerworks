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
    bio: "Chartered Accountant with a decade of international experience across Big 4 firms.",
    details: [
      {
        heading: "Experience",
        text: "Worked with Deloitte USA & Ireland, PwC London, and KPMG India, supporting U.S. clients from startups to SEC-listed corporations.",
      },
      {
        heading: "Leadership",
        text: "Served as Finance Lead at a U.S. startup, driving value-added services and strengthening her passion for supporting small businesses.",
      },
      {
        heading: "Expertise",
        text: "Delivers accurate financials, timely tax compliance, and actionable insights, enabling entrepreneurs to focus on growth.",
      },
      {
        heading: "Approach",
        text: "Blends Big 4 expertise with a hands-on, client-focused approach, earning trust as both an advisor and business partner.",
      },
    ],
    imageUrl: "/image1.jpg",
  },
  {
    name: "Nishant",
    title: "Chartered Accountant",
    bio: "Experienced in Business Restructuring, Tax Advisory, and U.S. Taxation matters.",
    details: [
      {
        heading: "Experience",
        text: "Nishant has previously worked at KPMG's International Taxation and Regulatory division, where he supported multinational clients in restructuring and cross-border taxation projects.",
      },
      {
        heading: "Leadership",
        text: "He has led advisory assignments involving U.S. tax compliance for corporations, ensuring clients met global tax obligations with accuracy and timeliness.",
      },
      {
        heading: "Expertise",
        text: "Nishant specializes in US GAAP and provides strategic advisory on U.S. taxation matters, including compliance, reporting, and restructuring impacts.",
      },
      {
        heading: "Approach",
        text: "With a client-first approach, he combines technical expertise with practical solutions, helping businesses navigate complex U.S. tax regulations confidently.",
      },
    ],
    imageUrl: "/nishant.png",
  },
  {
    name: "Pooja Bansal",
    title: "Chartered Accountant",
    bio: "Specialist in India–U.S. tax matters and international taxation.",
    details: [
      {
        heading: "Experience",
        text: "Pooja has extensive experience in international taxation, having advised clients across industries on complex India–U.S. tax structures.",
      },
      {
        heading: "Leadership",
        text: "She has guided multinational clients through tax advisory engagements, managing DTAA-related issues and supporting corporate tax strategy.",
      },
      {
        heading: "Expertise",
        text: "Her specialization includes DTAA interpretation, GILTI implications, transfer pricing, and U.S. corporate and individual taxation.",
      },
      {
        heading: "Approach",
        text: "Pooja combines analytical rigor with a solutions-oriented mindset, helping clients minimize risks while ensuring compliance across jurisdictions.",
      },
    ],
    imageUrl: "/pooja.png",
  },
  {
    name: "Aman Agarwal",
    title: "Chartered Accountant, MBA (Finance)",
    bio: "Over 10 years of consulting experience in U.S. Tax laws.",
    details: [
      {
        heading: "Experience",
        text: "Aman has more than a decade of consulting experience, assisting U.S.-based corporations and individuals with their tax compliance and advisory needs.",
      },
      {
        heading: "Leadership",
        text: "He has led consulting teams delivering end-to-end U.S. tax solutions, including tax planning, IRS filings, and advisory for high-net-worth individuals.",
      },
      {
        heading: "Expertise",
        text: "Aman’s expertise lies in handling complex U.S. tax matters, IRS compliance, and filing of federal and state returns with precision.",
      },
      {
        heading: "Approach",
        text: "By blending his CA background with an MBA in Finance, Aman delivers holistic solutions that combine regulatory compliance with business growth insights.",
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

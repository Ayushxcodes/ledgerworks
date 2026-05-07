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
    name: "Nishant Khemani",
    title: "Chartered Accountant, Enrolled Agent",
    bio: "Nishant is a Qualified Chartered Accountant and Enrolled Agent with advanced certifications from Harvard Business School (Boston, USA) and the London School of Economics (UK). With over five years of experience at KPMG, he brings deep expertise in cross-border accounting, financial strategy, and technology-driven finance solutions.",
    details: [
      {
        heading: "Global Experience",
        text: "Having worked extensively with multinational corporations and large global clients across Europe and the U.S., Nishant combines his accounting acumen with strong technical knowledge in automation, AI, and machine learning applications within finance.",
      },
      {
        heading: "Client Impact",
        text: "At our firm, Nishant partners with clients worldwide — from startups to mid-sized enterprises — helping them implement innovative, tech-enabled financial processes.",
      },
    ],
    imageUrl: "/nishant.png",
  },
  {
    name: "Shourya Yadav (CA)",
    title: "Chartered Accountant",
    bio: "Shourya is a seasoned finance professional and a certified Accountant with over a decade of experience across Deloitte (USA), PwC (London), and KPMG (India). She has worked extensively with U.S. clients ranging from emerging private companies to large SEC-listed corporations, providing expertise in financial reporting, compliance, and advisory services.",
    details: [
      {
        heading: "Leadership Experience",
        text: "She also served as Finance Lead for a U.S.-based startup, where she helped build scalable financial operations and drive growth.",
      },
      {
        heading: "Approach",
        text: "Her experience across both global firms and startups fuels her passion for partnering with small businesses to strengthen their financial foundations and achieve sustainable success.",
      },
    ],
    imageUrl: "/image1.jpg",
  },
  {
    name: "Aman Agarwal",
    title: "Chartered Accountant, MBA (Finance)",
    bio: "Aman Aggarwal is a Chartered Public Accountant and finance professional with over a decade of experience advising businesses on complex financial and economic matters. With an MBA in Finance, he brings a strong command of accounting principles, regulatory frameworks, and strategic financial management.",
    details: [
      {
        heading: "Expertise",
        text: "Over the past 10+ years, Aman has guided clients across industries in navigating U.S. economic laws, compliance structures, and business consulting initiatives.",
      },
      {
        heading: "Specialization",
        text: "His expertise in cross-border accounting practices makes him a valuable resource for firms operating within U.S. financial environments.",
      },
    ],
    imageUrl: "/aman.png",
  },
  {
    name: "Pranjal Bansal",
    title: "Fellow Chartered Accountant (FCA), Dip IFR, FAFD",
    bio: "Pranjal Bansal is a seasoned finance and audit professional and a Fellow Chartered Accountant (FCA) with over 15 years of experience, including a distinguished tenure at Deloitte and other Big 4 firms. Holding a Diploma in International Financial Reporting (Dip IFR) and a certification in Forensic Accounting and Fraud Detection (FAFD), he brings deep expertise in financial reporting across Indian GAAP, US GAAP, and IFRS.",
    details: [
      {
        heading: "Global Expertise",
        text: "Pranjal has worked extensively with US-based clients, providing advisory across accounting, tax registrations, IRS compliance, and cross-border financial strategy.",
      },
      {
        heading: "Client Partnership",
        text: "His cross-border expertise makes him a trusted partner for businesses operating across Indo-US jurisdictions.",
      },
    ],
    imageUrl: "/pranjal.jpeg",
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
      <div className="w-full flex flex-wrap justify-center gap-x-10 gap-y-12">
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

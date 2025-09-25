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
    name: "Shourya Gupta (CA)",
    title: "Chartered Accountant",
    bio: "Qualified Chartered Accountant with decade of professional experience.",
    details: [
      {
        heading: "Experience",
        text: "Qualified Chartered Accountant with decade of professional experience of working with Deloitte USA & Ireland, PwC London as well as KPMG India. Shourya worked extensively with U.S. clients — supporting both small private companies as well as large SEC-listed corporations. Managing large scale global engagements provided unique ability to adopt diverse global clients need.",
      },
      {
        heading: "Leadership",
        text: "She also served as a Finance Lead at a U.S.-based startup, providing value-added services which inspired her passion for partnering with small businesses.",
      },
      {
        heading: "Expertise",
        text: "Strong financial insights — accurate books, timely tax compliance & trusted financial insights placed Shourya in everlasting relationships with entrepreneurs, allowing them to focus on growth while she ensures their financials are managed with precision.",
      },
      {
        heading: "Approach",
        text: "Combining Big 4 expertise with a hands-on, client-focused approach, she is regarded as both a reliable advisor and a supportive partner in business success.",
      },
    ],
    imageUrl:
      "/image1.jpg",
  },
  {
    name: "John Doe",
    title: "Founder & CEO",
    bio: "Former co-founder of Opendoor. Early staff at Spotify and Clearbit.",
    details: [
      {
        heading: "Experience",
        text: "John has over 15 years of experience leading startups and scaling tech companies.",
      },
      {
        heading: "Expertise",
        text: "He’s passionate about building impactful products and mentoring future leaders.",
      },
    ],
    imageUrl:
      "https://images.pexels.com/photos/3785079/pexels-photo-3785079.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    name: "Jane Doe",
    title: "Engineering Manager",
    bio: "Lead engineering teams at Figma, Pitch, and Protocol Labs.",
    details: [
      {
        heading: "Experience",
        text: "Jane specializes in building engineering cultures that balance innovation and reliability.",
      },
      {
        heading: "Leadership",
        text: "She has led global teams across three continents with proven results.",
      },
    ],
    imageUrl:
      "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    name: "Bob Smith",
    title: "Product Manager",
    bio: "Former PM for Linear, Lambda School, and On Deck.",
    details: [
      {
        heading: "Background",
        text: "Bob has helped scale product teams and launch several high-growth products.",
      },
      {
        heading: "Focus",
        text: "He is focused on building user-first solutions and driving product strategy.",
      },
    ],
    imageUrl:
      "https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=600",
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
          <Button size="lg">Contact Us</Button>
          <Button size="lg" variant="outline">
            About Us
          </Button>
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

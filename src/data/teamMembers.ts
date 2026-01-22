export interface TeamMember {
  name: string;
  title: string;
  handle: string;
  status: string;
  avatarUrl: string;
  iconUrl: string;
  backstory: string;
  funFact: string;
  calendlyLink?: string;
  showUserInfo?: boolean;
}

export const teamMembers: TeamMember[] = [
  {
    name: "Jacob Ward",
    title: "President & Founder",
    handle: "jacob",
    status: "Available",
    avatarUrl: "/Person.png",
    iconUrl: "/4x/Asset%203@8x.png",
    backstory: "Jacob is a marketing strategist and creative thinker known for anticipating what's next and building strategies that keep brands ahead of the curve. With experience spanning digital marketing, branding, media, and growth strategy, he specializes in turning complex ideas into clear, actionable plans. Jacob's work is driven by future-focused thinking, data-backed decisions, and a deep understanding of how marketing, technology, and consumer behavior intersect.",
    funFact: "In his free time, he loves playing video games and was once world ranked in Halo!",
    calendlyLink: "https://calendly.com/jake-forwardmindedmedia"
  },
  {
    name: "Wendy Betters",
    title: "Vice President of Design",
    handle: "wendy",
    status: "Online",
    avatarUrl: "/Person.png",
    iconUrl: "/4x/Asset%203@8x.png",
    backstory: "Wendy leads a creative team that serves local and national clients. Her work spans from logo design, interior branding, digital advertising, to arts leadership with visual storytelling across commercial and nonprofit organizations.",
    funFact: "Wendy makes her own wine to share with friends and staff."
  },
  {
    name: "Dustin Paulson",
    title: "Vice President of Sales",
    handle: "dustin",
    status: "Available",
    avatarUrl: "/Person.png",
    iconUrl: "/4x/Asset%203@8x.png",
    backstory: "Dustin is passionate about building meaningful relationships and helping brands grow through smart, creative marketing strategies. He specializes in working closely with clients to understand their goals and connect them with innovative solutions that drive real measurable results. He is known for blending strategy with creativity, focused on partnerships that are collaborative, effective, and built to last.",
    funFact: "Dustin is an avid golfer, dedicated Minnesota Vikings fan, and Fantasy Football aficionado."
  },
  {
    name: "McKenna Benjegerdes",
    title: "Vice President of Accounting & Financial Strategy",
    handle: "mckenna",
    status: "Online",
    avatarUrl: "/Person.png",
    iconUrl: "/4x/Asset%203@8x.png",
    backstory: "McKenna is a devoted wife and mother to two boys, balancing family life with her role as a strategic and analytical financial leader, where she drives strategic decision-making and ensures financial excellence. An avid gardener and puzzle enthusiast, she also enjoys creating a welcoming, well-kept home.",
    funFact: "McKenna is allergic to fun. JK. Her and her husband own a pheasant farm where they raise, release, and sell ring neck roosters and hens. They raise 3,000 every year."
  },
  {
    name: "Doug Monson",
    title: "Vice President of Ag",
    handle: "doug",
    status: "Available",
    avatarUrl: "/Person.png",
    iconUrl: "/4x/Asset%203@8x.png",
    backstory: "Doug is a recovering journalist turned agriculture marketing and PR guru. With more than 25 years of experience, he leverages his expertise to craft compelling campaigns and drive results at FMM.",
    funFact: "After graduating college, Doug was licensed as a locomotive engineer and drove trains for more than a year."
  },
  {
    name: "Bobby Faerber",
    title: "Senior Manager of Videography",
    handle: "bobby",
    status: "Online",
    avatarUrl: "/Person.png",
    iconUrl: "/4x/Asset%203@8x.png",
    backstory: "Bobby attacks life from all angles and constantly pushes the creativity that surrounds him daily. With 25+ years of experience behind the camera, this videographer/photographer is here to accentuate your brand and identity to its fullest potential. From Documentaries in the jungles of Thailand, to NFL player branding, this artist has had his hands in just about everything.",
    funFact: "He has plans of creating his very own cinematic horror film that changes the way people think about camping."
  },
  {
    name: "Kelsey Barchenger",
    title: "Senior Project Manager",
    handle: "kelsey",
    status: "Online",
    avatarUrl: "/Person.png",
    iconUrl: "/4x/Asset%203@8x.png",
    backstory: "Kelsey combines her expertise in journalism and PR as Hometown Hype host and Senior Project Manager. Through storytelling and strategic project management, she creates content that connects people and strengthens local communities.",
    funFact: "If shopping were a sport, Kelsey would be a gold medalist."
  },
  {
    name: "Patrick McCabe",
    title: "Senior Manager of Marketing & Creative Strategies",
    handle: "patrick",
    status: "Available",
    avatarUrl: "/Person.png",
    iconUrl: "/4x/Asset%203@8x.png",
    backstory: "As a marketing partner, Pat specializes in strategy and ideas for ad creative and campaigns. He helps brands clarify their message, connect with their communities, and turn everyday moments into compelling stories that drive results.",
    funFact: "Pat's own stories usually include his son Fynn and their fishing adventures, Lego building and movie time with popcorn and M&Ms."
  },
  {
    name: "Magen Dittbenner",
    title: "Senior Sales Associate and Social Media Coordinator",
    handle: "magen",
    status: "Online",
    avatarUrl: "/Person.png",
    iconUrl: "/4x/Asset%203@8x.png",
    backstory: "Magen has a bachelor's degree in marketing, focused on communication, growth, and digital strategy. This foundation informs her ability to develop thoughtful, results-driven marketing solutions, including effective social media content.",
    funFact: "Outside the office, Magen enjoys singing and songwriting. Her musical background continues to inspire creativity in her life and interests today."
  },
  {
    name: "Ty Thompson",
    title: "Senior Account Executive",
    handle: "ty",
    status: "Available",
    avatarUrl: "/Person.png",
    iconUrl: "/4x/Asset%203@8x.png",
    backstory: "Ty is a Minnesota State graduate with a strong foundation in sales, communication, and problem-solving. His background enables him to connect with clients, understand their needs, and deliver effective solutions.",
    funFact: "Ty has made a hole in one while golfing!"
  },
  {
    name: "Luke Ryan",
    title: "Senior Manager of Motion Graphics",
    handle: "luke",
    status: "Online",
    avatarUrl: "/Person.png",
    iconUrl: "/4x/Asset%203@8x.png",
    backstory: "Luke is a versatile motion graphics artist with expertise in After Effects, Premiere Pro, and Cinema4D. He combines technical skill with creative storytelling to produce polished, high-impact visuals that engage audiences and bring ideas to life.",
    funFact: "He's been editing videos since he was 12 years old, growing social media accounts to hundreds of thousands of followers."
  },
  {
    name: "Alec Lade",
    title: "Assistant Manager of Motion Graphics",
    handle: "alec",
    status: "Available",
    avatarUrl: "/Person.png",
    iconUrl: "/4x/Asset%203@8x.png",
    backstory: "Alec is a multidisciplinary creative professional specializing in graphic design, video editing, and motion graphics. His work blends strong design fundamentals with dynamic motion and storytelling to deliver visually impactful content.",
    funFact: "He likes to spend his free time learning about space, cooking, and caring for his two cats Noodle and Kiwi."
  },
  {
    name: "Abby Svien",
    title: "Senior Manager of Organizational Strategies",
    handle: "abby",
    status: "Online",
    avatarUrl: "/Person.png",
    iconUrl: "/4x/Asset%203@8x.png",
    backstory: "Known for her collaborative approach and strategic mindset, Abby brings clarity and energy to complex challenges. She is passionate about translating big ideas into thoughtful action and measurable impact.",
    funFact: "Abby loves expressing her creativity through drawing, painting, and chalk art."
  },
  {
    name: "And More...",
    title: "Extended Team",
    handle: "team",
    status: "Ready",
    avatarUrl: "/Group.png",
    iconUrl: "/4x/Asset%203@8x.png",
    backstory: "Behind every great campaign is an extensive network of talented professionals. Our team includes skilled account managers, creative content creators, expert videographers, innovative designers, and strategic media buyers—all working together to bring your vision to life and drive real results.",
    funFact: "",
    showUserInfo: false
  },
  {
    name: "Maybe You?",
    title: "Join Our Team",
    handle: "careers",
    status: "Hiring",
    avatarUrl: "/MaybeYou.png",
    iconUrl: "/4x/Asset%203@8x.png",
    backstory: "We're always looking for talented, passionate people to join our team. If you're ready to challenge the status quo and create work that matters, we want to hear from you.",
    funFact: "",
    showUserInfo: false
  }
];

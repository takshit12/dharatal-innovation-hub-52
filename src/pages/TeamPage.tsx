import { Navbar } from "@/components/Navbar";

const TeamPage = () => {
  const team = [
    {
      name: "John Doe",
      role: "AI Research Lead",
      bio: "10+ years experience in machine learning and AI systems.",
      image: "/placeholder.svg"
    },
    {
      name: "Jane Smith",
      role: "Solutions Architect",
      bio: "Expert in designing scalable AI solutions for enterprises.",
      image: "/placeholder.svg"
    },
    {
      name: "Mike Johnson",
      role: "ML Engineer",
      bio: "Specialized in LLM fine-tuning and RAG systems.",
      image: "/placeholder.svg"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <div className="pt-32 pb-20 px-6">
        <div className="container mx-auto">
          <h1 className="text-5xl font-bold mb-12 tracking-tight">Meet Our Team</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {team.map((member) => (
              <div key={member.name} className="neobrutalism bg-white p-6 hover:-translate-y-1 hover:translate-x-1 hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] transition-all duration-200">
                <img src={member.image} alt={member.name} className="w-32 h-32 mx-auto mb-4 rounded-none border-2 border-black" />
                <h3 className="text-xl font-bold mb-2">{member.name}</h3>
                <p className="text-secondary font-medium mb-2">{member.role}</p>
                <p className="text-gray-600">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamPage;
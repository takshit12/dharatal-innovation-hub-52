import { Navbar } from "@/components/Navbar";

const TeamPage = () => {
  return (
    <div className="min-h-screen bg-highlight-green">
      <Navbar />
      <div className="pt-32 pb-20 px-6">
        <div className="container mx-auto max-w-4xl">
          <h1 className="text-5xl font-bold mb-12 tracking-tight">Leadership</h1>
          <div className="neobrutalism bg-white p-8">
            <div className="flex flex-col md:flex-row items-start gap-8">
              <img 
                src="/lovable-uploads/4e23c049-3dc7-4386-a3bf-3f759975876a.png" 
                alt="Takshit Mathur"
                className="w-full md:w-1/2 neobrutalism object-cover"
              />
              <div>
                <h2 className="text-3xl font-bold mb-2">Takshit Mathur</h2>
                <p className="text-secondary font-medium mb-4">Founder & CEO</p>
                <p className="text-gray-600 mb-6">
                  A visionary entrepreneur and AI expert with a passion for making artificial intelligence accessible and practical for businesses. With extensive experience in LLM fine-tuning, data extraction, and AI automation, Takshit leads Dharatal AI's mission to transform businesses through innovative AI solutions.
                </p>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-secondary border border-black"></span>
                    <span>AI/ML Expert</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-secondary border border-black"></span>
                    <span>Tech Entrepreneur</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-secondary border border-black"></span>
                    <span>Solution Architect</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamPage;
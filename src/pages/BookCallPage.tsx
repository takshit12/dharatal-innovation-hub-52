import { Navbar } from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";

const BookCallPage = () => {
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Request submitted",
      description: "We'll get back to you within 24 hours to schedule the call.",
    });
  };

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <div className="pt-32 pb-20 px-6">
        <div className="container mx-auto max-w-2xl">
          <div className="neobrutalism bg-white p-8">
            <h1 className="text-4xl font-bold mb-6 tracking-tight">Book a Call</h1>
            <p className="text-gray-600 mb-8">
              Schedule a consultation with our AI experts to discuss your project needs.
            </p>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium mb-2">Name</label>
                <Input className="neobrutalism w-full" required />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Email</label>
                <Input type="email" className="neobrutalism w-full" required />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Company</label>
                <Input className="neobrutalism w-full" />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Project Details</label>
                <Textarea className="neobrutalism w-full" rows={4} required />
              </div>
              <Button 
                type="submit"
                className="w-full neobrutalism-pink hover:-translate-y-1 hover:translate-x-1 hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]"
              >
                Request Call
              </Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookCallPage;
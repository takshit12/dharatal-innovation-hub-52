import { Navbar } from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";
import { Mail, Phone, MapPin } from "lucide-react";
import { Checkbox } from "@/components/ui/checkbox";
import { useState } from "react";

const ContactPage = () => {
  const { toast } = useToast();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [requirement, setRequirement] = useState(false);
  const [details, setDetails] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      const response = await fetch("https://hook.eu2.make.com/d1t8uvyur6v69lm2p6gtulkzpliewi3q", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          Name: name,
          Email: email,
          Requirement: requirement,
          Details: details,
        }),
      });

      if (response.ok) {
        toast({
          title: "Message sent",
          description: "We'll get back to you as soon as possible.",
        });
        setName("");
        setEmail("");
        setRequirement(false);
        setDetails("");
      } else {
        throw new Error("Failed to submit form");
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to submit form. Please try again.",
        variant: "destructive",
      });
    }
  };

  return (
    <div className="min-h-screen bg-highlight-orange">
      <Navbar />
      <div className="pt-32 pb-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="neobrutalism bg-white p-8">
              <h1 className="text-4xl font-bold mb-6">Get in Touch</h1>
              <p className="text-gray-600 mb-8">
                Have questions about our AI solutions? We'd love to hear from you.
              </p>
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-none bg-highlight-blue border-2 border-black flex items-center justify-center">
                    <Mail className="w-6 h-6 text-black" />
                  </div>
                  <div>
                    <h3 className="font-bold">Email</h3>
                    <p>dharatalaiservices@gmail.com</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-none bg-highlight-yellow border-2 border-black flex items-center justify-center">
                    <Phone className="w-6 h-6 text-black" />
                  </div>
                  <div>
                    <h3 className="font-bold">Phone</h3>
                    <p>+919521452479</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-none bg-highlight-green border-2 border-black flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-black" />
                  </div>
                  <div>
                    <h3 className="font-bold">Location</h3>
                    <p>Jaipur, Rajasthan</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="neobrutalism bg-white p-8">
              <h2 className="text-2xl font-bold mb-6">Send us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium mb-2">Name</label>
                  <Input 
                    className="neobrutalism w-full" 
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required 
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Email</label>
                  <Input 
                    type="email" 
                    className="neobrutalism w-full" 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required 
                  />
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox 
                    id="requirement"
                    checked={requirement}
                    onCheckedChange={(checked) => setRequirement(checked as boolean)}
                  />
                  <label 
                    htmlFor="requirement" 
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    I have specific requirements
                  </label>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Message</label>
                  <Textarea 
                    className="neobrutalism w-full" 
                    rows={4}
                    value={details}
                    onChange={(e) => setDetails(e.target.value)}
                    required 
                  />
                </div>
                <Button 
                  type="submit"
                  className="w-full neobrutalism-pink hover:-translate-y-1 hover:translate-x-1 hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]"
                >
                  Send Message
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
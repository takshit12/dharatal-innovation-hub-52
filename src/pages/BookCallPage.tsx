import { Navbar } from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { useToast } from "@/components/ui/use-toast";
import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";

const BookCallPage = () => {
  const { toast } = useToast();
  const [searchParams] = useSearchParams();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [requirement, setRequirement] = useState(false);
  const [details, setDetails] = useState("");

  useEffect(() => {
    const serviceParam = searchParams.get('service');
    if (serviceParam) {
      setRequirement(true);
      setDetails(`I'm interested in ${serviceParam}`);
    }
  }, [searchParams]);

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
          title: "Request submitted",
          description: "We'll get back to you within 24 hours to schedule the call.",
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
    <div className="min-h-screen bg-highlight-yellow">
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
                <label className="block text-sm font-medium mb-2">Project Details</label>
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
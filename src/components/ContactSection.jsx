import {
    Instagram,
    Linkedin,
    Mail,
    MapPin,
    Phone,
    Send,
    
  } from "lucide-react";
  import { cn } from "@/lib/utils";
  import { useState } from "react";
  
  export const ContactSection = () => {
    const [isSubmitting, setIsSubmitting] = useState(false);
  
    const handleSubmit = async (e) => {
      e.preventDefault();
      setIsSubmitting(true);

      try {
        const formData = new FormData(e.target);
        const response = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          body: formData,
        });

        const data = await response.json();
        if (data.success) {
          e.target.reset();
        }
      } catch (error) {
        alert("Form submission error:", error);
      } finally {
        setIsSubmitting(false);
      }
    };
    return (
      <section id="contact" className="py-24 px-4 relative bg-secondary/30">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
            Get In <span className="text-primary"> Touch</span>
          </h2>
  
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Interested in collaborating or have an opportunity to discuss?
          Feel free to reach out - I'd be glad to connect.
          </p>
  
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="space-y-8">
              <h3 className="text-2xl font-semibold mb-6">
                {" "}
                Contact Information
              </h3>
  
              <div className="space-y-6">
                <a 
                  href="mailto:mayanksengar1008@gmail.com"
                  text="_blank"
                  className="flex items-center space-x-4 p-3 rounded-lg hover:bg-primary/10 transition-colors"
                >
                  <Mail className="h-6 w-6 text-primary" />
                  <div>
                    <h4 className="font-medium"> Email</h4>
                    <span className="text-muted-foreground">
                      mayanksengar1008@gmail.com
                    </span>
                  </div>
                </a>

                <a 
                  href="tel:+918084745945"
                  target="_blank"
                  className="flex items-center space-x-4 p-3 rounded-lg hover:bg-primary/10 transition-colors"
                >
                  <Phone className="h-6 w-6 text-primary" />
                  <div className="ml-13">
                    <h4 className="font-medium"> Phone</h4>
                    <span className="text-muted-foreground">
                      +91 8084745945
                    </span>
                  </div>
                </a>

                <a 
                  href="https://maps.google.com/?q=Ranchi,Jharkhand"
                  target="_blank"
                  className="flex items-center space-x-4 p-3 rounded-lg hover:bg-primary/10 transition-colors"
                >
                  <MapPin className="h-6 w-6 text-primary" />
                  <div className="ml-12">
                    <h4 className="font-medium"> Location</h4>
                    <span className="text-muted-foreground">
                      Ranchi, Jharkhand
                    </span>
                  </div>
                </a>
              </div>
  
              <div className="pt-8">
                <h4 className="font-medium mb-4"> Connect With Me</h4>
                <div className="flex space-x-4 justify-center">
                  <a 
                    href="https://www.linkedin.com/in/mayank-sengar-153849281/" 
                    target="_blank"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    <Linkedin className="h-6 w-6" />
                  </a>
                  <a 
                    href="https://www.instagram.com/mayanksengar/" 
                    target="_blank"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    <Instagram className="h-6 w-6" />
                  </a>
                  
                </div>
              </div>
            </div>
  
            <div
              className="bg-card p-8 rounded-lg shadow-xs"
              onSubmit={handleSubmit}
            >
              <h3 className="text-2xl font-semibold mb-6"> Send a Message</h3>
  
              
              <form action="https://api.web3forms.com/submit" method="POST" className="space-y-6">
                <input type="hidden" name="access_key" value="f4166f69-4b2f-4d9a-a9ed-ef9fbb8f4aa1" />
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium mb-2"
                  >
                    {" "}
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden foucs:ring-2 focus:ring-primary"
                    placeholder="Your Name"
                  />
                </div>
  
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium mb-2"
                  >
                    {" "}
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden foucs:ring-2 focus:ring-primary"
                    placeholder="your.email@domain.com"
                  />
                </div>
  
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium mb-2"
                  >
                    {" "}
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden foucs:ring-2 focus:ring-primary resize-none"
                    placeholder="Hello, I'd like to talk about..."
                  />
                </div>
  
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={cn(
                    "cosmic-button w-full flex items-center justify-center gap-2"
                  )}
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                  <Send size={16} />
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    );
  };
  
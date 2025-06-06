
import { useState, FormEvent } from "react";
import { Phone, Mail, MapPin, Send } from "lucide-react";

interface FormData {
  name: string;
  email: string;
  message: string;
}

const ContactSection = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    message: "",
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    success: boolean;
    message: string;
  } | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      // Simulate form submission
      await new Promise((resolve) => setTimeout(resolve, 1500));
      
      setSubmitStatus({
        success: true,
        message: "Message sent successfully! I'll get back to you soon.",
      });
      
      setFormData({
        name: "",
        email: "",
        message: "",
      });
    } catch (error) {
      setSubmitStatus({
        success: false,
        message: "Failed to send message. Please try again later.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="section-padding py-20 relative z-10">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          <span className="gradient-text">Contact Me</span>
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="glass rounded-xl p-8 animate-fade-in overflow-auto">
            <h3 className="text-2xl font-semibold mb-6">Get In Touch</h3>
            
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-full bg-primary/20 text-primary">
                  <Phone size={24} />
                </div>
                <div>
                  <p className="text-muted-foreground">Phone</p>
                  <p className="font-medium">063 893 7422</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-full bg-primary/20 text-primary">
                  <Mail size={24} />
                </div>
                <div>
                  <p className="text-muted-foreground">Email</p>
                  <p className="font-medium">pmanskhosana@gmail.com</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-full bg-primary/20 text-primary">
                  <MapPin size={24} />
                </div>
                <div>
                  <p className="text-muted-foreground">Location</p>
                  <p className="font-medium">69 Maxwell Street, Kempton Park, 1619</p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col items-center h-300 glass rounded-xl p-4 animate-fade-in" style={{ animationDelay: "0.3s" }}>
            <h3 className="text-2xl font-semibold mb-6">Ask Me Questions</h3>
            
            <iframe
    src="https://www.chatbase.co/chatbot-iframe/xxcU4Q5jVGHBIGpcbsU9h"
    className="border-none rounded-lg glass w-full h-screen"
    frameBorder="0"
></iframe>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ContactSection;

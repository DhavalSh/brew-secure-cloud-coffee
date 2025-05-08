
import { Button } from "@/components/ui/button";

interface HeroProps {
  title: string;
  description: string;
  image: string;
  buttonText: string;
  bgColor?: string;
  textColor?: string;
  reverse?: boolean;
}

const Hero = ({
  title,
  description,
  image,
  buttonText,
  bgColor = "bg-starbucks-lightGreen",
  textColor = "text-starbucks-darkGreen",
  reverse = false
}: HeroProps) => {
  return (
    <section className={`w-full ${bgColor}`}>
      <div className={`container mx-auto px-4 md:px-6 py-8 md:py-12 flex flex-col gap-8 ${reverse ? 'md:flex-row-reverse' : 'md:flex-row'}`}>
        <div className={`flex-1 flex flex-col justify-center ${textColor}`}>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">{title}</h2>
          <p className="text-base md:text-lg mb-6 max-w-md">{description}</p>
          <div>
            <Button 
              variant="outline" 
              className={`rounded-full border-2 border-current font-semibold px-6 ${textColor} hover:bg-white/20`}
            >
              {buttonText}
            </Button>
          </div>
        </div>
        <div className="flex-1 flex justify-center items-center">
          <img 
            src={image} 
            alt={title} 
            className="w-full h-auto object-cover rounded-lg max-w-lg shadow-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;

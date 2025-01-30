import { Button } from "@/components/ui/button";
import { toast } from "sonner";

const Home: React.FC = () => {
  return <div className="flex flex-col gap-4 items-center justify-start h-screen">
    <h1>Home</h1>
    <Button onClick={() => {
      toast.success("Hello World")
    }}>Confirm</Button>
    <Button 
      variant="destructive"
      onClick={() => {
        toast.error("Hello World")
      }}
    >
      Error
    </Button>
  </div>;
};

export default Home;

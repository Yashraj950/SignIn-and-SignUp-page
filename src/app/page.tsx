
import { Button } from "@jamsr-ui/react";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex items-center justify-center flex-col h-screen bg-gray-800">
     <h1 className="text-2xl font-bold text-blue-600">Go to SignIn Page</h1>
     <Link href="/signIn" className="mt-4"><Button color="success" className="font-bold ">Click Me</Button> 
     </Link>
    
      </div>
  );
}

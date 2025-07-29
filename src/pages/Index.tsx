import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Sparkles } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-neutral-50 to-neutral-100 p-4">
      <Card className="w-full max-w-md bg-white/95 backdrop-blur-sm border border-neutral-200 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-[1.02]">
        <CardContent className="p-8 text-center space-y-6">
          <div className="w-16 h-16 bg-gradient-to-br from-neutral-800 to-neutral-900 rounded-2xl flex items-center justify-center mx-auto transition-transform duration-300 hover:scale-110">
            <Sparkles className="w-8 h-8 text-white" />
          </div>
          
          <div className="space-y-3">
            <h1 className="text-2xl font-bold text-neutral-900">
              React + shadcn/ui Boilerplate
            </h1>
            <p className="text-neutral-600 leading-relaxed">
              A premium boilerplate with React 18, TypeScript, Vite, shadcn/ui, and Tailwind CSS. Ready for enterprise-grade applications.
            </p>
          </div>
          
          <div className="pt-2">
            <Button 
              className="group bg-neutral-900 hover:bg-neutral-800 text-white px-8 py-3 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
              onClick={() => window.open('https://github.com/chihebnabil/lovable-boilerplate', '_blank')}
            >
              <span className="flex items-center gap-2">
                Get Started
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
              </span>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Index;
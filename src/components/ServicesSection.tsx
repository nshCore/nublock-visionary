import React from 'react';
import { Code, Server, Search, Cpu } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardContent } from './ui/card';

const services = [
  {
    icon: <Code className="h-10 w-10 text-primary" />,
    title: 'WEB DEVELOPMENT',
    description: 'B.'
  },
  {
    icon: <Server className="h-10 w-10 text-primary" />,
    title: 'SYSTEM ARCHITECTURE',
    description: 'Designing scalable and resilient system architectures that support your business needs and growth.'
  },
  {
    icon: <Search className="h-10 w-10 text-primary" />,
    title: 'CODE REVIEW',
    description: 'Comprehensive code analysis to identify bugs, security issues, and improve overall code quality.'
  },
  {
    icon: <Cpu className="h-10 w-10 text-primary" />,
    title: 'DEVOPS',
    description: 'Implementing continuous integration and deployment pipelines to streamline your development workflow.'
  },
];

const Services: React.FC = () => {
  return (
    <section className="py-20 px-6 bg-muted/30">

        <div className="container mx-auto px-6 py-24">
          <h1 className="text-4xl font-bold mb-8">Our Servcies</h1>
          <p className="text-xl text-muted-foreground mb-12">
            Learn more about nublock.tech and our mission.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl font-bold mb-4">WEB DEVELOPMENT</h2>
              <p className="text-muted-foreground mb-6">
                Building responsive, high-performance web applications with modern frameworks and best practices
              </p>
              <p className="text-muted-foreground">
                Additional placeholder text about the company's journey.
              </p>
            </div>
            
            <div className="bg-muted h-64 flex items-center justify-center">
              <p className="text-muted-foreground">Placeholder for company image</p>
            </div>
            
            <div className="bg-muted h-64 flex items-center justify-center">
              <p className="text-muted-foreground">Placeholder for team image</p>
            </div>
            
            <div>
              <h2 className="text-2xl font-bold mb-4">SYSTEM ARCHITECTURE</h2>
              <p className="text-muted-foreground mb-6">
                Placeholder for information about the team and expertise.
              </p>
              <p className="text-muted-foreground">
                Additional placeholder text about team members and skills.
              </p>
            </div>
          </div>
        </div>

    </section>
    )
};

export default Services;

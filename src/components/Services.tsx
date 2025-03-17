
import React from 'react';
import { Code, Server, Search, Cpu } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardContent } from './ui/card';

const services = [
  {
    icon: <Code className="h-10 w-10 text-primary" />,
    title: 'WEB DEVELOPMENT',
    description: 'Building responsive, high-performance web applications with modern frameworks and best practices.'
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
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">OUR SERVICES</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            We offer a comprehensive range of technical services to help your business succeed in the digital landscape.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardHeader className="pb-2">
                <div className="mb-4">{service.icon}</div>
                <CardTitle>{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;

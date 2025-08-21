import React from "react";
import { Section } from "@/components/common/Section";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Play, FileText, Image, Clock, BarChart3 } from "lucide-react";

interface ContentItem {
  id: string;
  title: string;
  description: string;
  type: 'video' | 'graphic' | 'article';
  duration: string;
  level: 'Beginner' | 'Intermediate' | 'Advanced';
  thumbnail?: string;
  youtubeId?: string;
}

const contentData = {
  basics: [
    {
      id: '0',
      title: 'Why Bitcoin is Important',
      description: 'Complete overview of Bitcoin use cases and why it matters for the future',
      type: 'video' as const,
      duration: '15 min',
      level: 'Beginner' as const,
      youtubeId: 'R4gyS5mb9dE'
    },
    {
      id: '1',
      title: 'What is Bitcoin?',
      description: 'Comprehensive introduction to Bitcoin and its revolutionary technology',
      type: 'video' as const,
      duration: '12 min',
      level: 'Beginner' as const,
      thumbnail: '/lovable-uploads/145c7978-4866-4776-bf84-57e5beb97fa8.png'
    },
    {
      id: '2', 
      title: 'How Bitcoin Works',
      description: 'Deep dive into blockchain mechanics and proof-of-work consensus',
      type: 'video' as const,
      duration: '18 min',
      level: 'Beginner' as const,
      thumbnail: '/lovable-uploads/22bdecf3-020a-460e-a323-e5fe40a037a9.png'
    },
    {
      id: '3',
      title: 'Bitcoin vs Traditional Money',
      description: 'Visual comparison of Bitcoin properties versus fiat currencies',
      type: 'graphic' as const,
      duration: '5 min',
      level: 'Beginner' as const,
      thumbnail: '/lovable-uploads/22d31f51-c174-40a7-bd95-00e4ad00eaf3.png'
    },
    {
      id: '4',
      title: 'Digital Scarcity Explained',
      description: 'Understanding the 21 million Bitcoin limit and its implications',
      type: 'article' as const,
      duration: '8 min',
      level: 'Intermediate' as const
    }
  ],
  security: [
    {
      id: '5',
      title: 'Wallet Types Overview',
      description: 'Complete guide to hot wallets, cold wallets, and hardware options',
      type: 'video' as const,
      duration: '15 min',
      level: 'Beginner' as const,
      thumbnail: '/lovable-uploads/5663820f-6c97-4492-9210-9eaa1a8dc415.png'
    },
    {
      id: '6',
      title: 'Private Key Management',
      description: 'Best practices for securing your Bitcoin private keys',
      type: 'video' as const,
      duration: '20 min', 
      level: 'Intermediate' as const,
      thumbnail: '/lovable-uploads/af412c03-21e4-4856-82ff-d1a975dc84a9.png'
    },
    {
      id: '7',
      title: 'Security Checklist',
      description: 'Step-by-step security audit for your Bitcoin holdings',
      type: 'graphic' as const,
      duration: '3 min',
      level: 'Beginner' as const,
      thumbnail: '/lovable-uploads/dc13e94f-beeb-4671-8a22-0968498cdb4c.png'
    },
    {
      id: '8',
      title: 'Hardware Wallet Setup',
      description: 'Complete tutorial for setting up and using hardware wallets',
      type: 'article' as const,
      duration: '12 min',
      level: 'Intermediate' as const
    }
  ],
  strategy: [
    {
      id: '9',
      title: 'Dollar-Cost Averaging',
      description: 'Learn the most popular Bitcoin investment strategy',
      type: 'video' as const,
      duration: '14 min',
      level: 'Beginner' as const
    },
    {
      id: '10',
      title: 'Portfolio Allocation',
      description: 'How much Bitcoin should be in your investment portfolio?',
      type: 'article' as const,
      duration: '10 min',
      level: 'Intermediate' as const
    },
    {
      id: '11',
      title: 'Risk Management',
      description: 'Advanced strategies for managing Bitcoin investment risks',
      type: 'video' as const,
      duration: '22 min',
      level: 'Advanced' as const
    }
  ]
};

const getIcon = (type: ContentItem['type']) => {
  switch (type) {
    case 'video':
      return <Play className="w-5 h-5" />;
    case 'graphic': 
      return <Image className="w-5 h-5" />;
    case 'article':
      return <FileText className="w-5 h-5" />;
  }
};

const getLevelColor = (level: ContentItem['level']) => {
  switch (level) {
    case 'Beginner':
      return 'bg-green-100 text-green-700';
    case 'Intermediate':
      return 'bg-yellow-100 text-yellow-700';
    case 'Advanced':
      return 'bg-red-100 text-red-700';
  }
};

const ContentCard: React.FC<{ item: ContentItem }> = ({ item }) => (
  <Card className="group hover:shadow-lg transition-all duration-300 cursor-pointer">
    {item.thumbnail ? (
      <div className="aspect-video bg-gray-100 rounded-t-lg overflow-hidden">
        <img 
          src={item.thumbnail}
          alt={item.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </div>
    ) : item.youtubeId ? (
      <div className="aspect-video bg-gray-100 rounded-t-lg overflow-hidden relative">
        <img 
          src={`https://img.youtube.com/vi/${item.youtubeId}/maxresdefault.jpg`}
          alt={item.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center group-hover:bg-red-700 transition-colors">
            <Play className="w-6 h-6 text-white ml-1" />
          </div>
        </div>
      </div>
    ) : null}
    <CardHeader className="pb-3">
      <div className="flex items-start justify-between gap-2">
        <CardTitle className="text-lg font-semibold leading-tight group-hover:text-pulse-600 transition-colors">
          {item.title}
        </CardTitle>
        <div className="flex-shrink-0 p-2 bg-pulse-50 rounded-full text-pulse-600">
          {getIcon(item.type)}
        </div>
      </div>
      <CardDescription className="text-sm text-gray-600 leading-relaxed">
        {item.description}
      </CardDescription>
    </CardHeader>
    <CardContent className="pt-0">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2 text-sm text-gray-500">
          <Clock className="w-4 h-4" />
          <span>{item.duration}</span>
        </div>
        <span className={`px-2 py-1 rounded-full text-xs font-medium ${getLevelColor(item.level)}`}>
          {item.level}
        </span>
      </div>
    </CardContent>
  </Card>
);

const LearningContent = () => {
  return (
    <Section spacing="lg" background="gray">
      <div className="section-container">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="section-title mb-4">Learning Content</h2>
          <p className="section-subtitle mx-auto max-w-3xl">
            Comprehensive Bitcoin education library featuring videos, interactive graphics, and in-depth articles. 
            Learn at your own pace with content designed for every skill level.
          </p>
          
          {/* Stats */}
          <div className="flex items-center justify-center gap-8 mt-8 text-sm text-gray-600">
            <div className="flex items-center gap-2">
              <Play className="w-4 h-4 text-pulse-600" />
              <span>25+ Videos</span>
            </div>
            <div className="flex items-center gap-2">
              <Image className="w-4 h-4 text-pulse-600" />
              <span>15+ Graphics</span>
            </div>
            <div className="flex items-center gap-2">
              <FileText className="w-4 h-4 text-pulse-600" />
              <span>20+ Articles</span>
            </div>
            <div className="flex items-center gap-2">
              <BarChart3 className="w-4 h-4 text-pulse-600" />
              <span>Track Progress</span>
            </div>
          </div>
        </div>

        {/* Content Tabs */}
        <Tabs defaultValue="basics" className="w-full">
          <TabsList className="grid w-full grid-cols-3 mb-12 bg-white shadow-sm">
            <TabsTrigger value="basics" className="text-sm font-medium">
              Bitcoin Basics
            </TabsTrigger>
            <TabsTrigger value="security" className="text-sm font-medium">
              Security & Storage
            </TabsTrigger>
            <TabsTrigger value="strategy" className="text-sm font-medium">
              Investment Strategy
            </TabsTrigger>
          </TabsList>

          <TabsContent value="basics" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {contentData.basics.map((item) => (
                <ContentCard key={item.id} item={item} />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="security" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {contentData.security.map((item) => (
                <ContentCard key={item.id} item={item} />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="strategy" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {contentData.strategy.map((item) => (
                <ContentCard key={item.id} item={item} />
              ))}
            </div>
          </TabsContent>
        </Tabs>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="bg-white rounded-2xl p-8 shadow-elegant max-w-2xl mx-auto">
            <h3 className="text-xl font-semibold mb-4">Need Personalized Guidance?</h3>
            <p className="text-gray-600 mb-6">
              Get expert support tailored to your learning style and pace with our 1-on-1 coaching sessions.
            </p>
            <a 
              href="/coaching" 
              className="inline-flex items-center px-6 py-3 bg-pulse-500 hover:bg-pulse-600 text-white font-medium rounded-full transition-colors duration-300"
            >
              Explore Coaching Options
            </a>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default LearningContent;
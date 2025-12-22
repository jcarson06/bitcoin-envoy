import React from 'react';
import { Section } from '@/components/common/Section';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
const CoachingPricing = () => {
  return <Section spacing="lg" background="gray">
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="section-title mb-4">How Much Does It Cost?</h2>
          <p className="section-subtitle mx-auto">It's 100% free. What's the catch? There isn't one — I just really like talking with people about Bitcoin.</p>
        </div>

        <div className="max-w-md mx-auto mb-12">
          <Card className="relative shadow-elegant border-gray-100">
            <CardHeader>
              <Badge className="mb-4 w-fit bg-pulse-100 text-pulse-600 hover:bg-pulse-100">
                Free Session
              </Badge>
              <CardTitle className="text-2xl mb-2">Coaching Session</CardTitle>
              <div className="text-4xl font-bold text-pulse-600 mb-2">FREE</div>
              <div className="text-sm text-muted-foreground">45 minutes</div>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">Whether it's buying your first Bitcoin, setting up secure storage, or learning best practices, you'll walk away with clarity and a clear action plan.</p>
            </CardContent>
          </Card>
        </div>

        <div className="text-center">
          <p className="text-lg text-gray-700">👉 Scroll down to schedule a free coaching session at a time that's convenient for you.</p>
        </div>
      </div>
    </Section>;
};
export default CoachingPricing;
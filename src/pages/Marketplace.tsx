import { Link } from "react-router-dom";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ShoppingBag, Gift, Heart, Trophy } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";

const Marketplace = () => {
  const rewardItems = [
    { id: 1, name: "LED Light Bulb Pack", cost: 200, type: "GreenTokens", category: "home" },
    { id: 2, name: "Reusable Water Bottle", cost: 150, type: "EcoCredits", category: "lifestyle" },
    { id: 3, name: "Solar Phone Charger", cost: 500, type: "GreenTokens", category: "tech" },
    { id: 4, name: "Compost Bin", cost: 300, type: "EcoCredits", category: "home" },
  ];

  const communityProjects = [
    { id: 1, name: "Local Park Solar Installation", goal: 10000, current: 7500, donors: 45 },
    { id: 2, name: "Community Recycling Center", goal: 5000, current: 3200, donors: 28 },
    { id: 3, name: "School Green Energy Program", goal: 8000, current: 6100, donors: 52 },
  ];

  const challenges = [
    { id: 1, name: "Energy Saver Week", reward: 100, participants: 234, deadline: "3 days" },
    { id: 2, name: "Zero Waste Challenge", reward: 150, participants: 189, deadline: "5 days" },
    { id: 3, name: "Community Clean-up", reward: 75, participants: 156, deadline: "1 week" },
  ];

  return (
    <div className="min-h-screen bg-background p-4 md:p-6">
      {/* Header */}
      <header className="mb-6">
        <Link to="/dashboard">
          <Button variant="ghost" size="sm" className="mb-4">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Dashboard
          </Button>
        </Link>
        <h1 className="text-3xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-2">
          Marketplace
        </h1>
        <p className="text-muted-foreground">Trade tokens, redeem rewards, and support community</p>
      </header>

      <Tabs defaultValue="rewards" className="mb-6">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="rewards">Rewards</TabsTrigger>
          <TabsTrigger value="community">Community</TabsTrigger>
          <TabsTrigger value="challenges">Challenges</TabsTrigger>
        </TabsList>

        {/* Rewards Tab */}
        <TabsContent value="rewards" className="mt-4 space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <ShoppingBag className="h-5 w-5 text-primary" />
                Redeem Rewards
              </CardTitle>
              <CardDescription>Exchange your tokens for eco-friendly products</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {rewardItems.map((item) => (
                  <div key={item.id} className="p-4 border rounded-lg hover:shadow-[var(--shadow-medium)] transition-all">
                    <div className="flex justify-between items-start mb-3">
                      <h3 className="font-semibold">{item.name}</h3>
                      <Badge variant="secondary">{item.category}</Badge>
                    </div>
                    <div className="flex justify-between items-center">
                      <div>
                        <p className="text-2xl font-bold text-primary">{item.cost}</p>
                        <p className="text-xs text-muted-foreground">{item.type}</p>
                      </div>
                      <Button variant="eco" size="sm">
                        <Gift className="mr-1 h-4 w-4" />
                        Redeem
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Community Tab */}
        <TabsContent value="community" className="mt-4 space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Heart className="h-5 w-5 text-accent" />
                Support Community Projects
              </CardTitle>
              <CardDescription>Donate tokens to local sustainability initiatives</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {communityProjects.map((project) => {
                const progress = (project.current / project.goal) * 100;
                return (
                  <div key={project.id} className="p-4 bg-muted rounded-lg">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="font-semibold">{project.name}</h3>
                      <Badge variant="outline">{project.donors} donors</Badge>
                    </div>
                    <div className="space-y-2 mb-3">
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">Progress</span>
                        <span className="font-medium">{project.current} / {project.goal} tokens</span>
                      </div>
                      <div className="h-3 bg-background rounded-full overflow-hidden">
                        <div 
                          className="h-full bg-gradient-to-r from-primary to-accent transition-all"
                          style={{ width: `${progress}%` }}
                        />
                      </div>
                    </div>
                    <Button variant="outline" size="sm" className="w-full">
                      <Heart className="mr-2 h-4 w-4" />
                      Donate Tokens
                    </Button>
                  </div>
                );
              })}
            </CardContent>
          </Card>
        </TabsContent>

        {/* Challenges Tab */}
        <TabsContent value="challenges" className="mt-4 space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Trophy className="h-5 w-5 text-[hsl(var(--energy-yellow))]" />
                Community Challenges
              </CardTitle>
              <CardDescription>Participate in challenges and earn bonus tokens</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {challenges.map((challenge) => (
                <div key={challenge.id} className="p-4 border rounded-lg hover:shadow-[var(--shadow-medium)] transition-all">
                  <div className="flex justify-between items-start mb-3">
                    <div>
                      <h3 className="font-semibold mb-1">{challenge.name}</h3>
                      <p className="text-sm text-muted-foreground">{challenge.participants} participants</p>
                    </div>
                    <Badge className="bg-[hsl(var(--energy-yellow))] text-foreground">
                      {challenge.deadline}
                    </Badge>
                  </div>
                  <div className="flex justify-between items-center">
                    <div>
                      <p className="text-sm text-muted-foreground">Reward</p>
                      <p className="text-xl font-bold text-primary">{challenge.reward} tokens</p>
                    </div>
                    <Button variant="eco" size="sm">
                      <Trophy className="mr-1 h-4 w-4" />
                      Join Challenge
                    </Button>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      {/* Trading Info */}
      <Card className="bg-primary/5">
        <CardContent className="pt-6">
          <p className="text-sm text-muted-foreground">
            💱 <strong>Peer-to-peer trading</strong> is available within the Yourja network. Trade tokens with other members or list items for exchange. All transactions are managed custodially for your security.
          </p>
        </CardContent>
      </Card>
    </div>
  );
};

export default Marketplace;

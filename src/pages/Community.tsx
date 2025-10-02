import { Link } from "react-router-dom";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Trophy, Users, Target, TrendingUp, Medal } from "lucide-react";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

const Community = () => {
  const userStats = {
    rank: 12,
    score: 8754,
    percentile: 92
  };

  const leaderboard = [
    { rank: 1, name: "Alex Rivera", score: 15420, badge: "🏆" },
    { rank: 2, name: "Sarah Chen", score: 14890, badge: "🥈" },
    { rank: 3, name: "Marcus Johnson", score: 13250, badge: "🥉" },
    { rank: 4, name: "Emma Wilson", score: 12100, badge: "⭐" },
    { rank: 5, name: "David Kim", score: 11500, badge: "⭐" },
    { rank: 6, name: "Lisa Anderson", score: 10800, badge: "⭐" },
    { rank: 7, name: "James Martinez", score: 10200, badge: "⭐" },
    { rank: 8, name: "Rachel Brown", score: 9850, badge: "⭐" },
    { rank: 9, name: "Tom Jackson", score: 9340, badge: "⭐" },
    { rank: 10, name: "Nina Patel", score: 9120, badge: "⭐" },
  ];

  const communityGoals = [
    { name: "Community Energy Savings", current: 4250, goal: 5000, unit: "kWh" },
    { name: "Waste Reduction", current: 850, goal: 1000, unit: "kg" },
    { name: "Active Participants", current: 234, goal: 300, unit: "members" },
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
          Community
        </h1>
        <p className="text-muted-foreground">Connect with your local sustainability community</p>
      </header>

      {/* User Rank Card */}
      <Card className="mb-6 bg-gradient-to-br from-primary to-accent text-primary-foreground">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Medal className="h-6 w-6" />
            Your Rank
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-3 gap-4 text-center">
            <div>
              <p className="text-4xl font-bold">#{userStats.rank}</p>
              <p className="text-sm opacity-90 mt-1">Global Rank</p>
            </div>
            <div>
              <p className="text-4xl font-bold">{userStats.score.toLocaleString()}</p>
              <p className="text-sm opacity-90 mt-1">Total Points</p>
            </div>
            <div>
              <p className="text-4xl font-bold">{userStats.percentile}%</p>
              <p className="text-sm opacity-90 mt-1">Percentile</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Community Goals */}
      <Card className="mb-6">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Target className="h-5 w-5 text-accent" />
            Community Goals
          </CardTitle>
          <CardDescription>Our collective sustainability targets</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          {communityGoals.map((goal, index) => {
            const progress = (goal.current / goal.goal) * 100;
            return (
              <div key={index}>
                <div className="flex justify-between mb-2">
                  <span className="font-medium">{goal.name}</span>
                  <span className="text-sm text-muted-foreground">
                    {goal.current} / {goal.goal} {goal.unit}
                  </span>
                </div>
                <div className="h-3 bg-muted rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-gradient-to-r from-primary to-accent transition-all"
                    style={{ width: `${progress}%` }}
                  />
                </div>
                <p className="text-xs text-muted-foreground mt-1">{progress.toFixed(1)}% complete</p>
              </div>
            );
          })}
        </CardContent>
      </Card>

      {/* Leaderboard */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Trophy className="h-5 w-5 text-[hsl(var(--energy-yellow))]" />
            Top Contributors
          </CardTitle>
          <CardDescription>Most active community members this month</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-2">
            {leaderboard.map((user) => (
              <div 
                key={user.rank} 
                className={`flex items-center justify-between p-3 rounded-lg transition-all ${
                  user.rank <= 3 
                    ? 'bg-gradient-to-r from-primary/10 to-accent/10' 
                    : 'bg-muted'
                }`}
              >
                <div className="flex items-center gap-3">
                  <div className="w-8 text-center">
                    <span className="text-2xl">{user.badge}</span>
                  </div>
                  <Avatar>
                    <AvatarFallback className="bg-primary text-primary-foreground">
                      {user.name.split(' ').map(n => n[0]).join('')}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-medium">{user.name}</p>
                    <p className="text-xs text-muted-foreground">Rank #{user.rank}</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="font-bold text-primary">{user.score.toLocaleString()}</p>
                  <p className="text-xs text-muted-foreground">points</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-4 p-4 bg-primary/5 rounded-lg flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Avatar>
                <AvatarFallback className="bg-accent text-accent-foreground">
                  You
                </AvatarFallback>
              </Avatar>
              <div>
                <p className="font-medium">Your Position</p>
                <p className="text-xs text-muted-foreground">Rank #{userStats.rank}</p>
              </div>
            </div>
            <div className="text-right">
              <p className="font-bold text-accent">{userStats.score.toLocaleString()}</p>
              <p className="text-xs text-muted-foreground">points</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Community Forum CTA */}
      <Card className="mt-6 bg-gradient-to-r from-[hsl(var(--eco-green))]/10 to-accent/10">
        <CardContent className="pt-6">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="font-semibold mb-1">Join the Discussion</h3>
              <p className="text-sm text-muted-foreground">
                Share tips and connect with your community
              </p>
            </div>
            <Button variant="eco">
              <Users className="mr-2 h-4 w-4" />
              Forum
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Community;

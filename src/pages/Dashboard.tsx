import { Link } from "react-router-dom";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Zap, Trash2, Coins, TreePine, Upload, History, TrendingUp, Award } from "lucide-react";

const Dashboard = () => {
  const stats = {
    energyGenerated: 145.8,
    energyConsumed: 98.2,
    energySaved: 47.6,
    wasteDisposed: 24.5,
    ecoCredits: 340,
    greenTokens: 1250,
    carbonSaved: 78.4,
    sustainabilityScore: 87
  };

  return (
    <div className="min-h-screen bg-background p-4 md:p-6">
      {/* Header */}
      <header className="mb-6">
        <div className="flex items-center justify-between mb-2">
          <h1 className="text-3xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Dashboard
          </h1>
          <Button variant="ghost" size="icon">
            <Award className="h-5 w-5" />
          </Button>
        </div>
        <p className="text-muted-foreground">Track your sustainability impact</p>
      </header>

      {/* Energy Stats */}
      <div className="mb-6">
        <h2 className="text-lg font-semibold mb-3 flex items-center gap-2">
          <Zap className="h-5 w-5 text-[hsl(var(--energy-yellow))]" />
          Your Energy
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Card className="bg-gradient-to-br from-card to-[hsl(var(--eco-light))]">
            <CardHeader className="pb-3">
              <CardDescription>Generated</CardDescription>
              <CardTitle className="text-3xl">{stats.energyGenerated} kWh</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center text-sm text-[hsl(var(--eco-green))]">
                <TrendingUp className="h-4 w-4 mr-1" />
                +12% this month
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-3">
              <CardDescription>Consumed</CardDescription>
              <CardTitle className="text-3xl">{stats.energyConsumed} kWh</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center text-sm text-muted-foreground">
                Within normal range
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-primary/10 to-accent/10">
            <CardHeader className="pb-3">
              <CardDescription>Saved</CardDescription>
              <CardTitle className="text-3xl text-primary">{stats.energySaved} kWh</CardTitle>
            </CardHeader>
            <CardContent>
              <Link to="/energy">
                <Button variant="eco" size="sm" className="w-full">
                  Tokenize Surplus
                </Button>
              </Link>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Waste & Tokens */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        {/* Waste Stats */}
        <div>
          <h2 className="text-lg font-semibold mb-3 flex items-center gap-2">
            <Trash2 className="h-5 w-5 text-[hsl(var(--waste-orange))]" />
            Your Waste
          </h2>
          <Card>
            <CardHeader>
              <CardTitle>Waste Disposed</CardTitle>
              <CardDescription>{stats.wasteDisposed} kg this month</CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex justify-between items-center p-3 bg-muted rounded-lg">
                <span className="text-sm font-medium">EcoCredits Earned</span>
                <span className="text-lg font-bold text-accent">{stats.ecoCredits}</span>
              </div>
              <Link to="/waste">
                <Button className="w-full" variant="outline">
                  <Upload className="mr-2 h-4 w-4" />
                  Log Waste Disposal
                </Button>
              </Link>
            </CardContent>
          </Card>
        </div>

        {/* Token Wallet */}
        <div>
          <h2 className="text-lg font-semibold mb-3 flex items-center gap-2">
            <Coins className="h-5 w-5 text-accent" />
            Token Wallet
          </h2>
          <Card>
            <CardHeader>
              <CardTitle>Your Balance</CardTitle>
              <CardDescription>Custodially managed tokens</CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex justify-between items-center p-3 bg-gradient-to-r from-primary/10 to-accent/10 rounded-lg">
                <span className="text-sm font-medium">GreenTokens</span>
                <span className="text-xl font-bold text-primary">{stats.greenTokens}</span>
              </div>
              <div className="flex justify-between items-center p-3 bg-muted rounded-lg">
                <span className="text-sm font-medium">EcoCredits</span>
                <span className="text-xl font-bold text-accent">{stats.ecoCredits}</span>
              </div>
              <Link to="/wallet">
                <Button className="w-full" variant="eco">
                  <Coins className="mr-2 h-4 w-4" />
                  Manage Tokens
                </Button>
              </Link>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Carbon Impact */}
      <Card className="mb-6 bg-gradient-to-r from-[hsl(var(--eco-green))] to-primary text-primary-foreground">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <TreePine className="h-6 w-6" />
            Carbon Impact
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <p className="text-sm opacity-90 mb-1">CO₂ Saved</p>
              <p className="text-3xl font-bold">{stats.carbonSaved} kg</p>
            </div>
            <div>
              <p className="text-sm opacity-90 mb-1">Sustainability Score</p>
              <p className="text-3xl font-bold">{stats.sustainabilityScore}/100</p>
            </div>
          </div>
          <p className="text-sm opacity-90">
            Equivalent to planting 12 trees this month 🌱
          </p>
        </CardContent>
      </Card>

      {/* Quick Actions */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
        <Link to="/energy">
          <Button variant="outline" className="w-full h-20 flex-col gap-2">
            <Zap className="h-5 w-5" />
            Energy
          </Button>
        </Link>
        <Link to="/waste">
          <Button variant="outline" className="w-full h-20 flex-col gap-2">
            <Trash2 className="h-5 w-5" />
            Waste
          </Button>
        </Link>
        <Link to="/marketplace">
          <Button variant="outline" className="w-full h-20 flex-col gap-2">
            <Coins className="h-5 w-5" />
            Marketplace
          </Button>
        </Link>
        <Link to="/community">
          <Button variant="outline" className="w-full h-20 flex-col gap-2">
            <Award className="h-5 w-5" />
            Community
          </Button>
        </Link>
      </div>

      {/* View History */}
      <div className="mt-6">
        <Button variant="ghost" className="w-full">
          <History className="mr-2 h-4 w-4" />
          View Full History
        </Button>
      </div>
    </div>
  );
};

export default Dashboard;

import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Zap, Trash2, Coins, TreePine, Upload, History, TrendingUp, Award, Recycle, LogOut, Wallet, DollarSign, BatteryCharging, Battery, Leaf, Target, BarChart3 } from "lucide-react";
import { ThemeToggle } from "@/components/ThemeToggle";
import { TokenMonitor } from "@/components/TokenMonitor";

const currencies = {
  USD: { symbol: "$", rate: 1 },
  EUR: { symbol: "€", rate: 0.92 },
  GBP: { symbol: "£", rate: 0.79 },
  INR: { symbol: "₹", rate: 83.12 },
  JPY: { symbol: "¥", rate: 149.50 }
};

const Dashboard = () => {
  const navigate = useNavigate();
  const [wasteCurrency, setWasteCurrency] = useState<keyof typeof currencies>("INR");
  
  const stats = {
    energyGenerated: 145.8,
    energyConsumed: 98.2,
    energySaved: 47.6,
    wasteDisposed: 24.5,
    recyclingAmount: 38.7,
    ecoCredits: 340,
    greenTokens: 1250,
    carbonSaved: 78.4,
    sustainabilityScore: 87
  };

  const wasteMarketPricesBase = [
    { type: "Plastic", price: 0.50, unit: "kg", icon: "🔄", trend: "+5%" },
    { type: "Metal Scrap", price: 2.30, unit: "kg", icon: "⚙️", trend: "+12%" },
    { type: "Copper", price: 8.50, unit: "kg", icon: "🔶", trend: "+8%" },
    { type: "Glass", price: 0.15, unit: "kg", icon: "🧊", trend: "-2%" },
    { type: "Paper", price: 0.10, unit: "kg", icon: "📄", trend: "+3%" },
    { type: "Cardboard", price: 0.20, unit: "kg", icon: "📦", trend: "+7%" },
    { type: "Wood", price: 0.40, unit: "kg", icon: "🪵", trend: "+4%" },
  ];

  const formatWastePrice = (price: number) => {
    const converted = price * currencies[wasteCurrency].rate;
    return `${currencies[wasteCurrency].symbol}${converted.toFixed(2)}`;
  };

  const handleLogout = () => {
    navigate("/");
  };

  return (
    <div className="min-h-screen bg-background p-4 md:p-6">
      {/* Header */}
      <header className="mb-6">
        <div className="flex items-center justify-between mb-2 flex-wrap gap-4">
          <div>
            <h1 className="text-3xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Dashboard
            </h1>
            <p className="text-muted-foreground">Track your sustainability impact</p>
          </div>
          <div className="flex items-center gap-2">
            <Link to="/wallet">
              <Button variant="outline" size="sm" className="gap-2 hover:scale-105 transition-transform">
                <Wallet className="h-4 w-4" />
                Wallet
              </Button>
            </Link>
            <ThemeToggle />
            <Button variant="outline" size="sm" onClick={handleLogout} className="gap-2 hover:scale-105 transition-transform">
              <LogOut className="h-4 w-4" />
              Logout
            </Button>
          </div>
        </div>
      </header>

      {/* Token Monitor */}
      <div className="mb-6">
        <TokenMonitor />
      </div>

      {/* Energy Stats */}
      <div className="mb-6">
        <h2 className="text-lg font-semibold mb-3 flex items-center gap-2">
          <div className="p-2 rounded-lg bg-[hsl(var(--energy-yellow))]/20">
            <BatteryCharging className="h-5 w-5 text-[hsl(var(--energy-yellow))]" />
          </div>
          Your Energy
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Card className="bg-gradient-to-br from-card to-[hsl(var(--eco-light))] hover:shadow-lg transition-all hover:scale-[1.02] cursor-pointer border-l-4 border-l-[hsl(var(--energy-yellow))]">
            <CardHeader className="pb-3">
              <div className="flex items-center justify-between">
                <CardDescription>Generated</CardDescription>
                <div className="p-2 rounded-full bg-[hsl(var(--energy-yellow))]/20">
                  <Zap className="h-4 w-4 text-[hsl(var(--energy-yellow))]" />
                </div>
              </div>
              <CardTitle className="text-3xl">{stats.energyGenerated} kWh</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center text-sm text-[hsl(var(--eco-green))]">
                <TrendingUp className="h-4 w-4 mr-1" />
                +12% this month
              </div>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-all hover:scale-[1.02] cursor-pointer border-l-4 border-l-primary">
            <CardHeader className="pb-3">
              <div className="flex items-center justify-between">
                <CardDescription>Consumed</CardDescription>
                <div className="p-2 rounded-full bg-primary/20">
                  <Battery className="h-4 w-4 text-primary" />
                </div>
              </div>
              <CardTitle className="text-3xl">{stats.energyConsumed} kWh</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center text-sm text-muted-foreground">
                Within normal range
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-primary/10 to-accent/10 hover:shadow-lg transition-all hover:scale-[1.02] cursor-pointer border-l-4 border-l-accent">
            <CardHeader className="pb-3">
              <div className="flex items-center justify-between">
                <CardDescription>Surplus Listed</CardDescription>
                <div className="p-2 rounded-full bg-accent/20">
                  <Target className="h-4 w-4 text-accent" />
                </div>
              </div>
              <CardTitle className="text-3xl text-primary">{stats.energySaved} kWh/day</CardTitle>
            </CardHeader>
            <CardContent>
              <Link to="/energy">
                <Button variant="eco" size="sm" className="w-full hover:scale-105 transition-transform">
                  Energy Marketplace
                </Button>
              </Link>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Recycling Stats */}
      <div className="mb-6">
        <h2 className="text-lg font-semibold mb-3 flex items-center gap-2">
          <div className="p-2 rounded-lg bg-accent/20">
            <Recycle className="h-5 w-5 text-accent" />
          </div>
          Your Recycling
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
          <Card className="bg-gradient-to-br from-card to-[hsl(var(--eco-light))] hover:shadow-lg transition-all hover:scale-[1.02] cursor-pointer border-l-4 border-l-accent">
            <CardHeader className="pb-3">
              <div className="flex items-center justify-between">
                <CardDescription>Total Recycled</CardDescription>
                <div className="p-2 rounded-full bg-accent/20">
                  <Recycle className="h-4 w-4 text-accent" />
                </div>
              </div>
              <CardTitle className="text-3xl">{stats.recyclingAmount} kg</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center text-sm text-[hsl(var(--eco-green))]">
                <TrendingUp className="h-4 w-4 mr-1" />
                +18% this month
              </div>
            </CardContent>
          </Card>

          <Card className="col-span-1 md:col-span-2 hover:shadow-lg transition-all">
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle className="flex items-center gap-2 text-lg">
                    <DollarSign className="h-5 w-5 text-accent" />
                    Waste Market Prices
                  </CardTitle>
                  <CardDescription>Current selling rates</CardDescription>
                </div>
                <Select value={wasteCurrency} onValueChange={(val) => setWasteCurrency(val as keyof typeof currencies)}>
                  <SelectTrigger className="w-24">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {Object.keys(currencies).map(curr => (
                      <SelectItem key={curr} value={curr}>{curr}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                {wasteMarketPricesBase.map((item) => (
                  <div key={item.type} className="p-2 bg-muted rounded-lg text-center hover:shadow-md transition-all hover:scale-105 cursor-pointer">
                    <div className="text-2xl mb-1">{item.icon}</div>
                    <p className="text-xs font-medium mb-1">{item.type}</p>
                    <p className="text-sm font-bold text-primary">{formatWastePrice(item.price)}/{item.unit}</p>
                    <p className={`text-xs mt-1 ${item.trend.startsWith('+') ? 'text-[hsl(var(--eco-green))]' : 'text-destructive'}`}>
                      {item.trend}
                    </p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Waste & Tokens */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        {/* Waste Stats */}
        <div>
          <h2 className="text-lg font-semibold mb-3 flex items-center gap-2">
            <div className="p-2 rounded-lg bg-[hsl(var(--waste-orange))]/20">
              <Trash2 className="h-5 w-5 text-[hsl(var(--waste-orange))]" />
            </div>
            Your Waste
          </h2>
          <Card className="hover:shadow-lg transition-all hover:scale-[1.02]">
            <CardHeader>
              <CardTitle>Waste Disposed</CardTitle>
              <CardDescription>{stats.wasteDisposed} kg this month</CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex justify-between items-center p-3 bg-muted rounded-lg hover:bg-muted/80 transition-colors">
                <span className="text-sm font-medium">EcoCredits Earned</span>
                <span className="text-lg font-bold text-accent">{stats.ecoCredits}</span>
              </div>
              <Link to="/waste">
                <Button className="w-full hover:scale-105 transition-transform" variant="outline">
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
            <div className="p-2 rounded-lg bg-primary/20">
              <Coins className="h-5 w-5 text-primary" />
            </div>
            Token Wallet
          </h2>
          <Card className="hover:shadow-lg transition-all hover:scale-[1.02]">
            <CardHeader>
              <CardTitle>Your Balance</CardTitle>
              <CardDescription>Custodially managed tokens</CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex justify-between items-center p-3 bg-gradient-to-r from-primary/10 to-accent/10 rounded-lg hover:from-primary/20 hover:to-accent/20 transition-colors">
                <span className="text-sm font-medium">GreenTokens</span>
                <span className="text-xl font-bold text-primary">{stats.greenTokens}</span>
              </div>
              <div className="flex justify-between items-center p-3 bg-muted rounded-lg hover:bg-muted/80 transition-colors">
                <span className="text-sm font-medium">EcoCredits</span>
                <span className="text-xl font-bold text-accent">{stats.ecoCredits}</span>
              </div>
              <Link to="/wallet">
                <Button className="w-full hover:scale-105 transition-transform" variant="eco">
                  <Coins className="mr-2 h-4 w-4" />
                  Manage Tokens
                </Button>
              </Link>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Carbon Impact */}
      <Card className="mb-6 bg-gradient-to-r from-[hsl(var(--eco-green))]/90 to-primary/90 text-primary-foreground hover:shadow-xl transition-all hover:scale-[1.01] border-2 border-[hsl(var(--eco-green))]">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <div className="p-2 rounded-lg bg-white/20">
              <Leaf className="h-6 w-6" />
            </div>
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
          <Button variant="outline" className="w-full h-24 flex-col gap-2 hover:scale-105 transition-transform hover:border-[hsl(var(--energy-yellow))] hover:bg-[hsl(var(--energy-yellow))]/5 group">
            <div className="p-2 rounded-full bg-[hsl(var(--energy-yellow))]/20 group-hover:bg-[hsl(var(--energy-yellow))]/30 transition-colors">
              <BatteryCharging className="h-6 w-6 text-[hsl(var(--energy-yellow))]" />
            </div>
            <span className="font-semibold">Energy</span>
          </Button>
        </Link>
        <Link to="/waste">
          <Button variant="outline" className="w-full h-24 flex-col gap-2 hover:scale-105 transition-transform hover:border-[hsl(var(--waste-orange))] hover:bg-[hsl(var(--waste-orange))]/5 group">
            <div className="p-2 rounded-full bg-[hsl(var(--waste-orange))]/20 group-hover:bg-[hsl(var(--waste-orange))]/30 transition-colors">
              <Trash2 className="h-6 w-6 text-[hsl(var(--waste-orange))]" />
            </div>
            <span className="font-semibold">Waste</span>
          </Button>
        </Link>
        <Link to="/marketplace">
          <Button variant="outline" className="w-full h-24 flex-col gap-2 hover:scale-105 transition-transform hover:border-primary hover:bg-primary/5 group">
            <div className="p-2 rounded-full bg-primary/20 group-hover:bg-primary/30 transition-colors">
              <Coins className="h-6 w-6 text-primary" />
            </div>
            <span className="font-semibold">Marketplace</span>
          </Button>
        </Link>
        <Link to="/community">
          <Button variant="outline" className="w-full h-24 flex-col gap-2 hover:scale-105 transition-transform hover:border-accent hover:bg-accent/5 group">
            <div className="p-2 rounded-full bg-accent/20 group-hover:bg-accent/30 transition-colors">
              <Award className="h-6 w-6 text-accent" />
            </div>
            <span className="font-semibold">Community</span>
          </Button>
        </Link>
      </div>

      {/* View History */}
      <div className="mt-6">
        <Button variant="ghost" className="w-full hover:scale-105 transition-transform">
          <History className="mr-2 h-4 w-4" />
          View Full History
        </Button>
      </div>
    </div>
  );
};

export default Dashboard;

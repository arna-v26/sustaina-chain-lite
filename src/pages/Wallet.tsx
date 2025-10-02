import { Link } from "react-router-dom";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Coins, ArrowUpRight, ArrowDownLeft, RefreshCw, PieChart } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Wallet = () => {
  const walletData = {
    greenTokens: 1250,
    ecoCredits: 340,
    transactions: [
      { date: "Today", type: "earned", description: "Energy tokenization", amount: 4, token: "GreenTokens" },
      { date: "Today", description: "Waste disposal", amount: 50, token: "EcoCredits" },
      { date: "Yesterday", type: "spent", description: "Marketplace purchase", amount: -100, token: "GreenTokens" },
      { date: "Yesterday", description: "Energy efficiency reward", amount: 30, token: "EcoCredits" },
      { date: "2 days ago", description: "Energy tokenization", amount: 5, token: "GreenTokens" },
    ],
    breakdown: {
      greenTokens: {
        energy: 70,
        rewards: 20,
        community: 10
      },
      ecoCredits: {
        waste: 80,
        efficiency: 15,
        challenges: 5
      }
    }
  };

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
          Token Wallet
        </h1>
        <p className="text-muted-foreground">Your custodially managed sustainability tokens</p>
      </header>

      {/* Balance Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        <Card className="bg-gradient-to-br from-primary to-accent text-primary-foreground">
          <CardHeader className="pb-3">
            <CardTitle className="text-lg opacity-90">GreenTokens</CardTitle>
            <CardDescription className="text-primary-foreground/70">
              Earned from energy surplus
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="text-4xl font-bold mb-4">{walletData.greenTokens}</div>
            <div className="flex gap-2">
              <Button variant="secondary" size="sm" className="flex-1">
                <ArrowUpRight className="mr-1 h-4 w-4" />
                Send
              </Button>
              <Button variant="secondary" size="sm" className="flex-1">
                <ArrowDownLeft className="mr-1 h-4 w-4" />
                Receive
              </Button>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-accent/20 to-primary/20">
          <CardHeader className="pb-3">
            <CardTitle className="text-lg">EcoCredits</CardTitle>
            <CardDescription>Earned from waste disposal</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="text-4xl font-bold mb-4 text-accent">{walletData.ecoCredits}</div>
            <div className="flex gap-2">
              <Button variant="outline" size="sm" className="flex-1">
                <RefreshCw className="mr-1 h-4 w-4" />
                Trade
              </Button>
              <Link to="/marketplace" className="flex-1">
                <Button variant="outline" size="sm" className="w-full">
                  <Coins className="mr-1 h-4 w-4" />
                  Redeem
                </Button>
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Tabs for Transactions and Breakdown */}
      <Tabs defaultValue="transactions" className="mb-6">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="transactions">Transactions</TabsTrigger>
          <TabsTrigger value="breakdown">Source Breakdown</TabsTrigger>
        </TabsList>

        <TabsContent value="transactions" className="mt-4">
          <Card>
            <CardHeader>
              <CardTitle>Recent Transactions</CardTitle>
              <CardDescription>Your token activity history</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {walletData.transactions.map((tx, index) => (
                  <div key={index} className="flex items-start justify-between p-3 bg-muted rounded-lg">
                    <div className="flex-1">
                      <p className="font-medium">{tx.description}</p>
                      <p className="text-xs text-muted-foreground">{tx.date}</p>
                    </div>
                    <div className="text-right">
                      <p className={`font-bold ${tx.amount > 0 ? 'text-[hsl(var(--eco-green))]' : 'text-destructive'}`}>
                        {tx.amount > 0 ? '+' : ''}{tx.amount}
                      </p>
                      <p className="text-xs text-muted-foreground">{tx.token}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="breakdown" className="mt-4">
          <div className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <PieChart className="h-5 w-5 text-primary" />
                  GreenTokens Sources
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm">Energy Surplus</span>
                    <span className="text-sm font-bold">{walletData.breakdown.greenTokens.energy}%</span>
                  </div>
                  <div className="h-2 bg-muted rounded-full overflow-hidden">
                    <div className="h-full bg-primary" style={{ width: `${walletData.breakdown.greenTokens.energy}%` }} />
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm">Efficiency Rewards</span>
                    <span className="text-sm font-bold">{walletData.breakdown.greenTokens.rewards}%</span>
                  </div>
                  <div className="h-2 bg-muted rounded-full overflow-hidden">
                    <div className="h-full bg-accent" style={{ width: `${walletData.breakdown.greenTokens.rewards}%` }} />
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm">Community Rewards</span>
                    <span className="text-sm font-bold">{walletData.breakdown.greenTokens.community}%</span>
                  </div>
                  <div className="h-2 bg-muted rounded-full overflow-hidden">
                    <div className="h-full bg-[hsl(var(--eco-green))]" style={{ width: `${walletData.breakdown.greenTokens.community}%` }} />
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <PieChart className="h-5 w-5 text-accent" />
                  EcoCredits Sources
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm">Waste Disposal</span>
                    <span className="text-sm font-bold">{walletData.breakdown.ecoCredits.waste}%</span>
                  </div>
                  <div className="h-2 bg-muted rounded-full overflow-hidden">
                    <div className="h-full bg-accent" style={{ width: `${walletData.breakdown.ecoCredits.waste}%` }} />
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm">Energy Efficiency</span>
                    <span className="text-sm font-bold">{walletData.breakdown.ecoCredits.efficiency}%</span>
                  </div>
                  <div className="h-2 bg-muted rounded-full overflow-hidden">
                    <div className="h-full bg-primary" style={{ width: `${walletData.breakdown.ecoCredits.efficiency}%` }} />
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm">Community Challenges</span>
                    <span className="text-sm font-bold">{walletData.breakdown.ecoCredits.challenges}%</span>
                  </div>
                  <div className="h-2 bg-muted rounded-full overflow-hidden">
                    <div className="h-full bg-[hsl(var(--eco-green))]" style={{ width: `${walletData.breakdown.ecoCredits.challenges}%` }} />
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>

      {/* Info Card */}
      <Card className="bg-primary/5">
        <CardContent className="pt-6">
          <p className="text-sm text-muted-foreground">
            ℹ️ Your tokens are managed custodially by SustainaChain. They can only be used within the platform network for trading, redeeming rewards, or donating to community causes.
          </p>
        </CardContent>
      </Card>
    </div>
  );
};

export default Wallet;

import { useState } from "react";
import { Link } from "react-router-dom";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Zap, TrendingUp, Battery } from "lucide-react";
import { Progress } from "@/components/ui/progress";

const Energy = () => {
  const [tokenizing, setTokenizing] = useState(false);

  const energyData = {
    currentGeneration: 12.4,
    surplusEnergy: 47.6,
    tokenizableAmount: 47.6,
    tokenRate: 10, // 1 token per 10 kWh
    estimatedTokens: Math.floor(47.6 / 10),
    history: [
      { date: "Today", generated: 12.4, consumed: 8.2 },
      { date: "Yesterday", generated: 15.2, consumed: 10.1 },
      { date: "2 days ago", generated: 11.8, consumed: 9.4 },
      { date: "3 days ago", generated: 14.5, consumed: 11.2 },
    ]
  };

  const handleTokenize = () => {
    setTokenizing(true);
    setTimeout(() => {
      setTokenizing(false);
      alert(`Successfully tokenized ${energyData.tokenizableAmount} kWh into ${energyData.estimatedTokens} GreenTokens!`);
    }, 2000);
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
        <h1 className="text-3xl font-bold bg-gradient-to-r from-[hsl(var(--energy-yellow))] to-primary bg-clip-text text-transparent mb-2">
          Energy Tokenization
        </h1>
        <p className="text-muted-foreground">Convert your surplus energy into GreenTokens</p>
      </header>

      {/* Current Generation */}
      <Card className="mb-6 bg-gradient-to-br from-[hsl(var(--energy-yellow))]/20 to-primary/10">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Zap className="h-6 w-6 text-[hsl(var(--energy-yellow))]" />
            Current Generation
          </CardTitle>
          <CardDescription>Real-time energy production</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="text-5xl font-bold text-[hsl(var(--energy-yellow))] mb-2">
            {energyData.currentGeneration} kWh
          </div>
          <p className="text-sm text-muted-foreground flex items-center gap-1">
            <TrendingUp className="h-4 w-4 text-[hsl(var(--eco-green))]" />
            Above average for this time of day
          </p>
        </CardContent>
      </Card>

      {/* Tokenization Panel */}
      <Card className="mb-6">
        <CardHeader>
          <CardTitle>Surplus Energy Available</CardTitle>
          <CardDescription>Energy ready to be tokenized</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div>
            <div className="flex justify-between mb-2">
              <span className="text-sm font-medium">Surplus Energy</span>
              <span className="text-sm font-bold text-primary">{energyData.surplusEnergy} kWh</span>
            </div>
            <Progress value={75} className="h-3" />
            <p className="text-xs text-muted-foreground mt-1">75% of storage capacity</p>
          </div>

          <div className="p-4 bg-gradient-to-r from-primary/10 to-accent/10 rounded-lg space-y-3">
            <div className="flex justify-between items-center">
              <span className="text-sm text-muted-foreground">Tokenizable Amount</span>
              <span className="text-xl font-bold">{energyData.tokenizableAmount} kWh</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm text-muted-foreground">Conversion Rate</span>
              <span className="text-sm font-medium">1 token = {energyData.tokenRate} kWh</span>
            </div>
            <div className="h-px bg-border" />
            <div className="flex justify-between items-center">
              <span className="font-semibold">You'll receive</span>
              <span className="text-2xl font-bold text-primary">{energyData.estimatedTokens} GreenTokens</span>
            </div>
          </div>

          <Button 
            variant="energy" 
            size="lg" 
            className="w-full"
            onClick={handleTokenize}
            disabled={tokenizing}
          >
            {tokenizing ? (
              <>
                <Battery className="mr-2 h-5 w-5 animate-pulse" />
                Tokenizing...
              </>
            ) : (
              <>
                <Zap className="mr-2 h-5 w-5" />
                Tokenize Now
              </>
            )}
          </Button>
        </CardContent>
      </Card>

      {/* Energy History */}
      <Card>
        <CardHeader>
          <CardTitle>Energy History</CardTitle>
          <CardDescription>Your recent energy production and consumption</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {energyData.history.map((entry, index) => (
              <div key={index} className="flex items-center justify-between p-3 bg-muted rounded-lg">
                <div>
                  <p className="font-medium">{entry.date}</p>
                  <p className="text-sm text-muted-foreground">
                    Surplus: {(entry.generated - entry.consumed).toFixed(1)} kWh
                  </p>
                </div>
                <div className="text-right">
                  <p className="text-sm text-[hsl(var(--eco-green))]">
                    +{entry.generated} kWh
                  </p>
                  <p className="text-sm text-muted-foreground">
                    -{entry.consumed} kWh
                  </p>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Energy;

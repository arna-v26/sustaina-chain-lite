import { useState } from "react";
import { Link } from "react-router-dom";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowLeft, Zap, TrendingUp, Users, Plus } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const Energy = () => {
  const [listingAmount, setListingAmount] = useState("");
  const [askingPrice, setAskingPrice] = useState("");

  const energyData = {
    currentGeneration: 12.4,
    surplusEnergy: 47.6,
    myListing: { amount: 45.0, price: 120, bids: 3 },
    history: [
      { date: "Today", generated: 12.4, consumed: 8.2 },
      { date: "Yesterday", generated: 15.2, consumed: 10.1 },
      { date: "2 days ago", generated: 11.8, consumed: 9.4 },
      { date: "3 days ago", generated: 14.5, consumed: 11.2 },
    ]
  };

  const marketplaceListings = [
    { seller: "User #A3F2", amount: 50, askingPrice: 125, bids: 5, status: "active" },
    { seller: "User #B8K1", amount: 35, askingPrice: 90, bids: 2, status: "active" },
    { seller: "User #C5M9", amount: 60, askingPrice: 150, bids: 8, status: "active" },
    { seller: "User #D2P4", amount: 42, askingPrice: 110, bids: 1, status: "active" }
  ];

  const handleListEnergy = () => {
    if (!listingAmount || !askingPrice) {
      alert("Please fill in all fields");
      return;
    }
    alert(`Successfully listed ${listingAmount} kWh/day for ${askingPrice} tokens!`);
    setListingAmount("");
    setAskingPrice("");
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
          Energy Marketplace
        </h1>
        <p className="text-muted-foreground">List your surplus energy or bid on listings</p>
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

      {/* My Active Listing */}
      {energyData.myListing && (
        <Card className="mb-6 border-primary/50">
          <CardHeader>
            <CardTitle className="flex items-center justify-between">
              My Active Listing
              <Badge variant="outline" className="text-[hsl(var(--eco-green))]">Active</Badge>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-3 gap-4">
              <div>
                <p className="text-sm text-muted-foreground mb-1">Amount</p>
                <p className="text-xl font-bold">{energyData.myListing.amount} kWh/day</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground mb-1">Asking Price</p>
                <p className="text-xl font-bold text-primary">{energyData.myListing.price} GRN</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground mb-1">Active Bids</p>
                <p className="text-xl font-bold flex items-center gap-1">
                  <Users className="h-5 w-5" />
                  {energyData.myListing.bids}
                </p>
              </div>
            </div>
            <Button variant="outline" size="sm" className="mt-4">
              View Bids
            </Button>
          </CardContent>
        </Card>
      )}

      {/* List New Energy */}
      <Card className="mb-6">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Plus className="h-5 w-5" />
            List Surplus Energy
          </CardTitle>
          <CardDescription>Available surplus: {energyData.surplusEnergy} kWh/day</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <label className="text-sm font-medium mb-2 block">Amount (kWh/day)</label>
            <Input 
              type="number" 
              placeholder="e.g., 45" 
              value={listingAmount}
              onChange={(e) => setListingAmount(e.target.value)}
            />
          </div>
          <div>
            <label className="text-sm font-medium mb-2 block">Asking Price (GreenTokens)</label>
            <Input 
              type="number" 
              placeholder="e.g., 120" 
              value={askingPrice}
              onChange={(e) => setAskingPrice(e.target.value)}
            />
          </div>
          <Button 
            variant="energy" 
            className="w-full"
            onClick={handleListEnergy}
          >
            <Zap className="mr-2 h-5 w-5" />
            List Energy
          </Button>
        </CardContent>
      </Card>

      {/* Marketplace Listings */}
      <Card>
        <CardHeader>
          <CardTitle>Marketplace Listings</CardTitle>
          <CardDescription>Browse available energy listings</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {marketplaceListings.map((listing, index) => (
              <div key={index} className="flex items-center justify-between p-4 bg-muted rounded-lg hover:bg-muted/80 transition-colors">
                <div className="flex-1">
                  <p className="font-medium mb-1">{listing.seller}</p>
                  <p className="text-sm text-muted-foreground">
                    {listing.amount} kWh/day • {listing.bids} bids
                  </p>
                </div>
                <div className="flex items-center gap-3">
                  <div className="text-right">
                    <p className="text-sm text-muted-foreground">Price</p>
                    <p className="text-lg font-bold text-primary">{listing.askingPrice} GRN</p>
                  </div>
                  <Button variant="eco" size="sm">
                    Place Bid
                  </Button>
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

import { useState } from "react";
import { Link } from "react-router-dom";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { ArrowLeft, Trash2, QrCode, Camera, Award } from "lucide-react";

const Waste = () => {
  const [wasteType, setWasteType] = useState("");
  const [quantity, setQuantity] = useState("");
  const [logging, setLogging] = useState(false);

  const wasteHistory = [
    { date: "Today", type: "Plastic", quantity: 2.5, credits: 50 },
    { date: "Yesterday", type: "Paper", quantity: 1.8, credits: 36 },
    { date: "2 days ago", type: "Metal", quantity: 0.5, credits: 25 },
  ];

  const handleLogWaste = () => {
    setLogging(true);
    setTimeout(() => {
      setLogging(false);
      const earnedCredits = Math.floor(parseFloat(quantity) * 20);
      alert(`Successfully logged ${quantity} kg of ${wasteType}! You earned ${earnedCredits} EcoCredits!`);
      setWasteType("");
      setQuantity("");
    }, 1500);
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
        <h1 className="text-3xl font-bold bg-gradient-to-r from-[hsl(var(--waste-orange))] to-accent bg-clip-text text-transparent mb-2">
          Waste Disposal Tracker
        </h1>
        <p className="text-muted-foreground">Log your waste disposal and earn EcoCredits</p>
      </header>

      {/* QR Scanner Section */}
      <Card className="mb-6 bg-gradient-to-br from-[hsl(var(--waste-orange))]/10 to-accent/10">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <QrCode className="h-6 w-6 text-[hsl(var(--waste-orange))]" />
            Scan Certified Recycler
          </CardTitle>
          <CardDescription>Scan QR code at certified recycling centers</CardDescription>
        </CardHeader>
        <CardContent>
          <Button variant="outline" size="lg" className="w-full">
            <QrCode className="mr-2 h-5 w-5" />
            Open QR Scanner
          </Button>
        </CardContent>
      </Card>

      {/* Manual Log Section */}
      <Card className="mb-6">
        <CardHeader>
          <CardTitle>Manual Log</CardTitle>
          <CardDescription>Enter waste disposal details manually</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="waste-type">Waste Type</Label>
            <Select value={wasteType} onValueChange={setWasteType}>
              <SelectTrigger id="waste-type">
                <SelectValue placeholder="Select waste type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="plastic">Plastic</SelectItem>
                <SelectItem value="paper">Paper</SelectItem>
                <SelectItem value="metal">Metal</SelectItem>
                <SelectItem value="glass">Glass</SelectItem>
                <SelectItem value="organic">Organic</SelectItem>
                <SelectItem value="electronic">Electronic</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="quantity">Quantity (kg)</Label>
            <Input
              id="quantity"
              type="number"
              placeholder="0.0"
              value={quantity}
              onChange={(e) => setQuantity(e.target.value)}
            />
          </div>

          <div className="space-y-2">
            <Label>Photo Evidence (Optional)</Label>
            <Button variant="outline" className="w-full">
              <Camera className="mr-2 h-4 w-4" />
              Take Photo
            </Button>
          </div>

          <div className="p-4 bg-muted rounded-lg">
            <div className="flex justify-between items-center">
              <span className="text-sm font-medium">Estimated EcoCredits</span>
              <span className="text-xl font-bold text-accent">
                {quantity ? Math.floor(parseFloat(quantity) * 20) : 0}
              </span>
            </div>
          </div>

          <Button
            variant="eco"
            size="lg"
            className="w-full"
            onClick={handleLogWaste}
            disabled={!wasteType || !quantity || logging}
          >
            {logging ? (
              <>
                <Trash2 className="mr-2 h-5 w-5 animate-pulse" />
                Logging...
              </>
            ) : (
              <>
                <Trash2 className="mr-2 h-5 w-5" />
                Log Waste Disposal
              </>
            )}
          </Button>
        </CardContent>
      </Card>

      {/* Waste Reduction History */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Award className="h-5 w-5 text-accent" />
            Waste Reduction History
          </CardTitle>
          <CardDescription>Your recent waste disposal activities</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {wasteHistory.map((entry, index) => (
              <div key={index} className="flex items-center justify-between p-3 bg-muted rounded-lg">
                <div>
                  <p className="font-medium">{entry.date}</p>
                  <p className="text-sm text-muted-foreground">
                    {entry.type} • {entry.quantity} kg
                  </p>
                </div>
                <div className="text-right">
                  <p className="text-sm font-bold text-accent">+{entry.credits}</p>
                  <p className="text-xs text-muted-foreground">EcoCredits</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-4 p-4 bg-gradient-to-r from-accent/10 to-primary/10 rounded-lg">
            <div className="flex justify-between items-center">
              <span className="text-sm font-medium">Total EcoCredits Earned</span>
              <span className="text-2xl font-bold text-accent">340</span>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Waste;

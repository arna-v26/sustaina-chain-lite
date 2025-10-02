import { useState, useEffect } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { TrendingUp, TrendingDown } from "lucide-react";

const currencies = {
  USD: { symbol: "$", rate: 1 },
  EUR: { symbol: "€", rate: 0.92 },
  GBP: { symbol: "£", rate: 0.79 },
  INR: { symbol: "₹", rate: 83.12 },
  JPY: { symbol: "¥", rate: 149.50 }
};

export const TokenMonitor = () => {
  const [currency, setCurrency] = useState<keyof typeof currencies>("USD");
  const [greenTokenPrice, setGreenTokenPrice] = useState(2.45);
  const [ecoCreditsPrice, setEcoCreditsPrice] = useState(0.85);
  const [priceChange, setPriceChange] = useState({ green: 0, eco: 0 });

  useEffect(() => {
    const interval = setInterval(() => {
      // Simulate blockchain price fluctuations
      const greenChange = (Math.random() - 0.5) * 0.1;
      const ecoChange = (Math.random() - 0.5) * 0.05;
      
      setGreenTokenPrice(prev => Math.max(0.1, prev + greenChange));
      setEcoCreditsPrice(prev => Math.max(0.1, prev + ecoChange));
      setPriceChange({ green: greenChange, eco: ecoChange });
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const formatPrice = (price: number) => {
    const converted = price * currencies[currency].rate;
    return `${currencies[currency].symbol}${converted.toFixed(2)}`;
  };

  return (
    <Card className="bg-gradient-to-br from-primary/5 to-accent/5">
      <CardHeader>
        <div className="flex items-center justify-between">
          <div>
            <CardTitle className="flex items-center gap-2">
              Token Monitor
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-primary"></span>
              </span>
            </CardTitle>
            <CardDescription>Real-time blockchain values</CardDescription>
          </div>
          <Select value={currency} onValueChange={(val) => setCurrency(val as keyof typeof currencies)}>
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
      <CardContent className="space-y-4">
        <div className="p-4 bg-background rounded-lg">
          <div className="flex justify-between items-center mb-1">
            <span className="text-sm font-medium">GreenToken (GRN)</span>
            {priceChange.green !== 0 && (
              <span className={`flex items-center text-xs ${priceChange.green > 0 ? 'text-[hsl(var(--eco-green))]' : 'text-destructive'}`}>
                {priceChange.green > 0 ? <TrendingUp className="h-3 w-3 mr-1" /> : <TrendingDown className="h-3 w-3 mr-1" />}
                {Math.abs(priceChange.green * 100 / greenTokenPrice).toFixed(2)}%
              </span>
            )}
          </div>
          <p className="text-2xl font-bold text-primary">{formatPrice(greenTokenPrice)}</p>
        </div>
        
        <div className="p-4 bg-background rounded-lg">
          <div className="flex justify-between items-center mb-1">
            <span className="text-sm font-medium">EcoCredit (ECO)</span>
            {priceChange.eco !== 0 && (
              <span className={`flex items-center text-xs ${priceChange.eco > 0 ? 'text-[hsl(var(--eco-green))]' : 'text-destructive'}`}>
                {priceChange.eco > 0 ? <TrendingUp className="h-3 w-3 mr-1" /> : <TrendingDown className="h-3 w-3 mr-1" />}
                {Math.abs(priceChange.eco * 100 / ecoCreditsPrice).toFixed(2)}%
              </span>
            )}
          </div>
          <p className="text-2xl font-bold text-accent">{formatPrice(ecoCreditsPrice)}</p>
        </div>
      </CardContent>
    </Card>
  );
};

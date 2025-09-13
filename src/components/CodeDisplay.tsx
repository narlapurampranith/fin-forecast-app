import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Copy, RefreshCw, QrCode, Hash } from "lucide-react";
import { useState } from "react";
import { toast } from "@/hooks/use-toast";
import {
  generateTransactionCode,
  generateCategoryCode,
  generateGoalCode,
  generateAlertCode,
  generateSessionCode,
  generateAccountReference
} from "@/utils/codeGenerator";

const CodeDisplay = () => {
  const [codes, setCodes] = useState({
    transaction: generateTransactionCode(),
    category: generateCategoryCode("Food & Drinks"),
    goal: generateGoalCode("Emergency Fund"),
    alert: generateAlertCode(),
    session: generateSessionCode(),
    account: generateAccountReference()
  });

  const copyToClipboard = (code: string, type: string) => {
    navigator.clipboard.writeText(code);
    toast({
      title: "Code Copied!",
      description: `${type} code copied to clipboard`,
    });
  };

  const regenerateCode = (type: keyof typeof codes) => {
    const generators = {
      transaction: generateTransactionCode,
      category: () => generateCategoryCode("Food & Drinks"),
      goal: () => generateGoalCode("Emergency Fund"),
      alert: generateAlertCode,
      session: generateSessionCode,
      account: generateAccountReference
    };

    setCodes(prev => ({
      ...prev,
      [type]: generators[type]()
    }));

    toast({
      title: "Code Regenerated",
      description: `New ${type} code generated successfully`,
    });
  };

  const codeItems = [
    {
      key: 'transaction' as keyof typeof codes,
      title: 'Transaction Reference',
      description: 'Unique identifier for financial transactions',
      icon: Hash,
      color: 'bg-primary'
    },
    {
      key: 'category' as keyof typeof codes,
      title: 'Category Code',
      description: 'Automated expense categorization identifier',
      icon: QrCode,
      color: 'bg-accent'
    },
    {
      key: 'goal' as keyof typeof codes,
      title: 'Goal Tracking Code',
      description: 'Financial goal monitoring reference',
      icon: Hash,
      color: 'bg-success'
    },
    {
      key: 'alert' as keyof typeof codes,
      title: 'Budget Alert ID',
      description: 'Smart notification tracking code',
      icon: Hash,
      color: 'bg-warning'
    },
    {
      key: 'session' as keyof typeof codes,
      title: 'Analysis Session',
      description: 'Predictive analytics session identifier',
      icon: QrCode,
      color: 'bg-destructive'
    },
    {
      key: 'account' as keyof typeof codes,
      title: 'Account Reference',
      description: 'Unique student account identifier',
      icon: Hash,
      color: 'bg-primary'
    }
  ];

  return (
    <Card className="bg-gradient-card shadow-medium border-0">
      <CardHeader>
        <CardTitle className="flex items-center">
          <QrCode className="h-5 w-5 mr-2 text-primary" />
          Unique Reference Codes
        </CardTitle>
        <p className="text-sm text-muted-foreground">
          AI-generated unique identifiers for financial tracking and categorization
        </p>
      </CardHeader>
      <CardContent className="space-y-4">
        {codeItems.map((item) => {
          const IconComponent = item.icon;
          return (
            <div key={item.key} className="flex items-center justify-between p-4 rounded-lg bg-muted/30 hover:bg-muted/50 transition-colors">
              <div className="flex items-center space-x-3">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center ${item.color}/20`}>
                  <IconComponent className={`h-4 w-4 text-${item.color.split('-')[1]}`} />
                </div>
                <div className="flex-1">
                  <div className="flex items-center space-x-2 mb-1">
                    <span className="font-medium">{item.title}</span>
                    <Badge variant="outline" className="text-xs">
                      AI Generated
                    </Badge>
                  </div>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                  <div className="mt-2">
                    <code className="text-xs bg-background px-2 py-1 rounded font-mono">
                      {codes[item.key]}
                    </code>
                  </div>
                </div>
              </div>
              <div className="flex space-x-2">
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => copyToClipboard(codes[item.key], item.title)}
                  className="h-8 w-8 p-0"
                >
                  <Copy className="h-3 w-3" />
                </Button>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => regenerateCode(item.key)}
                  className="h-8 w-8 p-0"
                >
                  <RefreshCw className="h-3 w-3" />
                </Button>
              </div>
            </div>
          );
        })}
        
        <div className="mt-6 p-4 bg-primary/10 rounded-lg border border-primary/20">
          <h4 className="font-medium text-primary mb-2">Code Usage Benefits</h4>
          <ul className="text-sm text-primary/80 space-y-1">
            <li>• Automated expense categorization using AI pattern recognition</li>
            <li>• Unique transaction tracking for better financial analytics</li>
            <li>• Goal-based saving with personalized reference codes</li>
            <li>• Smart budget alerts with trackable notification IDs</li>
            <li>• Predictive spending analysis with session tracking</li>
          </ul>
        </div>
      </CardContent>
    </Card>
  );
};

export default CodeDisplay;
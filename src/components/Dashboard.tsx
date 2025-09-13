import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { TrendingUp, TrendingDown, Target, CreditCard, PiggyBank, AlertTriangle, Plus } from "lucide-react";
import { useState } from "react";

const Dashboard = () => {
  const [totalBalance] = useState(2847.50);
  const [monthlyBudget] = useState(1500);
  const [spent] = useState(892.30);
  const [savingsGoal] = useState(5000);
  const [currentSavings] = useState(2847.50);

  const spentPercentage = (spent / monthlyBudget) * 100;
  const savingsPercentage = (currentSavings / savingsGoal) * 100;

  const recentTransactions = [
    { id: 1, description: "Starbucks Coffee", amount: -4.85, category: "Food & Drinks", date: "Today", type: "expense" },
    { id: 2, description: "Part-time Job", amount: +320.00, category: "Income", date: "Yesterday", type: "income" },
    { id: 3, description: "Grocery Store", amount: -67.42, category: "Food & Drinks", date: "2 days ago", type: "expense" },
    { id: 4, description: "Netflix Subscription", amount: -15.99, category: "Entertainment", date: "3 days ago", type: "expense" },
  ];

  const budgetCategories = [
    { name: "Food & Drinks", spent: 340, budget: 500, color: "bg-primary" },
    { name: "Entertainment", spent: 120, budget: 200, color: "bg-accent" },
    { name: "Transportation", spent: 85, budget: 150, color: "bg-warning" },
    { name: "Shopping", spent: 247, budget: 300, color: "bg-destructive" },
  ];

  return (
    <div className="min-h-screen bg-background p-6 space-y-6">
      {/* Header */}
      <div className="flex justify-between items-start">
        <div>
          <h1 className="text-3xl font-bold bg-gradient-primary bg-clip-text text-transparent">
            Financial Dashboard
          </h1>
          <p className="text-muted-foreground mt-1">Track your spending, save smart, achieve your goals</p>
        </div>
        <Button className="bg-gradient-primary hover:opacity-90">
          <Plus className="h-4 w-4 mr-2" />
          Add Transaction
        </Button>
      </div>

      {/* Balance & Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="bg-gradient-card shadow-medium border-0">
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium text-muted-foreground">Total Balance</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-foreground">${totalBalance.toFixed(2)}</div>
            <div className="flex items-center mt-2 text-sm">
              <TrendingUp className="h-4 w-4 text-success mr-1" />
              <span className="text-success">+12.5%</span>
              <span className="text-muted-foreground ml-1">vs last month</span>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gradient-card shadow-medium border-0">
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium text-muted-foreground">Monthly Spending</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-foreground">${spent.toFixed(2)}</div>
            <div className="mt-3">
              <div className="flex justify-between text-sm mb-1">
                <span>Budget: ${monthlyBudget}</span>
                <span>{spentPercentage.toFixed(1)}%</span>
              </div>
              <Progress value={spentPercentage} className="h-2" />
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gradient-card shadow-medium border-0">
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium text-muted-foreground">Savings Goal</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-foreground">${currentSavings.toFixed(2)}</div>
            <div className="mt-3">
              <div className="flex justify-between text-sm mb-1">
                <span>Goal: ${savingsGoal}</span>
                <span>{savingsPercentage.toFixed(1)}%</span>
              </div>
              <Progress value={savingsPercentage} className="h-2" />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Budget Categories & Alerts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="bg-gradient-card shadow-medium border-0">
          <CardHeader>
            <CardTitle className="flex items-center">
              <CreditCard className="h-5 w-5 mr-2 text-primary" />
              Budget Categories
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {budgetCategories.map((category, index) => {
              const percentage = (category.spent / category.budget) * 100;
              const isOverBudget = percentage > 100;
              
              return (
                <div key={index} className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="font-medium">{category.name}</span>
                    <div className="flex items-center space-x-2">
                      <span className="text-sm text-muted-foreground">
                        ${category.spent} / ${category.budget}
                      </span>
                      {isOverBudget && <AlertTriangle className="h-4 w-4 text-warning" />}
                    </div>
                  </div>
                  <Progress 
                    value={Math.min(percentage, 100)} 
                    className="h-2" 
                  />
                </div>
              );
            })}
          </CardContent>
        </Card>

        <Card className="bg-gradient-card shadow-medium border-0">
          <CardHeader>
            <CardTitle className="flex items-center">
              <Target className="h-5 w-5 mr-2 text-accent" />
              Smart Insights
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="p-4 bg-success/10 rounded-lg border border-success/20">
              <div className="flex items-start space-x-3">
                <PiggyBank className="h-5 w-5 text-success mt-0.5" />
                <div>
                  <h4 className="font-medium text-success">Great Saving Streak!</h4>
                  <p className="text-sm text-success/80 mt-1">
                    You're on track to save $200 extra this month compared to last month.
                  </p>
                </div>
              </div>
            </div>

            <div className="p-4 bg-warning/10 rounded-lg border border-warning/20">
              <div className="flex items-start space-x-3">
                <AlertTriangle className="h-5 w-5 text-warning mt-0.5" />
                <div>
                  <h4 className="font-medium text-warning">Budget Alert</h4>
                  <p className="text-sm text-warning/80 mt-1">
                    You've spent 68% of your food budget with 12 days left this month.
                  </p>
                </div>
              </div>
            </div>

            <div className="p-4 bg-primary/10 rounded-lg border border-primary/20">
              <div className="flex items-start space-x-3">
                <TrendingUp className="h-5 w-5 text-primary mt-0.5" />
                <div>
                  <h4 className="font-medium text-primary">Spending Prediction</h4>
                  <p className="text-sm text-primary/80 mt-1">
                    Based on current trends, you'll likely spend $1,340 this month - under budget!
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Recent Transactions */}
      <Card className="bg-gradient-card shadow-medium border-0">
        <CardHeader>
          <CardTitle>Recent Transactions</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {recentTransactions.map((transaction) => (
              <div key={transaction.id} className="flex items-center justify-between p-3 rounded-lg hover:bg-muted/50 transition-colors">
                <div className="flex items-center space-x-3">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                    transaction.type === 'income' ? 'bg-success/20' : 'bg-primary/20'
                  }`}>
                    {transaction.type === 'income' ? 
                      <TrendingUp className="h-4 w-4 text-success" /> : 
                      <TrendingDown className="h-4 w-4 text-primary" />
                    }
                  </div>
                  <div>
                    <p className="font-medium">{transaction.description}</p>
                    <div className="flex items-center space-x-2 mt-1">
                      <Badge variant="secondary" className="text-xs">
                        {transaction.category}
                      </Badge>
                      <span className="text-xs text-muted-foreground">{transaction.date}</span>
                    </div>
                  </div>
                </div>
                <div className={`font-semibold ${
                  transaction.type === 'income' ? 'text-success' : 'text-foreground'
                }`}>
                  {transaction.amount > 0 ? '+' : ''}${Math.abs(transaction.amount).toFixed(2)}
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Dashboard;
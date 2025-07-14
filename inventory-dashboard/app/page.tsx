import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Package, 
  TrendingUp, 
  DollarSign, 
  Users, 
  Plus,
  Search,
  Filter,
  MoreHorizontal
} from "lucide-react";

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <Package className="h-8 w-8 text-blue-600" />
              <h1 className="text-2xl font-bold text-gray-900">Inventory Manager</h1>
            </div>
            <Badge variant="secondary" className="ml-4">Stud Management</Badge>
          </div>
          <div className="flex items-center space-x-4">
            <Button variant="outline" size="sm">
              <Search className="h-4 w-4 mr-2" />
              Search
            </Button>
            <Button>
              <Plus className="h-4 w-4 mr-2" />
              Add Stud
            </Button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="p-6">
        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Studs</CardTitle>
              <Package className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">24</div>
              <p className="text-xs text-muted-foreground">
                +2 from last month
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Sales</CardTitle>
              <TrendingUp className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">$12,450</div>
              <p className="text-xs text-muted-foreground">
                +15% from last month
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Active Customers</CardTitle>
              <Users className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">18</div>
              <p className="text-xs text-muted-foreground">
                +3 new this month
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Revenue</CardTitle>
              <DollarSign className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">$45,231</div>
              <p className="text-xs text-muted-foreground">
                +20.1% from last month
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Main Dashboard Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Recent Sales */}
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle>Recent Sales</CardTitle>
                    <CardDescription>
                      Latest transactions and orders
                    </CardDescription>
                  </div>
                  <Button variant="outline" size="sm">
                    <Filter className="h-4 w-4 mr-2" />
                    Filter
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {/* Sample Sales Data */}
                  {[
                    {
                      id: "SALE-001",
                      customer: "Finca Santa Maria",
                      ruc: "12345678-9",
                      stud: "TORO-001",
                      dosis: 50,
                      amount: 2500,
                      status: "Paid",
                      date: "2024-01-15"
                    },
                    {
                      id: "SALE-002", 
                      customer: "Estancia Los Pinos",
                      ruc: "98765432-1",
                      stud: "TORO-002",
                      dosis: 30,
                      amount: 1800,
                      status: "Pending",
                      date: "2024-01-14"
                    },
                    {
                      id: "SALE-003",
                      customer: "Hacienda El Paraiso",
                      ruc: "45678912-3",
                      stud: "TORO-003",
                      dosis: 75,
                      amount: 3750,
                      status: "Paid",
                      date: "2024-01-13"
                    }
                  ].map((sale) => (
                    <div key={sale.id} className="flex items-center justify-between p-4 border rounded-lg">
                      <div className="flex items-center space-x-4">
                        <div>
                          <p className="font-medium">{sale.customer}</p>
                          <p className="text-sm text-gray-500">RUC: {sale.ruc}</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="font-medium">{sale.stud}</p>
                        <p className="text-sm text-gray-500">{sale.dosis} dosis</p>
                      </div>
                      <div className="text-right">
                        <p className="font-medium">${sale.amount}</p>
                        <Badge variant={sale.status === "Paid" ? "default" : "secondary"}>
                          {sale.status}
                        </Badge>
                      </div>
                      <div className="text-right">
                        <p className="text-sm text-gray-500">{sale.date}</p>
                        <Button variant="ghost" size="sm">
                          <MoreHorizontal className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Inventory Overview */}
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Inventory Overview</CardTitle>
                <CardDescription>
                  Stock levels and availability
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[
                    { stud: "TORO-001", name: "Champion Bull", stock: 150, location: "Freezer A" },
                    { stud: "TORO-002", name: "Elite Stud", stock: 75, location: "Freezer B" },
                    { stud: "TORO-003", name: "Premium Bull", stock: 200, location: "Freezer A" },
                    { stud: "TORO-004", name: "Superior Stud", stock: 50, location: "Freezer C" }
                  ].map((item) => (
                    <div key={item.stud} className="flex items-center justify-between p-3 border rounded-lg">
                      <div>
                        <p className="font-medium">{item.stud}</p>
                        <p className="text-sm text-gray-500">{item.name}</p>
                      </div>
                      <div className="text-right">
                        <p className="font-medium">{item.stock} dosis</p>
                        <p className="text-sm text-gray-500">{item.location}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Quick Actions */}
            <Card>
              <CardHeader>
                <CardTitle>Quick Actions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button className="w-full justify-start" variant="outline">
                  <Plus className="h-4 w-4 mr-2" />
                  Add New Stud
                </Button>
                <Button className="w-full justify-start" variant="outline">
                  <Package className="h-4 w-4 mr-2" />
                  Record Sale
                </Button>
                <Button className="w-full justify-start" variant="outline">
                  <Users className="h-4 w-4 mr-2" />
                  Manage Customers
                </Button>
                <Button className="w-full justify-start" variant="outline">
                  <TrendingUp className="h-4 w-4 mr-2" />
                  View Reports
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}

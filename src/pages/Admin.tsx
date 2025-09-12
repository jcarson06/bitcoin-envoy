import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { Eye, EyeOff, Download, Filter, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Container } from "@/components/common/Container";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";
import { logger } from "@/utils/logger";
import ErrorBoundary from "@/components/common/ErrorBoundary";

interface Signup {
  id: string;
  name: string | null;
  email: string | null;
  status: string;
  created_at: string;
}

const Admin = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [signups, setSignups] = useState<Signup[]>([]);
  const [filteredSignups, setFilteredSignups] = useState<Signup[]>([]);
  const [statusFilter, setStatusFilter] = useState<string>("all");
  const [searchTerm, setSearchTerm] = useState("");

  // Simple password auth - in production use proper authentication
  const ADMIN_PASSWORD = "admin2024"; // This should be in environment variables

  useEffect(() => {
    if (isAuthenticated) {
      fetchSignups();
    }
  }, [isAuthenticated]);

  useEffect(() => {
    filterSignups();
  }, [signups, statusFilter, searchTerm]);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === ADMIN_PASSWORD) {
      setIsAuthenticated(true);
      toast.success("Welcome to admin panel");
    } else {
      toast.error("Invalid password");
    }
  };

  const fetchSignups = async () => {
    setLoading(true);
    try {
      const { data, error } = await supabase
        .from('signups')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) {
        logger.error('Error fetching signups:', error);
        toast.error("Failed to fetch signups");
        return;
      }

      setSignups(data || []);
    } catch (error) {
      logger.error('Error fetching signups:', error);
      toast.error("Failed to fetch signups");
    } finally {
      setLoading(false);
    }
  };

  const updateStatus = async (id: string, newStatus: string) => {
    try {
      const { error } = await supabase
        .from('signups')
        .update({ status: newStatus })
        .eq('id', id);

      if (error) {
        logger.error('Error updating signup status:', error);
        toast.error("Failed to update status");
        return;
      }

      toast.success("Status updated successfully");
      fetchSignups(); // Refresh the list
    } catch (error) {
      logger.error('Error updating signup status:', error);
      toast.error("Failed to update status");
    }
  };

  const filterSignups = () => {
    let filtered = signups;

    if (statusFilter !== "all") {
      filtered = filtered.filter(signup => signup.status === statusFilter);
    }

    if (searchTerm) {
      filtered = filtered.filter(signup => 
        signup.name?.toLowerCase().includes(searchTerm.toLowerCase()) ||
        signup.email?.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    setFilteredSignups(filtered);
  };

  const getStatusBadgeVariant = (status: string) => {
    switch (status) {
      case 'new': return 'default';
      case 'contacted': return 'secondary';
      case 'completed': return 'outline';
      case 'archived': return 'destructive';
      default: return 'default';
    }
  };

  const exportData = () => {
    const csv = [
      ['Name', 'Email', 'Status', 'Created At'],
      ...filteredSignups.map(signup => [
        signup.name || '',
        signup.email || '',
        signup.status,
        new Date(signup.created_at).toLocaleDateString()
      ])
    ].map(row => row.join(',')).join('\n');

    const blob = new Blob([csv], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `signups-${new Date().toISOString().split('T')[0]}.csv`;
    a.click();
    window.URL.revokeObjectURL(url);
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <Helmet>
          <title>Admin Login - Pulse Robot</title>
          <meta name="robots" content="noindex, nofollow" />
        </Helmet>
        
        <Card className="w-full max-w-md">
          <CardHeader>
            <CardTitle className="text-center">Admin Access</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleLogin} className="space-y-4">
              <div className="relative">
                <Input
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter admin password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="pr-10"
                  required
                />
                <Button
                  type="button"
                  variant="ghost"
                  size="sm"
                  className="absolute right-0 top-0 h-full px-3"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                </Button>
              </div>
              <Button type="submit" className="w-full">
                Login
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Admin Dashboard - Pulse Robot</title>
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>

      <ErrorBoundary>
        <Container>
        <div className="py-8">
          <div className="flex justify-between items-center mb-8">
            <div>
              <h1 className="text-3xl font-display font-bold">Admin Dashboard</h1>
              <p className="text-muted-foreground">Manage consultation signups</p>
            </div>
            <div className="flex gap-2">
              <Button onClick={exportData} variant="outline" size="sm">
                <Download className="h-4 w-4 mr-2" />
                Export CSV
              </Button>
              <Button onClick={() => setIsAuthenticated(false)} variant="destructive" size="sm">
                Logout
              </Button>
            </div>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
            <Card>
              <CardContent className="p-4">
                <div className="text-2xl font-bold">{signups.length}</div>
                <p className="text-sm text-muted-foreground">Total Signups</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-4">
                <div className="text-2xl font-bold">{signups.filter(s => s.status === 'new').length}</div>
                <p className="text-sm text-muted-foreground">New</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-4">
                <div className="text-2xl font-bold">{signups.filter(s => s.status === 'contacted').length}</div>
                <p className="text-sm text-muted-foreground">Contacted</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-4">
                <div className="text-2xl font-bold">{signups.filter(s => s.status === 'completed').length}</div>
                <p className="text-sm text-muted-foreground">Completed</p>
              </CardContent>
            </Card>
          </div>

          {/* Filters */}
          <Card className="mb-6">
            <CardContent className="p-4">
              <div className="flex flex-col sm:flex-row gap-4">
                <div className="relative flex-1">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input
                    placeholder="Search by name or email..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10"
                  />
                </div>
                <Select value={statusFilter} onValueChange={setStatusFilter}>
                  <SelectTrigger className="w-full sm:w-48">
                    <Filter className="h-4 w-4 mr-2" />
                    <SelectValue placeholder="Filter by status" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Status</SelectItem>
                    <SelectItem value="new">New</SelectItem>
                    <SelectItem value="contacted">Contacted</SelectItem>
                    <SelectItem value="completed">Completed</SelectItem>
                    <SelectItem value="archived">Archived</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </CardContent>
          </Card>

          {/* Signups Table */}
          <Card>
            <CardContent className="p-0">
              {loading ? (
                <div className="p-8 text-center">Loading...</div>
              ) : (
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Name</TableHead>
                      <TableHead>Email</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>Created</TableHead>
                      <TableHead>Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {filteredSignups.length === 0 ? (
                      <TableRow>
                        <TableCell colSpan={5} className="text-center py-8 text-muted-foreground">
                          No signups found
                        </TableCell>
                      </TableRow>
                    ) : (
                      filteredSignups.map((signup) => (
                        <TableRow key={signup.id}>
                          <TableCell className="font-medium">{signup.name || 'N/A'}</TableCell>
                          <TableCell>{signup.email || 'N/A'}</TableCell>
                          <TableCell>
                            <Badge variant={getStatusBadgeVariant(signup.status)}>
                              {signup.status}
                            </Badge>
                          </TableCell>
                          <TableCell>{new Date(signup.created_at).toLocaleDateString()}</TableCell>
                          <TableCell>
                            <Select
                              value={signup.status}
                              onValueChange={(value) => updateStatus(signup.id, value)}
                            >
                              <SelectTrigger className="w-32">
                                <SelectValue />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="new">New</SelectItem>
                                <SelectItem value="contacted">Contacted</SelectItem>
                                <SelectItem value="completed">Completed</SelectItem>
                                <SelectItem value="archived">Archived</SelectItem>
                              </SelectContent>
                            </Select>
                          </TableCell>
                        </TableRow>
                      ))
                    )}
                  </TableBody>
                </Table>
              )}
            </CardContent>
          </Card>
        </div>
        </Container>
      </ErrorBoundary>
    </div>
  );
};

export default Admin;
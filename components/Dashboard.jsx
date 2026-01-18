import { useState } from 'react';
import { TrendingUp, Users, Calendar, Clock, CheckCircle, AlertCircle } from 'lucide-react';

const Dashboard = () => {
  const [selectedDate, setSelectedDate] = useState('Today');

  const stats = [
    { label: 'Total Students', value: '2,847', change: '+5.2%', icon: <Users className="h-6 w-6" />, color: 'text-blue-400' },
    { label: 'Present Today', value: '2,691', change: '+3.1%', icon: <CheckCircle className="h-6 w-6" />, color: 'text-green-400' },
    { label: 'Absent Today', value: '156', change: '-2.4%', icon: <AlertCircle className="h-6 w-6" />, color: 'text-red-400' },
    { label: 'Attendance Rate', value: '94.5%', change: '+1.8%', icon: <TrendingUp className="h-6 w-6" />, color: 'text-purple-400' }
  ];

  const recentActivity = [
    { name: 'John Smith', time: '08:45 AM', status: 'Present', avatar: 'JS' },
    { name: 'Sarah Johnson', time: '08:42 AM', status: 'Present', avatar: 'SJ' },
    { name: 'Michael Brown', time: '08:38 AM', status: 'Late', avatar: 'MB' },
    { name: 'Emma Davis', time: '08:35 AM', status: 'Present', avatar: 'ED' },
    { name: 'James Wilson', time: 'Not arrived', status: 'Absent', avatar: 'JW' }
  ];

  return (
    <section id="dashboard" className="py-16 px-6">
      <div className="container mx-auto">
        <div className="glass p-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
            <div>
              <h2 className="text-3xl font-bold text-white mb-2">Live Dashboard</h2>
              <p className="text-white/70">Real-time attendance monitoring and analytics</p>
            </div>
            <div className="flex items-center space-x-4 mt-4 md:mt-0">
              <select 
                value={selectedDate}
                onChange={(e) => setSelectedDate(e.target.value)}
                className="glass text-white px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              >
                <option value="Today">Today</option>
                <option value="This Week">This Week</option>
                <option value="This Month">This Month</option>
              </select>
              <button className="glass p-2 rounded-lg hover:bg-white/20 transition-colors duration-200">
                <Calendar className="h-5 w-5 text-white" />
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {stats.map((stat, index) => (
              <div key={index} className="glass p-6 glass-hover">
                <div className="flex items-center justify-between mb-4">
                  <div className={`p-2 rounded-lg bg-white/10 ${stat.color}`}>
                    {stat.icon}
                  </div>
                  <span className={`text-sm font-medium ${stat.change.startsWith('+') ? 'text-green-400' : 'text-red-400'}`}>
                    {stat.change}
                  </span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-1">{stat.value}</h3>
                <p className="text-white/70 text-sm">{stat.label}</p>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="glass p-6">
              <h3 className="text-xl font-semibold text-white mb-4">Recent Activity</h3>
              <div className="space-y-4">
                {recentActivity.map((activity, index) => (
                  <div key={index} className="flex items-center justify-between p-3 bg-white/5 rounded-lg">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-semibold text-sm">
                        {activity.avatar}
                      </div>
                      <div>
                        <p className="text-white font-medium">{activity.name}</p>
                        <p className="text-white/60 text-sm">{activity.time}</p>
                      </div>
                    </div>
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                      activity.status === 'Present' ? 'bg-green-500/20 text-green-400' :
                      activity.status === 'Late' ? 'bg-yellow-500/20 text-yellow-400' :
                      'bg-red-500/20 text-red-400'
                    }`}>
                      {activity.status}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="glass p-6">
              <h3 className="text-xl font-semibold text-white mb-4">Quick Actions</h3>
              <div className="grid grid-cols-2 gap-4">
                <button className="glass p-4 glass-hover text-left">
                  <Clock className="h-8 w-8 text-blue-400 mb-3" />
                  <p className="text-white font-medium">Mark Attendance</p>
                  <p className="text-white/60 text-sm">Take attendance now</p>
                </button>
                <button className="glass p-4 glass-hover text-left">
                  <Users className="h-8 w-8 text-green-400 mb-3" />
                  <p className="text-white font-medium">Add Student</p>
                  <p className="text-white/60 text-sm">Register new student</p>
                </button>
                <button className="glass p-4 glass-hover text-left">
                  <TrendingUp className="h-8 w-8 text-purple-400 mb-3" />
                  <p className="text-white font-medium">View Reports</p>
                  <p className="text-white/60 text-sm">Generate reports</p>
                </button>
                <button className="glass p-4 glass-hover text-left">
                  <Calendar className="h-8 w-8 text-yellow-400 mb-3" />
                  <p className="text-white font-medium">Schedule</p>
                  <p className="text-white/60 text-sm">Manage schedule</p>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Dashboard;

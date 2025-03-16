
import { useState } from 'react';
import { BarChart, Calendar, ArrowLeft, ArrowRight, Award } from 'lucide-react';
import { BarChart as Chart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { Button } from '@/components/ui/button';
import { userProgress, modules } from '@/lib/data';

interface ActivityData {
  day: string;
  minutes: number;
  lessons: number;
}

const ProgressChart = () => {
  const [viewMode, setViewMode] = useState<'weekly' | 'monthly'>('weekly');
  
  // Generate some sample activity data
  const generateActivityData = (): ActivityData[] => {
    const daysOfWeek = ['Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sáb', 'Dom'];
    
    if (viewMode === 'weekly') {
      return daysOfWeek.map(day => ({
        day,
        minutes: Math.floor(Math.random() * 60),
        lessons: Math.floor(Math.random() * 3)
      }));
    } else {
      return Array.from({ length: 30 }, (_, i) => ({
        day: `${i + 1}`,
        minutes: Math.floor(Math.random() * 60),
        lessons: Math.floor(Math.random() * 3)
      }));
    }
  };
  
  const activityData = generateActivityData();
  
  // Calculate user stats
  const totalCompletedLessons = userProgress.completedTopics.length;
  const totalLessonsAvailable = modules.reduce((acc, module) => acc + module.topics.length, 0);
  const lessonsRemaining = totalLessonsAvailable - totalCompletedLessons;
  
  const totalMinutesLearned = activityData.reduce((acc, day) => acc + day.minutes, 0);
  const averageMinutesPerDay = Math.round(totalMinutesLearned / activityData.length);
  
  return (
    <div className="glass-card p-6 md:p-8">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
        <div>
          <h3 className="text-xl font-semibold">Análisis de progreso</h3>
          <p className="text-muted-foreground">Visualiza tu dedicación al aprendizaje</p>
        </div>
        
        <div className="flex">
          <Button
            variant={viewMode === 'weekly' ? 'default' : 'outline'}
            size="sm"
            className={viewMode === 'weekly' ? 'primary-button' : 'secondary-button rounded-r-none'}
            onClick={() => setViewMode('weekly')}
          >
            <Calendar size={16} className="mr-2" />
            Semanal
          </Button>
          <Button
            variant={viewMode === 'monthly' ? 'default' : 'outline'}
            size="sm"
            className={viewMode === 'monthly' ? 'primary-button' : 'secondary-button rounded-l-none'}
            onClick={() => setViewMode('monthly')}
          >
            <Calendar size={16} className="mr-2" />
            Mensual
          </Button>
        </div>
      </div>
      
      <div className="bg-white/80 rounded-lg p-4 mb-8 shadow-sm">
        <div className="h-64">
          <ResponsiveContainer width="100%" height="100%">
            <Chart
              data={activityData}
              margin={{
                top: 20,
                right: 30,
                left: 0,
                bottom: 5,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
              <XAxis 
                dataKey="day" 
                axisLine={false} 
                tickLine={false} 
                tick={{ fontSize: 12, fill: '#64748b' }}
              />
              <YAxis 
                axisLine={false} 
                tickLine={false} 
                tick={{ fontSize: 12, fill: '#64748b' }}
                unit="min"
              />
              <Tooltip 
                formatter={(value, name) => [
                  `${value} ${name === 'minutes' ? 'minutos' : 'lecciones'}`, 
                  name === 'minutes' ? 'Tiempo estudiado' : 'Lecciones completadas'
                ]}
                labelFormatter={(label) => `Día: ${label}`}
              />
              <Bar dataKey="minutes" fill="rgba(37, 99, 235, 0.8)" radius={[4, 4, 0, 0]} />
            </Chart>
          </ResponsiveContainer>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <StatCard 
          icon={<BarChart className="text-blue-500" />}
          value={averageMinutesPerDay}
          label="Minutos promedio por día"
          color="bg-blue-50"
        />
        
        <StatCard 
          icon={<Award className="text-emerald-500" />}
          value={totalCompletedLessons}
          label="Lecciones completadas"
          color="bg-emerald-50"
        />
        
        <StatCard 
          icon={<Calendar className="text-amber-500" />}
          value={lessonsRemaining}
          label="Lecciones por completar"
          color="bg-amber-50"
        />
      </div>
      
      <div className="flex justify-center mt-8">
        <div className="flex">
          <Button variant="outline" size="sm" className="rounded-r-none">
            <ArrowLeft size={16} />
          </Button>
          <Button variant="outline" size="sm" className="rounded-l-none">
            <ArrowRight size={16} />
          </Button>
        </div>
      </div>
    </div>
  );
};

interface StatCardProps {
  icon: React.ReactNode;
  value: number;
  label: string;
  color: string;
}

const StatCard = ({ icon, value, label, color }: StatCardProps) => {
  return (
    <div className="bg-white/80 rounded-lg p-4 border border-border shadow-sm">
      <div className="flex items-start gap-4">
        <div className={`w-10 h-10 ${color} rounded-lg flex items-center justify-center`}>
          {icon}
        </div>
        <div>
          <p className="text-2xl font-semibold">{value}</p>
          <p className="text-sm text-muted-foreground">{label}</p>
        </div>
      </div>
    </div>
  );
};

export default ProgressChart;

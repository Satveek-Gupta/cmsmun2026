"use client";

import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  Legend
} from "recharts";

interface ChartBlockProps {
  title: string;
  type: "bar" | "pie";
  data: any[];
}

const COLORS = ["#22d3ee", "#818cf8", "#fbbf24", "#f87171", "#a78bfa", "#c084fc", "#e879f9"];

export function ChartBlock({ title, type, data }: ChartBlockProps) {
  return (
    <div className="flex flex-col rounded-3xl border border-white/5 bg-slate-900/40 p-6 backdrop-blur-xl transition-all hover:bg-slate-900/60 h-full">
      <h3 className="mb-6 text-[10px] font-bold uppercase tracking-[0.2em] text-slate-500">
        {title}
      </h3>
      
      <div className="h-64 w-full">
        <ResponsiveContainer width="100%" height="100%">
          {type === "bar" ? (
            <BarChart data={data}>
              <CartesianGrid strokeDasharray="3 3" stroke="#1e293b" vertical={false} />
              <XAxis 
                dataKey="name" 
                stroke="#64748b" 
                fontSize={10} 
                tickLine={false} 
                axisLine={false}
              />
              <YAxis 
                stroke="#64748b" 
                fontSize={10} 
                tickLine={false} 
                axisLine={false}
              />
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: "#0f172a", 
                  borderColor: "#1e293b",
                  borderRadius: "12px",
                  fontSize: "12px",
                  color: "#fff"
                }}
              />
              <Bar dataKey="value" fill="#22d3ee" radius={[4, 4, 0, 0]} />
            </BarChart>
          ) : (
            <PieChart>
              <Pie
                data={data}
                cx="50%"
                cy="50%"
                innerRadius={60}
                outerRadius={80}
                paddingAngle={5}
                dataKey="value"
              >
                {data.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} stroke="none" />
                ))}
              </Pie>
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: "#0f172a", 
                  borderColor: "#1e293b",
                  borderRadius: "12px",
                  fontSize: "12px",
                  color: "#fff"
                }}
              />
              <Legend 
                wrapperStyle={{ fontSize: "10px", textTransform: "uppercase", letterSpacing: "0.1em" }}
                verticalAlign="bottom"
              />
            </PieChart>
          )}
        </ResponsiveContainer>
      </div>
    </div>
  );
}

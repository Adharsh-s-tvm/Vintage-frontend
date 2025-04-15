import React, { useMemo } from 'react';
import { ArrowDown, ArrowUp } from 'lucide-react';
import { cn } from '../../lib/util';

// Create a memoized color styles object outside the component
const colorStyles = {
    blue: {
        bgLight: 'bg-blue-50',
        // iconBg: 'bg-blue-100',
        iconColor: 'text-blue-600',
    },
    purple: {
        bgLight: 'bg-purple-50',
        // iconBg: 'bg-purple-100',
        iconColor: 'text-purple-600',
    },
    yellow: {
        bgLight: 'bg-yellow-50',
        // iconBg: 'bg-yellow-100',
        iconColor: 'text-yellow-600',
    },
    red: {
        bgLight: 'bg-red-50',
        // iconBg: 'bg-red-100',
        iconColor: 'text-red-600',
    },
    green: {
        bgLight: 'bg-green-50',
        // iconBg: 'bg-green-100',
        iconColor: 'text-green-600',
    }
};

// Memoize the SparklinePath component
const SparklinePath = React.memo(({ sparklineData, change }) => {
    const path = useMemo(() => {
        const maxValue = Math.max(...sparklineData);
        const minValue = Math.min(...sparklineData);
        const range = maxValue - minValue;
        const normalizedData = sparklineData.map(value => 1 - (value - minValue) / (range || 1));
        
        const width = 60;
        const height = 20;
        const segmentWidth = width / (sparklineData.length - 1);
        
        let pathData = '';
        normalizedData.forEach((point, i) => {
            const x = i * segmentWidth;
            const y = point * height;
            if (i === 0) {
                pathData += `M${x},${y}`;
            } else {
                pathData += ` L${x},${y}`;
            }
        });
        return pathData;
    }, [sparklineData]);

    return (
        <svg width="60" height="20" className="text-gray-300">
            <path
                d={path}
                fill="none"
                stroke={change && change.trend === 'up' ? '#10B981' : '#EF4444'}
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    );
});

SparklinePath.displayName = 'SparklinePath';

// Memoize the entire StatsCard component
export const StatsCard = React.memo(({ 
    title, 
    value = 0, 
    icon, 
    change = { value: 0, trend: 'up' },
    color = 'blue',
    sparklineData = [] 
}) => {
    const displayValue = useMemo(() => {
        return typeof value === 'number' ? value.toLocaleString() : value || '0';
    }, [value]);

    return (
        <div className={cn(
            "relative overflow-hidden rounded-xl p-5 shadow-elevation-2 transition-all hover:shadow-elevation-3",
            "bg-white border border-gray-100",
            colorStyles[color]?.bgLight
        )}>
            <div className="flex items-start justify-between">
                <div>
                    <p className="text-sm font-medium text-gray-500">{title}</p>
                    <h4 className="mt-2 text-2xl font-bold tracking-tight">{displayValue}</h4>
                </div>
                <div className={cn(
                    "flex items-center justify-center h-12 w-12 rounded-lg",
                    colorStyles[color]?.iconBg
                )}>
                    {React.cloneElement(icon, {
                        className: cn("h-6 w-6", colorStyles[color]?.iconColor)
                    })}
                </div>
            </div>

            {/* {change && (
                <div className="flex items-center justify-between mt-4">
                    {change.trend === 'up' ? (
                        <ArrowUp className="h-4 w-4 text-green-500 mr-1" />
                    ) : (
                        <ArrowDown className="h-4 w-4 text-red-500 mr-1" />
                    )}
                    <span
                        className={cn(
                            "text-sm font-medium",
                            change.trend === 'up' ? 'text-green-500' : 'text-red-500'
                        )}
                    >
                        {Math.abs(change.value)}%
                    </span>
                </div>
            )} */}

            <SparklinePath sparklineData={sparklineData} change={change} />

            {/* Background decoration */}
            <div className={cn(
                "absolute -right-6 -bottom-6 h-24 w-24 rounded-full opacity-10",
                color === 'blue' ? 'bg-blue' :
                    color === 'purple' ? 'bg-purple' :
                        color === 'yellow' ? 'bg-yellow' :
                            color === 'green' ? 'bg-green' :
                                'bg-red'
            )} />
        </div>
    );
});

StatsCard.displayName = 'StatsCard'; 
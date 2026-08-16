type LogLevel = 'debug' | 'info' | 'warn' | 'error';

/** `performance.memory` is Chrome-only and absent from the standard lib types. */
type PerformanceWithMemory = Performance & {
  memory?: {
    usedJSHeapSize: number;
    totalJSHeapSize: number;
  };
};

interface LogContext {
  timestamp: string;
  level: LogLevel;
  message: string;
  data?: unknown;
  userAgent?: string;
  url?: string;
  performance?: {
    memory?: { usedJSHeapSize: number; totalJSHeapSize: number } | null;
    navigation?: { type: NavigationTimingType | number; redirectCount: number } | null;
  };
}

class Logger {
  private isDevelopment = import.meta.env.MODE === 'development';

  private createLogContext(level: LogLevel, message: string, data?: unknown): LogContext {
    return {
      timestamp: new Date().toISOString(),
      level,
      message,
      data,
      userAgent: navigator.userAgent,
      url: window.location.href,
      performance: {
        memory: (performance as PerformanceWithMemory).memory ? {
          usedJSHeapSize: (performance as PerformanceWithMemory).memory!.usedJSHeapSize,
          totalJSHeapSize: (performance as PerformanceWithMemory).memory!.totalJSHeapSize,
        } : null,
        navigation: typeof performance !== 'undefined' && 'getEntriesByType' in performance ? {
          type: (performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming)?.type || 0,
          redirectCount: (performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming)?.redirectCount || 0,
        } : null,
      }
    };
  }

  debug(message: string, data?: unknown) {
    if (this.isDevelopment) {
      console.log(`[DEBUG] ${message}`, data || '');
    }
  }

  info(message: string, data?: unknown) {
    if (this.isDevelopment) {
      console.info(`[INFO] ${message}`, data || '');
    }
  }

  warn(message: string, data?: unknown) {
    console.warn(`[WARN] ${message}`, data || '');
  }

  error(message: string, error?: unknown) {
    const context = this.createLogContext('error', message, error);
    console.error(`[ERROR] ${message}`, context);
    // In production, you could send to error tracking service
  }
}

export const logger = new Logger();
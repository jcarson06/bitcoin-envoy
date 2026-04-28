type LogLevel = 'debug' | 'info' | 'warn' | 'error';

interface LogContext {
  timestamp: string;
  level: LogLevel;
  message: string;
  data?: any;
  userAgent?: string;
  url?: string;
  performance?: {
    memory?: any;
    navigation?: any;
  };
}

class Logger {
  private isDevelopment = import.meta.env.MODE === 'development';

  private createLogContext(level: LogLevel, message: string, data?: any): LogContext {
    return {
      timestamp: new Date().toISOString(),
      level,
      message,
      data,
      userAgent: navigator.userAgent,
      url: window.location.href,
      performance: {
        memory: (performance as any).memory ? {
          usedJSHeapSize: (performance as any).memory.usedJSHeapSize,
          totalJSHeapSize: (performance as any).memory.totalJSHeapSize,
        } : null,
        navigation: typeof performance !== 'undefined' && 'getEntriesByType' in performance ? {
          type: (performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming)?.type || 0,
          redirectCount: (performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming)?.redirectCount || 0,
        } : null,
      }
    };
  }

  debug(message: string, data?: any) {
    if (this.isDevelopment) {
      console.log(`[DEBUG] ${message}`, data || '');
    }
  }

  info(message: string, data?: any) {
    if (this.isDevelopment) {
      console.info(`[INFO] ${message}`, data || '');
    }
  }

  warn(message: string, data?: any) {
    console.warn(`[WARN] ${message}`, data || '');
  }

  error(message: string, error?: any) {
    const context = this.createLogContext('error', message, error);
    console.error(`[ERROR] ${message}`, context);
    // In production, you could send to error tracking service
  }
}

export const logger = new Logger();
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
    // Every browser global below is optional: this module is bundled into the
    // SSR build too, where `window` does not exist. Reading it unguarded threw
    // a ReferenceError that would have masked whatever error we were trying to
    // report in the first place.
    const perf: PerformanceWithMemory | undefined =
      typeof performance !== 'undefined' ? performance : undefined;
    const navEntry = perf?.getEntriesByType?.('navigation')[0] as
      | PerformanceNavigationTiming
      | undefined;

    return {
      timestamp: new Date().toISOString(),
      level,
      message,
      data,
      userAgent: typeof navigator !== 'undefined' ? navigator.userAgent : undefined,
      url: typeof window !== 'undefined' ? window.location.href : undefined,
      performance: {
        memory: perf?.memory
          ? {
              usedJSHeapSize: perf.memory.usedJSHeapSize,
              totalJSHeapSize: perf.memory.totalJSHeapSize,
            }
          : null,
        navigation: navEntry
          ? { type: navEntry.type ?? 0, redirectCount: navEntry.redirectCount ?? 0 }
          : null,
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
// Analytics tracking utility
// This is a generic wrapper that can be connected to Google Analytics, Mixpanel, etc.

export interface AnalyticsEvent {
  category: string;
  action: string;
  label?: string;
  value?: number;
}

class Analytics {
  private isInitialized = false;

  // Initialize analytics (would connect to GA4, Mixpanel, etc.)
  init() {
    if (typeof window === 'undefined') return;
    
    // Check if gtag is available (Google Analytics)
    if (typeof window.gtag !== 'undefined') {
      this.isInitialized = true;
      console.log('Analytics initialized');
    }
  }

  // Track a page view
  trackPageView(path: string) {
    if (typeof window === 'undefined') return;
    
    if (typeof window.gtag !== 'undefined') {
      window.gtag('config', 'GA_MEASUREMENT_ID', {
        page_path: path,
      });
    }
    
    console.log('Page view:', path);
  }

  // Track a custom event
  trackEvent({ category, action, label, value }: AnalyticsEvent) {
    if (typeof window === 'undefined') return;
    
    if (typeof window.gtag !== 'undefined') {
      window.gtag('event', action, {
        event_category: category,
        event_label: label,
        value: value,
      });
    }
    
    console.log('Event:', { category, action, label, value });
  }

  // Convenience methods for common events
  trackCTAClick(ctaName: string, location: string) {
    this.trackEvent({
      category: 'CTA',
      action: 'click',
      label: `${ctaName} - ${location}`,
    });
  }

  trackDownloadClick(platform: 'ios' | 'android', location: string) {
    this.trackEvent({
      category: 'Download',
      action: 'click',
      label: `${platform} - ${location}`,
    });
  }

  trackNavigationClick(linkName: string) {
    this.trackEvent({
      category: 'Navigation',
      action: 'click',
      label: linkName,
    });
  }

  trackScrollDepth(percentage: number) {
    this.trackEvent({
      category: 'Engagement',
      action: 'scroll',
      label: `${percentage}%`,
      value: percentage,
    });
  }

  trackFeatureView(featureName: string) {
    this.trackEvent({
      category: 'Feature',
      action: 'view',
      label: featureName,
    });
  }

  trackSocialClick(platform: string) {
    this.trackEvent({
      category: 'Social',
      action: 'click',
      label: platform,
    });
  }
}

// Extend Window interface for TypeScript
declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
    dataLayer?: any[];
  }
}

// Export singleton instance
export const analytics = new Analytics();

// Hook for scroll depth tracking
export function useScrollDepth() {
  if (typeof window === 'undefined') return;

  let tracked25 = false;
  let tracked50 = false;
  let tracked75 = false;
  let tracked100 = false;

  const handleScroll = () => {
    const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrolled = (window.scrollY / scrollHeight) * 100;

    if (scrolled >= 25 && !tracked25) {
      analytics.trackScrollDepth(25);
      tracked25 = true;
    } else if (scrolled >= 50 && !tracked50) {
      analytics.trackScrollDepth(50);
      tracked50 = true;
    } else if (scrolled >= 75 && !tracked75) {
      analytics.trackScrollDepth(75);
      tracked75 = true;
    } else if (scrolled >= 100 && !tracked100) {
      analytics.trackScrollDepth(100);
      tracked100 = true;
    }
  };

  window.addEventListener('scroll', handleScroll, { passive: true });

  return () => {
    window.removeEventListener('scroll', handleScroll);
  };
}

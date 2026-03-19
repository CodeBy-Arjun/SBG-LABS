-- Create website_analytics table for tracking page views and traffic
CREATE TABLE IF NOT EXISTS public.website_analytics (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  page_path TEXT NOT NULL,
  page_title TEXT,
  referrer TEXT,
  user_agent TEXT,
  device_type TEXT,
  browser TEXT,
  country TEXT,
  city TEXT,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable RLS
ALTER TABLE public.website_analytics ENABLE ROW LEVEL SECURITY;

-- Anyone can insert analytics (for tracking)
CREATE POLICY "Anyone can insert analytics"
ON public.website_analytics
FOR INSERT
WITH CHECK (true);

-- Anyone can view analytics (for admin dashboard)
CREATE POLICY "Anyone can view analytics"
ON public.website_analytics
FOR SELECT
USING (true);

-- Create index for faster queries
CREATE INDEX idx_website_analytics_created_at ON public.website_analytics(created_at DESC);
CREATE INDEX idx_website_analytics_page_path ON public.website_analytics(page_path);
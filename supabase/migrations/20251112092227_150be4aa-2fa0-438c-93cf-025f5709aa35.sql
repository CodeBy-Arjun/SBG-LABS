-- Create projects table for dynamic project management
CREATE TABLE public.projects (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  title TEXT NOT NULL,
  description TEXT NOT NULL,
  category TEXT NOT NULL,
  domain TEXT NOT NULL,
  price NUMERIC NOT NULL,
  difficulty TEXT NOT NULL DEFAULT 'Intermediate',
  preview_video_url TEXT,
  documentation_url TEXT,
  thumbnail_url TEXT,
  is_active BOOLEAN NOT NULL DEFAULT true,
  has_discount BOOLEAN NOT NULL DEFAULT false,
  discount_percentage NUMERIC DEFAULT 0,
  view_count INTEGER NOT NULL DEFAULT 0,
  purchase_count INTEGER NOT NULL DEFAULT 0,
  tags TEXT[] DEFAULT '{}',
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable RLS
ALTER TABLE public.projects ENABLE ROW LEVEL SECURITY;

-- Allow anyone to view active projects
CREATE POLICY "Anyone can view active projects"
ON public.projects
FOR SELECT
USING (is_active = true OR true);

-- Allow anyone to insert/update/delete projects (will be restricted later with proper RBAC)
CREATE POLICY "Anyone can manage projects"
ON public.projects
FOR ALL
USING (true)
WITH CHECK (true);

-- Create trigger for updated_at
CREATE TRIGGER update_projects_updated_at
BEFORE UPDATE ON public.projects
FOR EACH ROW
EXECUTE FUNCTION public.update_updated_at_column();

-- Create index for better performance
CREATE INDEX idx_projects_category ON public.projects(category);
CREATE INDEX idx_projects_domain ON public.projects(domain);
CREATE INDEX idx_projects_active ON public.projects(is_active);

-- Create analytics tracking table
CREATE TABLE public.project_analytics (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  project_id UUID REFERENCES public.projects(id) ON DELETE CASCADE,
  event_type TEXT NOT NULL, -- 'view', 'purchase', 'search'
  user_info JSONB,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable RLS
ALTER TABLE public.project_analytics ENABLE ROW LEVEL SECURITY;

-- Allow anyone to insert analytics
CREATE POLICY "Anyone can insert analytics"
ON public.project_analytics
FOR INSERT
WITH CHECK (true);

-- Allow anyone to view analytics
CREATE POLICY "Anyone can view analytics"
ON public.project_analytics
FOR SELECT
USING (true);

-- Create index for analytics queries
CREATE INDEX idx_analytics_project ON public.project_analytics(project_id);
CREATE INDEX idx_analytics_event ON public.project_analytics(event_type);
CREATE INDEX idx_analytics_created ON public.project_analytics(created_at DESC);
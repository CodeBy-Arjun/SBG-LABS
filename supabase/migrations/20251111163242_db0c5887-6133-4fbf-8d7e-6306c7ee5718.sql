-- Create courses table
CREATE TABLE public.courses (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  category TEXT NOT NULL,
  price NUMERIC NOT NULL,
  duration TEXT NOT NULL,
  difficulty TEXT NOT NULL CHECK (difficulty IN ('Beginner', 'Intermediate', 'Advanced')),
  description TEXT NOT NULL,
  tech_tags TEXT[] DEFAULT '{}',
  instructor TEXT DEFAULT 'Code by Arjun',
  thumbnail_url TEXT,
  is_featured BOOLEAN DEFAULT false,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Create course_bookings table
CREATE TABLE public.course_bookings (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  user_name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT NOT NULL,
  course_id UUID NOT NULL REFERENCES public.courses(id),
  course_name TEXT NOT NULL,
  time_preference TEXT NOT NULL,
  status TEXT NOT NULL DEFAULT 'pending' CHECK (status IN ('pending', 'confirmed', 'rejected')),
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE public.courses ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.course_bookings ENABLE ROW LEVEL SECURITY;

-- RLS Policies for courses (public read access)
CREATE POLICY "Anyone can view courses"
ON public.courses
FOR SELECT
USING (true);

CREATE POLICY "Anyone can insert courses"
ON public.courses
FOR INSERT
WITH CHECK (true);

CREATE POLICY "Anyone can update courses"
ON public.courses
FOR UPDATE
USING (true);

-- RLS Policies for course_bookings
CREATE POLICY "Anyone can create course bookings"
ON public.course_bookings
FOR INSERT
WITH CHECK (true);

CREATE POLICY "Anyone can view course bookings"
ON public.course_bookings
FOR SELECT
USING (true);

CREATE POLICY "Anyone can update course bookings"
ON public.course_bookings
FOR UPDATE
USING (true);

-- Create trigger for automatic timestamp updates on courses
CREATE TRIGGER update_courses_updated_at
BEFORE UPDATE ON public.courses
FOR EACH ROW
EXECUTE FUNCTION public.update_updated_at_column();

-- Create trigger for automatic timestamp updates on course_bookings
CREATE TRIGGER update_course_bookings_updated_at
BEFORE UPDATE ON public.course_bookings
FOR EACH ROW
EXECUTE FUNCTION public.update_updated_at_column();
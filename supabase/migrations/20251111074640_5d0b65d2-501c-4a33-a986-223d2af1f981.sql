-- Create storage bucket for college ID images
INSERT INTO storage.buckets (id, name, public, file_size_limit, allowed_mime_types)
VALUES (
  'college-ids',
  'college-ids',
  false,
  5242880, -- 5MB limit
  ARRAY['image/jpeg', 'image/jpg', 'image/png', 'image/webp']
);

-- RLS policies for college IDs bucket
CREATE POLICY "Anyone can upload college IDs"
ON storage.objects
FOR INSERT
WITH CHECK (bucket_id = 'college-ids');

CREATE POLICY "Anyone can view their uploads"
ON storage.objects
FOR SELECT
USING (bucket_id = 'college-ids');

-- Add college information columns to project_orders table
ALTER TABLE project_orders 
ADD COLUMN college_id_image_url TEXT,
ADD COLUMN college_roll_number TEXT,
ADD COLUMN is_student_discount BOOLEAN DEFAULT false,
ADD COLUMN original_amount NUMERIC;
CREATE TABLE public.reviews (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  item_id text NOT NULL,
  item_type text NOT NULL CHECK (item_type IN ('project', 'course')),
  reviewer_name text NOT NULL,
  reviewer_email text NOT NULL,
  rating integer NOT NULL CHECK (rating >= 1 AND rating <= 5),
  review_text text,
  is_approved boolean DEFAULT true,
  created_at timestamptz NOT NULL DEFAULT now()
);

ALTER TABLE public.reviews ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can insert reviews" ON public.reviews FOR INSERT TO public WITH CHECK (true);
CREATE POLICY "Anyone can view approved reviews" ON public.reviews FOR SELECT TO public USING (is_approved = true);

CREATE INDEX idx_reviews_item ON public.reviews (item_type, item_id);
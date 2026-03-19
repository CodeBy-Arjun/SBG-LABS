-- Create coupons table
CREATE TABLE IF NOT EXISTS public.coupons (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  code TEXT UNIQUE NOT NULL,
  discount_type TEXT NOT NULL CHECK (discount_type IN ('flat', 'percentage')),
  discount_value NUMERIC NOT NULL CHECK (discount_value > 0),
  min_purchase NUMERIC DEFAULT 0,
  usage_limit INTEGER DEFAULT NULL,
  used_count INTEGER DEFAULT 0,
  applicable_categories TEXT[] DEFAULT '{}',
  start_date TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  end_date TIMESTAMP WITH TIME ZONE DEFAULT NULL,
  is_active BOOLEAN DEFAULT true,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Enable RLS
ALTER TABLE public.coupons ENABLE ROW LEVEL SECURITY;

-- Allow anyone to view active coupons
CREATE POLICY "Anyone can view active coupons"
  ON public.coupons
  FOR SELECT
  USING (is_active = true);

-- Allow anyone to update coupon usage
CREATE POLICY "Anyone can update coupon usage"
  ON public.coupons
  FOR UPDATE
  USING (true);

-- Allow anyone to manage coupons (for admin)
CREATE POLICY "Anyone can manage coupons"
  ON public.coupons
  FOR ALL
  USING (true)
  WITH CHECK (true);

-- Create trigger for updated_at
CREATE TRIGGER update_coupons_updated_at
  BEFORE UPDATE ON public.coupons
  FOR EACH ROW
  EXECUTE FUNCTION public.update_updated_at_column();

-- Create indexes
CREATE INDEX idx_coupons_code ON public.coupons(code);
CREATE INDEX idx_coupons_active ON public.coupons(is_active);
CREATE INDEX idx_coupons_dates ON public.coupons(start_date, end_date);

-- Create coupon redemptions tracking table
CREATE TABLE IF NOT EXISTS public.coupon_redemptions (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  coupon_id UUID REFERENCES public.coupons(id) ON DELETE CASCADE,
  order_id UUID REFERENCES public.project_orders(id) ON DELETE SET NULL,
  user_email TEXT NOT NULL,
  discount_applied NUMERIC NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Enable RLS
ALTER TABLE public.coupon_redemptions ENABLE ROW LEVEL SECURITY;

-- Allow anyone to view and create redemptions
CREATE POLICY "Anyone can view coupon redemptions"
  ON public.coupon_redemptions
  FOR SELECT
  USING (true);

CREATE POLICY "Anyone can create coupon redemptions"
  ON public.coupon_redemptions
  FOR INSERT
  WITH CHECK (true);

-- Create indexes
CREATE INDEX idx_redemptions_coupon ON public.coupon_redemptions(coupon_id);
CREATE INDEX idx_redemptions_order ON public.coupon_redemptions(order_id);
CREATE INDEX idx_redemptions_email ON public.coupon_redemptions(user_email);